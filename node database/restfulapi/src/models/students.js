const express = require('express');
const  mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const Student = new mongoose.model('Student',studentSchema);
module.export = Student;