const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email: reqEmail, password: reqPass} = req.body

  try {
    const user = await User.login(reqEmail, reqPass)
 
    // create a token
    const token = createToken(user._id)
    const {_id: id, profileImage, username, email, password, phoneNumber} = user._doc
    // console.log(user)
    res.status(200).json({user: {id, profileImage, username, email, password, phoneNumber}, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {username, email, password , phoneNumber } = req.body
  console.log("signing up user")
  try {
    const user = await User.signup(email, password, phoneNumber, username)
    const {_id: id, profileImage, username, email, password, phoneNumber} = user._doc
    // create a token
    const token = createToken(user._id)
    // console.log(user)
    res.status(200).json({user: {id, profileImage, username, email, password, phoneNumber}, token})
  } catch (error) {
    res.status(400).json({error: error.message}) 
    console.log(error.message)
  } 
}

const updateUserProfile = async (req, res) => {

  try { 
    const {id} = req.params
    console.log("before update: ", req.body,req.params.id)
    const user = await User.findOneAndUpdate({_id: id}, {...req.body}, {new: true, runValidators: true}) 
    // create a token  
    // console.log(user)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({error: error.message})
    console.log(error.message)
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users)
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser, updateUserProfile,getAllUsers }