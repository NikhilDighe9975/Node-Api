const mongoose = require('mongoose');
const gramsevakSchema = new mongoose.Schema({
    name:String,
   ph_no: Number,
    email:String,
});

module.exports = mongoose.model('gramsevakSchema', gramsevakSchema);

