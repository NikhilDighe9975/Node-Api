const mongoose = require('mongoose');
const population = new mongoose.Schema({
    group_id:Number,
   year: Number,
    male_count:Number,
    female_count:Number,
    other_count:Number,
    total_count:Number
});

module.exports = mongoose.model('population', population);
