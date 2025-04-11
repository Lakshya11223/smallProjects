//key mssg
let data = [];

window.onload = function()
{
    let val = localStorage.getItem("daa");
    if(val)
    {
        data = JSON.parse(val);
    }
    create();
}
function savedata()
{
    localStorage.setItem("daa",JSON.stringify(data));
}
let mssg = document.getElementById('inp');
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
   
    data.push(mssg.value);
    savedata();
    create();
    mssg.value="";
   })

function create()
{
    const block = document.getElementById('display');
    block.innerHTML="";
    for(const m in data)
    {
        let p = document.createElement('p');
        p.className = 'list';
        p.innerText= data[m];
        
        block.appendChild(p);
    }
   
   
  
}
const clrbtn = document.getElementById('clr');
clrbtn.addEventListener('click',()=>{
    localStorage.clear();
})











