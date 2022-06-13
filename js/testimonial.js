    var testimonial = document.querySelector('.testimonial-box section');
    var x = 0;
    
    function down(){
      if(x <  0){
      x += 200;
      testimonial.style.marginTop = x+'px';
          console.log(x)
      }
    } 
    
    function up(){
      if(x > '-600'){
      x -= 200;
      testimonial.style.marginTop = x+'px';
          console.log(x)
      }
    }
      
