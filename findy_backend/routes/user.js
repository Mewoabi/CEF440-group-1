const express = require('express');
const { loginUser, signupUser, updateUserProfile, getAllUsers } = require('../controllers/userController');

const router = express.Router();

// Login route
router.post('/login', loginUser);

// Signup route
router.post('/signup', signupUser);

// Update a user's profile
router.patch('/:id', updateUserProfile);

// Get all users
router.get('/users', getAllUsers);

module.exports = router;
