const mongoose = require('mongoose')

const PackingSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: false,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Packing', PackingSchema)
