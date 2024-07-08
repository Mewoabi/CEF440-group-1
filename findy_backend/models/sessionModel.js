const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  participants: {
    type: [String], // Array of user IDs
    required: true  
  }
}, {timestamps: true});

module.exports = mongoose.model('Session', sessionSchema);
