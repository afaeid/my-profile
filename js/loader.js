
/*===== For the loader on profile Iamge ====== *//*
var profImg = document.querySelector('.profile-img');
var imgLoader = document.querySelector('.img-loader');
window.onload = ()=>{
 imgLoader.classList.toggle('hide');
}
*/

var bgImg = document.querySelectorAll('.bg-load');

 
    bgImg.forEach(img =>{
      img.onload = ()=>{
        img.style.background = 'none'
      }
    })
