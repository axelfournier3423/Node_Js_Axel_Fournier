const express = require('express');
const router = express.Router();
const { findWatchlist } = require('../controllers/watchlists/findWatchlist');
const { addWatchlist } = require('../controllers/watchlists/addWatchlist');
const { addItemToWatchlist } = require('../controllers/watchlists/addItemToWatchlist');
const { findOneWatchlist } = require('../controllers/watchlists/findOneWatchlist');
const { findWatchlistUser } = require('../controllers/watchlists/findWatchlistUser');
const { updateState } = require('../controllers/watchlists/updateState');


router.get('/find', findWatchlist);

router.post('/add', addWatchlist);

router.patch('/addItem', addItemToWatchlist);

router.get('/find/:id', findOneWatchlist);

router.get('/findListUser/:utilisateurId', findWatchlistUser);

router.patch('/updateState', updateState);


module.exports = router;    