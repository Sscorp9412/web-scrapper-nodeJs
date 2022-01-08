const express = require('express');
const app = express.Router();

app.use('/', require('./app'));

module.exports = app;                   