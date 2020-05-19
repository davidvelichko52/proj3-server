
let db = require('../models')
let router = require('express').Router()

router.post('/new', (req,res) => {
db.Post.create({
   pic: req.body.pic })
.then(post => {
    res.send(post)
})
.catch(err => {
    console.log('Problem', err)
    })
})

module.exports= router