const Property = require('../models/Property');

const createProperty = async (req, res) => {
  try {
    const propertyData = req.body;
    const newProperty = new Property(propertyData);
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create property' });
  }
};
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to load properties' });
  }
};