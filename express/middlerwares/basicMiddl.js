const fs=require('fs');
const os=require('os')

const applevel=(req,res,next)=>{
   // console.log('App level colled');
    next();
}

const routeslevel=(req,res,next)=>{
    //console.log('routes level colled');
    next();
}

const singleRout=(req,res,next)=>{
   // console.log('single route level colled');
    next();
}

const pathrout=(req,res,next)=>{
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
fs.appendFile('./urlPath/url.txt',`${fullUrl}${os.EOL}`,(err,data)=>{
    if(err){
        console.log("error in filr reading");
        return;
    }
})
    next();
}

module.exports={
    applevel,
    routeslevel,
    singleRout,
    pathrout

}