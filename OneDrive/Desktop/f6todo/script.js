const formcontrol = document.querySelector('.form-control');
const task = document.querySelector('#task');
const description = document.querySelector('#description');
const tasks = document.querySelector('.tasks');

formcontrol.addEventListener('submit', (e) => {
  e.preventDefault();
  const li = document.createElement('li');
  li.innerHTML = `${task.value} -- ${description.value} <span class="c1">&#10003;</span>  <span class='c2'>&times;</span>`;
  tasks.appendChild(li);
  formcontrol.reset();
});

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('c1')) {
    const li = e.target.parentElement;
    li.removeChild(li.querySelector('.c1'));
    li.removeChild(li.querySelector('.c2'));
    li.style.backgroundColor="#DAF7A6 "
    li.style.padding="23px";
    document.querySelector('.done').appendChild(li);
   
    
  }
});



tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('c2')) {
      const li = e.target.parentElement;
      li.classList.remove('c1')
      li.classList.remove('c2')
      document.querySelector('.tasks').removeChild(li);
      
    }
  });


