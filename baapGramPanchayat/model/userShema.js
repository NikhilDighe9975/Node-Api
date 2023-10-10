const mongoose = require('mongoose')
const userSchema =new  mongoose.Schema({
    name      : String,
    lastName  : String,
    address   : String,
    phoNo     : Number,
   
}) ;
module.exports= mongoose.model('UserG',userSchema)