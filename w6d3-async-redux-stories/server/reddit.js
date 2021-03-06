const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/subreddit/:subreddit', (req, res) => {
  request
    .get(`http://www.reddit.com/r/${req.params.subreddit}.json`)
    /////////////////// OLD WAY (APPARENTLY) /////////////////////
    // .end((err, result) => {
    //   if (err) {
    //     res.status(500).send(err.message)
    //   } else {
    //     res.json(result.body.data.children)
    //   }
    // })
    /////////////////// NEW WAY (APPARENTLY) ////////////////////
    .then(result => {
      res.json(result.body.data.children)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
