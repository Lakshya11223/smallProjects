let dibba = document.getElementById('color')
const list = document.getElementById('list')
const btn = document.getElementById('btn')
const body = document.getElementById('body')
function create()
{
    let b = document.createElement('button')
    b.innerHTML = dibba.value;
    list.appendChild(b)
    return b;
    
}
btn.addEventListener('click',()=>{
    let x = create();
    x.addEventListener('click',()=>{
        body.style.backgroundColor=x.innerHTML
        x.style.backgroundColor=x.innerHTML;
        x.style.color='aqua';
    });
   
})


