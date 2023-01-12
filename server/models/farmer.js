export async function save() {

}

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  hashedPwd: {
    type: String,
    required: true
  },
  salt:{
    type: String,
    required: true
  },
  farmlands: {
    type: String,
    required: false
  }
}, { timestamps: true })

module.exports = mongoose.model('Farmer', workoutSchema)