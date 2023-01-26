const { Schema, model } = require('mongoose')

const postSchema = new Schema({
    post: { 
        type: String,
        require: true 
  },

    comments: { 
        type: String,
        require: false 
  },
    replies: {
        type: String,
        require: false
  },
    createdDate: {
        type: Date,
        default: Date.now
    },
    photo: {
        type: String,
        require: false 
    },
    video: {
        type: String,
        require: false
    },
    reaction: {
     type: String,
     require: false
}

}, {
    timestamps: true
  })

module.exports = model('Post', postSchema)





