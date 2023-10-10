const mongoose = require('mongoose');
const team = new mongoose.Schema({
    captain: String,
    shirtNo: Number,
});
const app = mongoose.model('create', team);

mongoose.connect('mongodb://127.0.0.1:27017/india').then(() => console.log('connected..')).catch((err) => console.log(err));
