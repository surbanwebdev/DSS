/* eslint-disable no-async-promise-executor */
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const { v4 } = require('uuid');
const _ = require('lodash');

const dbPath = './DecisionSupport.db';
const dbParams = {
    filename: dbPath,
    driver: sqlite3.Database
}

const timeout = 600000;//millisecs (10 mins)

function login(req, res) {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await sqlite.open(dbParams);

            const body = req.body;
            let userName = body.username;
            let password = body.password;

            let query = "SELECT * FROM User WHERE UserName = ? AND UserPassword = ?";

            let currentUser = await db.get(query, [userName, password]);
            
            if (!currentUser) {
                res.statusMessage ='Invalid Credentials';
                res.status(401).end();
                resolve();
                return;
            }

            let sessionGuid = await createSession(db, currentUser);

            res.status(200).send({sessionGuid}).end();

            resolve();
        } catch (e) {
            reject(e);
        }
    });
}

function logout(req, res) {
    return new Promise(async (resolve, reject) => {
        try {
            let sessionGuid = getRequestSessionGuid(req);
            await processLogout(sessionGuid);
            res.statusMessage = "Successfully logged out"
            res.status(200).end();
            resolve();
        } catch (err) {
            reject(err);
        }
    });
}

function processLogout(sessionGuid) {
    return new Promise(async (resolve, reject) => {
        try {
            let now = new Date(Date.now()).toISOString();
            const db = await sqlite.open(dbParams);
            let query = `UPDATE UserSession SET LoggedOut = ? WHERE UserSessionGUID = ?`;
            await db.run(query, [now, sessionGuid]);
            resolve();
        } catch (err) {
            reject(err);
        }
    });
}

function createSession(db, user) {
    return new Promise(async (resolve, reject) => {
        try {
            let now = new Date(Date.now()).toISOString();
            let newUserSessionGuid = v4();
            let query = `INSERT INTO UserSession(UserId, UserName, UserPassword, UserSessionGuid, LoggedIn, LastActive)
                            VALUES(?,?,?,?,?,?)`;
            let payload = [user.ID, user.UserName, user.UserPassword, newUserSessionGuid, now, now];

            await db.run(query, payload);
            resolve(newUserSessionGuid);
            return;
        } catch (err) {
            reject(err);
        }
    });
}

function getRequestSessionGuid(request) {
    let sessionGuid = _.get(request, 'headers.sessionguid');
    return sessionGuid;
}

function manageSession(req, res) {
    return new Promise(async (resolve, reject) => {
        try {
            let sessionGuid = getRequestSessionGuid(req);
            const db = await sqlite.open(dbParams);

            let query = `SELECT LastActive FROM UserSession
                WHERE UserSessionGUID = ? and LoggedOut IS NULL`;

            let row = await db.get(query, [sessionGuid]);
            if (!row) {
                res.statusMessage = 'Invalid Session';
                res.status(401).end();
                resolve();
                return;
            }
            let lastActive = new Date(_.get(row, 'LastActive'));
            let now = new Date();
            let delta = now.getTime() - lastActive.getTime();
            if (delta > timeout) {
                await processLogout(sessionGuid);
                res.statusMessage = 'Session has expired';
                res.status(401).end();
                resolve();
                return;
            }

            //if we're here, just need to reset lastActive resolve
            query = `UPDATE UserSession SET LastActive = ? WHERE UserSessionGUID = ?`;
            await db.run(query, [now.toISOString(), sessionGuid]);
            resolve();
            return;
        } catch (err) {
            reject(err);
        }
    });
}

function isAdmin(sessionGuid) {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await sqlite.open(dbParams);

            let query = `SELECT u.IsAdmin FROM UserSession us
                        JOIN User u on u.ID = us.UserID
                        WHERE us.UserSessionGuid = ?`;

            let row = await db.get(query, [sessionGuid]);
            if (!row) {
                resolve(false);
                return;
            }
            if (_.toUpper(_.get(row,'IsAdmin')) === 'YES') {
                resolve(true);
                return;
            } else {
                resolve(false);
                return;
            }
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    login,
    logout,
    getRequestSessionGuid,
    isAdmin,
    manageSession
}
