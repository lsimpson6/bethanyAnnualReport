(function (){
  var sectionTitle = document.getElementById('section-title').innerHTML;
  
  window.addEventListener('scroll', ()=>{
  	var y = scrollY;
    
    if(y > 30){
      sectionTitle.text = "hello";
    }
  
  })
})();
