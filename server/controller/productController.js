
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
const Product = require('../models/Product');

const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "server error"});
    }
};

const getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
  
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
};

const makePayment = async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => ({
      price_data: {
          currency: "usd",
          product_data: {
              name: product.name,
              images: [product.imageUrl], // Corrected property name to images
          },
          unit_amount: Math.round(product.price * 100)
      },
      quantity: product.qty
  }));

  try {
      const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'], // Corrected property name to payment_method_types
          line_items: lineItems,
          mode: 'payment',
          success_url: "http://localhost:3000/payment-success", // Provide appropriate success URL
          cancel_url: "http://localhost:3000/payment-cancel" // Provide appropriate cancel URL
      });

      res.json({ id: session.id });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
  }
};
module.exports = {
    getAllProduct,
    getProductById,
    makePayment
};
