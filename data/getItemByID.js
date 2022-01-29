
const Item = require('../models/items')

const getItemById = async(id) => {
    const itemfromDB = await Item.findById(id);
    return itemfromDB;
}

module.exports = getItemById;