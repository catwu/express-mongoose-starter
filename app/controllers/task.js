var TaskModels = require('../models/task.js');
var Tasks = TaskModels.Tasks;

function showTasks(req, res){
  Tasks.find({task_id: 1},{ task_description: 1 }, function(err, tasks){
    if(err){
      console.log("There was an errror!");
    }
    console.log('There are ' + tasks.length + " tasks in our database");
    console.log(tasks);
   // res.send('I succesfully ran showTasks and found '+ tasks.length + 'tasks in the databasedb.');
    res.send(tasks);
  });
}

module.exports = {
  showTasks: showTasks
};
