const Post = require('../../models/post')

module.exports = {
     createPost, 
     indexPost,
     showPost, 
     updatePost, 
     destroyPost
}


async function createPost(req,res,next) {
     try {
          const post = await Post.createPost(req.body)
          console.log(post)
          res.locals.data.post = post
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }
}

async function indexPost(req,res,next) {
     try {
          const posts = await Post.find()
          res.locals.data.posts = posts
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }
}

async function showPost(req,res,next) {
     try {
          const post = await Post.findById(req.params.id)
          res.locals.data.post = post  
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }
}

async function updatePost(req,res,next) {
     try {
          const post = await Post.findById(req.params.id)
          res.locals.data.post = post  
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }
}
     async function destroyPost(req, res, next){
          try {
              const post = await Post.findByIdAndDelete(req.params.id)
              res.locals.data.post = post
              next()
          } catch (error) {
              res.status(400).json({ msg: error.message })       
          }
      }
      
