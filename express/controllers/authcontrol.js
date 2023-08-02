const {savemethod,getdatausername}=require('../repository/monmetod');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const singup=async (req,res)=>{
    try{
const datas=await savemethod(req.body);
res.json({
    massage:"success",
    data:datas
})
    }
    catch(err){
        res.json({
            massage:"faild",
            data:err.toString()
        })
    }

}

const login=async (req,res)=>{
    const datas=await getdatausername(req.body.username);
    if(datas){

        bcrypt.compare(req.body.password, datas.password, function(err, result) {
            if(result){

                const token = jwt.sign({ username: datas.username }, 'secrate');

                res.json({
                    massage:"success",
                    data:token
                }) 
            }else{
                res.json({
                    massage:"failed",
                    data:"enter correct password"
                }) 
            }
        });

       
    }else{
    res.json({
        massage:"faild",
        data:"username not found"
    })
}
    }

module.exports={
    singup,
    login
}