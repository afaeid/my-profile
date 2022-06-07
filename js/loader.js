
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
