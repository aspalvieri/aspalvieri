// Our Express app module
const express = require('express');
const app = express();

// Importing the routes
const testRoutes = require('./test.js');
const mailRoutes = require("./mail.js");

// Registering our pageRoutes
app.use('/test', testRoutes);
app.use("/mail", mailRoutes);

// Exporting the changes
module.exports = app;
