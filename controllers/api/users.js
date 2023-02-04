// /controllers/api/users.js

const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}

const dataController = {
  async create (req, res, next) {
    try {
      console.log(req.body)
      const user = await User.create(req.body)
      console.log(user)
      // token will be a string
      const token = createJWT(user)
      console.log('? token WTH')
      // send back the token as a string
      // which we need to account for
      // in the client
      res.locals.data.user = user
      res.locals.data.token = token
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  async index (req, res, next) {
    const users = await User.find({})
    res.status(200).json(users)
  },

  async login (req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) throw new Error()
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) throw new Error()
      res.locals.data.user = user
      res.locals.data.token = createJWT(user)
      next()
    } catch {
      res.status(400).json('Bad Credentials')
    }
  },

  async show (req, res, next) {
    try {
      const user = await User.findById(req.params.id).populate('post')
      res.status(200).json(user)
    } catch (e) {
      res.status(400).json({ msg: e.message })
    }
  },

  async getFriends (req, res, next) {
  try {
    const user = await User.findById(req.params.userId)
    const friends = await Promise.all(
      user.receivedFriendRequests.map(friendId =>{
        return User.findById(friendId)
        
      })
      
    )
    let friendsList = []
    friends.map(friend => {
      const {_id, firstName, lastName} = friend
      friendsList.push({_id, firstName, lastName})
    })
    res.status(200).json(friendsList)
  } catch(error){
    res.status(500).json(error)
  }
},

  async sentFriendsRequest (req, res, next) {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id)
        const currentRequest = await User.findById(req.body.userId)
        if (!user.sentFriendsRequest.includes(req.body.userId)) {
          await user.updateOne({ $push: { sentFriendsRequest: req.body.userId } })
          await currentRequest.updateOne({ $push: { receivedFriendRequests: req.params.id } })
          res.status(200).json('Friend has been added')
        } else {
          req.status(403).json('You are friends already')
        }
      } catch (err) {
        res.status(500).json("Error")
      }
    } else {
      req.status(403).json('You cannot add yourself')
    }
  },

  async receivedFriendRequests (req, res, next) {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id)
        const currentRequest = await User.findById(req.body.userId)
        if (user.sentFriendsRequest.includes(req.body.userId)) {
          await user.updateOne({ $pull: { sentFriendsRequest: req.body.userId } })
          await currentRequest.updateOne({ $pull: { receivedFriendRequests: req.params.id } })
          res.status(200).json('Friend request has been rejected')
        } else {
          req.status(403).json('You are not friends anymore')
        }
      } catch (err) {
        res.status(500).json(err)
      }
    } else {
      req.status(403).json('You cannot reject yourself')
    }
  }

  // async index(req, res, next) {
  //   const users = await User.find({}).populate('user')
  //   res.status(200).json(posts)
  // }
}

const apiController = {
  auth (req, res) {
    res.json(res.locals.data.token)
  },
  index (req, res) {
    res.json(res.locals.data.user)
  },
  show (req, res) {
    res.json(res.locals.data.user)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}

/* -- Helper Functions -- */

function createJWT (user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}
