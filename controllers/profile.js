let router = require('express').Router()
let db = require('../models')

// NOTE: User should be logged in to access this route
router.get('/', (req, res) => {
    console.log('Hello')
    // The user is logged in, so req.user should have data!
    db.Post.find()
  .then(posts => {
      res.send({posts})
  })
  .catch(err => {
    console.log('error while grabbing posts for profile');
  })
    // TODO:Add posts and user info


    // NOTE: This is the user data from the time the token was issued
    // WARNING: If you update the user info those changes will not be reflected here
    // To avoid this, reissue a token when you update user data

})

//TODO Still needs a button //////// create put route for edditing profile
router.put('/:id', (req, res) => {
    db.User.updateOne({
        _id: req.params.id
    },
    req.body
    )
    .then(profileEdit => {
        res.send(profileEdit)
    })
    .catch(err => {
        console.log('error in profile edit route', err)
    })
})

//TODO Still needs a button /////// delete route for profile
router.delete('/:id', (req, res) => {
    db.User.deleteOne({
            _id: req.params.id
    })
    .then(UserProfile => {
        res.send(UserProfile)
    })
    .catch(err => {
        console.log("error in Delete user profile route", err)
    })
})

// make a faves model and refrence user and post
// attatch different user id and make sure people are logged in and query for favorites with where conditon


module.exports = router
