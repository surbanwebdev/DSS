const express = require('express');
const {requireValidSession} = require('../Middleware/session');
const {login, logout} = require('../Logic/session');

const router = express.Router();

router.post('/login',(async (req,res)=>{
    login(req).catch((err)=>{
        res.statusMessage = err;
        res.status(500).end();
        return;
    });
}));

router.post('/logout',requireValidSession,((req,res)=>{
    logout(req).catch((err)=>{
        res.statusMessage = "Internal Server Error";
        res.status(500).end();
        console.log("ERROR",err)
        return;
    });
}));


module.exports = router;