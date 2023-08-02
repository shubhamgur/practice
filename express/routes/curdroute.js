const express=require('express');
const route=express.Router();
const {saveData,getData,deletemethod,editeData,newdata}=require('../repository/data');

route.get('/',(req,res)=>{
    res.render('from')
});

route.post('/',(req,res)=>{
    saveData(req.body)
    res.redirect('/curd/viwes')
})

route.post('/delete',(req,res)=>{
deletemethod(req.body.id);
res.redirect('/curd/viwes')
})

route.get('/viwes',(req,res)=>{
    const data=getData();
res.render('listuser',{list:data})
})

route.post('/edite',(req,res)=> {
console.log(req.body)
newdata(req.body);
res.redirect('/curd/viwes')
})

route.get("/:id",(req,res)=>{
let data= editeData(req.params.id)
res.render('edit',{data:data})
})

module.exports=route;