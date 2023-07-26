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

module.exports={
    getmetod,
    savemethod,
    editeData,
    deletemetod,
    getbyid,
    addmulit
}