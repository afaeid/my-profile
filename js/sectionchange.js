
/* For going into different section through nav bar.*/
var homePage = document.querySelector('.container-home');
var aboutPage = document.querySelector('.about');
var servicePage = document.querySelector('.service');
function openHomeSection(){
  
  localStorage.setItem('homePage','home');
  localStorage.getItem('homePage');
  localStorage.removeItem('aboutPage');
  localStorage.removeItem('servicePage');
  
  homePage.style.display = 'flex';
  aboutPage.style.display = 'none';
  servicePage.style.display = 'none';
}
if(localStorage.getItem('homePage') !== null){
  openHomeSection();
}
function openAboutSection(){
  
  localStorage.setItem('aboutPage','about');
  localStorage.getItem('aboutPage');
  localStorage.removeItem('homePage');
  localStorage.removeItem('servicePage');

  homePage.style.display = 'none';
  aboutPage.style.display = 'flex';
  servicePage.style.display = 'none';
}
if(localStorage.getItem('aboutPage')!== null){
  openAboutSection();
}
function openServiceSection(){
  
  localStorage.setItem('servicePage','service');
  localStorage.getItem('servicePage');
  localStorage.removeItem('aboutPage');
  localStorage.removeItem('homePage')
  
  homePage.style.display = 'none';
  aboutPage.style.display = 'none';
  servicePage.style.display = 'flex';
}
if(localStorage.getItem('servicePage')!== null){
  openServiceSection();
}
