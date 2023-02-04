const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  post: {
    type: String,
    required: true
  },

  user: {
    type: Schema.Types.ObjectId, ref: 'User'
  },

  comment: [{
    type: Schema.Types.ObjectId, ref: 'Comment'
  }],
  replies: {
    type: String,
    required: false
  },
  replies: {
    type: String,
    required: false
  },
  photo: {
    type: String,
    required: false,
    default: null
  },
  video: {
    type: String,
    required: false
  },
  reaction: {
    type: String,
    required: false
  }
}
,
{
  timestamps: true
}
)

const Post = model('Post', postSchema)

module.exports = Post
