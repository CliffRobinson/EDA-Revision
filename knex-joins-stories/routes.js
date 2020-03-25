const express = require('express')

const router = express.Router()

const db = require("./db");

router.get('/', (req, res) => {
  res.send('WOMBLES!')
})

router.get('/wombles', (req, res) => {
  db.getWombles()
    .then( (wombles) => {
      console.log(wombles)
      res.render('wombles', {wombles})
    })
})

router.get('/wombles/:id', (req, res) => {
  //const id = 88800 + parseInt(req.params.id)
  id = req.params.id
  console.log(id)
  db.getOneWomble(id)
    .then( (womble) => {
      console.log(womble)
      res.render('oneWomble', womble[0])
    })
})

router.get('wombles/assignments', (req, res)=> {
  db.getAssignments()
    .then( (wombles) => {
      console.log(wombles)
      res.render('assignments', {wombles})
    })
})

module.exports = router

