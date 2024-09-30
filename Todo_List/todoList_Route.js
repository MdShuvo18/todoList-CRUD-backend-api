const express = require('express');
const { createTodo, getAlltodo, updateTodo } = require('./todoList_Controller');
const route = express.Router()

route.post('/', createTodo)
route.get('/todos', getAlltodo)
route.put('/todos/:id',updateTodo)


module.exports = route