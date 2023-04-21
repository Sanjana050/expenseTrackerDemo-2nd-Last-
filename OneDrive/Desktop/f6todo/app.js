const express=require('express');
const app=express();
const path=require('path')
const bodyParser=require('body-parser');
const sequelize=require('./util/database')
app.use(bodyParser.urlencoded({ extended: false }));
const Task = require('./models/task');
const taskRoutes=require('./router/task')
app.use(taskRoutes);

sequelize.sync().then((result)=>{
    console.log(result);
    app.listen(80);
}).catch(err=>{
    console.log(err)
});







