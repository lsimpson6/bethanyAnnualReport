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

var countryName = document.getElementById('country-Name-wrldmp');
var numServed = document.getElementById('stat-one-wrldmp');
var numPrograms = document.getElementById('stat-two-wrldmp');
var numLocations = document.getElementById('stat-three-wrldmp');
var numExpenditures = document.getElementById('stat-four-wrldmp');

(function(){
  switchLocationStats(0);
})();

function switchLocationStats(name, served, programs, locations, expenditures){
  countryText.textContent = name;
  numServed.textContent = served;
  numPrograms.textContent = programs
  numLocations.textContent = locations
  numExpenditures.textContent = expenditures
}

/*let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

console.log(USDollar.format(price));*/
