const {Router} = require('express')
const router = Router()
const cookieParser = require('cookie-parser');

router.use(cookieParser('secret key'))


const productsSchema = require('../models/products');


exports.getPanel = async (req, res) =>  {
    const products = await productsSchema.find().lean()
    
    if (req.params.key == '50454e4953') {        
        res.render('adminPanel', {
            title: 'ADMIN | BestStore',
            admin: true,
            products,
        })
    } else res.redirect('/');
}

exports.addProduct = async (req, res) =>  {
    const new_product = new productsSchema({
        productName: req.body.productName,
        count: req.body.count, 
        category: req.body.category, 
        coll: req.body.coll,
        price: req.body.price,
        imgUrl: req.body.imgUrl
    })
    await new_product.save();
    res.redirect('/admin/panel/50454e4953');
}
