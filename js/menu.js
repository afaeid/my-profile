/*====== For opening & closing menu =====*/
var menuOpenBtn = document.querySelector('.menu-icon');
var menuCloseBtn = document.querySelector('.menu-close-btn')
var menu = document.querySelector('.nav-links');
menuOpenBtn.onclick = ()=>{
  menu.style.display = 'flex';
}
menuCloseBtn.onclick = ()=>{
  menu.style.display = 'none';
}
/* For closing the navbar when click any  page name */
var navLi = document.querySelectorAll('.nav-links ul li');
navLi.forEach(li=>{
  li.onclick = ()=>{
    menu.style.display ='none';
  }
})
var mImg = document.querySelectorAll('img');
var bgImg = document.querySelectorAll('.bg-load');

 
    bgImg.forEach(img =>{
      img.onload = ()=>{
        img.style.background = 'none'
      }
    })