const todoList_Schema = require("./todoList_Schema");

// post or create a single todo
exports.createTodo = async (req, res) => {
    try {
        const todoItem = req.body

        // for multiple todos
        if (Array.isArray(todoItem)) {
            const todos = await todoList_Schema.insertMany(todoItem)
            return res.status(201).json({ message: "todos created successfully done" })
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


