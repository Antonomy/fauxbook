const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const userSchema = new Schema({
     firstName: {
          type: String,
          required: true
     },
     lastName: {
          type: String,
          required: true
     },
     email: {
          type: String,
          unique: true,
          trim: true,
          lowercase: true,
          required: true
     },
     password: {
          type: String,
          trim: true,
          minLength: 3,
          required: true
     },
     confirm: {
          type: String,
          trim: true,
          minLength: 3,
          required: true
     },
     birthday: {
          type: Date,
          required: true
     },
     post: [{
          type: Schema.Types.ObjectId, ref: 'Post'
      }],


     phone: {
          type: String,
          required: false
     },

     profilePhoto: {
          type: String,
          required: false
     },
     currentCity: {
          type: String,
          required: false
     },
     accountType: {
          type: String,
          required: false
     },
     coverPhoto: {
          type: String,
          required: false
     },
     createdDate: {
          type: Date,
          required: false
     },
     employer: {
          type: String, required: false
     },
     highSchool: {
          type: String, required: false
     },
     college: {
          type: String,
          required: false
     },
     hometown: {
          type: String,
          required: false
     },
     relationshipStatus: {
          type: String,
          required: false
     },
     interests: {
          type: String,
          required: false
     },
     friends: [{
          type: Schema.Types.ObjectId, ref: 'User'
          
     }],
     sentFriendsRequest: [{
          type: Schema.Types.ObjectId, ref: 'User'
          
     }],
     receivedFriendRequests: [{
          type: Schema.Types.ObjectId, ref: 'User'
          
     }],
     blockedFriends: [{
          type: Schema.Types.ObjectId, ref: 'User'
          
     }]

     // interests []
     // friends[]
     // sentFriendRequests[]
     // receivedFriendRequests[]
     // blockedFriends[]

}, {
     timestamps: true,
     toJSON: {
          transform(doc, ret) {
               delete ret.password
               return ret
          }
     }
})

userSchema.pre('save', async function (next) {
     // 'this' is the user doc
     if (!this.isModified('password')) return next()
     // update the password with the computed hash
     this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
     return next()
})

module.exports = model('User', userSchema)