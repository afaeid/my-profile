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
/* Programe End*/




















/* Changing the title style of Portfolio section*/
var all = document.querySelector('.portfolio .item-titles a:nth-child(1)');
var webApplication = document.querySelector('.portfolio .item-titles a:nth-child(2)');
var photoshop = document.querySelector('.portfolio .item-titles a:nth-child(3)');
var mobileApps = document.querySelector('.portfolio .item-titles a:nth-child(4)');
var eCommerce = document.querySelector('.portfolio .item-titles a:nth-child(5)');


var pjWebApp = document.querySelectorAll('.project-web-app')
var pjPhotoshop = document.querySelectorAll('.project-photoshop')
var pjECommerce = document.querySelectorAll('.project-e-commerce')
var pjMobileApp = document.querySelectorAll('.project-mobile-app');


all.onclick = ()=>{
  all.style.color = 'var(--style-font-color2)';
  webApplication.style.color = 'var(--style-font-color1)';
  photoshop.style.color = 'var(--style-font-color1)';
  mobileApps.style.color = 'var(--style-font-color1)';
  eCommerce.style.color = 'var(--style-font-color1)';

  
  all.style.boxShadow = 'var(--outer-shadow)';
  webApplication.style.boxShadow = 'none';
  photoshop.style.boxShadow = 'none';
  mobileApps.style.boxShadow = 'none';
  eCommerce.style.boxShadow = 'none';
  
  pjWebApp.forEach(section =>{
    section.style.display = 'inline-block'
  });
  pjPhotoshop.forEach(section =>{
    section.style.display = 'inline-block'
  });
  pjECommerce.forEach(section => {
    section.style.display = 'inline-block'
  });
  pjMobileApp.forEach(section =>{
    section.style.display = 'inline-block'
  });
  
  
}
webApplication.onclick = ()=>{
  all.style.color = 'var(--style-font-color1)';
  webApplication.style.color = 'var(--style-font-color2)';
  photoshop.style.color = 'var(--style-font-color1)';
  mobileApps.style.color = 'var(--style-font-color1)';
  eCommerce.style.color = 'var(--style-font-color1)';

  
  all.style.boxShadow = 'none';
  webApplication.style.boxShadow = 'var(--outer-shadow)';
  photoshop.style.boxShadow = 'none';
  mobileApps.style.boxShadow = 'none';
  eCommerce.style.boxShadow = 'none';
  
  pjWebApp.forEach(section =>{
    section.style.display = 'inline-block'
  });
  pjPhotoshop.forEach(section =>{
    section.style.display = 'none'
  });
  pjECommerce.forEach(section => {
    section.style.display = 'none'
  });
  pjMobileApp.forEach(section =>{
    section.style.display = 'none'
  });
  
}
photoshop.onclick = ()=>{
  all.style.color = 'var(--style-font-color1)';
  webApplication.style.color = 'var(--style-font-color1)';
  photoshop.style.color = 'var(--style-font-color2)';
  mobileApps.style.color = 'var(--style-font-color1)';
  eCommerce.style.color = 'var(--style-font-color1)';

  
  all.style.boxShadow = 'none';
  webApplication.style.boxShadow = 'none';
  photoshop.style.boxShadow = 'var(--outer-shadow)';
  mobileApps.style.boxShadow = 'none';
  eCommerce.style.boxShadow = 'none';
  
  pjWebApp.forEach(section =>{
    section.style.display = 'none'
  });
  pjPhotoshop.forEach(section =>{
    section.style.display = 'inline-block'
  });
  pjECommerce.forEach(section => {
    section.style.display = 'none'
  });
  pjMobileApp.forEach(section =>{
    section.style.display = 'none'
  });
  
  
}
mobileApps.onclick = ()=>{
  all.style.color = 'var(--style-font-color1)';
  webApplication.style.color = 'var(--style-font-color1)';
  photoshop.style.color = 'var(--style-font-color1)';
  mobileApps.style.color = 'var(--style-font-color2)';
  eCommerce.style.color = 'var(--style-font-color1)';

  
  all.style.boxShadow = 'none';
  webApplication.style.boxShadow = 'none';
  photoshop.style.boxShadow = 'none';
  mobileApps.style.boxShadow = 'var(--outer-shadow)';
  eCommerce.style.boxShadow = 'none';
  
  pjWebApp.forEach(section =>{
    section.style.display = 'none'
  });
  pjPhotoshop.forEach(section =>{
    section.style.display = 'none'
  });
  pjECommerce.forEach(section => {
    section.style.display = 'none'
  });
  pjMobileApp.forEach(section =>{
    section.style.display = 'inline-block'
  });
  
  
}
eCommerce.onclick = ()=>{
  all.style.color = 'var(--style-font-color1)';
  webApplication.style.color = 'var(--style-font-color1)';
  photoshop.style.color = 'var(--style-font-color1)';
  mobileApps.style.color = 'var(--style-font-color1)';
  eCommerce.style.color = 'var(--style-font-color2)';

  
  all.style.boxShadow = 'none';
  webApplication.style.boxShadow = 'none';
  photoshop.style.boxShadow = 'none';
  mobileApps.style.boxShadow = 'none';
  eCommerce.style.boxShadow = 'var(--outer-shadow)';
  
  pjWebApp.forEach(section =>{
    section.style.display = 'none'
  });
  pjPhotoshop.forEach(section =>{
    section.style.display = 'none'
  });
  pjECommerce.forEach(section => {
    section.style.display = 'inline-block'
  });
  pjMobileApp.forEach(section =>{
    section.style.display = 'none'
  });
  
  
}
