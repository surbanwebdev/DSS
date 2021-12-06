/* eslint-disable no-async-promise-executor */
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const { v4 } = require('uuid');
const _ = require('lodash');
const { getDB } = require('./db');

async function create(req, res) {
    try {
        const db = await getDB();
        const body = req.body;

        let query = `INSERT INTO Patient 
            (PatientID, Sex, Weight, Height) 
            SELECT ?,?,?,?
            WHERE NOT EXISTS (SELECT * FROM Patient WHERE PatientID = ?)`;

        let params = [
            _.get(body, 'patientID'),
            _.get(body, 'sex'),
            _.get(body, 'weight'),
            _.get(body, 'height'),
            _.get(body, 'patientID'),
        ];
        let rowId = await db.run(query, params);

        res.statusMessage = 'OK';
        res.status(200).send({ rowId }).end();
        return;
    } catch (err) {
        res.statusMessage = 'Internal Server Error';
        res.status(500).send(err).end();
    }
}

async function update(req, res) {
    try {
        const db = await getDB();
        const body = req.body;

        let query = `UPDATE Patient SET
            Sex = ?,
            Weight = ?,
            Height = ?
            WHERE PatientID = ?`;

        let params = [
            _.get(body, 'sex'),
            _.get(body, 'weight'),
            _.get(body, 'height'),
            _.get(body, 'patientID'),
        ];

        let numOfRowsAffected = await db.run(query, params);

        res.statusMessage = 'OK';
        res.status(200).send({ numOfRowsAffected }).end();
        return;
    } catch (err) {
        res.statusMessage = 'Internal Server Error';
        res.status(500).send(err).end();
    }
}

async function remove(req, res) {
    try {
        const db = await getDB();
        const body = req.body;

        let query = `DELETE FROM Patient WHERE PatientID = ?`;

        let params = [
            _.get(body, 'patientID')
        ];
        let numOfRowsAffected = await db.run(query, params);

        res.statusMessage = 'OK';
        res.status(200).send({ numOfRowsAffected }).end();
        return;
    } catch (err) {
        res.statusMessage = 'Internal Server Error';
        res.status(500).send(err).end();
    }
}

async function get(req, res) {
    try {
        const db = await getDB();
        const body = req.body;

        let query = `SELECT * FROM Patient WHERE PatientID = ?`;

        let params = [
            _.get(body, 'patientID')
        ];
        console.log(params)
        let patient = await db.get(query, params);

        res.statusMessage = 'OK';
        res.status(200).send({ patient }).end();
        return;
    } catch (err) {
        res.statusMessage = 'Internal Server Error';
        res.status(500).send(err).end();
    }
}

async function getAll(req,res){
    try{
        const db = await getDB();
        const body = req.body;
        const page = _.get(body,'page');
        const count = _.get(body,'count');

        let query = `SELECT * FROM Patient`
        let patients = await db.all(query);
        res.statusMessage = 'OK';
        res.status(200).send({ patients }).end();
    }catch(err){
        console.error(err);
        res.statusMessage = 'Internal Server Error';
        res.status(500).send(err).end();
    }
}

async function search(req, res) {
    try {
        const db = await getDB();
        const body = req.body;

        let query = `
            SELECT * FROM Patient 
            WHERE 
                First_Name LIKE '%?%'
            OR
                Last_Name LIKE '%?%'
        `;

        let rows = await db.all(query, [
            _.get(body, 'query'),
            _.get(body, 'query')
        ]);

        rows = rows.filter((v,i,a)=>a.findIndex(t=>(t.ID === v.ID))===i);//remove duplicates by ID

        res.statusMessage = 'OK';
        res.status(200).send({ rows }).end();
        return;
    } catch (err) {
        res.statusMessage = 'Internal Server Error';
        res.status(500).send(err).end();
    }
}


module.exports = {
    create, 
    update,
    remove,
    get,
    getAll,
    search
}
