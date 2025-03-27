const express = require('express');
const Workout = require('../models/workoutModel');
const router = express.Router();

// Get all workouts
router.get('/', (req, res) => {
  res.json({ mssg: 'Get all workouts' });
});

// Get a specific workout
router.get('/:id', (req, res) => {
  res.json({ mssg: 'Get a specific workout' });
});

// Create a new workout
router.post('/', async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json({ workout });
  } catch (error) {
    res.status(400).json({ eroor: erro.message });
  }
});

// Update a specific workout
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'Update a specific workout' });
});

// Delete a specific workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'Delete a specific workout' });
});

// Export the router
module.exports = router;
