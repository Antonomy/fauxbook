const { model, Schema } = require('mongoose')

const photoSchema = new Schema({
    title: {required: true, type: String},
    caption: {required: false, type: String},
    completed: { required: true, type: String}
}, {
    timestamps: true
})

const Photo = model('Photo', photoSchema)

module.exports = Photo;