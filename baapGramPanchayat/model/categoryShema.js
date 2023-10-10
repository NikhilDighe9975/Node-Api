const mongoose = require('mongoose')
const userSchema =new  mongoose.Schema({
    Name      : String,
    Discribtion:String
}) ;
module.exports= mongoose.model('Category',userSchema)