const express = require('express');
const {requireValidSession} = require('../Middleware/session');
const {login, logout, ping} = require('../Logic/session');

const router = express.Router();

router.post('/login',(async (req,res)=>{
    login(req,res);
}));

router.post('/logout',requireValidSession,((req,res)=>{
    logout(req,res);
}));

router.post('/ping',requireValidSession,((req,res)=>{
    ping(req,res);
}));

module.exports = router;