const express = require('express');
const router = express.Router();
const {
  testDBConnection
} = require('../controllers/tests');

const {
  getAllItems,
  getItemById,
  getItemsByCategory,
  getItemsByName,
  updateItem,
  createItem,
  deleteItem
} = require('../controllers/items');

const {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories
} = require('../controllers/categories');

const {
  getAllVariants,
  getVariantById,
  getVariantsByCategory,
  getVariantByName,
  updateVariant,
  deleteVariant,
  createVariant
} = require ('../controllers/variants');

//test routes
router.get('/test', testDBConnection);


//items routes
router.get('/items', getAllItems);
router.get('/item/:id', getItemById);
router.get('/items/category/:category', getItemsByCategory);
router.get('/items/name/:name', getItemsByName);
router.put('/item/:id/:newName/:newPrice/:newCategory', updateItem);
router.post('/item/:name/:price/:category', createItem);
router.delete('/item/:id', deleteItem);

//category routes
router.get('/categories', getAllCategories);
router.put('/category/:id/newName/:newName', updateCategory);
router.post('/category/:category', createCategory);
router.delete('/category/:id', deleteCategory);

//variants routes
router.get('/variants', getAllVariants);
router.get('/variant/:id', getVariantById);
router.get('/variants/category/:category', getVariantsByCategory);
router.get('/variants/name/:name', getVariantByName);
router.put('/variant/:id/:newName/:newPrice/:newDesc/:newArticle/:newImage/:newStock', updateVariant);
router.delete('/variant/:id', deleteVariant);
router.post('/variant/:name/:price/:desc/:article/:image/:stock', createVariant);






//export router
module.exports = router;