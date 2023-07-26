const express=require('express');
const routes=express.Router();
const path=require('path');

const htmlfile=path.join(__dirname,'../','html')

routes.get('/',(req,res)=>{
    res.sendFile(path.join(htmlfile,'simple.html'))
})

routes.get('/new',(req,res)=>{
    res.sendFile(path.join(htmlfile,'second.html'))
})


module.exports=routes;