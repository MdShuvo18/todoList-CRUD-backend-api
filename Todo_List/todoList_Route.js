const express = require('express');
const { createTodo } = require('./todoList_Controller');
const route = express.Router()

route.post('/create-todo', createTodo)

module.exports = route