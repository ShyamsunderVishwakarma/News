var express = require('express')
var router = express.Router();

var newsController = require('../controllers/newsController');

router.get('/',newsController.homePage);
router.get('/news',newsController.getNews);


module.exports = router;