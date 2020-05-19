const router = require('express').Router()
const db = require('../models')
router.use(require('express').static('static'))

router.post('/results', (req, res) => {
    console.log('YOOOOOOOOO!!!', req.body)
    db.Post.create(req.body)
    .then(newFav => {
        console.log('Success!')
        // res.send(req.body.title)
        res.redirect('/profile/faves')
    })
    .catch(err => {
        console.log('Error:', err)
        res.send('Uh oh!')
    })
})

router.delete('/results/:id', (req, res)=> {
    console.log('Yo', req.params.id)
    db.Post.destroy({
        where: {id: req.params.id}
    })
    .then(() => {
        res.redirect('/profile/faves')
    })
    .catch(err=> {
        console.log('Error in delete', err)
        res.render('error')
    })
})

module.exports = router
//TODO get routes for seeing all your favorites

//TODO post route for sending clicked faves to user faves list

//TODO make it so when clicked again we un favorite probably put route  
