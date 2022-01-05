const express = require('express');
const { getSymptomsList, getRouteFromSymptoms } = require('../Logic/symptoms');
const { requireValidSession } = require('../Middleware/session');

const router = express.Router();

router.get('/GetSymptomsList', requireValidSession, async (req, res) => {
    getSymptomsList(req, res);
});

router.get('/GetRouteFromSymptoms', async (req, res) => {
    getRouteFromSymptoms(req, res);
});

module.exports = router;