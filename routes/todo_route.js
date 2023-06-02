var express = require('express')
var connection = require('../database/database.js')
var router = express.Router()

//get all data
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM todos', function (err, rows) {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    })
  })

//get data by id
router.get('/get', function (req, res, next) {
    const id = req.body.id

    connection.query(`SELECT * FROM todos WHERE id = ${id}`, function (err, result) {
        if(err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(result)
        }
    })
})

//create data
router.post('/create', function (req, res, next) {
    const title = JSON.stringify(req.body.data.title)
    const query = `INSERT INTO todos (title) VALUES (${title})`

    connection.query(query, function (err, result) {
        if(err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(result)
        }
    })
    console.log(req.body)
})

//update data
router.put('/update', function(req, res, next) {
    const id = req.body.data.id
    const title = JSON.stringify(req.body.data.title)
    const query = `
        UPDATE todos SET title = ${title} WHERE id = ${id}
    `

    connection.query(query, function (err, result) {
        if(err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(result)
        }
    })
})

//delete data
router.delete('/delete', function(req, res, next) {
    const id = req.body.id
    const query = `DELETE FROM todos WHERE id = ${id}`

    connection.query(query, function (err, result) {
        if(err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(result)
        }
    })
})

module.exports = router