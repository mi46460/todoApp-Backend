var mysql = require('mysql2');

var connection =mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'todo_database',
})

connection.getConnection((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})

module.exports = connection