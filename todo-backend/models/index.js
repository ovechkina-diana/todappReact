const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/todo-app", {
  // connecting to the mongodb database name: "todo-app" locally
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("debug", true) // enabling debugging information to be printed to the console for debugging purposes
mongoose.Promise = Promise // setting mongoose's Promise to use Node's Promise
module.exports.Todo = require("./todo") // requiring the todo model that we just created in mongodb