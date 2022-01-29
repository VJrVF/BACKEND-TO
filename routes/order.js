const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

router.post('/', async( req, res ) => {
    const order = req.body;
    const newOrder = new Order(order);
    try {
        const newOr = await newOrder.save();
        res.json(newOr);
    } catch(err) {
        res.json({ msg: err.message });
    }
})

module.exports = router;