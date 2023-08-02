const express=require('express');
const fs=require('fs');
const routing=require('./routes/rootroute')
const productRout=require('./routes/productroute')
const htmlRoutes=require('./routes/htmlroutes')
const { engine }=require('express-handlebars');
const templateRoute=require('./routes/templateRoute');
const curdroute=require('./routes/curdroute');
const restdata=require('./routes/restJSONroute');
const mogoose=require('mongoose');
const monoroute=require('./routes/mongooseRoute')
const {applevel}=require('./middlerwares/basicMiddl');
const authRoute=require('./routes/authroutes')
const fileroute=require('./routes/fileuplodroute')

const Dbconnect=()=>{
    return mogoose.connect('mongodb+srv://database:UNQUidrGUEYBbYxd@cluster0.3izcja8.mongodb.net/?retryWrites=true&w=majority')
}

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('uploadfile'))

app.use(applevel)
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/file',fileroute)
app.use('/auth',authRoute)
app.use('/mon',monoroute)
app.use('/rest',restdata)
app.use('/curd',curdroute)
app.use('/template',templateRoute)
app.use('/html',htmlRoutes)
app.use('/postdata',productRout)
app.use('/',routing)


Dbconnect().then((data)=>{app.listen('8081',()=>{
    console.log('connected')
    console.log('server start')
})}).catch(err=>console.log(err))



//UNQUidrGUEYBbYxd