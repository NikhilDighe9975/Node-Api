const mongoose = require('mongoose');

const category = new mongoose.Schema({
    name: String,
    discription: String,
});

module.exports = mongoose.model('category', category);
