const express= require('express');
const route= express.Router();

route.get('/',(req,res) => {
    return res.json({success: true,message:"Done"});
})

module.exports= route;