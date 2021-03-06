const express = require("express");
const dotenv = require("dotenv");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const todoRouter = require("./routes/todoRoutes");
const viewRouter = require("./routes/viewRoutes");

dotenv.config({ path: "./config.env" });
const app = express();
const DB = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0-yqpc9.mongodb.net/todoList?retryWrites=true&w=majority`;
mongoose
  .connect(`${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("App successfully connected to the database"))
  .catch((err) => {
    if (err) console.log("Error Occurred try again", err);
  });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// rendering express files from  public folder
app.use(express.static(`${__dirname}/public`));

// for website
app.use("/", viewRouter);
// for api
app.use("/api/todos", todoRouter);

// setting up ejs
app.set("view engine", ejs);
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
