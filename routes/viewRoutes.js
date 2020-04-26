// clientside ma dekhiyeko sabbai route
const express = require("express");
const {
  viewAllTodos,
  editTodos,
  deleteTodos,
} = require("../controllers/viewsController");
const router = express.Router();

router.route("/").get(viewAllTodos);
router.route("/edit/:id").get(editTodos);
router.route("/delete/:id").get(deleteTodos);
module.exports = router;
