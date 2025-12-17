// Live coding: Building first API endpoint
// File: src/routes/animalRoutes.js

const express = require('express');
const router = express.Router();

// Instructor explains REST principles
router.post('/animals', async (req, res) => {
  // CRUD Operations explained
  try {
    const animalData = req.body;
    // Validate input
    if (!animalData.microchipNumber) {
      return res.status(400).json({
        error: 'Microchip number is required'
      });
    }
    
    // Save to database (mock for now)
    const newAnimal = {
      id: Date.now(),
      ...animalData,
      createdAt: new Date()
    };
    
    res.status(201).json({
      message: 'Animal created successfully',
      data: newAnimal
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

module.exports = router;