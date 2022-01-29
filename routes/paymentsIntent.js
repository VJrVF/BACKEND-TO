const express = require('express');
const getOrderAmount = require('../data/getOrderAmount');
const router = express.Router();

const stripe = require('stripe')(process.env.STRIPE_SK);

// CREAR INTENTO DE PAGO

router.post("/", async (req, res) => {
    const items = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: await getOrderAmount(items),
        currency: "eur",
        automatic_payment_methods: {
            enabled: true,
        },
    });
  
  
    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

module.exports = router;