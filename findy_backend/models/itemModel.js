const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  }, 
  name: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String, 
    required: true, 
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  additionalInfo: {
    color: {
      type: String,
      trim: true,
      default: null
    },
    brand: {
      type: String,
      trim: true,
      default: null
    },
    content: {
      type: String,
      trim: true,
      default: null
    },
    state: {
      type: String,
      trim: true,
      default: null
    }
  },
  category: {
    type: String,
    required: true,
    enum: [
      'phones', 'laptops', 'other electronics', 'writing materials', 'bags', 
      'documents', 'shoes', 'clothing', 'jewelry', 'money', 
      'other wearables', 'accessories', 'others'
    ]
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['lost', 'found']
  },
  status: {
    type: String,
    required: true,
    enum: ['returned', 'unreturned'],
    default: 'unreturned'
  },
  reporter: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true })

// Middleware to update the `updatedAt` field before saving
itemSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Item', itemSchema)