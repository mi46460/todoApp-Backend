const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const todoRoutes = require('./routes/todo_route.js')
const cors = require('cors');
const path = __dirname +'/web/'

app.use(express.static(path));

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.options('*', cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//router
app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});
app.use('/todos', todoRoutes)
  
app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
});



