const express = require('express');
const router = express.Router();
const { createProperty, getAllProperties, getPropertyById, updateProperty, deleteProperty } = require('../controllers/propertyController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getAllProperties);
router.get('/:id', getPropertyById);
router.post('/', authMiddleware, createProperty); // Apply authMiddleware for POST request
router.put('/:id', authMiddleware, updateProperty); 
router.delete('/:id', authMiddleware, deleteProperty);
module.exports = router;
