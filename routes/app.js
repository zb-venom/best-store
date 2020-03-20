const {Router} = require('express')
const router = Router()

var appController = require('../controllers/appController');

router.route('/').get(appController.getMain).post(appController.postMain);


module.exports = router;