const express = require('express');
const router = express.Router();
const category = require('../models/categorySchema');

router.get('/getAll', async (req, res) => {
    let data = await category.find();
    res.send(data);
    console.log(data);
});
router.get('/findbyid/:_id', async (req, res) => {
    const productId = req.params; 
    let data = await products.findById(productId);
    res.send(data)
  });
  
  // find by name 
  router.get('/findbyName/:name', async (req, res) => {
    // const names = req.params; 
    let data = await products.find({name:"15 pro"});
    res.send(data)
  });

router.post('/create',async(req,res)=>{
    let data = new category(req.body);
    let result = await data.save();
    
    res.send(result);
    console.log(result);
});

router.put('/update/:_id',async(req,res)=>{
    console.log(req.body);
    let data = await category.updateOne(
        req.params,
        {$set:req.body}
    );
    console.log(data);
    res.send('updated');
});

//
router.delete('/delete/:_id',async(req,res)=>{
    console.log(req.params);
    let data = await category.deleteOne(
       req.params
    );
    res.send("deleted");
    console.log(data);
});



module.exports = router;
