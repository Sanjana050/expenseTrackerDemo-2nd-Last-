

exports.getError=(req,res,next)=>{
    res.status(404).send(`<h3>404,Sorry page not found</h3>`)
  }
