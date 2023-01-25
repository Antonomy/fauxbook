const { Schema, model } = require('mongoose')

const postSchema = new Schema({
    comments: { 
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
    photo: {
        type: String 
    },
    video: {
        type: String
    },
    reaction: {
     type: String
}

}, {
    timestamps: true
  })

module.exports = model('Post', postSchema)





