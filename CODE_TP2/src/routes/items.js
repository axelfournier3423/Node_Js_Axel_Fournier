const express = require('express');
const router = express.Router();
const { findItem } = require('../controllers/items/findItem');
const { addItem } = require('../controllers/items/addItem');


router.get('/find', findItem);


router.post('/add', addItem);

module.exports = router;