const express=require('express');
const routes=express.Router();
const {getmetod,savemethod,editeData,deletemetod,getbyid,addmulit}=require('../repository/monmetod');
const {routeslevel,singleRout,pathrout}=require('../middlerwares/basicMiddl')
const {virify}=require('../middlerwares/authmiddlerwares')

routes.use(virify)
routes.get('/',singleRout,async(req,res)=>{
    const data=await getmetod();
    res.json({
        massage:"succes",
        data:data
    })
});

routes.post('/',async (req,res)=>{
    const data=await savemethod(req.body)
    res.json({
        massage:"succes",
        data:data
    })
})

routes.put('/:id',async(req,res)=>{
    req.body.id=req.params.id;
    const datas=await editeData(req.body);
    res.json({
        massage:"succes",
        data:datas
    })
})

routes.delete('/:id',async(req,res)=>{
    let datas=await deletemetod(req.params.id);
    res.json({
        massage:"succes",
        data:datas
    })
})

routes.get('/:id',async(req,res)=>{
    let datas=await getbyid(req.params.id);
    res.json({
        massage:"succes",
        data:datas
    })
})

routes.post('/add',async(req,res)=>{
    let datas=await addmulit(req.body);
    res.json({
        massage:"succes",
        data:datas
    })
})

module.exports=routes;