const {Schema, model} = require('mongoose');

const productsSchema = new Schema({    
    productName: String,
    count: Number, 
    coll: Number,
    category: Number,
    price: Number,
    imgUrl: String,
});

module.exports = model('products', productsSchema);