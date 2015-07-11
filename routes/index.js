var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.param('quizId', quizController.load);  // autoload :quizId

router.get('/quizes/',                       quizController.index);
router.get('/quizes/:quizId(\\d+)',          quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',   quizController.answer);


router.get('/author', function(req, res, next) {
    res.render('author',{
    	nombre: 'Mariano',
    	sitioweb:'http://marianoferle.com.ar'
    });
});


module.exports = router;


