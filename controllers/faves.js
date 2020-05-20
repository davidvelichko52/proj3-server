
const router = require('express').Router()
const db = require('../models')
router.use(require('express').static('static'))

router.post('/', (req, res) => {
    console.log('YOOOOOOOOO!!!', req.body)
    db.Post.create(req.body)
    .then(newFav => {
        console.log('Success!')
        // res.send(req.body.title)
        res.send('/faves', {newFav})
    })
    .catch(err => {
        console.log('Error:', err)
        res.send('Uh oh!')
    })
})

router.delete('/:id', (req, res) => {
    console.log('Yo', req.params.id)
    db.Post.deleteOne({
            _id: req.params.id
    })
    .then(post => {
        res.send('/faves')
    })
    .catch(err => {
        console.log("error in Delete single post route", err)
    })
})

module.exports = router

