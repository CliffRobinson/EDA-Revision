const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      //console.log("Users are:", users)
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get("/users/:id", (req, res) => {
  db.getUser(req.params.id)
    .then( user => {
      console.log("User is:", user)
      res.render("user", user)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get("/users/edit/:id", (req, res) => {
  db.getUser(req.params.id)
  .then( user => {
    console.log("User is:", user)
    res.render("edituser", user)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.post("/users/edit/:id", (req, res) => {
  console.log(req.params)
  console.log(req.body)
  db.editUser(req.params.id, req.body.name, req.body.email)
  .then( user => {
    console.log("Edited user is:", user)
    db.editProfile(req.params.id, req.body.url, req.body.img_url)
      .then( (output) => {
        console.log("edited profile is ", output)
        res.redirect("/")
      })
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})


// router.get("/addcliff", (req, res) => {
//   db.addUser("cliff","cliff@mail.com")
//     .then( (output) => {
//       console.log(output)
//       res.redirect("./")
//     })
// })

router.get("/adduser", (req, res) => {
  res.render("adduser")
})

router.post("/adduser", (req, res) => {
  console.log(req.body)
  db.addUser(
    req.body.name,
    req.body.email
  ).then ( (input) => {
    console.log("Output of adduser is: ", input)
    db.addProfile(
      input[0],
      req.body.url,
      req.body.img_url      
    ).then( (input) => {
      console.log("Output of addprofile is: ", input)
      res.redirect("/")
    })
  })
})

router.get("/posts", (req, res) => {
  db.getPosts()
    .then( (posts) => {
      console.log(posts)
      res.render("posts", {posts})
    })
})

router.get("/posts/:id", (req, res) => {
  db.getPost(req.params.id)
    .then( (post) => {
      console.log(post)
      res.render("post", post)
    })
})

module.exports = router
