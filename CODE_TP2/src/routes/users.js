const express = require('express');
const router = express.Router();
const { findUser } = require('../controllers/users/findUser');
const { addUser } = require('../controllers/users/addUser');
const { updateUser } = require('../controllers/users/updateUser');


router.get('/find', findUser)

router.post('/add', addUser)

router.patch('/update/:userId', updateUser)

module.exports = router