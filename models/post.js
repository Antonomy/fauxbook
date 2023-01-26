const { Schema, model } = require('mongoose')

const postSchema = new Schema({
    post: { 
        type: String,
        required: true 
  },

    comments: { 
        type: String,
        required: false 
  },
    replies: {
        type: String,
        required: false
  },
   
    photo: {
        type: String,
        required: false 
    },
    video: {
        type: String,
        required: false
    },
    reaction: {
     type: String,
     required: false
}
}, {
    timestamps: true
  })

module.exports = model('Post', postSchema)





