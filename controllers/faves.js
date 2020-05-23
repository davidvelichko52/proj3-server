
const router = require('express').Router()
const db = require('../models')
router.use(require('express').static('static'))

// fetch call
router.post('/', (req, res) => {
    console.log('YOOOOOOOOO!!!', req.body)
    db.Fave.create(req.body)
    .then(newFav => {
        console.log('Success!', newFav)
        // res.send(req.body.title)
        res.send({newFav})
    })
    .catch(err => {
        console.log('Error:', err)
        res.send('Uh oh!')
    })
})

router.get('/', (req, res) => {
    db.Fave.find()
    .populate('postId')
    .then(allFav => {
        res.send({allFav})
    })
    .catch(err => {
        console.log('Error:', err)
        res.send('Uh oh!')
    })
})

router.get('/:userId', (req, res) => { 
    let myUserId = req.user._id;

    db.Fave.find({
        userId: myUserId,
    })
    .then(faves => {
        console.log('FAVES', faves);
        res.send(faves);
    })
    .catch(err => {
        console.log('Error:', err)
        res.send('Uh oh!')
    })
})

router.delete('/:id', (req, res) => {
    console.log('Yo', req.params.id)
    db.Fave.deleteOne({
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

