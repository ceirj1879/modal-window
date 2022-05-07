'use strict';
function openWindow(winAsk){
  winAsk.classList.remove('hide');
  winAsk.classList.add('show', 'fade');
  document.body.style.overflow='hidden';
  
  }
  
  function closeWindow(winAsk){
  winAsk.classList.remove('show');
  winAsk.classList.add('hide');
  document.body.style.overflow='';
  }

function modalWindow(){
  const winAsk = document.querySelector('.modal'),
  btn=document.querySelectorAll('[data-modal]'),
  closeW=document.querySelector('.modal__close');



btn.forEach(b=>{

b.addEventListener('click',()=>{
openWindow(winAsk);


});
});
closeW.addEventListener('click',()=>{
closeWindow(winAsk);

});

winAsk.addEventListener('click',(e)=>{
if(e.target ===winAsk||e.target.getAttribute('data-close')==''){
closeWindow(winAsk);  
}
});

document.addEventListener('keydown', (e)=>{

if(e.code==='Escape'&&winAsk.classList.contains('show')){
closeWindow(winAsk);
}
});

const time=setTimeout(()=>openWindow(winAsk),10000);



window.addEventListener('scroll',scrollDown);

function scrollDown(){
/* console.log(document.documentElement.scrollTop); */

if(document.documentElement.scrollTop>3300){
/* console.log("OK"); */
openWindow(winAsk);
window.removeEventListener('scroll',scrollDown);
}
}




}

export default modalWindow;
export{openWindow};
export{closeWindow};