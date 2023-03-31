(function (){
  var sectionTitle = document.getElementById('section-title');
  var textSelector = ["Annual Report", "Motivated by Faith", "Global Impact", "Mission and Vision"];
  var target = document.querySelectorAll('.title-target');
  var tLength = target.length;
  
window.addEventListener('scroll', animate);

function animate(){
  var y = scrollY;
  alert(y);
};
  
  
  
})();

