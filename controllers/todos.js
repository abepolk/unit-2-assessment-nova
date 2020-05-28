const express = require('express');
const ToDo = require('../models/todos.js');

const controller = express.Router();

controller.get('/', (req, res) => {
    ToDo.find({}, (error, toDos) => {
        if (error) {
            console.error(error);
        } else {
            res.render('Index', {toDos});
        }
    })
})

controller.post('/create', (req, res) => {
    ToDo.create({todo: req.body.toDo, done: false}, (error, toDo) => {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/');
        }
    })
})

controller.delete('/:id', (req, res) => {
    ToDo.findByIdAndRemove(req.params.id, (error, toDo) => {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/')
        }
    })
})

module.exports = controller;