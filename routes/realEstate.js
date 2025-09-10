const express = require('express');
const router = express.Router();

const {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty
} = require('../controllers/propertyController'); 

router.get('/', getAllProperties);  // GET /api/properties
router.get('/:id', getPropertyById);  // GET /api/properties/:id
router.post('/', createProperty);  // POST /api/properties
router.put('/:id', updateProperty);  // PUT /api/properties/:id
router.delete('/:id', deleteProperty);  // DELETE /api/properties/:id
