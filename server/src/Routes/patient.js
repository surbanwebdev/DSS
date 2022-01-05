const express = require('express');
const { requireValidSession } = require('../Middleware/session');
const { create, update, remove, get, search, getAll } = require('../Logic/patient');

const router = express.Router();

router.post('/', requireValidSession, (async (req, res) => {
    create(req, res);
}));

router.put('/', requireValidSession, (async (req, res) => {
    update(req, res);
}));

router.get('/', requireValidSession, (async (req, res) => {
    get(req, res);
}));

router.get('/getAll', requireValidSession, (async (req, res) => {
    getAll(req, res);
}));

router.delete('/', requireValidSession, (async (req, res) => {
    remove(req, res);
}));

router.post('/search', requireValidSession, (async (req, res) => {
    search(req, res);
}));

module.exports = router;