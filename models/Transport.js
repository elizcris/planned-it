const mongoose = require('mongoose')

const TransportSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  dates: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  cost: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Transport', TransportSchema)
