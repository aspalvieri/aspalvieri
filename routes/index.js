// Our Express app module
const express = require('express');
const app = express();

// Importing the routes
const testRoutes = require('./test.js');

// Registering our pageRoutes
app.use('/test', testRoutes);

// Exporting the changes
module.exports = app;
