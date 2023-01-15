const express = require('express')
const router = express.Router()
const Product = require('../model/product')
const Billing = require('../model/billing')
const Debt = require('../model/debt')

//20230115 変更(Start)
// router.get('/db-analyze', function(req, res){
router.get('/db-analyze/product-data', function(req, res){  
//20230115 変更(End)
  Product.find({}, function(err, foundProducts) {
    return res.json(foundProducts)
  })
})

//20230115 変更(Start)
// router.get('/db-analyze2', function(req, res){
router.get('/db-analyze/billing-data', function(req, res){
//20230115 変更(End)
  Billing.find({}, function(err, foundBillings) {
    return res.json(foundBillings)
  })
})

//20230115 変更(Start)
// router.get('/db-analyze3', function(req, res){
router.get('/db-analyze/debt-data', function(req, res){ 
//20230115 変更(End)
  Debt.find({}, function(err, foundDebts) {
    return res.json(foundDebts)
  })
})

//20230115 変更(Start)
// router.get('/:productId', function(req, res){
//     const productId = req.params.productId
//     Product.findById(productId, function(err, foundProduct) {
//         if(err) {
//           return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
//         }
//         return res.json(foundProduct)
//     })
// })
//20230115 変更(End)

module.exports = router