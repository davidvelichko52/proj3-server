let mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    content: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

let postSchema = new mongoose.Schema({
    pic: String,
    content: String,
    caption: String,
    comment: commentSchema,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})


module.exports = mongoose.model('Post', postSchema)

