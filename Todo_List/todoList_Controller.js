const todoList_Schema = require("./todoList_Schema");

// post or create a single todo
exports.createTodo = async (req, res) => {
    try {
        const todoItem = req.body

        // for multiple todos
        if (Array.isArray(todoItem)) {
            await todoList_Schema.insertMany(todoItem)
            return res.status(201).json({ message: "todos were created successfully done" })
        } else {
            const { title, description, status, dueDate } = req.body
            if (!title) {
                return res.status(400).json({ message: "please write a title" })
            }
            const todo = new todoList_Schema(req.body)
            await todo.save()
            return res.status(201).json({ message: "todo created successfully done" })
        }

    }
    catch (error) {
        console.log(error.message)
    }
}

// get all todo
exports.getAlltodo = async (req, res) => {
    try {
        const todos = await todoList_Schema.find()
        if (todos.length === 0) {
            return res.status(401).json({ message: "No todos found" })
        }
        return res.status(200).json({ "All todos": todos })
    }
    catch (error) {
        console.log(error.message)
    }
}


