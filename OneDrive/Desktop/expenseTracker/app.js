const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const routeUser=require('./router/signup');
app.use(routeUser);

app.listen(80);