const express = require('express');
const bodyParser = require('body-parser');
const {requireLoggedIn} = require('../Middleware/session');
const {login} = require('../Logic/session');

const router = express.Router();

router.post('/',(async (req,res, next)=>{
    login(req).then((r)=>{
        console.log(r);
        res.send({message: "OK"}).end();
    }).catch((err)=>{
        console.log("ERROR",err)
    });
}));

router.post('/logout',requireLoggedIn,((req,res)=>{
    
}));

router.get('/',((req,res,next)=>{
    res.send({message: "WHASSUP"}).end();
}));

module.exports = router;