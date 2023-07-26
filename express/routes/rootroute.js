const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('Hiii');
})

router.post('/post',(req,res)=>{
console.log(req.body)

    res.json({
        name:"shubham"
    })
})

router.post('/o',(req,res)=>{
    res.send('one')
})

router.get('/sss',(req,res)=>{
    console.log(req.query)
    res.send('qurey')
})

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    res.send('routes')
})

module.exports=router;