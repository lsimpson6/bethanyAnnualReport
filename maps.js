
var countryName = document.getElementById('country-Name-wrldmp');
var numServed = document.getElementById('stat-one-wrldmp');
var numPrograms = document.getElementById('stat-two-wrldmp');
var numLocations = document.getElementById('stat-three-wrldmp');
var numExpenditures = document.getElementById('stat-four-wrldmp');

const states = [
{state: "Arkansas", served: "432", programs: "4", locations: "1", expenditures: "$218,682"}
];

const countries = [
    {country: "United States", served: "100,000", programs: "280", locations: "35", expenditures: "$218,682"},
    {country: "Colombia", served: "12,496", programs: "1", locations: "3", expenditures: "$472,665"},
    {country: "Ghana", served: "309", programs: "4", locations: "1", expenditures: "$370,726"},
    {country: "Ethiopia", served: "9,056", programs: "6", locations: "5", expenditures: "$1,777,025"},
    {country: "Haiti", served: "36", programs: "2", locations: "1", expenditures: "$307,886"},
    {country: "South Africa", served: "4,267", programs: "3", locations: "1", expenditures: "$247,577"},
    {country: "Albania", served: "189", programs: "3", locations: "1", expenditures: "$80,865"},
    {country: "Romania", served: "825", programs: "1", locations: "1", expenditures: "$108,039"}
];

/*const countries = {
  "gl-us": {country: "United States", served: "100,000", programs: "280", locations: "35", expenditures: "$218,682"},
  "gl-cl": {country: "Colombia", served: "12,496", programs: "1", locations: "3", expenditures: "$472,665"},
  "gl-gh": {country: "Ghana", served: "309", programs: "4", locations: "1", expenditures: "$370,726"},
  "gl-et": {country: "Ethiopia", served: "9,056", programs: "6", locations: "5", expenditures: "$1,777,025"},
  "gl-ht": {country: "Haiti", served: "36", programs: "2", locations: "1", expenditures: "$307,886"},
  "gl-sa": {country: "South Africa", served: "4,267", programs: "3", locations: "1", expenditures: "$247,577"},
  "gl-al": {country: "Albania", served: "189", programs: "3", locations: "1", expenditures: "$80,865"},
  "gl-rm": {country: "Romania", served: "825", programs: "1", locations: "1", expenditures: "$108,039"}
};
*/

function globalStats(index){
  var countries = c;
  countryName.textContent = c[index].country;
  numServed.textContent = c[index].served;
  numPrograms.textContent = c[index].programs;
  numLocations.textContent = c[index].locations;
  numExpenditures.textContent = c[index].expenditures;
}