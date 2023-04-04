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

  (function (){
    sectionTitle.textContent = textSelector[0];
  })();
  
    window.addEventListener('scroll', ()=>{
      var firstElementTop = firstElement.getBoundingClientRect().top;

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

var countryName = document.getElementById('country-Name-wrldmp');
var numServed = document.getElementById('stat-one-wrldmp');
var numPrograms = document.getElementById('stat-two-wrldmp');
var numLocations = document.getElementById('stat-three-wrldmp');
var numExpenditures = document.getElementById('stat-four-wrldmp');

const states = [
  {state: "Arkansas", served: 432, programs: 4, locations: 1, expenditures: 218682},
  {state: "California", served: 4168, programs: 21, locations: 6, expenditures: 5500779},
  {state: "Colorado & Texas", served: 1569, programs: 5, locations: 4, expenditures: 2318021},
  {state: "Florida", served: 2694, programs: 9, locations: 3, expenditures: 3073140},
  {state: "Georgia", served: 4792, programs: 21, locations: 7, expenditures: 11511564},
  {state: "Illinois", served: 8220, programs: 7, locations: 1, expenditures: 1623226},
  {state: "Indiana & Kentucky", served: 561, programs: 7, locations: 1, expenditures: 3735197},
  {state: "Maryland & DC", served: 1001, programs: 9, locations: 2, expenditures: 3575705},
  {state: "Michigan", served: 13951, programs: 66, locations: 13, expenditures: 69373037},
  {state: "Minnesota", served: 114, programs: 6, locations: 1, expenditures: 623111},
  {state: "Missouri", served: 551, programs: 11, locations: 4, expenditures: 3752053},
  {state: "Nebraska & Iowa", served: 168, programs: 9, locations: 2, expenditures: 490939},
  {state: "New England", served: 2467, programs: 15, locations: 5, expenditures: 2100501},
  {state: "Mid Atlantic", served: 14435, programs: 83, locations: 14, expenditures: 26063298},
  {state: "North Carolina", served: 439, programs: 5, locations: 2, expenditures: 2863739},
  {state: "South Carolina", served: 268, programs: 4, locations: 1, expenditures: 614712},
  {state: "South Dakota", served: 119, programs: 2, locations: 2, expenditures: 348560},
  {state: "Tennessee", served: 1332, programs: 13, locations: 5, expenditures: 4274463},
  {state: "Virgnia", served: 1330, programs: 7, locations: 1, expenditures: 958299},
  {state: "Wisconsin", served: 189, programs: 9, locations: 2, expenditures: 2899742},
  {state: "Washington", served: 51, programs: 0, locations: 0, expenditures: 0}
];

var servedSum = 0;
var programSum = 0; 
var locationSum = 0;
var expenditureSum = 0;

var unitedStatesSum = function(){
  for(var s = 0; s <= states.length; s++){
    servedSum += parseInt(states[s].served);
    programSum += parseInt(states[s].programs);
    locationSum += parseInt(states[s].locations);
    expenditureSum += parseInt(states[s].expenditures);
  }
}

const countries = [
    {country: "United States", served: unitedStatesSum.servedSum, programs: unitedStatesSum.programSum, locations: unitedStatesSum.locationSum , expenditures: unitedStatesSum.expenditureSum},
    {country: "Colombia", served: "12,496", programs: "1", locations: "3", expenditures: "472,665"},
    {country: "Ghana", served: "309", programs: "4", locations: "1", expenditures: "370,726"},
    {country: "Ethiopia", served: "9,056", programs: "6", locations: "5", expenditures: "1,777,025"},
    {country: "Haiti", served: "36", programs: "2", locations: "1", expenditures: "307,886"},
    {country: "South Africa", served: "4,267", programs: "3", locations: "1", expenditures: "247,577"},
    {country: "Albania", served: "189", programs: "3", locations: "1", expenditures: "80,865"},
    {country: "Romania", served: "825", programs: "1", locations: "1", expenditures: "108,039"}
];

function globalStats(index){
  countryName.textContent = countries[index].country;
  numServed.textContent = countries[index].served;
  numPrograms.textContent = countries[index].programs;
  numLocations.textContent = countries[index].locations;
  numExpenditures.textContent = "$" + countries[index].expenditures;
}