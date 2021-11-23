const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const process = require('process');
const sessionRoutes = require('./Routes/session');
const {requireValidSession,requireAdmin} = require('./Middleware/session');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/session',sessionRoutes);

app.post('/status',requireValidSession,requireAdmin,(req,res)=>{
    res.send({
        message: "Hello World"
    });
});

app.listen(process.env.PORT || 8081);
