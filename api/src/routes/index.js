const express = require('express');
const router = express.Router();
const {
  testDBConnection
} = require('../controllers/tests');

const {getHomePage} = require('../controllers/home');

const { 
  getAllArticles,
  getArticleByID,
  getArticleByName,
  getArticleByCategory,
  getArticleBySport,
  deleteArticle,
  updateArticle,
  addArticle
} = require('../controllers/articles');


const { 
getAllCategories,
getCategoryByID,
getCategorieByName,
deleteCategorie,
updateCategory,
addCategory
} = require('../controllers/categories');

const {
  getAllSports,
  getSportByID,
  getSportByName,
  deleteSport,
  updateSport,
  addSport
} = require('../controllers/sports');

const {
  createUser,
  getUser,
  connectUser,
  updateUser
} = require('../controllers/users');

const{
  getAllVariants,
  getVariantByID,
  getVariantByName,
  getVariantByCategory,
  getVariantBySport,
  getVariantByArticle,
  deleteVariant,
  updateVariant,
  addVariant
} = require('../controllers/variants');

router.get('/home/:howMany', getHomePage);


router.get('/articles', getAllArticles);
router.get('/articleId/:id', getArticleByID);
router.get('/articleName/:name', getArticleByName);
router.get('/articleCategory/:id', getArticleByCategory);
router.get('/articleSport/:id', getArticleBySport);
router.delete('/deleteArticle/:id', deleteArticle);
router.put('/putArticle/:id/:name', updateArticle);
router.post('/addArticle/:article', addArticle);


router.get('/categories', getAllCategories);
router.get('/categoryId/:id', getCategoryByID);
router.get('/categoryName/:name', getCategorieByName);
router.delete('/deleteCategory/:id/:name', deleteCategorie);
router.put('/putCategory/:id/:name', updateCategory);
router.post('/addCategory/:category', addCategory);

router.get('/sports', getAllSports);
router.get('/sportId/:id', getSportByID);
router.get('/sportName/:name', getSportByName);
router.delete('/deleteSport/:id/:name', deleteSport);
router.put('/putSport/:id/:name',updateSport);
router.post('/addSport/:sport', addSport);


router.post('/addUser/:user', createUser);
router.get('/user/:email', getUser);
router.get('/connectUser/:email', connectUser);
router.put('/putUser/:user', updateUser);

router.get('/variants', getAllVariants);
router.get('/variantId/:id', getVariantByID);
router.get('/variantName/:name', getVariantByName);
router.get('/variantArticle/:article', getVariantByArticle);
router.get('/variantCategory/:category', getVariantByCategory);
router.get('/variantSport/:sport', getVariantBySport);
router.delete('/deleteVariant/:id', deleteVariant);
router.put('/putVariant/:id', updateVariant);
router.post('/addVariant:/variant', addVariant);


module.exports = router;