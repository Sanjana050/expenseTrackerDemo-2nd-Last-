const User = require('../models/user');
const path=require('path')


exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname,'../','views','index.html'))
};

exports.postAddProduct = (req, res, next) => {
  const name = req.body.user;
  const email = req.body.email;
  const phone = req.body.phone;
  
  User.create({
  name:name,
  email:email,
  phone:phone

  }).then((result)=>{
    console.log('created Product')
    
    res.redirect('/userlist')
  }).catch(err=>{
    console.log(err)
  })
  
  
};


exports.postDeleteProduct=(req,res,next)=>{
  const prodId=req.body.productId;
  console.log(prodId);
 User.findByPk(prodId).then((product)=>{
  if(!product)
  {
    return;
  }
  return product.destroy();
 }).then((result)=>{
console.log('destroyed product');
res.redirect('/userlist')
 }).catch(err=>{
  console.log(err);
 });
 
  
  
}




exports.getUserList = (req, res, next) => {
  User.findAll()
    .then((products) => {
      let html = '';
      html += `<button type="button" onclick="location.href='/user';">Add User</button>`;

      products.forEach((product) => {
        html += `<li>${product.name} - ${product.email} - ${product.phone}
          <div style="display: inline-flex">
            <form action="/edit" method="POST">
              <button class="edit-product btn success" name="productId" value="${product.id}">Edit</button>
            </form>
            <form action="/delete" method="POST">
              <button class="delete-product danger btn" name="productId" value="${product.id}">Delete</button>
            </form>
          </div>
        </li>`;
      });

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<ul>${html}</ul>`);
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });
};


exports.getEditPage = (req, res, next) => {
  const prodId = req.body.productId;
  User.findByPk(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect('/userlist');
      }
      res.send(`<form action="/save" method="POST">
        <input type="text" name="user" value="${product.name}">
        <input type="text" name="phone" value="${product.phone}">
        <input type="text" name="email" value="${product.email}">
        <input type="hidden" name="productId" value="${product.id}">
        <button type="submit">Save Changes</button>
      </form>`);
    })
    .catch((err) => {
      console.log(err);
    });
};


exports.postEditPage = (req, res, next) => {
  const prodId = req.body.productId;
  const name = req.body.user;
  const email = req.body.email;
  const phone = req.body.phone;

  User.findByPk(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect('/userlist');
      }

      product.name = name;
      product.email = email;
      product.phone = phone;

      return product.save();
    })
    .then(() => {
      console.log('updated product');
      res.redirect('/userlist');
    })
    .catch((err) => {
      console.log(err);
    });
};
