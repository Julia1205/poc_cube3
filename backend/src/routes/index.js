const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item_controller');

router.get('/items', itemController.getAllItems);

module.exports = router;