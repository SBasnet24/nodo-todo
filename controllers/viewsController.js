const Todo = require("../model/todoModel");

exports.viewAllTodos = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).render("todo.ejs", {
    title: "Todo list",
    todos,
  });
};
exports.editTodos = async (req, res) => {
  const id = req.params.id;
  const todos = await Todo.find();
  const todo = await Todo.findOne({ _id: id });
  res.status(200).render("todoEdit.ejs", {
    title: "Todo list",
    tasks: todos,
    task: todo,
  });
};
exports.deleteTodos = async (req, res) => {
  const id = req.params.id;
  const todos = await Todo.find();
  const todo = await Todo.findOne({ _id: id });
  res.status(200).render("todoDelete.ejs", {
    title: "Todo list",
    tasks: todos,
    task: todo,
  });
};
