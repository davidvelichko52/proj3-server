let mongoose = require('mongoose')


let commentScema = new mongoose.Schema ({
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
  comment: commentScema,
  userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Post', postSchema)
