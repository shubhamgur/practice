const express=require('express');
const route=express.Router();
const path=require('path')
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: path.join(__dirname,'../uploadfile') });
const { localfile, cloudfile }=require('../controllers/filecontrol')

route.post('/local',multipartMiddleware,localfile);

route.post('/cloud',multipartMiddleware,cloudfile);

module.exports=route;