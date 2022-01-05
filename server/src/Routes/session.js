const express = require('express');
const {requireValidSession} = require('../Middleware/session');
const {login, logout} = require('../Logic/session');

const router = express.Router();

router.post('/login',(async (req,res)=>{
    login(req,res);
}));

router.post('/logout',requireValidSession,((req,res)=>{
    logout(req,res);
}));

module.exports = router;