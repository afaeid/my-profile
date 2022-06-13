
/* For going into different section through nav bar.*/
var homePage = document.querySelector('.container-home');
var aboutPage = document.querySelector('.about');
var servicePage = document.querySelector('.service');
var portfolioPage = document.querySelector('.portfolio');
var contactPage = document.querySelector('.contact');
var testimonialPage = document.querySelector('.testimonial')

function openHomeSection(){
  
  localStorage.setItem('homePage','home');
  localStorage.getItem('homePage');
  localStorage.removeItem('aboutPage');
  localStorage.removeItem('servicePage');
  localStorage.removeItem('portfolioPage');
  localStorage.removeItem('contactPage');
  localStorage.removeItem('testimonialPage');
  
  homePage.style.display = 'flex';
  aboutPage.style.display = 'none';
  servicePage.style.display = 'none';
  portfolioPage.style.display = 'none';
  contactPage.style.display = 'none'
  testimonialPage.style.display = 'none'
}
if(localStorage.getItem('homePage') !== null){
  openHomeSection();
}
function openAboutSection(){
  
  localStorage.setItem('aboutPage','about');
  localStorage.getItem('aboutPage');
  localStorage.removeItem('homePage');
  localStorage.removeItem('servicePage');
  localStorage.removeItem('portfolioPage');
  localStorage.removeItem('contactPage');
  localStorage.removeItem('testimonialPage');

  homePage.style.display = 'none';
  aboutPage.style.display = 'flex';
  servicePage.style.display = 'none';
  portfolioPage.style.display = 'none';
  contactPage.style.display = 'none'
  testimonialPage.style.display = 'none'
}
if(localStorage.getItem('aboutPage')!== null){
  openAboutSection();
}
function openServiceSection(){
  
  localStorage.setItem('servicePage','service');
  localStorage.getItem('servicePage');
  localStorage.removeItem('aboutPage');
  localStorage.removeItem('homePage');
  localStorage.removeItem('portfolioPage');
  localStorage.removeItem('contactPage');
  localStorage.removeItem('testimonialPage');
  
  homePage.style.display = 'none';
  aboutPage.style.display = 'none';
  servicePage.style.display = 'flex';
  portfolioPage.style.display = 'none';
  contactPage.style.display = 'none'
  testimonialPage.style.display = 'none'
}
if(localStorage.getItem('servicePage')!== null){
  openServiceSection();
}
function openPortfolioSection(){
  localStorage.setItem('portfolioPage','portfolio');
  localStorage.getItem('portfolioPage');
  localStorage.removeItem('aboutPage');
  localStorage.removeItem('homePage')
  localStorage.removeItem('servicePage');
  localStorage.removeItem('contactPage')
  localStorage.removeItem('testimonialPage');
  
  homePage.style.display = 'none';
  aboutPage.style.display = 'none';
  servicePage.style.display = 'none';
  portfolioPage.style.display = 'flex';
  contactPage.style.display = 'none'
  testimonialPage.style.display = 'none'
}
if(localStorage.getItem('portfolioPage')!== null){
  openPortfolioSection();
}
function openTestimonialSection(){
  localStorage.setItem('testimonialPage','testimonial');
  localStorage.getItem('testimonialPage');
    localStorage.removeItem('aboutPage');
    localStorage.removeItem('homePage');
    localStorage.removeItem('servicePage');
    localStorage.removeItem('portfolioPage');
    localStorage.removeItem('contactPage');
    
    homePage.style.display = 'none';
    aboutPage.style.display = 'none';
    servicePage.style.display = 'none';
    portfolioPage.style.display = 'none';
    contactPage.style.display = 'none'
    testimonialPage.style.display = 'block';
}
if(localStorage.getItem('testimonialPage')!== null){
  openTestimonialSection();
}
function openContactSection(){
    localStorage.setItem('contactPage', 'contact');
    localStorage.getItem('contactPage');
    localStorage.removeItem('aboutPage');
    localStorage.removeItem('homePage')
    localStorage.removeItem('servicePage');
    localStorage.removeItem('portfolioPage');
    localStorage.removeItem('testimonialPage');
  
    homePage.style.display = 'none';
    aboutPage.style.display = 'none';
    servicePage.style.display = 'none';
    portfolioPage.style.display = 'none';
    contactPage.style.display = 'flex';
    testimonialPage.style.display = 'none'
}
if (localStorage.getItem('contactPage') !== null) {
  openContactSection();
}
