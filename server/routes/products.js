const express = require('express')
const router = express.Router()
const Product = require('../model/product')
const Billing = require('../model/billing')
const Debt = require('../model/debt')

router.get('/db-analyze', function(req, res){
  Product.find({}, function(err, foundProducts) {
    return res.json(foundProducts)
  })
})

router.get('/db-analyze2', function(req, res){
  Billing.find({}, function(err, foundBillings) {
    return res.json(foundBillings)
  })
})

router.get('/db-analyze3', function(req, res){
  Debt.find({}, function(err, foundDebts) {
    return res.json(foundDebts)
  })
})

router.get('/:productId', function(req, res){
    const productId = req.params.productId
    Product.findById(productId, function(err, foundProduct) {
        if(err) {
          return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
        }
        return res.json(foundProduct)
    })
})

module.exports = router