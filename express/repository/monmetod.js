const mongoose=require('mongoose');
const userModel=require('../db/models/mongoose')

const getmetod=()=>{
return userModel.find()
}

const savemethod=(data)=>{
let datas=new userModel(data);
return datas.save()
}

const editeData=(data)=>{
    return userModel.updateOne({_id:data.id},{$set:data})
}

const deletemetod=(id)=>{
    return userModel.deleteOne({_id:id})
}

const getbyid=(id)=>{
return userModel.findOne({_id:id})
}

const addmulit=(data)=>{
    return userModel.insertMany(data)
}

const getdatausername=(name)=>{
    return userModel.findOne({username:name})
}

const updateimage=(id,url)=>{
    console.log(id);
    console.log(url)
    return userModel.updateOne({_id:id},{$set:{image:url}})
}

module.exports={
    getmetod,
    savemethod,
    editeData,
    deletemetod,
    getbyid,
    addmulit,
    getdatausername,
    updateimage
}