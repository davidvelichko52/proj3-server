let router = require('express').Router()

// TODO get new post form to redirect to profile/user with new posts

router.get('/', (req, res) => {
    db.post.findAll({
        pic: req.body.pic
    })
})

// TODO Post route for the form
router.post('/new', ( req, res) => {
    db.Post.create({
        pic: req.body.pic
    })
    .then(post => {
        res.send(post)
    })
    .catch(err => {
        console.log('err', err)
    })
})

module.exports = router