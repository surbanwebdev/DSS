const express = require('express');
const {requireValidSession} = require('../Middleware/session');

const router = express.Router();

router.post('/post',requireValidSession,(async (req,res)=>{
    console.log(req);
    res.statusMessage = "Got it";
    res.status(200).send({
        a: 'This is an example',
        b: 'of sending back an object',
        c: 'in the response object.',
        og: req.body
    }).end();
    return;
}));

router.put('/put',requireValidSession,(async (req,res)=>{
    console.log(req);
    res.statusMessage = "Got it";
    res.status(200).send({
        a: 'This is an example',
        b: 'of sending back an object',
        c: 'in the response object.',
        og: req.body
    }).end();
    return;
}));

router.get('/get',requireValidSession,(async (req,res)=>{
    console.log(req);
    res.statusMessage = "Got it";
    res.status(200).send({
        a: 'This is an example',
        b: 'of sending back an object',
        c: 'in the response object.',
        og: req.body
    }).end();
    return;
}));

router.delete('/delete',requireValidSession,(async (req,res)=>{
    res.statusMessage = "Session timed out";
    res.status(401).send({
        a: 'This is an example',
        b: 'of sending back an object',
        c: 'in the response object.',
        og: req.body
    }).end();
    // console.log(req);
    // res.statusMessage = "Got it";
    // res.status(200).send({
    //     a: 'This is an example',
    //     b: 'of sending back an object',
    //     c: 'in the response object.',
    //     og: req.body
    // }).end();
    return;
}));

module.exports = router;