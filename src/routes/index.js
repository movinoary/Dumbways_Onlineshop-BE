const express = require('express');
const { addUser, getUser, getUserbyId, updateUser, deleteUser } = require('../controllers/user');
const { getProduct, addProduct, getProductbyId, updateProduct, deleteProduct } = require('../controllers/product');
const { getCategory, addCategory, getCategorybyId, updateCategory, deleteCategory } = require('../controllers/category');
const { getProfile, addProfile, getProfilebyId, updateProfile, deleteProfile } = require('../controllers/profile');
const { getTransaction, addTransaction, getTransactionbyId, updateTransaction, deleteTransaction } = require('../controllers/transaction');

const router = express.Router();

// Router User
router.get('/user', getUser);
router.post('/user', addUser);
router.get('/user/:id', getUserbyId);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

// Router Product
router.get('/product', getProduct);
router.post('/product', addProduct);
router.get('/product/:id', getProductbyId);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

// Router Category
router.get('/category', getCategory);
router.post('/category', addCategory);
router.get('/category/:id', getCategorybyId);
router.patch('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

// Router Profile
router.get('/profile', getProfile);
router.post('/profile', addProfile);
router.get('/profile/:id', getProfilebyId);
router.patch('/profile/:id', updateProfile);
router.delete('/profile/:id', deleteProfile);

// Router Transaction
router.get('/transaction', getTransaction);
router.post('/transaction', addTransaction);
router.get('/transaction/:id', getTransactionbyId);
router.patch('/transaction/:id', updateTransaction);
router.delete('/transaction/:id', deleteTransaction);


module.exports = router