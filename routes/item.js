const express = require('express');
const getItemById = require('../data/getItemByID');
const router = express.Router();
const Item = require('../models/items');

// GET ITEMS

router.get('/', async(req, res) => {

    try {
        const itemsimg = await Item.find();
        res.json(itemsimg);
    } catch(err) {
        res.json({ msg: err.message })
    }
}); 

// GET ITEM

router.get('/item', async(req, res) => {

    try {
        const itemId = req.body.itemId;
        const itemsimg = await getItemById(itemId);
        res.json(itemsimg);
    } catch(err) {
        res.json({ msg: err.message })
    }
}); 



// CREATE ITEMS

router.post('/', async(req, res) => {
    console.log(req.body);

    try {
        const newItem = new Item( req.body );
        res.json(newItem);
        await newItem.save();
    } catch(err) {
        res.status(400).json(err)
    }
})

module.exports = router;