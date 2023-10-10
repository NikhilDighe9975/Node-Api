const mongoose = require('mongoose');

const exSchema = new mongoose.Schema({
    group_name:String,
    group_id: Number,
    cover_img:String,
});

module.exports = mongoose.model('data', exSchema);




