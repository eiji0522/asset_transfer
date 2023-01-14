
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BillingSchema = new Schema({
  invoice_number: String,
  description: { type: String, required: true, max: [60, '最大60文字までです']},
  invoice_date: Date,
  amount: Number,
  due_date: Date,
  product: String
});

module.exports = mongoose.model('billing', BillingSchema)