const Photo = require('../../models/photo')

module.exports = {
    create,
    indexComplete,
    indexNotComplete,
    show,
    update,
    destroy,
    jsonPhotos,
    jsonPhoto
}


// jsonPhotos, jsonPhoto

function jsonPhoto (req, res){
    res.json(res.locals.data.photo)
}

function jsonPhotos (req, res){
    res.json(res.locals.data.photos)
}


// create
async function create(req, res, next){
    try {
        const photo = await Photo.create(req.body)
        console.log(photo)
        res.locals.data.photo = photo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })        
    }
}


// read - index, show
async function indexComplete(req, res, next){
    try {
        const photos = await Photo.find({ completed: true })
        res.locals.data.photos = photos
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}

async function indexNotComplete(req, res, next){
    try {
        const photos = await Photo.find({ completed: true })
        res.locals.data.photos = photos
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}


async function show(req, res, next){
    try {
        const photo = await Photo.findById(req.params.id)
        res.locals.data.photo = photo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}



// update

async function update(req, res, next){
    try {
        const photo = await Photo.findByIdAndUpdate(req.params.id, req.body, { new : true })
        res.locals.data.photo = photo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}


// destroy

async function destroy(req, res, next){
    try {
        const photo = await Photo.findByIdAndDelete(req.params.id)
        res.locals.data.photo = photo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}