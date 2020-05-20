let router = require('express').Router()
let db = require('../models')

//get all posts and send em home
router.get('/', (req, res) => {
  db.Post.find()
  .then(posts => {
    res.send({posts})
  })
})

//Post route for the form
router.post('/new', (req, res) => {
  db.Post.create({
    pic: req.body.pic,
    content: req.body.content,
    caption: req.body.caption
  })
  .then(post => {
    res.send(post)
  })
  .catch(err => {
    console.log("error in the new post route", err);
  })
})

//TODO Still needs a button make whole div a clickable link imo //// get route for single post view when clicked on use single postID findOne
router.get('/:id', (req, res) => {
    db.Post.findById(
        req.params.id
    )
    .then(post => {
        res.send(post)
    })
    .catch(err => {
        console.log("error in single post by id route", err)
    })
})


//TODO Put button on the inside of single post view page only for proper user or admins /////// create put route for edditing single posts on profile page
router.put('/:id', (req, res) => {
    db.Post.updateOne({
        _id: req.params.id
    },
    req.body
    )
    .then(post => {
        res.send(post)
    })
    .catch(err => {
        console.log('accident in edit route for post', err)
    })
})

//TODO still needs a button on inside or next to edit post button ///// DELETE route for single post
router.delete('/:id', (req, res) => {
    db.Post.deleteOne({
            _id: req.params.id
    })
    .then(post => {
        res.send('')
    })
    .catch(err => {
        console.log("error in Delete single post route", err)
    })
})


module.exports = router
