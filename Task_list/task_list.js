const inputtask = document.getElementById('taskInput');
const btn = document.getElementById('addButton');
const list =  document.getElementById('emptylist')
const taskinc = document.getElementById('num');
const taskcompleted = document.getElementById('num1');
let count = 0;
let dne = 0;

btn.addEventListener('click', () => {
   const li = document.createElement('li');
   console.log(li);
   li.innerText = inputtask.value;
   document.getElementById('emptylist').appendChild(li);
   count++;
    taskinc.innerText = count;


   const btncomp = document.createElement('button');
   btncomp.innerText = 'Done';
   li.appendChild(btncomp);
   
   btncomp.style.margin = '10px';
   btncomp.style.cursor = 'pointer';
   btncomp.style.backgroundColor = 'lightgreen';
  

   const delbtn = document.createElement('button');
   delbtn.innerText = 'X';
   li.appendChild(delbtn);


   btncomp.addEventListener('click',()=>{
    li.style.backgroundColor = 'green';
    if(dne<count)
    {
    dne++
    }
    taskcompleted.innerText = dne;
   })

   delbtn.addEventListener('click',()=>{
    li.remove();
    dne--;
    count--;
    taskinc.innerText = count;
    if(dne>=0){
    taskcompleted.innerText = dne;}
   })
 
    
})

