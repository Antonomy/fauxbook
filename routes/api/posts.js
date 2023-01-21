const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/posts')

// add routes
// Index /api/posts
router.get('/', dataController.index, apiController.index)
// Index /api/posts/post/:id
router.get('/post/:id', dataController.postIndex, apiController.index)

// Index /api/posts/user/:username
router.get('/user/:username', dataController.userPostIndex, apiController.index)

// Index /api/posts/post/${id}/excludeUser/${username}
router.get('/post/:id/excludeUser/:username', dataController.postExcludeUserIndex, apiController.index)

// Index /api/posts/post/:id/user/:username
router.get('/post/:id/user/:username', dataController.userPostShow, apiController.index)

// Delete /api/posts/:id
router.delete('/:id', dataController.destroy, apiController.show)
// Update /api/posts/:id
router.put('/:id', dataController.update, apiController.show)
// Create /api/posts
router.post('/', dataController.create, apiController.show)
// Show /api/posts/:id
router.get('/:id', dataController.show, apiController.show)


module.exports = router