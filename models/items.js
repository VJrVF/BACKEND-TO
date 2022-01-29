const { Schema, model } = require('mongoose');

const itemSchema = Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = model('Items', itemSchema);