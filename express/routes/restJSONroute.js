const express=require('express');
const routes=express.Router();
const {saveData,getData,deletemethod,editeData,newdata}=require('../repository/data')

routes.get('/',(req,res)=>{
res.json({data:getData()})
})

routes.post('/post',(req,res)=>{
    let data=saveData(req.body);
    res.json({
        massage:"succes",
        data:data
    })
})

routes.delete('/:id',(req,res)=>{
    let datas=deletemethod(req.params.id);
   // console.log(req.params.id)
    res.json({ massage:"succes",
    data:datas})
})

routes.put('/:id',(req,res)=>{
    req.body.id=req.params.id;
    let datas=newdata(req.body);
    res.json({
        massage:"succes",
        data:datas
    })
})

module.exports=routes