const express = require('express')
const { model } = require('mongoose')
const router = express.Router()

const {getAllProduct, getProductById, makePayment} = require('../controller/productController')

//Get all Products from DB GET /api/products
router.get('/', getAllProduct)

//Get a Products by id from DB GET /api/products/:id
router.get('/:id', getProductById)

//Mske payment which function is written in controller
router.post('/create-checkout-session', makePayment)

module.exports = router