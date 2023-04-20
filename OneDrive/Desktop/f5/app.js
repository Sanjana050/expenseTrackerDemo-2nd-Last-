const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');



const app = express();

const sequelize=require('./util/database')

const user=require('./models/user')



const userRoutes = require('./router/user');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'views')));


app.use(userRoutes);



sequelize.sync().then((result)=>{
    console.log(result);
    app.listen(80);
}).catch(err=>{
    console.log(err)
});



