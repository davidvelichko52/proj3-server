
let router = require('express').Router()
let db = require('../models')

//TODO get new post form redirect to profile/user with new posts
router.get('/', (req, res) => {
  db.Post.findAll({
    pic: req.body.pic
  })
})

//TODO Post route for the form
router.post('/new', (req, res) => {
  db.Post.create({
    pic: req.body.pic
  })
  .then(post => {
    res.send(post)
    })
    .catch(err => {
    console.log("error in the new post route", err);
  })
})

//TODO get route for displaying all posts on home page

//TODO get route for single post view when clicked on use single postID findOne


//TODO create put route for edditing posts on profile page


module.exports = router