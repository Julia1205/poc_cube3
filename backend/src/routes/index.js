const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article_controller');
const homeController = require('../controllers/home_controller');
const variantController = require('../controllers/variant_controller');

router.get('/home/:howMany', homeController.getHomePage);
router.get('/articles', articleController.getAllArticles);
router.get('/articleId/:id' , articleController.getArticleByID);
router.get('/articleName/:name', articleController.getArticleByName);
router.get('/articleCategory/:id', articleController.getArticleByCategory);
router.get('/articleSport/:id', articleController.getArticleBySport);

router.get('/variantArticle/:id', variantController.getVariantByArticle);

module.exports = router;