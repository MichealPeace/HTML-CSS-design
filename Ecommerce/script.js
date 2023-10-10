
const bar = document.getElementById('bar1');
const nav = document.getElementById('navbar');

if(bar){
 bar.addEventListener('click',()=>{
nav.classList.add('active');

 })

}