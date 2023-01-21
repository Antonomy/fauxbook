
const Post = require('../../models/post')

const dataController = {
  // Index,
  index (req, res, next) {
    Post.find({}, (err, foundReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.reviews = foundReviews
        next()
      }
    })
  },

  reviewIndex (req, res, next) {
    Post.find({ movieId: req.params.id}, (err, foundReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.reviews = foundReviews
        next()
      }
    })
    .sort({_id:-1})
    
  },

  reviewExcludeUserIndex (req, res, next) {
    Post.find({ $and: [
      { movieId: req.params.id}, {user: {$ne: req.params.username}}
    ]}, (err, foundReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.reviews = foundReviews
        next()
      }
    })
    .sort({_id:-1})
    
  },

  userReviewShow (req, res, next) {
    Post.findOne({ movieId: req.params.id, user: req.params.username}, (err, foundReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.reviews = foundReviews
        next()
      }
    })
    .sort({_id:-1})
    
  },

  userReviewIndex (req, res, next) {
    Post.find({ user: req.params.username}, (err, foundReviews) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.reviews = foundReviews
        next()
      }
    })
    .sort({_id:-1})
    
  },
  // Destroy
  destroy (req, res, next) {
    Post.findByIdAndDelete(req.params.id, (err, deletedReview) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.post = deletedReview
        next()
      }
    })
  },
  // Update
  update (req, res, next) {

    Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedReview) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.post = updatedReview
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
   
    Post.create(req.body, (err, createdReview) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.post = createdReview
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Post.findById(req.params.id, (err, foundReview) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a post with that ID'
        })
      } else {
        res.locals.data.post = foundReview
        next()
      }
    })
  }
}

const apiController = {
    index (req, res, next) {
      res.json(res.locals.data.reviews)
    },
    show (req, res, next) {
      res.json(res.locals.data.post)
    }
  }

module.exports = { dataController, apiController }