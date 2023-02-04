const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
  // References Post model
  post: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],

  comment: {
    type: String,
    required: true
  },
  replies: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  reactions: {
    type: String
  }
  // photo: {
  //     type: String
  // }

})

module.exports = model('Comment', commentSchema)
