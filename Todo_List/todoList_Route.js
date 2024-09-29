const express = require('express');
const { createTodo, getAlltodo } = require('./todoList_Controller');
const route = express.Router()

route.post('/todoList', createTodo)
route.get('/alltodo', getAlltodo)


module.exports = route