const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Task= sequelize.define('task',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    task:{
       type: Sequelize.STRING,
allowNull:false

    },
    description:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    status:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Task;
