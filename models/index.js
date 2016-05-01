var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.143.189/201602todo');
exports.Todo = mongoose.model('todo',new mongoose.Schema({
    name:String
}));