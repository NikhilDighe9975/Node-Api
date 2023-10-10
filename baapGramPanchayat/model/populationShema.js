const mongoose = require('mongoose')
const userSchema =new  mongoose.Schema({
    GroupId      : Number,
    Year         : Number,
    MaleCount    : Number,
    FemaleCount  : Number,
    OtherCount   :Number,
    TotalCount   :Number
}) ;
module.exports= mongoose.model('Group',userSchema)