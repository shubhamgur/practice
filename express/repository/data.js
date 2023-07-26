const  { v4: uuidv4 }  = require('uuid');

let Db=[

]

const saveData=(data)=>{
    data.id=uuidv4();
    Db.push(data)
    return Db
}

const getData=(data)=>{
    return Db
}

const deletemethod=(id)=>{
    //NON-rest SATHI HAI VAPRAYCHA ('/') cha kay ter visay ahee
   // let ids=id.substring(0, id. length - 1)
    //console.log(ids);
    //console.log(Db)
    Db=Db.filter(ele=>ele.id!=id);

    return Db;

}

const editeData=(id)=>{
    //let ids=id.substring(0, id. length - 1);
    console.log(id)
    console.log(Db)
    const data=Db.find(ele=>ele.id==id)
    console.log(data)
    return data
}

const newdata=(data)=>{
   // let ids=data.id.substring(0, data.id. length - 1);
    //console.log(Db)
    Db=Db.filter(ele=>ele.id!=data.id);
    Db.push(data)
    return Db
}

module.exports={
    saveData,
    getData,
    deletemethod,
    editeData,
    newdata
}