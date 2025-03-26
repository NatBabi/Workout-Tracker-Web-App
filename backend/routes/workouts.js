const express = require('express');
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
router.post('/', (req, res) => {
  res.json({ mssg: 'Create a new workout' });
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
