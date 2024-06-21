const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const messageSchema = new Schema({
  session: {
    type: String,
    required: true  
  },
  sender: {
    type: String,
    required: true  
  },
  receiver: {
    type: String,
    required: true  
  },
  content: {
    type: String,
    required: true
  }
}, {timestamps: true})
 
 

module.exports = mongoose.model('Message', messageSchema)