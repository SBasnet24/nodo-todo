const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  content: {
    type: String,
    required: [true, "User must add a content"],
    maxLength: [80, "A todolist cannot be greater than 80"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("todoList", todoSchema);

module.exports = Todo;
