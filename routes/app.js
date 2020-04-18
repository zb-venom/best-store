const {Router} = require('express')
const router = Router()

var appController = require('../controllers/appController');
var adminController = require('../controllers/adminController');

router.route('/').get(appController.getMain);

router.route('/auth').get(appController.getAuth);

router.route('/category/:category').get(appController.getCategory).post(appController.postCategory);

router.route('/admin/panel/:key').get(adminController.getPanel).post(adminController.addProduct);

router.route('/product/:_id').get(appController.getProduct);

module.exports = router;