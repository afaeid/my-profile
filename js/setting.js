var settingPage = document.querySelector('.setting-page-cover');
var settingBtn = document.querySelector('.setting-btn');
var settingCloser = document.querySelector('.setting-closer');
var defaultFont = document.querySelector('.default-font');
var ubuntuFont = document.querySelector('.ubuntu-font');
var robotoFont = document.querySelector('.roboto-font');
var poppinsFont = document.querySelector('.poppins-font');
var allFonts = document.querySelectorAll('.fonts section')
function openSettingPage(){
  settingPage.classList.add('openSettingPage');
  settingBtn.style.display = 'none';
  settingCloser.style.display = 'inline-block'
}

function closeSettingPage(){
  settingPage.classList.remove('openSettingPage');
  settingBtn.style.display = 'inline-block';
  settingCloser.style.display = 'none'
}
function switchDefaultFont(){
  
  localStorage.setItem('defFont','font');
  localStorage.getItem('defFont');
  localStorage.removeItem('ubuntuFont');
  localStorage.removeItem('robotoFont');
  localStorage.removeItem('poppinsFont');
  
  document.body.classList.remove('ubuntu');
  document.body.classList.remove('roboto');
  document.body.classList.remove('poppins');

  defaultFont.style.boxShadow = 'var(--inner-shadow)';
  ubuntuFont.style.boxShadow = 'var(--outer-shadow)';
  robotoFont.style.boxShadow = 'var(--outer-shadow)';
  poppinsFont.style.boxShadow = 'var(--outer-shadow)';
}
if(localStorage.getItem('defFont')!== null){
  switchDefaultFont();
}
function switchUbuntuFont(){
  
  localStorage.setItem('ubuntuFont','ubuntu');
  localStorage.getItem('ubuntuFont');
  localStorage.removeItem('defFont');
  localStorage.removeItem('robotoFont');
  localStorage.removeItem('poppinsFont');
  
  document.body.classList.add('ubuntu');
  document.body.classList.remove('roboto');
  document.body.classList.remove('poppins');

 defaultFont.style.boxShadow = 'var(--outer-shadow)';
  ubuntuFont.style.boxShadow = 'var(--inner-shadow)';
  robotoFont.style.boxShadow = 'var(--outer-shadow)';
  poppinsFont.style.boxShadow = 'var(--outer-shadow)';
}
if(localStorage.getItem('ubuntuFont')!== null){
  switchUbuntuFont();
}
function switchRobotoFont(){
  
  localStorage.setItem('robotoFont','Roboto');
  localStorage.getItem('robotoFont');
  localStorage.removeItem('ubuntuFont');
  localStorage.removeItem('defFont');
  localStorage.removeItem('poppinsFont');
  
  document.body.classList.remove('ubuntu');
  document.body.classList.add('roboto');
  document.body.classList.remove('poppins');
  
  defaultFont.style.boxShadow = 'var(--outer-shadow)';
  ubuntuFont.style.boxShadow = 'var(--outer-shadow)';
  robotoFont.style.boxShadow = 'var(--inner-shadow)';
  poppinsFont.style.boxShadow = 'var(--outer-shadow)';
  /*
 if(document.body.classList.contains('roboto')){
 robotoFont.style.boxShadow = 'var(--inner-shadow)';
}*/
}
if(localStorage.getItem('robotoFont')!== null){
  switchRobotoFont();
}

function switchPoppinsFont(){
  
  localStorage.setItem('poppinsFont','poppins');
  localStorage.getItem('poppinsFont');
  localStorage.removeItem('ubuntuFont');
  localStorage.removeItem('robotoFont');
  localStorage.removeItem('defFont');
  
  document.body.classList.remove('ubuntu');
  document.body.classList.remove('roboto');
  document.body.classList.add('poppins');
 
  defaultFont.style.boxShadow = 'var(--outer-shadow)';
  ubuntuFont.style.boxShadow = 'var(--outer-shadow)';
  robotoFont.style.boxShadow = 'var(--outer-shadow)';
  poppinsFont.style.boxShadow = 'var(--inner-shadow)';

}

if (localStorage.getItem('poppinsFont') !== null) {
  switchPoppinsFont();
}
/*
allFonts.forEach(section=>{
  section.onclick = ()=>{
 
 
 if (document.body.classList.contains('ubuntu')) {
    ubuntuFont.style.boxShadow = 'var(--inner-shadow)';
  } 
 if(document.body.classList.contains('poppins')){
 poppinsFont.style.boxShadow = 'var(--inner-shadow)';
  }
 if(document.body.classList.contains('roboto')){
   section.style.boxShadow = 'var(--inner-shadow)'
 } 
  
  
}
})
*/