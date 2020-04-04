const {Router} = require('express')
const router = Router()
const cookieParser = require('cookie-parser');

router.use(cookieParser('secret key'))


const productsSchema = require('../models/products');


exports.getMain = async (req, res) =>  {
    res.render('index', {
        title: 'BestStore',
    })
}

exports.postMain = async (req, res) => {
    
}

exports.getCategory = async (req, res) =>  {
    var products = await productsSchema.find().lean();
    var sliderProducts = await productsSchema.find().limit(5).lean();
    if (req.params.category == 'male'){
        category = "Мужская одежда";
        var products = await productsSchema.find({category: 1}).lean();
        var sliderProducts = await productsSchema.find({category: 1}).limit(5).lean();
    } else if (req.params.category == 'female'){
        category = "Женская одежда";
        var products = await productsSchema.find({category: 2}).lean();
        var sliderProducts = await productsSchema.find({category: 1}).limit(5).lean();
    }
    res.render('products', {
        title: 'BestStore | ' + category,
        category: category,
        products,
        sliderProducts
    })
}


exports.postCategory = async (req, res) => {
    
}