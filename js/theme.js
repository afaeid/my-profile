
/* ======== For changing Theme  ==========*/
var themeButton = document.querySelector('.theme-button');
var themeIconMoon = document.querySelector('.theme-button .moon-icon')
var themeIconSun = document.querySelector('.theme-button .sun-icon')
/*
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
}*/

function darkTheme(){
  localStorage.setItem('theme','dark');
  localStorage.getItem('theme');
  document.body.classList.add('dark-theme');
  themeIconMoon.style.display = 'none';
  themeIconSun.style.display = 'inline-block';
}
function lightTheme(){
  document.body.classList.remove('dark-theme');
  themeIconMoon.style.display = 'inline-block';
  themeIconSun.style.display = 'none';
  localStorage.removeItem('theme');
}
if(localStorage.getItem('theme')!== null){
  darkTheme();
}
