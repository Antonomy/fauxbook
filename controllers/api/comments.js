const Comment = require('../../models/comments')

const dataController = {
  // Index,
  index (req, res, next) {
    Comment.find({}, (err, foundComments) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {

        res.locals.data.comments = foundComments

        next()
      }
    })
  },

  commentIndex (req, res, next) {

    Comment.find({ commentId: req.params.id}, (err, foundComments) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comments = foundComments

        next()
      }
    })
    .sort({_id:-1})
    
  },

  commentExcludeUserIndex (req, res, next) {

    Comment.find({ $and: [ //change
      { commentId: req.params.id}, {user: {$ne: req.params.username}} //change

    ]}, (err, foundComments) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {

        res.locals.data.comments = foundComments

        next()
      }
    })
    .sort({_id:-1})
    
  },

  userCommentShow (req, res, next) {

    Comment.findOne({ commentId: req.params.id, user: req.params.username}, (err, foundComments) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.posts = foundComments
        next()
      }
    })
    .sort({_id:-1})
    
  },

  userCommentIndex (req, res, next) {
    Comment.find({ user: req.params.username}, (err, foundComments) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comments = foundComments

        next()
      }
    })
    .sort({_id:-1})
    
  },
  // Destroy
  destroy (req, res, next) {
    Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.post = deletedComment
        next()
      }
    })
  },
  // Update
  update (req, res, next) {

    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedComment) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.post = updatedComment
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
   
    Comment.create(req.body, (err, createdComment) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comment = createdComment
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Comment.findById(req.params.id, (err, foundComment) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a comment with that ID'
        })
      } else {
        res.locals.data.comment = foundComment
        next()
      }
    })
  }
}

const apiController = {
    index (req, res, next) {
      res.json(res.locals.data.comments)
    },
    show (req, res, next) {
      res.json(res.locals.data.comment)
    }
  }

module.exports = { dataController, apiController }
