var mongoose =require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://<hrt031293>:<iloveIndia3>@ds235807.mlab.com:35807/todo' ||'mongodb://localhost:27017/TodoApp');

module.exports={mongoose};