  // For about and portfolio page 
  var pntContent = document.querySelector('.progressbar-and-timeline');
  var pntTitles = document.querySelector('.item-titles');
  
var prtfloContent = document.querySelector('.prtfolio');
var prtTitles = document.querySelector('.prt-item-titles');
var prtTitlesA = document.querySelectorAll('.prt-item-titles a');
var prtCover = document.querySelector('.portfolios') 
  window.onscroll = ()=>{
    if(window.pageYOffset >= pntContent.offsetTop){
      pntTitles.classList.add('pntfixed');
      pntContent.style.paddingTop = '50px';
    }else{ 
      pntTitles.classList.remove('pntfixed');
      pntContent.style.paddingTop = '0px';
    }
    if(window.pageYOffset >= prtfloContent.offsetTop){
      prtTitles.classList.add('prtfixed');
      prtCover.style.paddingTop = '80px';
    }else{ 
      prtTitles.classList.remove('prtfixed');
      prtCover.style.paddingTop = '15px';
    }
   /*   var abc = pageYOffset;
  console.log(abc);*/
  // var def = pntContent.offsetTop;
  // console.log(def)
  }
 
// For Portfolio Page

  // window.onscroll = ()=>{
    
   /*   var abc = pageYOffset;
  console.log(abc);*/
  // var def = pntContent.offsetTop;
  // console.log(def)
 
