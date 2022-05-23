const express = require('express');
const router = express.Router();

const {addUser, getUser, getUserbyId, updateUser, deleteUser} = require('../controllers/user');

router.get('/user', getUser);
router.post('/user', addUser);
router.get('/user/:id', getUserbyId);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);


module.exports = router