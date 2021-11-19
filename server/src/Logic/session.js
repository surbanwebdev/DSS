const sqlite3 = require('sqlite3');
const { v4 } = require('uuid');
const _ = require('lodash');

const dbPath = '../DecisionSupport.db';

function login(req) {
    return new Promise(async (resolve,reject)=>{
        try{
            const db = new sqlite3.Database(dbPath, (err) => {
                if (err) {
                    throw('Failed to open connection to database');
                }
            });
            const body = req.body;
            let userName = body.userName;
            let password = body.password;
            let currentUser = undefined;

            let query ="SELECT * FROM User WHERE UserName = ? AND UserPassword = ?";
            
            db.get(query,[userName, password],async (err,row)=>{
                if (err) throw err;
                currentUser = row;
                if (!currentUser){
                    throw('Invalid Credentials');
                }
                await createSession(db, currentUser);
            });

            //talk to SQLite to see if username/password exists in DB
            //Generate GUID for session ID
            //insert into UserSession table
            //return UserSessionGUID
        }catch(e){
            reject(e);
        }
    });
}

function createSession(db, user){
    return new Promise((resolve,reject)=>{
        try{
            let now = new Date(Date.now()).toISOString();
            let newUserSessionGuid = v4();
            let query = `INSERT INTO UserSession(UserId, UserName, UserPassword, UserSessionGuid, LoggedIn)
                            VALUES(?,?,?,?,?)`;
            let payload = [user.ID, user.UserName, user.UserPassword, newUserSessionGuid, now];

            db.run(query,payload,(err)=>{
                if (err) throw err;
                console.log(this)
            });           
        }catch(e){
            reject(e);
        }
    });
}

module.exports = {
    login
}
