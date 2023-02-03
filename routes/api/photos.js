const express = require('express')
const router = express.Router()
const photoCtrl = require('../../controllers/api/photos')

// Index /api/photos
router.get('/', photoCtrl.indexNotComplete, photoCtrl.jsonPhotos)
// Index /api/photos/completed
router.get('/completed', photoCtrl.indexComplete, photoCtrl.jsonPhotos)
// Delete /api/photos/:id
router.delete('/:id', photoCtrl.destroy, photoCtrl.jsonPhoto)
// Update /api/photos/:id
router.put('/:id', photoCtrl.update, photoCtrl.jsonPhoto)
// Create /api/photos
router.post('/', photoCtrl.create, photoCtrl.jsonPhoto)
// Show /api/photos/:id
router.get('/:id', photoCtrl.show, photoCtrl.jsonPhoto)

module.exports = router
