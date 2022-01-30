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
//     const itemsimg = [
//         {
//           "_id": "61ec97c24bfe3b42235461d7",
//           "title": "Funko Harry Potter",
//           "price": 15.99,
//           "image": "funko-Harry.jpg",
//           "__v": 0
//         },
//         {
//           "_id": "61ec97f04bfe3b42235461d9",
//           "title": "Funko Albus Dumbledore",
//           "price": 20.99,
//           "image": "funko-Albus.jpg",
//           "__v": 0
//         },
//         {
//           "_id": "61ec98084bfe3b42235461db",
//           "title": "Funko Dementor",
//           "price": 16.99,
//           "image": "funko-Dementor.jpg",
//           "__v": 0
//         },
//         {
//           "_id": "61ec98224bfe3b42235461dd",
//           "title": "Funko Sirius Black",
//           "price": 19.99,
//           "image": "funko-Sirius.jpg",
//           "__v": 0
//         },
//         {
//           "_id": "61ec98364bfe3b42235461df",
//           "title": "Funko Voldemort",
//           "price": 18.99,
//           "image": "funko-Voldemort.jpg",
//           "__v": 0
//         },
//         {
//           "_id": "61ec984e4bfe3b42235461e1",
//           "title": "Funko Ron Weasly",
//           "price": 14.99,
//           "image": "funko-Ron.jpg",
//           "__v": 0
//         }
//       ];

//     try {
//         res.json(itemsimg)
//     } catch(err) {
//         res.json({ msg: err.message })
//     }
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