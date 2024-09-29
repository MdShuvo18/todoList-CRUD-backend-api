const express = require('express')
const port = process.env.PORT || 3000
require('dotenv').config()
const connectDB = require('./ConfigDB/mongodbURL')
const todoList_Route=require('./Todo_List/todoList_Route')


const app = express()
app.use(express.json())

connectDB()


app.use('/', todoList_Route)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})