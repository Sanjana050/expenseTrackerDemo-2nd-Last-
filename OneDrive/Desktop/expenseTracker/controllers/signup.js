const path=require('path');


exports.getWelcomePage=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','index.html'));

}

exports.getSignup=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','signup.html'))
}

exports.postAddUser=(req,res,next)=>{
    console.log(req.body);
}
