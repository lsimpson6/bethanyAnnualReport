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
{state: "Arkansas", served: "432", programs: "4", locations: "1", expenditures: "218,682"},
{state: "California", served: "4,168", programs: "21", locations: "6", expenditures: "5,500,779"},
{state: "Colorado & Texas", served: "1,569", programs: "5", locations: "4", expenditures: "2,318,021"},
{state: "Florida", served: "2,694", programs: "9", locations: "3", expenditures: "3,073,140"},
{state: "Georgia", served: "4,792", programs: "21", locations: "7", expenditures: "11,511,564"},
{state: "Illinois", served: "8,220", programs: "7", locations: "1", expenditures: "1,623,226"},
{state: "Indiana & Kentucky", served: "561", programs: "7", locations: "1", expenditures: "3,735,197"},
{state: "Maryland & DC", served: "1,001", programs: "9", locations: "2", expenditures: "3,575,705"},
{state: "Michigan", served: "13,951", programs: "66", locations: "13", expenditures: "69,373,037"},
{state: "Minnesota", served: "114", programs: "6", locations: "1", expenditures: "623,111"},
{state: "Missouri", served: "551", programs: "11", locations: "4", expenditures: "3,752,053"},
{state: "Nebraska & Iowa", served: "168", programs: "9", locations: "2", expenditures: "490,939"},
{state: "New England", served: "2,467", programs: "15", locations: "5", expenditures: "2,100,501"},
{state: "Mid Atlantic", served: "14,435", programs: "83", locations: "14", expenditures: "26,063,298"},
{state: "North Carolina", served: "439", programs: "5", locations: "2", expenditures: "2,863,739"},
{state: "South Carolina", served: "268", programs: "4", locations: "1", expenditures: "614,712"},
{state: "South Dakota", served: "119", programs: "2", locations: "2", expenditures: "348,560"},
{state: "Tennessee", served: "1,332", programs: "13", locations: "5", expenditures: "4,274,463"},
{state: "Virgnia", served: "1,330", programs: "7", locations: "1", expenditures: "958,299"},
{state: "Wisconsin", served: "189", programs: "9", locations: "2", expenditures: "2,899,742"},
{state: "Washington", served: "51", programs: "0", locations: "0", expenditures: "0"}
];

var servedSum;
var programSum; 
var locationSum;
var expenditureSum;

var unitedStatesSum = function(){
  for(var s = 0; s < states.length; s++){
    servedSum = Math.sum(states[s].served);
    programSum = Math.sum(states[s].programs);
    locationSum= Math.sum(states[s].locations);
    expenditureSum = Math.sum(states[s].expenditures);
  }
}

const countries = [
    {country: "United States", served: unitedStatesSum.servedSum, programs: unitedStatesSum.programSum, locations: unitedStatesSum.locationSum , expenditures: unitedStatesSum.expenditureSum},
    {country: "Colombia", served: "12,496", programs: "1", locations: "3", expenditures: "$472,665"},
    {country: "Ghana", served: "309", programs: "4", locations: "1", expenditures: "$370,726"},
    {country: "Ethiopia", served: "9,056", programs: "6", locations: "5", expenditures: "$1,777,025"},
    {country: "Haiti", served: "36", programs: "2", locations: "1", expenditures: "$307,886"},
    {country: "South Africa", served: "4,267", programs: "3", locations: "1", expenditures: "$247,577"},
    {country: "Albania", served: "189", programs: "3", locations: "1", expenditures: "$80,865"},
    {country: "Romania", served: "825", programs: "1", locations: "1", expenditures: "$108,039"}
];

function globalStats(index){
  countryName.textContent = countries[index].country;
  numServed.textContent = countries[index].served;
  numPrograms.textContent = countries[index].programs;
  numLocations.textContent = countries[index].locations;
  numExpenditures.textContent = "$" + countries[index].expenditures;
}