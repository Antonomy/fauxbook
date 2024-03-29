const Post = require('../../models/post')
const User = require('../../models/user')
const { show } = require('./photos')

const dataController = {
  // Index,
  // populate
  async index (req, res, next) {
    const posts = await Post.find({}).populate('user')
    res.status(200).json(posts)
    // Post.find({}, (err, foundPosts) => {
    //   if (err) {
    //     res.status(400).send({
    //       msg: err.message
    //     })
    //   } else {
    //     res.locals.data.posts = foundPosts
    //     next()
    //   }
    // })
  },
  // Destroy
  destroy (req, res, next) {
    Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.post = deletedPost
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPost) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.post = updatedPost
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    console.log(req)
    Post.create(req.body, async (err, createdPost) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        const user = await User.findById(req.body.user)
        user.post.addToSet(createdPost)
        user.save()
        res.locals.data.post = createdPost
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Post.findById(req.params.id, (err, foundPost) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a post with that ID'
        })
      } else {
        res.locals.data.post = foundPost
        next()
      }
    })
  }
}

const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.posts)
  },
  show (req, res, next) {
    res.json(res.locals.data.post)
  }
}

module.exports = { dataController, apiController }
