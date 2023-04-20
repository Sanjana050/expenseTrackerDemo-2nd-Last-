
const userForm=document.querySelector('.form-control')
document.addEventListener('DOMContentLoaded', function() {
  console.log('The page has finished loading!');
  console.log(userForm); // should print out the element with the class "form-control"
});


// userForm.addEventListener('submit',(e)=>{
// e.preventDefault();

// const user=userForm.user.value;
// const email=userForm.email.value;
// const phone=userForm.phone.value;


// const userData={
//     user:user,
//     email:email,
//     phone:phone
// }
// console.log(userData)

// localStorage.setItem(`${userData.user}-${userData.email}-${userData.phone}`, JSON.stringify(userData));
// const li=document.createElement('li');
// li.appendChild(document.createTextNode(`${userData.user } - ${userData.phone } - ${userData.email}`))
// // li.appendChild(document.createTextNode(`${userData.user } - ${userData.phone } - ${userData.email}`))
//   li.appendChild(document.createElement('button')).setAttribute('type', 'submit');
//   li.lastChild.className = "btn success";
//   li.lastChild.innerHTML = "Edit";

//   li.appendChild(document.createElement('button')).setAttribute('type', 'submit');
//   li.lastChild.className = "btn danger";
  
//   li.lastChild.innerHTML = "Delete";
//   document.querySelector('.userList').appendChild(li);
//   document.querySelector('.form-control').reset();
// })



