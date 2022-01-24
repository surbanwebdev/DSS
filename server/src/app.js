const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const process = require('process');
const sessionRoutes = require('./Routes/session');
const testRoutes = require('./Routes/test');
const patientRoutes = require('./Routes/patient');
const settingsRoutes = require('./Routes/settings');
const symptomsRoutes = require('./Routes/symptoms');
const { tweakRquest } = require('./Middleware/global');
const { initDB } = require('./Logic/db');

initDB().then(() => {
    const app = express();

    app.use(bodyParser.json());
    app.use(cors());
    app.use(tweakRquest);

    app.use('/api/session', sessionRoutes);

    app.use('/api/test', testRoutes);

    app.use('/api/patient', patientRoutes);

    app.use('/api/settings', settingsRoutes);

    app.use('/api/symptoms', symptomsRoutes);

    app.listen(process.env.PORT || 8081);

    console.log("API is listening on port 8081");
});