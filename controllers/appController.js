const {Router} = require('express')
const router = Router()
const cookieParser = require('cookie-parser');

router.use(cookieParser('secret key'))


const productsSchema = require('../models/products');


exports.getMain = async (req, res) =>  {    
    var products = await productsSchema.find().lean();
    var sliderProducts = await productsSchema.find().limit(10).lean();
    res.render('index', {
        title: 'BestStore',
        products,
        sliderProducts
    })
}

exports.getCategory = async (req, res) =>  {
    var products = await productsSchema.find().lean();
    var sliderProducts = await productsSchema.find().limit(10).lean();
    if (req.params.category == 'male'){
        category = "Мужская одежда";
        var products = await productsSchema.find({category: 1}).lean();
        var sliderProducts = await productsSchema.find({category: 1}).limit(10).lean();
    } else if (req.params.category == 'female'){
        category = "Женская одежда";
        var products = await productsSchema.find({category: 2}).lean();
        var sliderProducts = await productsSchema.find({category: 2}).limit(10).lean();
    } else if (req.params.category == 'child'){
        category = "Детская одежда";
        var products = await productsSchema.find({category: 3}).lean();
        var sliderProducts = await productsSchema.find({category: 3}).limit(10).lean();
    }
    res.render('products', {
        title: 'BestStore | ' + category,
        category: category,
        products,
        sliderProducts
    })
}

exports.getProduct = async (req, res) => {
    var product = await productsSchema.find({_id: req.params._id}).lean();
    if (product[0].category == 1) product[0].categoryStr = "Мужская одежда";
    else if (product[0].category == 2) product[0].categoryStr = "Женская одежда";
    else if (product[0].category == 3) product[0].categoryStr = "Детская одежда";    
    if (product[0].coll == 1) product[0].collStr = "Зимняя";
    else if (product[0].coll == 2) product[0].collStr = "Летняя";
    else if (product[0].coll == 3) product[0].collStr = "Демисезон";
    res.render('product', {
        title: 'BestStore | ' + product[0].productName,
        product
    })
}

exports.postCategory = async (req, res) => {
    
}