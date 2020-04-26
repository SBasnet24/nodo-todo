// api ko routes haru
const express = require("express");
const {
  getAllTodos,
  createTodos,
  updateTodos,
  deleteTodos,
} = require("../controllers/todosController");
const router = express.Router();

router.route("/").get(getAllTodos).post(createTodos);
router.route("/:id").patch(updateTodos).delete(deleteTodos);
module.exports = router;
