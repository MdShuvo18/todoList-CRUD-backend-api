const todoList_Schema = require("./todoList_Schema");


exports.createTodo = async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;
        if (!title) {
            return res.status(400).json({ message: "please write the title" })
        }

        const newTodo = new todoList_Schema({ title, description, status, dueDate });
        await newTodo.save()
        return res.status(201).json({ message: "todoList created successfully done" })


    }
    catch (error) {
        console.log(error.message)
    }
}