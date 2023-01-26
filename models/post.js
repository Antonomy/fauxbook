const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  post: { 
    type: String,
    required: false 
},
  
  user: { 
      type: Schema.Types.ObjectId, ref: 'user' 
  },

//     comments: { 
//         type: String,
//         required: false 
//   },
//     replies: {
//         type: String,
//         required: false
//   },
//     createdDate: {
//         type: Date,
//         default: Date.now
//     },
//     photo: {
//         type: String,
//         required: false 
//     },
//     video: {
//         type: String,
//         required: false
//     },
//     reaction: {
//      type: String,
//      required: false
// }

{

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



const Post = model('Post', postSchema)

module.exports = Post



