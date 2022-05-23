const express = require('express');
const { getProduct, addProduct, getProductbyId, updateProduct, deleteProduct } = require('../controllers/product');
const {addUser, getUser, getUserbyId, updateUser, deleteUser} = require('../controllers/user');

const router = express.Router();


router.get('/user', getUser);
router.post('/user', addUser);
router.get('/user/:id', getUserbyId);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

router.get('/product', getProduct);
router.post('/product', addProduct);
router.get('/product/:id', getProductbyId);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);


module.exports = router