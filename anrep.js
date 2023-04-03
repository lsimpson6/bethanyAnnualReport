var unitedStatesMap = document.getElementById('united-states-map');
var unitedStatesPin = document.getElementById('united-states-pin');
var romaniaMap = document.getElementById('Romania-Map');
var romaniaPin = document.getElementById('Romania-Pin');
var ghanaMap = document.getElementById('Ghana-Map');
var ghanaPin = document.getElementById('Ghana-Pin');
var colombiaMap = document.getElementById('Colombia-Map');
var colombiaPin = document.getElementById('Colombia-Pin');
var haitiMap = document.getElementById('Haiti-Map');
var haitiPin = document.getElementById('Haiti-Pin');
var albaniaMap = document.getElementById('Albania-Map');
var albaniaPin = document.getElementById('Albania-Pin');
var ethipioaMap = document.getElementById('Ethipoia-Map');
var ethipioaPin = document.getElementById('Ethiopia-Pin');

var countryText = document.getElementById('country-Name-wrldmp');
var statOne = document.getElementById('stat-one-wrldmp');
var statTwo = document.getElementById('stat-two-wrldmp');
var statThree = document.getElementById('stat-three-wrldmp');
var statFour = document.getElementById('stat-four-wrldmp');

var countryNameArr = ["United States", "Ethiopia", "Colombia", "Romania", "Ghana", "Haiti", "Albania"];
var peopleServedArr = ["700,019", "240,019", "100,018", "50,019", "220,019", "9,790", "700,019"];
var programsArr = ["389", "34", "9", "89", "39", "77", "38"];
var locationsArr = ["78", "5", "2", "23", "13", "4", "1"];
var expendituresArr = ["829", "35", "245", "8,480", "443", "463", "574"];

(function(){
  switchLocationStats(0);
})();

function switchLocationStats(countryIndex){
  countryText.textContent = countryNameArr[countryIndex];
  statOne.textContent = peopleServedArr[countryIndex];
  statTwo.textContent = programsArr[countryIndex];
  statThree.textContent = expendituresArr[countryIndex];
}

(function (){
  var winHeight = window.innerHeight;
  var sectionTitle = document.getElementById('section-title');
  var textSelector = ["Annual Report", "Motivated by Faith", "Global Impact", "Mission and Vision"];
  var target = document.querySelectorAll('.title-target');
  var animate = document.querySelectorAll('.animate');
  var firstElement = document.getElementById('first-element');
  var fixed = document.querySelectorAll('.fixed');
  var topHeaderHeight = document.getElementById('blogofixed').clientHeight;
  var topHeader = document.getElementById('blogofixed');
  var firstElementTop = firstElement.getBoundingClientRect().top;

  (function (){
    sectionTitle.textContent = textSelector[0];
  })();
  
    window.addEventListener('scroll', ()=>{

      // changes text on top left
      for(var i = 0; i < target.length; i++){
        var tmpTarget = target[i];
        var tyPos = tmpTarget.getBoundingClientRect().top;
        var x = 0;
        if((tyPos-topHeaderHeight) <= 0){
            if(i > textSelector.length){
              sectionTitle.textContent = textSelector[0];
            }
            else {
              sectionTitle.textContent = textSelector[i];
            }
        }
      }

      //change header color
      if((firstElementTop-topHeaderHeight) <= 0){
        topHeader.style.backgroundColor = '#ffffff';
      }
      else {
        topHeader.style.backgroundColor = 'transparent';
      }

      // fades in elements
      for(var a = 0; a < animate.length; a++){
        var tmpAnimate = animate[a];
        var ayPos = tmpAnimate.getBoundingClientRect().top;
          if(ayPos <= (winHeight/1.5)){
            tmpAnimate.classList.add('fade-in');
            tmpAnimate.classList.remove('animate');
          }
      }

      // remove fixed after a page is scrolled
      if(firstElementTop <= 0){
        for(var f = 0; f <= 2; f++){
          if($(fixed[f]).hasClass('fixed')){
            fixed[f].classList.remove('fixed');
          }
        }
      }
      else {
        for(var f = 0; f <= 2; f++){
          if(!($(fixed[f]).hasClass('fixed'))){
            fixed[f].classList.add('fixed');
          }
        }
      }

    });
      
})();