const mongoose = require('mongoose')
const userSchema =new  mongoose.Schema({
    GroupName      : String,
    ShortName      : String,
    color          : String,
    backgroundImg  : String,
    backgroundColor:String,
    coverImg       :String
}) ;
module.exports= mongoose.model('Group',userSchema)