const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  session: {
    type: Schema.Types.ObjectId,
    ref: 'Session',
    required: true  
  },
  sender: {
    type: String,
    required: true  
  },
  content: {
    type: String,
    required: true
  }
}, {timestamps: true});

module.exports = mongoose.model('Message', messageSchema);
