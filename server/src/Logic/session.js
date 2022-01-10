const { v4 } = require('uuid');
const _ = require('lodash');
const { getDB } = require('./db');
const { getSettingFromDatabase } = require('./settings');

async function login(req, res) {
    try {
        const db = await getDB();

        const body = req.body;
        let userName = body.username;
        let password = body.password;

        let query = 'SELECT * FROM User WHERE UserName = ? AND UserPassword = ?';

        let currentUser = await db.get(query, [userName, password]);
        if (!currentUser) {
            res.statusMessage = 'Invalid Credentials';
            res.status(401).end();
            return;
        }

        let sessionGuid = await createSession(db, currentUser);
        res.statusMessage = 'OK';
        res.status(200).send({ sessionGuid }).end();
        return;
    } catch (err) {
        res.statusMessage = 'Internal Server Error';
        res.status(500).send(err).end();
        return;
    }
}

async function logout(req, res) {
    try {
        let sessionGuid = getRequestSessionGuid(req);
        await processLogout(sessionGuid);
        res.statusMessage = "Successfully logged out";
        res.status(200).end();
        return;
    } catch (err) {
        res.statusMessage = 'Internal Server Error';
        res.status(500).send(err).end();
        return;
    }
}

async function ping(req,res){
    res.statusMessage = "OK";
    res.status(200).end();
}

async function processLogout(sessionGuid) {
    const db = await getDB();
    let now = new Date(Date.now()).toISOString();
    let query = `UPDATE UserSession SET LoggedOut = ? WHERE UserSessionGUID = ?`;
    await db.run(query, [now, sessionGuid]);
    return;
}

async function createSession(db, user) {
    let now = new Date(Date.now()).toISOString();
    let newUserSessionGuid = v4();
    let query = `INSERT INTO UserSession(UserId, UserName, UserSessionGUID, LoggedIn, LastActive)
                        VALUES(?,?,?,?,?)`;
    let payload = [user.ID, user.UserName, newUserSessionGuid, now, now];

    await db.run(query, payload);
    return newUserSessionGuid;
}

function getRequestSessionGuid(request) {
    let sessionGuid = _.get(request, 'headers.sessionguid');
    return sessionGuid;
}

async function manageSession(req, res) {
    try {
        const db = await getDB();
        let sessionGuid = getRequestSessionGuid(req);

        let query = `SELECT LastActive FROM UserSession
                WHERE UserSessionGUID = ? and LoggedOut IS NULL`;

        let row = await db.get(query, [sessionGuid]);
        if (!row) {
            res.statusMessage = 'Invalid Session';
            res.status(401).end();
            return false;
        }
        let lastActive = new Date(_.get(row, 'LastActive'));
        let now = new Date();
        let delta = now.getTime() - lastActive.getTime();
        let timeout = Number(await getSettingFromDatabase("SessionTimeout")) * 60 * 1000;
        if (delta > timeout) {
            await processLogout(sessionGuid);
            res.statusMessage = 'Session has expired';
            res.status(403).end();
            return false;
        }

        //if we're here, just need to reset lastActive resolve
        query = `UPDATE UserSession SET LastActive = ? WHERE UserSessionGUID = ?`;
        await db.run(query, [now.toISOString(), sessionGuid]);
        return true;
    } catch (err) {
        res.statusMessage = 'Internal Server Error';
        res.status(500).send(err).end();
        return false;
    }
}

async function isAdmin(sessionGuid) {
    const db = await getDB();

    let query = `SELECT u.IsAdmin FROM UserSession us
                    JOIN User u on u.ID = us.UserID
                    WHERE us.UserSessionGUID = ?`;

    let row = await db.get(query, [sessionGuid]);
    if (!row) {
        return false;
    }
    if (_.toUpper(_.get(row, 'IsAdmin')) === 'YES') {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    login,
    logout,
    getRequestSessionGuid,
    isAdmin,
    manageSession, 
    ping
}
