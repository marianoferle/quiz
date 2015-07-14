
//GET /quizer/question

<<<<<<< HEAD
// // GET /quizes/question
// exports.question= function(req, res ){
//   //res.render('quizes/question', {pregunta: 'Capital de Italia'});
//   models.Quiz.findAll().success(function(quiz) {
//     res.render('quizes/question', { pregunta: quiz[0].pregunta});
//   })
// };

// Autoload :id
exports.load = function(req, res, next, quizId) {
  models.Quiz.find(quizId).then(function(quiz){
      if(quiz){
        req.quiz = quiz;
        next();
      }else{   
        next(new Error('No existe quizId=' + quizId)); 
      }
  }).catch(function(error){next(error)});

=======
exports.question=function(req, res){
    res.render('quizes/question',{pregunta: 'Capital de Italia'});
>>>>>>> parent of 72610ef... Despliegue DB en Heroku
};


//GET /quizer/answer

exports.answer=function(req, res){
<<<<<<< HEAD

     var resultado ='Incorrecto';
        if(req.query.respuesta === req.quiz.respuesta){
           resultado='Correcto';
        }
         res.render('quizes/answer',{quiz: req.quiz, respuesta: resultado});
};

=======
  if(req.query.respuesta === 'Roma'){
      res.render('quizes/answer',{respuesta: 'Correcto'});
  }else{
      res.render('quizes/answer',{respuesta: 'Incorrecto'});
  }
};
>>>>>>> parent of 72610ef... Despliegue DB en Heroku
