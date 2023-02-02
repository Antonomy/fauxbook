// /routes/api/users.js
const express = require('express')
const router = express.Router()
const { checkToken, dataController, apiController } = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/users
router.post('/', dataController.create, apiController.auth)
// POST /api/users/login
router.post('/login', dataController.login, apiController.auth)

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, checkToken)

//GET users /api/users - commented out because I dont think we need this - yeva
// router.get('/', dataController.login, apiController.auth)

// GET all users /api/users
router.get('/', dataController.index, apiController.index)

// Show user by :id YEVA WORKING PLEASE DO NOT DELETE THIS
// router.get('/:id', dataController.show, apiController.show)

module.exports = router 