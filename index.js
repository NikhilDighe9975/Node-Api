const express=require('express');

const bodyParser=require('body-parser');

const course1=require('./course/course')
const course2=require('./fees/fees')

const app=express();

app.use(express.json());

app.use(bodyParser.json());

const PORT=8000;

app.use('/co',course1);
app.use('/co',course2);

 

 

 

app.listen(PORT, ()=>{

    console.log("running",PORT);

})