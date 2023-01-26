const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const userSchema = new Schema({
     firstName: {
          type: String,
          require: true
     },
     lastName: {
          type: String,
          require: true
     },
     userName: {
          type: String,
          require: true
     },
     password: {
          type: String,
          trim: true,
          minLength: 3,
          require: true
     },
     phone: {
          type: String,
          require: false
     },
     email: {
          type: String,
          unique: true,
          trim: true,
          lowercase: true,
          require: true
     },
     profilePhoto: {
          type: String,
          require: false
     },
     currentCity: {
          type: String,
          require: false
     },
     accountType: {
          type: String,
          require: false
     },
     coverPhoto: {
          type: String,
          require: false
     },
     birthday: {

          type: Date,
          require: false
     },
     createdDate: {
          type: Date,
          require: false
     },
     employer: {
          type: String,require: false
     },
     highSchool: {
          type: String,require: false
     },
     college: {
          type: String,
          require: false
     },
     hometown: {
          type: String,
          require: false
     },
     relationshipStatus: {
          type: String,
          require: false
     },
     interests: {
          type: String,
          require: false
     },
     friends: { 
          type: Schema.Types.ObjectId, ref: 'UserId' 
     },
     sentFriendsRequest: {
          type: String,
          require: false
     },
     receivedFriendRequests: {
          type: String,
          require: false
     },
     blockedFriends: {
          type: String,
          require: false
     }


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