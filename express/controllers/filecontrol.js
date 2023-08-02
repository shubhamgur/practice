const {updateimage}=require('../repository/monmetod');
const cloudinary =require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'dobna5rq6', 
    api_key: '542428781666247', 
    api_secret: 'YNOPmqup_fk1YH5n4yJiK1DsFyc' ,
    secure: true
  });

const localfile=async(req,res)=>{

    const filename=req.files.file.path.split('\\');
    //console.log(filename[filename.length-1])
    const fullUrl = req.protocol + '://' + req.get('host');
    //console.log(fullUrl.split('f')[0])
const imageUrl=`${fullUrl}/${filename[filename.length-1]}`
const datt=await updateimage(req.body.id,imageUrl)
    res.json({
        mass:"succes",
        data:imageUrl,
        obj:datt
    })

    //console.log(req.body.id)
    //let s= userModel.findOne({_id:req.body.id});
    //console.log()
}

const cloudfile=async(req,res)=>{
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
      };
      console.log(req.files.file.path)
try{
      const result = await cloudinary.uploader.upload(req.files.file.path, options);

    //  console.log(result)
      res.json({
        mass:"succes",
        data:result.url,
        
    })
}catch(err){
    console.log(err)
}
}


module.exports={
    localfile,
    cloudfile
}

//http://localhost:8080/LycK2tdAv-6sWjkhUZf4EudI.jpg