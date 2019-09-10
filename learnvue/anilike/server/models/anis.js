let mongoose = require('mongoose')
let Schema = mongoose.Schema

let anisSchema = new Schema({
  "name":String,
  "star":Number,
  "year":Number,
  "detail":String,
  "videourl":String,
  "imgurl":String
})

module.exports = mongoose.model('Ani',  anisSchema)
