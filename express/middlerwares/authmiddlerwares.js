const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const forsingup=(req,res,next)=>{
    const password=req.body.password;

    bcrypt.hash(password, saltRounds, function(err, hash) {
       if(err){
        res.send('err in hasing password');
        return;
       }
       req.body.password=hash;
       next();
    })
}

const virify=(req,res,next)=>{
    const tokon=req.headers['authorization'];

//console.log(tokon)
    if(tokon){
        jwt.verify(tokon, 'secrate', function(err, decoded) {
            if(err){
                res.send('provide rigth tokan')
            }else{
                next();
            }
        })
    }else{
        res.json({
            msg:"provide tokan"
        })
    }


}

module.exports={
    forsingup,
    virify
}