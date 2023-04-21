const Task=require('../models/task');
const path=require('path');

exports.getAddTask=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','index.html'))
}
exports.postAddTask=(req,res,next)=>{
const task=req.body.task;
const des=req.body.description;
const status="remaining";

Task.create({
    task:task,
    description:des,
    status:status
}).then((result)=>{
    console.log("task added")
    res.redirect('/task');
}).catch((err)=>{
    console.log('error')
})

}

exports.postDeleteTask=(req,res,next)=>{
    const taskId=req.body.taskId;
    console.log(taskId);
   User.findByPk(taskId).then((product)=>{
    if(!product)
    {
      return;
    }
    return product.destroy();
   }).then((result)=>{
  console.log('destroyed product');
 
   }).catch(err=>{
    console.log(err);
   });
};
