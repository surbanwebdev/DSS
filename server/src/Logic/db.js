const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const fs = require('fs');

const dbPath = './DecisionSupport.db';
const dbParams = {
    filename: dbPath,
    driver: sqlite3.Database
}

async function getDB() {
    if (!fs.existsSync(dbPath)) {
        await setupDB();
    }
    return await sqlite.open(dbParams);
}

async function setupDB() {
    try {

        const db = await sqlite.open(dbParams);
        const archivedTreatment = `
                CREATE TABLE "ArchivedTreatment" (
                "TestId"	INTEGER NOT NULL UNIQUE,
                "PatientId"	INTEGER NOT NULL,
                "UserId"	INTEGER NOT NULL,
                "TestDate"	TEXT NOT NULL,
                "TestType"	TEXT NOT NULL,
                "TBVDeviation"	REAL,
                "RBVDeviation"	REAL,
                "NormalizedHct"	REAL,
                "TreatmentDetermination"	TEXT NOT NULL,
                "SuggestedTreatment"	TEXT NOT NULL,
                PRIMARY KEY("TestId" AUTOINCREMENT)
            );`;
        const patient = `CREATE TABLE Patient (
                PatientID TEXT NOT NULL PRIMARY KEY UNIQUE,
                Sex TEXT NOT NULL,
                Weight REAL NOT NULL,
                Height REAL NOT NULL
            );`;

        const user = `CREATE TABLE "User" (
                "ID"	INTEGER NOT NULL UNIQUE,
                "FirstName"	TEXT NOT NULL,
                "LastName"	TEXT NOT NULL,
                "UserName"	TEXT NOT NULL,
                "UserPassword"	TEXT NOT NULL,
                "Language"	TEXT,
                "IsAdmin"	TEXT,
                PRIMARY KEY("ID" AUTOINCREMENT)
            );`;
        const userSession = `CREATE TABLE "UserSession" (
                "UserSessionID"	INTEGER NOT NULL UNIQUE,
                "UserID"	INTEGER NOT NULL,
                "UserSessionGUID"	TEXT NOT NULL UNIQUE,
                "LoggedIn"	TEXT,
                "LoggedOut"	TEXT,
                "LastActive"	TEXT,
                "UserName"	TEXT NOT NULL,
                "UserPassword"	TEXT NOT NULL,
                PRIMARY KEY("UserSessionID" AUTOINCREMENT)
            );`;
        const createUser = `INSERT INTO User (FirstName,LastName,UserName,UserPassword,Language,IsAdmin) 
            VALUES('Admin','User','admin','admin','English','Yes');`;

        await db.run(user);
        await db.run(createUser);
        await db.run(userSession);
        await db.run(patient);
        await db.run(archivedTreatment);
        return;

    } catch (e) {
        console.error(e);
        throw (e);
    }
}

module.exports = {
    getDB
}