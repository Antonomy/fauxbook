const express = require('express');
const router = express.Router();
const { checkToken, dataController, apiController } = require('../../controllers/api/comments')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


// POST /api/user/comment
router.post('/user/comment', dataController.create, apiController.auth)
// UPDATE /api/user/comment/:id
router.put('/user/comment/:id', dataController.update, apiController.auth)
// DELETE /api/user/comment
router.delete('/user/comment/:id', dataController.destroy, apiController.auth)
// SHOW /api/user/comment/:id
router.get('/user/comment/:id', dataController.show, apiController.auth)

router.get('/check-token', ensureLoggedIn, checkToken)


module.exports = router;

// LOGIN verification ?
// router.use((req, res, next) => {
//     if (req.session.loggedIn) {
//       next()
//     } else {
//       res.redirect("/user/login")
//     }
//   })