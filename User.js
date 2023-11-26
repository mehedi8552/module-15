const mongoose = require('mongoose')
 
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    dateOfBirth: Number,
    nationality: String,
    email: String,
    address: String,
    phone: Number,
    admissionDate: Number,
    courses: String,
})
 
const UserModel = mongoose.model("studentss", UserSchema)
 
module.exports = UserModel;