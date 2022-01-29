const { Schema, model } = require('mongoose');

const orderSchema = Schema({
    email : {
        type : String,
        required : true
    },
    items : [
        {
            _id : false,
             id : String,
             qty: Number
        }
    ]
})

module.exports = model('Order', orderSchema);