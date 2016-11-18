var TaskModels = require('../models/task.js');
var Tasks = TaskModels.Tasks;
var Progress = TaskModels.Progress;

function showTasks(req, res){
  Tasks.find({task_id: 1}, function(err, tasks){
    if(err){
      console.log("There was an error!");
    }
    console.log('There are ' + tasks.length + " tasks in our database");
    console.log(tasks);
   // res.send('I succesfully ran showTasks and found '+ tasks.length + 'tasks in the databasedb.');
    res.render('tasks', {description: tasks[0].task_description, task_id: tasks[0].task_id});
  });
}

function createnumber(req, res){
  var user_id = 3;
  var task_id = req.body.task_id;
  var newprogress = new Progress({
      user_id: user_id,
      task_id: task_id,
      progress: true
  });
  
  console.log("saving new task");
 newprogress.save(function(err) {
   if (err) throw err;
  
   res.redirect("/tasks");
 });
}



module.exports = {
  showTasks: showTasks,
  createnumber: createnumber
};

