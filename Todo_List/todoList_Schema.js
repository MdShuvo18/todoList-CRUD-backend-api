const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Task title is required.'],
            trim: true,
            maxlength: [100, 'Task title cannot exceed 100 characters.'],
        },
        description: {
            type: String,
            trim: true,
            maxlength: [500, 'Task description cannot exceed 500 characters.'],
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