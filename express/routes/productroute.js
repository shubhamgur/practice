const express=require('express');
const fs=require('fs')
const routes=express.Router();

routes.post('/',(req,res)=>{
    let body=req.body;
fs.readFile('db/data.txt','utf-8',(err,data)=>{
    if(err){
        console.log('error in reading');
        return;
    }
    console.log(11)
    //let userdata=JSON.parse(data);
    if(data.length!=0){
        let userdata=JSON.parse(data);
let alldata=[...userdata,body];
fs.writeFile('db/data.txt',JSON.stringify(alldata),(err,data)=>{
    if(err){
        console.log('error in writing');
        return;
    }
   res.send('file updated')
})
    }else{
const arr=[body]
        fs.writeFile('db/data.txt',JSON.stringify(arr),(err,data)=>{
            if(err){
                console.log('error in writing');
                return;
            }
           res.send('file updated')
        })
    }
})
})

routes.post('/post',(req,res)=>{
    res.send('second post')
})
module.exports=routes;