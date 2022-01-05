const express = require('express');
const { getAllSettings } = require('../Logic/settings');
//const { requireValidSession } = require('../Middleware/session');

const router = express.Router();

router.get('/GetAllSettings', async (req, res) => {
    getAllSettings(req, res);
});

router.get('/GetSetting', async (req, res) => {
    getSetting(req, res);
});

module.exports = router;