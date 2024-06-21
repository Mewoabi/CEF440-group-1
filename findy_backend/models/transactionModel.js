const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const transactionSchema = new Schema({
  amout: {
    type: Number,
    required: true, 
    trim: true
  },
  status: {
    type: String,
    required: true,
    enum: [
      'successful', 'pending', 'canceled' 
    ]
  },
  status: {
    type: String,
    required: true,
    enum: [
      'payment', 'reward', 'refund' 
    ]
  },
  profileImage: {
    type: String,
    default: null // URL to the profile image
  },
  phoneNumber: { 
      type: String,
      trim: true,
      default: null 
  },
  owner: {
    type: String,
    required: true, 
    trim: true
  }, 
  //the id of the finder and the owner
  finder:{
    type: String,
    required: true, 
    trim: true
  },
  //the id of the item the transaction is being done for.
  item:{
    type: String,
    required: true, 
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {timestamps: true})

// Middleware to update the `updatedAt` field before saving
transactionSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Transaction', transactionSchema)