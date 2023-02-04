const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/comments')

// add routes
// Index /api/comments
router.get('/:postId', dataController.index, apiController.index)
// Index /api/comments/comment/:id
// router.get('/postId/:id', dataController.commentIndex, apiController.index)

// Index /api/comments/user/:username
// router.get('/user/:username', dataController.userCommentIndex, apiController.index)

// Index /api/comments/comment/${id}/excludeUser/${username}
// router.get('/comment/:id/excludeUser/:username', dataController.commentExcludeUserIndex, apiController.index)

// Index /api/comments/comment/:id/user/:username
// router.get('/comment/:id/user/:username', dataController.userCommentShow, apiController.index)

// Delete /api/comments/:id
router.delete('/:postId/:id', dataController.destroy, apiController.show)
// Update /api/comments/:id
router.put('/:postId/:id', dataController.update, apiController.show)
// Create /api/comments
router.post('/:postId', dataController.create, apiController.show)
// Show /api/comments/:id
router.get('/:commentId', dataController.show, apiController.show)

module.exports = router
