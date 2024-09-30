const express = require('express');
const { createTodo, getAlltodo, updateTodo, deleteTodo } = require('./todoList_Controller');
const route = express.Router()

route.post('/', createTodo)
route.get('/todos', getAlltodo)
route.put('/todos/:id', updateTodo)
route.delete('/todos/:id', deleteTodo)


module.exports = route