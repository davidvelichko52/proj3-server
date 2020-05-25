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
router.get('/:id', (req, res) => {
    db.Fave.find({
        userId: req.params.id
    }
    )
    // .populate('postId')
    .then(allFav => {
        res.send({allFav})
    })
    .catch(err => {
        console.log('Error:', err)
        res.send('Uh oh!')
    })
})
router.get('/', (req, res) => {
    db.Fave.find()
    // .populate('postId')
    .then(allFav => {
        res.send({allFav})
    })
    .catch(err => {
        console.log('Error:', err)
        res.send('Uh oh!')
    })
})
router.get('/user/:userId', async (req, res) => { 
    // this is the ID of the user whose favorite posts we want to show
    let myUserId = req.params.userId;
    // step 1 summary: this gets the user's favorites (NOT POSTS) --> SECTION A
    // These favorites contain POST IDs, which we need to get the actual POST OBJECTS
    let myPromise = () => { 
        return new Promise((resolve, reject) => {
            db.Fave.find({
                userId: myUserId,
            })
            .then((faves) => {
                console.log('FAVES', faves);
                resolve(faves);
            })
        })
    }
    // step 2 summary: now that we have the FAVE OBJECTS, we can get the related POST IDs.
    // using these POST IDs, we can get each POST OBJECT (SECTION B)
    await(myPromise()).then((faves) => {
        // for each of our FAVE OBJECTS, we get the POST ID and get the POST OBJECT from the database
        let promises = faves.map((singleFave) => {
            postId = singleFave.postId;
            // (these are the INDIVIDUAL TASKS in the middle of the diagram (SECTION B)
            // these tasks aren't actually performed until later below..)
            // this will get the POST OBJECT for each POST ID
            return db.Post.findOne(postId)
            .then(foundPost => {
                return foundPost.toJSON();
            })
            .then(jsonPost => {
                jsonPost['faveId'] = singleFave._id;
                return jsonPost;
            })
        })
        // step 3 summary: this final step PERFORMS ALL THE STEPS IN SECTION B, and combines the results.
        // the result is SECTION C: the posts that are sent back to the client
        Promise.all(promises).then((posts) => {
            // console.log('postsss', posts);
            res.json(posts); // send POST OBJECTS back to client
        })
    })
})
router.delete('/:id', (req, res) => {
    console.log('DELETING');
    console.log('Yo', req.params.id)
    db.Fave.deleteOne({
            _id: req.params.id
    })
    .then(() => {
        res.send('/faves')
    })
    .catch(err => {
        console.log("error in Delete single post route", err)
    })
})
module.exports = router

