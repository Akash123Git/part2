const express = require('express')
const BrandModel = require('../models/BrandModel')
const router = express.Router()


// http://localhost:8989/api/brand/save
router.post("/save",(request,response)=>
{
    console.log(request.body)
    BrandModel.saveBrand(request.body,(status,data)=>{
            response.json({status:status,brand:data})
    });
})

// http://localhost:8989/api/brand/list
router.get("/list",(request,response)=>
{
        BrandModel.fetchBrand((data)=>response.json(data))
})


module.exports = router