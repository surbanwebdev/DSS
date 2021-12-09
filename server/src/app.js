const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const process = require('process');
const sessionRoutes = require('./Routes/session');
const testRoutes = require('./Routes/test');
const patientRoutes = require('./Routes/patient');
const {tweakRquest} = require('./Middleware/global');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(tweakRquest);

app.use('/session',sessionRoutes);

app.use('/test',testRoutes);

app.use('/patient',patientRoutes);

app.listen(process.env.PORT || 8081);
