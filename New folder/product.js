const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    dept_id:Number,
    name:String,
    dept_head_id:Number,
    desc:Number
}
)
module.exports=mongoose.model('record',productSchema);
