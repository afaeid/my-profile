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
/* ======== For changing Theme  ==========*/
var themeButton = document.querySelector('.theme-button');
var themeIcon = document.querySelector('.theme-button img')

themeButton.onclick = ()=>{
  document.body.classList.toggle('dark-theme')
  if(document.body.classList.contains('dark-theme')){
    themeIcon.src = 'images/icons/sun.svg'
  }
  else{
    themeIcon.src = 'images/icons/moon.svg'
  }
  
}
var profImg = document.querySelector('.profile-img')
profImg.onload = ()=>{
  profImg.style.background = 'transparent';
}
