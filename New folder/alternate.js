const express = require('express');
const app = express();
app.use(express.json())


app.post("rate/",async(req,res)=>{
     let data1 =Number(req.params.num1);
     let data2 =Number(req.params.num2);
     console.log(data1*data2);
   res.send(data1*data2)
   
})

app.listen(4000,()=>{
     console.log('server is runnig 4000');
})
