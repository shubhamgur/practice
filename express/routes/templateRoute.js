const express=require('express');
const routes=express.Router();
const fs=require('fs')

const arr=['shubham','trisha']

routes.get('/',(req,res)=>{
res.render('home',{list:arr})
})

routes.get('/data',(req,res)=>{
const allData=fs.readFileSync('db/data.json','utf-8');
res.render('data',{lists:JSON.parse(allData)})

})

module.exports=routes;