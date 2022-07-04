const router = require('express').Router();
const productController = require('../controllers/productController');

router.get('/', productController.listAll);
router.get('/:id', productController.getById);

module.exports = router;