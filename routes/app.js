const {Router} = require('express')
const router = Router()

var appController = require('../controllers/appController');

router.route('/').get(appController.main);


module.exports = router;