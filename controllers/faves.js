
const router = require('express').Router()
const db = require('../models')
router.use(require('express').static('static'))

// fetch call
// router.post('/', (req, res) => {
//     console.log('YOOOOOOOOO!!!', req.body)
//     db.Fave.create(req.body)
//     .then(newFav => {
//         console.log('Success!')
//         // res.send(req.body.title)
//         res.send('/faves', {newFav})
//     })
//     .catch(err => {
//         console.log('Error:', err)
//         res.send('Uh oh!')
//     })
// })

// https://jimmy.com/faves/1234
router.get('/:postId', (req, res) => { 
    console.log(req)
    let postId = req.params.postId;
    let userId = req.user._id;

    db.Fave.create({
        userId: userId,
        postId: postId
    })
    .then(fave => {
        res.send(fave);
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

