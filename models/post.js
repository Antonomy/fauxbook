const { Schema, model } = require('mongoose')

const postSchema = new Schema({
    post: { 
        type: String,
        required: true 
  },

    comment: { 
        type: String,
        required: false 
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
},
    replies: {
        type: String,
        required: false
  },
    createdDate: {
        type: Date,
        default: Date.now
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





