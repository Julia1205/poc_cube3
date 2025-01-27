const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article_controller');
const categoryController = require('../controllers/category_controller');
const userController = require('../controllers/user_controller');
const variantController = require('../controllers/variant_controller');

router.get('/items', articleController.getAllArticles);
router.get('/items/category/:categoryId', articleController.getArticlesByCategory);
router.get('/categories', categoryController.getAllCategories);
router.get('/category/:id', categoryController.isExistingCategory);
router.post('/user/:user', userController.addUser);
// router.get('/items/randomItems/:number', articleController.getRandomItems);
router.get('/getHome/:howMany', variantController.getHomePage);

module.exports = router;