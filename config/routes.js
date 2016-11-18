var env = process.env.NODE_ENV || 'development',
  config = require('./config')[env];

module.exports = function (app) {
  //=============================
  // Routes and controllers for tasks
  //=============================
  var taskControllers = require('../app/controllers/task');
  app.get('/', function(req, res) {
    res.render('home');
  });
  app.get('/tasks', taskControllers.showTasks);

  app.post('/tasks', taskControllers.createnumber);
  
};
