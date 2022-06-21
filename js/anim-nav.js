  // For about page 
  var pntContent = document.querySelector('.progressbar-and-timeline');
  var pntTitles = document.querySelector('.item-titles')
  window.onscroll = ()=>{
    if(window.pageYOffset >= pntContent.offsetTop){
      pntTitles.classList.add('pntfixed');
      pntContent.style.paddingTop = '50px';
    }else{ 
      pntTitles.classList.remove('pntfixed');
      pntContent.style.paddingTop = '0px';
    }
    if(window.pageYOffset >= prtCover.offsetTop){
      prtTitles.classList.add('prtfixed');
      prtfloContent.style.paddingTop = '60px';
    }else{ 
      prtTitles.classList.remove('prtfixed');
      prtfloContent.style.paddingTop = '0px';
    }
   /*   var abc = pageYOffset;
  console.log(abc);*/
  // var def = pntContent.offsetTop;
  // console.log(def)
  }
 
// For Portfolio Page

var prtfloContent = document.querySelector('.portfolios');
var prtTitles = document.querySelector('.prt-item-titles');
var prtCover = document.querySelector('.prtfolio')
  // window.onscroll = ()=>{
    
   /*   var abc = pageYOffset;
  console.log(abc);*/
  // var def = pntContent.offsetTop;
  // console.log(def)
 
