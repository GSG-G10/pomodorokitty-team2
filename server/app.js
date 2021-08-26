require('env2')('.env');
const express = require('express');
const compresion = require('compression');
const { join } = require('path');
const router = require('./router');
const cookieParser = require('cookie-parser');

const app = express();

app.set('PORT', process.env.PORT || 7000);
app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compresion());
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

module.exports = app;
