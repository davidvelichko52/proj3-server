const router = require('express').Router()
const db = require('../models')
router.use(require('express').static('static'))

router.post('/', (req, res) => {
    console.log('YOOOOOOOOO!!!', req.body)
    db.Post.create(req.body)
    .then(newFav => {
        console.log('Success!')
        // res.send(req.body.title)
        res.send('/profile/faves', {newFav})
    })
    .catch(err => {
        console.log('Error:', err)
        res.send('Uh oh!')
    })
})

router.delete('/:id', (req, res)=> {
    console.log('Yo', req.params.id)
    db.Post.destroy({
        where: {id: req.params.id}
    })
    .then(() => {
        res.send('/profile/faves')
    })
    .catch(err => {
        console.log('Error in delete', err)
        res.render('error')
    })
})

module.exports = router