let mongoose = require('mongoose')
let Schema = mongoose.Schema

let usersSchema = new Schema({
  "name":String,
  "pwd":String
})

module.exports = mongoose.model('User',  usersSchema)
