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

/*===== For the loader on profile Iamge ====== */
var profImg = document.querySelector('.profile-img');
var imgLoader = document.querySelector('.img-loader');
window.onload = ()=>{
 imgLoader.classList.toggle('hide');
}
/* For closing the navbar when click any  page name */
var navLi = document.querySelectorAll('.nav-links ul li');
navLi.forEach(li=>{
  li.onclick = ()=>{
    menu.style.display ='none';
  }
})







/* Changing the title style & section of about section */
var skill = document.querySelector('.about .item-titles a:nth-child(1)');
var experience = document.querySelector('.about .item-titles a:nth-child(2)');
var education = document.querySelector('.about .item-titles a:nth-child(3)');
var moreMemory = document.querySelector('.about .item-titles a:nth-child(4)');


var sectionSkill = document.querySelector('.changeable-section1')
var sectionExperience = document.querySelector('.changeable-section2')
var sectionEducation = document.querySelector('.changeable-section3');
var sectionMoreMemory = document.querySelector('.changeable-section4')

skill.onclick = ()=>{
  skill.style.color = 'var(--style-font-color2)';
  experience.style.color = 'var(--style-font-color1)';
  education.style.color = 'var(--style-font-color1)';
  moreMemory.style.color = 'var(--style-font-color1)';
  
  skill.style.boxShadow = 'var(--outer-shadow)';
  experience.style.boxShadow = 'none';
  education.style.boxShadow = 'none';
  moreMemory.style.boxShadow = 'none';
  
  sectionSkill.style.display = 'block';
  sectionExperience.style.display = 'none';
  sectionEducation.style.display = 'none';
  sectionMoreMemory.style.display = 'none';
}
experience.onclick = ()=>{
  
  skill.style.color = 'var(--style-font-color1)';
  experience.style.color = 'var(--style-font-color2)';
  education.style.color = 'var(--style-font-color1)'
  moreMemory.style.color = 'var(--style-font-color1)';
  
  skill.style.boxShadow = 'none';
  experience.style.boxShadow = 'var(--outer-shadow)';
  education.style.boxShadow = 'none';
  moreMemory.style.boxShadow = 'none';

  sectionSkill.style.display = 'none';
  sectionExperience.style.display = 'block';
  sectionEducation.style.display = 'none';
  sectionMoreMemory.style.display = 'none'
}
education.onclick = ()=>{
  
  skill.style.color = 'var(--style-font-color1)';
  experience.style.color = 'var(--style-font-color1)';
  moreMemory.style.color = 'var(--style-font-color1)';
  education.style.color = 'var(--style-font-color2)'
  
  skill.style.boxShadow = 'none';
  experience.style.boxShadow = 'none';
  education.style.boxShadow = 'var(--outer-shadow)';
  moreMemory.style.boxShadow = 'none';

  sectionSkill.style.display = 'none';
  sectionExperience.style.display = 'none';
  sectionEducation.style.display = 'block';
  sectionMoreMemory.style.display = 'none';
}
moreMemory.onclick = ()=> {
  
  skill.style.color = 'var(--style-font-color1)';
  experience.style.color = 'var(--style-font-color1)';
  education.style.color = 'var(--style-font-color1)';
  moreMemory.style.color = 'var(--style-font-color2)';
  
  skill.style.boxShadow = 'none';
  experience.style.boxShadow = 'none';
  education.style.boxShadow = 'none';
  moreMemory.style.boxShadow = 'var(--outer-shadow)';
  
  sectionSkill.style.display = 'none';
  sectionExperience.style.display = 'none';
  sectionEducation.style.display = 'none';
  sectionMoreMemory.style.display = 'block';
  
}
