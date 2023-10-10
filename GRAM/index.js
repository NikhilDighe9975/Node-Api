const express = require('express');
const mongoose = require('mongoose');
require('./config/connection');
const PORT = 3000;
const group = require('./routes/groupRoutes');
const user = require('./routes/userRoutes');
const gramsevak = require('./routes/gramSevakRoutes')
const population = require('./routes/populationRoutes')
const category = require('./routes/categoryRoutes')

const app = express();

app.use(express.json())

app.use('/group',group);
app.use('/user',user);
app.use('/gramsevak',gramsevak);
app.use('/population',population);
app.use('/category',category);


app.listen(PORT,()=>{
   console.log(`server is running ${PORT}`)
})
