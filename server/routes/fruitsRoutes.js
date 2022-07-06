const express = require('express');
const router = express.Router();
const fruitsController = require('../controllers/fruitsController');

router.get('/' , fruitsController.homepage);
router.get('/categories' , fruitsController.exploreCategories);
router.get('/fruits/:id' , fruitsController.freshCollection);
router.get('/categories/:id' , fruitsController.exploreCategoriesById);
router.post('/search' , fruitsController.searchFruits);
router.get('/exploreFresh' , fruitsController.explorefresh);
router.get('/random' , fruitsController.exploreRandom);
router.get('/requestForm' , fruitsController.requestform);
router.post('/requestForm' , fruitsController.requestformOnPost);
router.get('/contact',fruitsController.contact);

module.exports = router;