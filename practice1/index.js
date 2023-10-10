const express = require('express');
const bodyParser = require('body-parser');
const AuthRout = require('./routes/authenticate.route');


const app = express();
const PORT = 3000;
app.use(bodyParser.json());

function healthcheck(req,res){
    res.status(200).json({
        message:'server is running',
        status:'success',
        code:200
    });
}

app.get('/healthcheck',healthcheck);
app.use('/auth',AuthRout);
app.listen(PORT,()=>{
    console.log('Healthcare API is Running');
});