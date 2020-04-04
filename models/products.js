const {Schema, model} = require('mongoose')

const productsSchema = new Schema({    
    productName: String,
    count: Int32Array, 
    collection: Int32Array,
})

module.exports = model('products', productsSchema)