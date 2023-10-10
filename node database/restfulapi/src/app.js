const express = require('express')
require("./db/conn");
 const Student = require("./models/students")
const app = express()
const PORT = 5000;
app.use(express.json())

app.post('/student',(req,res)=>{
   console.log(req.body);
     const user = Student(req.body)
     user.save().then(()=>{
        res.send(user);
     }).catch((e)=>{
        res.send(e)
     })
     console.log("welcome")
    
});

app.listen(PORT,()=>{
    console.log(`Connection is setup at ${PORT}`)
})