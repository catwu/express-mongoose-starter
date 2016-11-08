var mongoose = require('mongoose'),
  env = process.env.NODE_ENV || 'development',
  config = require('../../config/config')[env],
  Schema = mongoose.Schema;

//=============================
// Schema
//=============================
var userSchema = new Schema({
  user_id: Number,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  user_joined: Date
});

var taskSchema = new Schema({
  task_id: Number,
  task_description: String 
});

var taskProgressSchema = new Schema({
  user_id: Number,
  task_id: Number,
  progress: Boolean
});


//=============================
// Virtual properties
//=============================
userSchema.virtual('user_id').get(function() {
  return 'user_id';
});

//=============================
// Methods
//=============================
userSchema.statics.findByUserId = function(user_id, cb) {
  this.find({ user_id: new RegExp(user_id, 'i') }, cb);
};


var Person = mongoose.model('User', userSchema);

module.exports = Person

 var Task1 = new Tasks({
   task_description: 'Buy coffee for the next person in line',
   task_id: 1
 });