// /controllers/api/users.js

const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}

const dataController = {
  async create(req, res, next) {
    try {
      console.log(req.body)
      const user = await User.create(req.body)
      console.log(user)
      // token will be a string
      const token = createJWT(user)
      console.log("? token WTH")
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
  async index(req, res, next) {
    const users = await User.find({})
    res.status(200).json(users)

  },
  async show(req, res, next) {
    try {
      const user = await User.findById(req.params.id).populate('post')
      res.status(200).json(user)
    } catch (e) {
      res.status(400).json({ msg: e.message })

    }
  },

  async login(req, res, next) {
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

}

const apiController = {
  auth(req, res) {
    res.json(res.locals.data.token)
  },
  index(req, res) {
    res.json(res.locals.data.users)
  },
  show(req, res) {
    res.json(res.locals.data.user)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}


/* -- Helper Functions -- */

function createJWT(user) {

  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )

}