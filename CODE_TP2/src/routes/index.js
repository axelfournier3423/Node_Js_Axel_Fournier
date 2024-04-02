const express = require('express');
const app = express();
const users = require('./users');
const items = require('./items');
const watchlists = require('./watchlists');

app.use(express.json());

app.use('/users', users);
app.use('/items', items);
app.use('/watchlist', watchlists);
    
app.use(function (req, res, next) {
    res.status(404).send("Invalid URL");
    return next();
});

module.exports = app;