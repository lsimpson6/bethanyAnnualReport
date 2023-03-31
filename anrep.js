(function (){
  var sectionTitle = document.getElementById('section-title');
  var textSelector = ["Annual Report", "Motivated by Faith", "Global Impact", "Mission and Vision"];
  var target = document.querySelectorAll('.title-target');

  (function (){
    sectionTitle.textContent = textSelector[0];
  })();
  
    window.addEventListener('scroll', ()=>{

      for(var i = 0; i < target.length; i++){
        var tmpTarget = target[i];
        var yPos = tmpTarget.getBoundingClientRect().top;
        var x = 0;
        if(yPos <= 0){
          x++;
        }
        sectionTitle.textContent = textSelector[x];
      }
    });
      
})();

