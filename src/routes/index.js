const express = require('express');
const { addUser, getUser, getUserbyId, updateUser, deleteUser } = require('../controllers/user');
const { getCategory, addCategory, getCategorybyId, updateCategory, deleteCategory } = require('../controllers/category');
const { getProduct, addProduct, getProductbyId, updateProduct, deleteProduct } = require('../controllers/product');

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

router.get('/category', getCategory);
router.post('/category', addCategory);
router.get('/category/:id', getCategorybyId);
router.patch('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);


module.exports = router