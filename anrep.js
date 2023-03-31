<script>
  
(function (){
  var sectionTitle = document.getElementById('section-title');
  var textSelector = ["Annual Report", "Motivated by Faith", "Global Impact", "Mission and Vision"];
  var target = document.querySelectorAll('.title-target');
  var tLength = target.length;
  
window.addEventListener('scroll', ()=>{
  	var y = scrollY;
    	for(var i = 0; i < tLength; i++){
          var posFromTop = target[i].getClientBoundingRect().top;
          if(posFromTop <= 0){
          sectionTitle.textContent = textSelector[i];
          }
      }
  })
  
  
  
});

</script>
