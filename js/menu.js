/*====== For opening & closing menu =====*/
var menuOpenBtn = document.querySelector('.menu-icon');
var menuCloseBtn = document.querySelector('.menu-close-btn')
var menu = document.querySelector('.nav-links');
menuOpenBtn.onclick = ()=>{
  menuOpenBtn.style.display = 'none';
  menuCloseBtn.style.display = 'inline-block';
  menu.style.display = 'flex';
}
menuCloseBtn.onclick = ()=>{
  menuOpenBtn.style.display = 'inline-block';
  menuCloseBtn.style.display = 'none';
  menu.style.display = 'none'
}
/* For closing the navbar when click any  page name */
var navLi = document.querySelectorAll('.nav-links ul li');
navLi.forEach(li=>{
  li.onclick = ()=>{
    menu.style.display ='none';
  }
})
