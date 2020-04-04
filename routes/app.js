const {Router} = require('express')
const router = Router()

var appController = require('../controllers/appController');
var adminController = require('../controllers/adminController');

router.route('/').get(appController.getMain).post(appController.postMain);

router.route('/category/:category').get(appController.getCategory).post(appController.postCategory);

router.route('/admin/panel/:key').get(adminController.getPanel).post(adminController.addProduct);

module.exports = router;