const mustacheExpress = require('mustache-express');
const express = require('express');
const bodyParser = require('body-parser');
// const todoData = require("./list.json")
const app = express();

const todos = [
  "Vaccum the car",
  "Pick up Sophia",
  "Do Daily Project",
  "Read Javascript book",
  "Feed the dogs",
  "Put the darn bark collar on Willy"
];

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache')
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('todo.mustache', {
    todoList: todos,
  });
})

app.post('/GiveMeList', function(req, res){
  todos.push(req.body.AddList);
  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
