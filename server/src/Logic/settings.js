/* eslint-disable no-async-promise-executor */
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const { v4 } = require('uuid');
const _ = require('lodash');
const { getDB } = require('./db');

async function getAllSettings(req, res) {
    try {
        let settings = await getAllSettingsFromDatabase();
        res.statusMessage = 'OK';
        res.status(200).send({ settings }).end();
    } catch (err) {
        console.error(err);
        res.statusMessage = 'Internal Server Error';
        res.status(500).send(err).end();
    }
}

async function getSetting(req, res) {
    try {
        const body = req.body;
        let setting = await getSettingFromDatabase(_.get(body, 'setting'));
        res.statusMessage = 'OK';
        res.status(200).send({ setting }).end();
    } catch (err) {
        console.error(err);
        res.statusMessage = 'Internal Server Error';
        res.status(500).send(err).end();
    }
}

async function getAllSettingsFromDatabase(){
    const db = await getDB();
    let query = `SELECT Setting, Value FROM Settings`
    let settings = await db.all(query);
    return settings;
}


async function getSettingFromDatabase(settingString){
    const db = await getDB();

    let params = [
        settingString
    ];
    let query = `SELECT Value FROM Settings WHERE Setting = ?`
    let setting = _.get(await db.get(query, params),'Value');
    return setting;
}

module.exports = {
    getAllSettings, 
    getSetting,
    getAllSettingsFromDatabase,
    getSettingFromDatabase
}
