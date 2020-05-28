const {Schema, model} = require('mongoose');

const toDoSchema = new Schema({
    todo: String,
    done: Boolean
})


module.exports = model('ToDo', toDoSchema);