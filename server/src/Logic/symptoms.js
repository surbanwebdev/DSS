/* eslint-disable no-async-promise-executor */
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const { v4 } = require('uuid');
const _ = require('lodash');
const { getDB } = require('./db');

async function getAllSymptoms(req, res) {
    try {
        const db = await getDB();
        let query = `SELECT UID, Symptom FROM Symptoms`
        let symptoms = await db.all(query);

        res.statusMessage = 'OK';
        res.status(200).send({ symptoms }).end();
    } catch (err) {
        console.error(err);
        res.statusMessage = 'Internal Server Error';
        res.status(500).send(err).end();
    }
}

async function getRouteFromSymptoms(req, res) {
    try {
        const db = await getDB();
        const body = _.get(req,'body');
        const symptomID = _.get(body, 'symptomID');
        let query = `SELECT Route FROM SymptomRoute WHERE ID = ?`
        let route = await db.get(query, [symptomID]);

        res.statusMessage = 'OK';
        res.status(200).send({ route }).end();
    } catch (err) {
        console.error(err);
        res.statusMessage = 'Internal Server Error';
        res.status(500).send(err).end();
    }
}



module.exports = {
    getAllSymptoms,
    getRouteFromSymptoms
}
