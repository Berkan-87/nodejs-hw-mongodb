const express = require('express');
const app = express();

const contactsRouter = require('./routers/contacts');
const errorHandler = require('./middlewares/errorHandler');
const notFoundHandler = require('./middlewares/notFoundHandler');

app.use(express.json());

app.use('/contacts', contactsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
