const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
           
        },
        description: {
            type: String,
        },
        status: {
            type: String,
            enum: ['pending', 'in-progress', 'completed'],
            default: 'pending',
        },
        dueDate: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("ToDoList", todoSchema)
