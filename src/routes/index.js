const express = require('express');
const router = express.Router();

const {addUser, getUser} = require('../controllers/user');

router.get('/user', getUser);
router.post('/user', addUser);


module.exports = router