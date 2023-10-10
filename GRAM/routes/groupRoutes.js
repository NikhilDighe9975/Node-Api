const express = require('express');
const router = express.Router();
const examModule = require('../models/groupSchema');

router.get('/getAll', async (req, res) => {
    let data = await examModule.find();
    res.send(data);
    console.log(data);
});

router.post('/create',async(req,res)=>{
    let data = new examModule(req.body);
    let result = await data.save();
    
    res.send(result);
    console.log(result);
});

router.put('/update/:_id',async(req,res)=>{
    console.log(req.body);
    let data = await examModule.updateOne(
        req.params,
        {$set:req.body}
    );
    console.log(data);
    res.send('updated');
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

//
router.delete('/delete/:_id',async(req,res)=>{
    console.log(req.params);
    let data = await examModule.deleteOne(
       req.params
    );
    res.send("deleted");
    console.log(data);
});



module.exports = router;
