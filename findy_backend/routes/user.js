const express = require('express')

// controller functions
const { loginUser, signupUser, updateUserProfile } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

//update a user's profile
router.patch('/:id', updateUserProfile)

module.exports = router