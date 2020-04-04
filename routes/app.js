const {Router} = require('express')
const router = Router()

var appController = require('../controllers/appController');

router.route('/').get(appController.getMain).post(appController.postMain);

router.route('/category/:category').get(appController.getCategory).post(appController.postCategory);


module.exports = router;