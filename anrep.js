(function (){
  var sectionTitle = document.getElementById('section-title');
  var textSelector = ["Annual Report", "Motivated by Faith", "Global Impact", "Mission and Vision"];
  var target = document.querySelectorAll('.title-target');
  var animate = document.querySelectorAll('.animate');


  (function (){
    sectionTitle.textContent = textSelector[0];
  })();
  
    window.addEventListener('scroll', ()=>{

      // changes text on top left
      for(var i = 0; i < target.length; i++){
        var tmpTarget = target[i];
        var tyPos = tmpTarget.getBoundingClientRect().top;
        var x = 0;
        if(yPos <= 0){
          if(i > textSelector.length){
            sectionTitle.textContent = textSelector[0];
          }
          else {
            sectionTitle.textContent = textSelector[i];
          }
        }
      }

      /* fades in elements
      for(var a = 0; a < animate.length; a++){
        var winHeight = window.innerHeight/2;
        var tmpAnimate = animate[a];
        var ayPos = tmpAnimate.getBoundingClientRect().top;
          if(ayPos <= winHeight){
            tmpAnimate.classList.add('fade-in');
            tmpAnimate.classList.remove('animate');
          }
      }*/
    });
      
})();

