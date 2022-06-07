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
