// External Dependancies
const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  owner: String,
  doors: Number,
  seats: Number,
  fuel: Number,
  price: Number,
  rating: mongoose.Decimal128
})

module.exports = mongoose.model('Car', carSchema)
