(function (){
  var sectionTitle = document.getElementById('section-title');
  var textSelector = ["Annual Report", "Motivated by Faith", "Global Impact", "Mission and Vision"];
  var target = document.querySelectorAll('.title-target');
  var tLength = target.length;

  (function (){
    sectionTitle.textContent = textSelector[0];
  })();
  
    window.addEventListener('scroll', ()=>{

      for(var i = 0; i < target.length; i++){
        var t = target[i].getClientBoundingRect().top;
        var x = 0;
        if(t <= 0){
          x++;
          sectionTitle.textContent = textSelector[x];
        }
      }

    });
      
})();

