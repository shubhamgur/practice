const express=require('express');
const route=express.Router();
const {singup, login}=require('../controllers/authcontrol');
const { forsingup }=require('../middlerwares/authmiddlerwares')


route.post('/singup',forsingup,singup);

route.post('/login',login);

module.exports=route;