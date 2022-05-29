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
var themeIconMoon = document.querySelector('.theme-button .moon-icon')
var themeIconSun = document.querySelector('.theme-button .sun-icon')

themeButton.onclick = ()=>{
  document.body.classList.toggle('dark-theme')
  if(document.body.classList.contains('dark-theme')){
    themeIconSun.style.display ='inline-block';
    themeIconMoon.style.display ='none';
  }
  else{
    themeIconSun.style.display = 'none';
    themeIconMoon.style.display = 'inline-block';
  }
  
}
/*
window.onload = ()=> {
  document.body.classList.add('dark-theme')
}
*/




/*===== For a loader on profile Iamge ====== */
var profImg = document.querySelector('.profile-img');
var imgLoader = document.querySelector('.img-loader');
profImg.onload = ()=>{
  imgLoader.classList.toggle('hide');
}




var navLi = document.querySelectorAll('.nav-links ul li');
navLi.forEach(li=>{
  li.onclick = ()=>{
    menu.style.display ='none';
  }
})
