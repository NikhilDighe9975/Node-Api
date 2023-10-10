const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    group_name:String,
    ph_no: Number,
    email:String,
});

module.exports = mongoose.model('userdata', userSchema);