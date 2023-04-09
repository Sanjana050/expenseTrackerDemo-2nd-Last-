const fs=require('fs');
const path=require('path')

module.exports=class Product{
    constructor(title)
    {
        this.title=title;
    }
    save(){
        const p=path.join(__dirname,'data','products.json');
        fs.readFile(p,(err,data)=>{
            const products=[];
            if(!err)
            {
products=JSON.parse(data);
products.push(this);
fs.writeFile(p,JSON.stringify(products),(err)=>{
    console.log(err);
});
            }
            
        })
    }
    static fetchAll(cb){

        const p=path.join(__dirname,'data','products.json');
      fs.readFile(p,(err,data)=>{
        if(err){
        cb([]);
        }
        cb(JSON.parse(data));
      })

    }
}