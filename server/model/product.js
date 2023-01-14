
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  material: String,
  description: { type: String, required: true, max: [60, '最大60文字までです']},
  unit_price: Number,
  quantity: Number,
  lot: String,
  carbon: Number
});

module.exports = mongoose.model('product', ProductSchema)