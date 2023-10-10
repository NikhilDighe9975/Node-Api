const express = require('express');
const app = express();
app.use(express.json());
const PORT =7000;
const Product = require('./groupShema')
const Config = require('./groupConfig')

//create
app.post('/create',async(req,res)=>{
    let data =new Product(req.body)
    let result = await data.save()
    console.log(result)
    res.send(result)
})

// getAll
app.get('/getAll', async (req, res) => {
    let data = await Product.find();
    res.send(data)
});

//delete
app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    res.send(data)
});

//put
app.put('/update/:_id', async (req, res) => {
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    res.send(data)
});

// find by id

app.get('/findbyid/:_id', async (req, res) => {

    const productId = req.params;
  
    let data = await Product.findById(productId);
  
    res.send(data)
  
  });


  // find by name

app.get('/findbyname/:name', async (req, res) => {

    const productId = req.params;
  
    let data = await Product.findByName(productId);
  
    res.send(data)
  
  });

  

app.listen(PORT,()=>
{
    console.log(`Server is running ${PORT}`)
})