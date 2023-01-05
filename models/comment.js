const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    commenter: { 
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
    },
    photo: {
        type: String
    }

})

module.exports = model('Comment', commentSchema)