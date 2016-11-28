var TaskModels = require('../models/task.js');
var Tasks = TaskModels.Tasks;
var Progress = TaskModels.Progress;

function showTasks(req, res){
  // Kyle helping here...get all the tasks, find the `ith` one.
  Tasks.find({}, function(err, tasks){
    if(err){
      console.log("There was an error!");
    }
    console.log('There are ' + tasks.length + " tasks in our database");
    var today = new Date();
    var selectedTaskIndex = (today.getDate()) % tasks.length;
    
    // HERE, you should determine if I did the task already or not
    var taskIsDone = false;
    
   // res.send('I succesfully ran showTasks and found '+ tasks.length + 'tasks in the databasedb.');
    res.render('tasks', {description: tasks[selectedTaskIndex].task_description, task_id: tasks[selectedTaskIndex].task_id, taskIsDone: taskIsDone});
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

