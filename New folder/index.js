


const express = require('express');
const app = express();
app.use(express.json())
const Product = require('./product');
require('./config');

app.post('/create', async (req, res) => {
    let data = new Product(req.body)
    let result = await data.save()
    console.log(result)
    res.send(result);
});


app.get('/list', async (req, res) => {
    let data = await Product.find();
    res.send(data)
});

app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    res.send(data)
});

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





app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

