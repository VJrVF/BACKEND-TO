const getItemById = require("./getItemByID");

const getOrderAmount = async(items) => {
    let amount = 0;

    for( let i = 0; i < items.length; i++ ) {
        const item = items[i];
        const itemDB = await getItemById(item.id);

        amount += item.qty * itemDB.price;
    }
    const onlyTwoDec = parseInt((amount.toFixed(2)).replace('.',''),10);
    console.log(onlyTwoDec);
    return onlyTwoDec;
}

module.exports = getOrderAmount;