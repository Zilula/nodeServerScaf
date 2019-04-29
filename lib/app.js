/* eslint-disable no-console*/

const express = require('express');
const app = express();
const notFound = require('./middleware/notFound');
const { handler } = require('./middleware/error');
const connection = require('./middleware/connection');
const quote = require('./routes/quote');
// const cors = require('cors');

app.use(require('./middleware/cors'));

app.use(express.json());

app.use('/quotes', connection, quote);

app.use(notFound);

app.use(handler);

module.exports = app;
