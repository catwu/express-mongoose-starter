var Person = require('../models/person.1.js');

function showTasks(req, res){
  Tasks.find({task_id: 1},{ task_description: 1 }, function(err, tasks){
    if(err){
      console.log("There was an error!");
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




//=============================
// List
//=============================
exports.index = function(req, res) {
  res.render('people', {user: "username"});
};

//=============================
// Show
//=============================
exports.show = function(req, res) {
  var id = req.params.id;
  console.log(id);

  Person.findOne({ _id: id }, function(err, person) {
    if (err) throw err;

    res.render('user', {userName: person.username});
  });
};

//=============================
// Create
//=============================
exports.create = function(req, res) {
  new User(req.body).save(function(err, user) {
    if (err) throw err;

    res.send(user);
  });
};

//=============================
// Update
//=============================
exports.update = function(req, res) {
  var id = req.params.id;

  Person.findOneAndUpdate({ _id: id }, req.body, function(err, user) {
    if (err) throw err;

    res.send(user);
  });
};

//=============================
// Delete
//=============================
exports.delete = function(req, res) {
  var id = req.params.id;

  Person.remove({ _id: id }, function (err) {
    if (err) throw err;

    res.send(200);
  });
};
