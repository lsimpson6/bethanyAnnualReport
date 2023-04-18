(function (){
  var winHeight = window.innerHeight;
  var sectionTitle = document.getElementById('section-title');
  var textSelector = ["Annual Report", "Motivated by Faith", "Global Impact","Local Impact", "Mission and Vision", "Wins and Highlights"];
  var target = document.querySelectorAll('.title-target');
  var animate = document.querySelectorAll('.animate');
  var rainfall = document.querySelectorAll('.rainfall');
  var firstElement = document.getElementById('first-element');
  var fixed = document.querySelectorAll('.fixed');
  var topHeaderHeight = document.getElementById('blogofixed').clientHeight;
  var topHeader = document.getElementById('blogofixed');
  var bgOverlay = document.getElementById('bgdarkoverlay');
  var clickToMoveMap = document.querySelectorAll('.drag-to-move-map');
  var bars = document.querySelectorAll('.bar-chart');
  var desktopOnly = document.querySelectorAll('.desktop-only');
  var voiletToWhite = document.querySelectorAll('.v2w');

  var tmpHeight = 0;
  if(window.innerWidth < 768){
    tmpHeight = winHeight/1.5;
  }
  else {
    tmpHeight = winHeight/1.5;
  }

  sectionTitle.textContent = textSelector[0];
  
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
          voiletToWhite[0].style.color = "#473C93";
      }
      else {
        topHeader.style.backgroundColor = 'transparent';
        voiletToWhite[0].style.color = "#ffffff";
      }

      // fades in elements
      for(let a = 0; a < animate.length; a++){
        let tmpAnimate = animate[a];
        let ayPos = tmpAnimate.getBoundingClientRect().top;
          if(ayPos <= tmpHeight){
            tmpAnimate.classList.add('fade-in');
            tmpAnimate.classList.remove('animate');
          }
      }

      // rainfall effect on location pins
      for(let r = 0; r < rainfall.length; r++){
        var tmpRainfall = rainfall[r];
        var rainfallBottom = tmpRainfall.getBoundingClientRect().bottom;
        if(rainfallBottom < tmpHeight){
          tmpRainfall.classList.add('rainfall-animation');
          tmpRainfall.classList.remove('rainfall');
        }        
      }

      // remove fixed after a page is scrolled
      if(firstElementTop <= 0){
        for(let f = 0; f <= 2; f++){
          if($(fixed[f]).hasClass('fixed')){
            fixed[f].classList.remove('fixed');
          }
        }
        bgOverlay.classList.add('d-none');
      }
      else {
        for(let f = 0; f <= 2; f++){
          if(!($(fixed[f]).hasClass('fixed'))){
            fixed[f].classList.add('fixed');
          }
        }
        bgOverlay.classList.remove('d-none');
      }

    // animate increase in need

      var perOfFunds = document.getElementById('percent-of-funds');
      var perOfFundsTop = perOfFunds.getBoundingClientRect().top;
      var percent = 50;
      var percentValue = 85.5;

      if($(perOfFunds).hasClass('todo')){
        if(perOfFundsTop <= winHeight){
          perOfFunds.classList.replace('todo', 'done');
          setInterval(() => {
            if(percent < percentValue){
              percent += .5;
            }
            perOfFunds.textContent = percent;
          }, 10);
        }
      }

    // animate images 
    var img = document.querySelectorAll('.animate-img');

    for(var im = 0; im < img.length; im++){
      var imgTop = img[im].getBoundingClientRect().top;
      if(imgTop <=tmpHeight/1.2){
        if($(img[im]).hasClass('animate-img')){
          img[im].classList.replace('animate-img','grow-image');
        }
      }
    }

    // change text opacity
    var txtFade = document.querySelectorAll('.fade-text-items');

    for(var txt = 0; txt < txtFade.length; txt ++){
      var txtFadeTop = txtFade[txt].getBoundingClientRect().top;

      if(txtFadeTop > winHeight/1.6 || txtFadeTop < winHeight/2.6){
        txtFade[txt].classList.replace('increase-opacity', 'defualt-opacity');
      }
      else {
        txtFade[txt].classList.replace('defualt-opacity', 'increase-opacity');
      }
    }

    });
      
})();

var servedSum = 0;
var programSum = 0; 
var locationSum = 0;
var expenditureSum = 0;

var countryName = document.getElementById('country-Name-wrldmp');
var globalServed = document.getElementById('stat-one-wrldmp');
var globalPrograms = document.getElementById('stat-two-wrldmp');
var globalLocations = document.getElementById('stat-three-wrldmp');
var globalExpenditures = document.getElementById('stat-four-wrldmp');

if(window.innerWidth < 768){
    var regionName = document.getElementById('state-name');
    var regionServed = document.getElementById('state-people-served');
    var regionPrograms = document.getElementById('state-program-count');
    var regionLocations = document.getElementById('state-location-count');
    var regionExpenditures = document.getElementById('state-expenditure-total');
}
else {
  var stateName = document.getElementById('state-name');
  var stateServed = document.getElementById('state-people-served');
  var statePrograms = document.getElementById('state-program-count');
  var stateLocations = document.getElementById('state-location-count');
  var stateExpenditures = document.getElementById('state-expenditure-total');
}

var countrySelected = document.querySelectorAll('.country');
var stateSelected = document.querySelectorAll('.state');
var regionSelected = document.querySelectorAll('.region');

var pacServedSum = 0;
var pacProgramSum = 0; 
var pacLocationSum = 0;
var pacExpenditureSum = 0;

var swServedSum = 0;
var swProgramSum = 0; 
var swLocationSum = 0;
var swExpenditureSum = 0;

var mwServedSum = 0;
var mwProgramSum = 0; 
var mwLocationSum = 0;
var mwExpenditureSum = 0;

var seServedSum = 0;
var seProgramSum = 0; 
var seLocationSum = 0;
var seExpenditureSum = 0;

var maServedSum = 0;
var maProgramSum = 0; 
var maLocationSum = 0;
var maExpenditureSum = 0;

var neServedSum = 0;
var neProgramSum = 0; 
var neLocationSum = 0;
var neExpenditureSum = 0;

const states = {
  "us-ak": {state: "Arkansas", served: 432, programs: 4, locations: 1, expenditures: 218682},
  "us-ca": {state: "California", served: 4168, programs: 21, locations: 6, expenditures: 5500779},
  "us-co-tx": {state: "Colorado & Texas", served: 1569, programs: 5, locations: 4, expenditures: 2318021},
  "us-fl": {state: "Florida", served: 2694, programs: 9, locations: 3, expenditures: 3073140},
  "us-ga": {state: "Georgia", served: 4792, programs: 21, locations: 7, expenditures: 11511564},
  "us-il": {state: "Illinois", served: 8220, programs: 7, locations: 1, expenditures: 1623226},
  "us-in-ky": {state: "Indiana & Kentucky", served: 561, programs: 7, locations: 1, expenditures: 3735197},
  "us-md-dc": {state: "Maryland & DC", served: 1001, programs: 9, locations: 2, expenditures: 3575705},
  "us-mi": {state: "Michigan", served: 13951, programs: 66, locations: 13, expenditures: 69373037},
  "us-mn": {state: "Minnesota", served: 114, programs: 6, locations: 1, expenditures: 623111},
  "us-mo": {state: "Missouri", served: 551, programs: 11, locations: 4, expenditures: 3752053},
  "us-ne-ia": {state: "Nebraska & Iowa", served: 168, programs: 9, locations: 2, expenditures: 490939},
  "us-new-eng": {state: "New England", served: 2467, programs: 15, locations: 5, expenditures: 2100501},
  "us-mid-atlantic": {state: "Mid Atlantic", served: 14435, programs: 83, locations: 14, expenditures: 26063298},
  "us-nc": {state: "North Carolina", served: 439, programs: 5, locations: 2, expenditures: 2863739},
  "us-sc": {state: "South Carolina", served: 268, programs: 4, locations: 1, expenditures: 614712},
  "us-sd": {state: "South Dakota", served: 119, programs: 2, locations: 2, expenditures: 348560},
  "us-tn": {state: "Tennessee", served: 1332, programs: 13, locations: 5, expenditures: 4274463},
  "us-va": {state: "Virginia", served: 1330, programs: 7, locations: 1, expenditures: 958299},
  "us-wi": {state: "Wisconsin", served: 189, programs: 9, locations: 2, expenditures: 2899742},
  "us-wa": {state: "Washington", served: 51, programs: 0, locations: 0, expenditures: 0}
};

const statesSumArr = ["us-ak", "us-ca","us-co-tx", "us-fl", "us-ga", "us-il", "us-in-ky","us-md-dc", "us-mi", 
  "us-mn", "us-mo","us-ne-ia", "us-new-eng","us-mid-atlantic", "us-nc", "us-sc","us-sd", "us-sc", "us-tn","us-va", "us-wi", "us-wa"];


function unitedStatesSum(){

  for(var s = 0; s < statesSumArr.length; s++){
    servedSum += states[statesSumArr[s]].served;
    programSum += states[statesSumArr[s]].programs;
    locationSum += states[statesSumArr[s]].locations;
    expenditureSum += states[statesSumArr[s]].expenditures;
  }

}

const pacific = ["us-wa", "us-ca"];

function pacificSums(){
  for(let pac = 0; pac < pacific.length; pac++){
    pacServedSum += states[pacific[pac]].served;
    pacProgramSum += states[pacific[pac]].programs;
    pacLocationSum += states[pacific[pac]].locations;
    pacExpenditureSum += states[pacific[pac]].expenditures;
  }
}

const southwest = ["us-co-tx"];

function southwestSums(){
  for(let sw = 0; sw < southwest.length; sw++){
    swServedSum += states[southwest[sw]].served;
    swProgramSum += states[southwest[sw]].programs;
    swLocationSum += states[southwest[sw]].locations;
    swExpenditureSum += states[southwest[sw]].expenditures;
  }
}

const midwest = ["us-sd", "us-ne-ia", "us-mn", "us-wi", "us-mi", "us-il", "us-in-ky", "us-mo"];

function midwestSums(){
  for(let mw = 0; mw < midwest.length; mw++){
    mwServedSum += states[midwest[mw]].served;
    mwProgramSum += states[midwest[mw]].programs;
    mwLocationSum += states[midwest[mw]].locations;
    mwExpenditureSum += states[midwest[mw]].expenditures;
  }
}

const southeast = ["us-ak", "us-tn", "us-va", "us-nc", "us-sc", "us-ga", "us-fl"];

function southeastSums(){
  for(let se = 0; se < southeast.length; se++){
    seServedSum += states[southeast[se]].served;
    seProgramSum += states[southeast[se]].programs;
    seLocationSum += states[southeast[se]].locations;
    seExpenditureSum += states[southeast[se]].expenditures;
  }
}

const midatlantic = ["us-mid-atlantic", "us-md-dc"];

function midatlanticSums(){
  for(let ma = 0; ma < midatlantic.length; ma++){
    maServedSum += states[midatlantic[ma]].served;
    maProgramSum += states[midatlantic[ma]].programs;
    maLocationSum += states[midatlantic[ma]].locations;
    maExpenditureSum += states[midatlantic[ma]].expenditures;
  }
}

unitedStatesSum();

const countries = {
  "gl-us": {country: "United States", served: servedSum, programs: programSum, locations: locationSum , expenditures: expenditureSum},
  "gl-col": {country: "Colombia", served: 12496, programs: 1, locations: 3, expenditures: 472665},
  "gl-gh": {country: "Ghana", served: 309, programs: 4, locations: 1, expenditures: 370726},
  "gl-et": {country: "Ethiopia", served: 9056, programs: 6, locations: 5, expenditures: 1777025},
  "gl-ht": {country: "Haiti", served: 36, programs: 2, locations: 1, expenditures: 307886},
  "gl-sa": {country: "South Africa", served: 4267, programs: 3, locations: 1, expenditures: 247577},
  "gl-al": {country: "Albania", served: 189, programs: 3, locations: 1, expenditures: 80865},
  "gl-rm": {country: "Romania", served: 825, programs: 1, locations: 1, expenditures: 108039}
};


const countriesArr = ["gl-us","gl-col", "gl-gh", "gl-et", "gl-ht", "gl-sa", "gl-al", "gl-rm"];

midatlanticSums();
southeastSums();
midwestSums();
southwestSums();
pacificSums();

const regions = {
  "reg-pa": {region: "Pacific Region", served: pacServedSum, programs: pacProgramSum, locations: pacLocationSum , expenditures: pacExpenditureSum},
  "reg-sw": {region: "Southwest Region", served: swServedSum, programs: swProgramSum, locations: swLocationSum, expenditures: swExpenditureSum},
  "reg-mw": {region: "Mid-West Region", served: mwServedSum, programs: mwProgramSum, locations: mwLocationSum, expenditures: mwExpenditureSum},
  "reg-se": {region: "Southeast Region", served: seServedSum, programs: seProgramSum, locations: seLocationSum, expenditures: seExpenditureSum},
  "reg-ma": {region: "Mid-Atlanic Region", served: maServedSum, programs: maProgramSum, locations: maLocationSum, expenditures: maExpenditureSum},
  "reg-ne": {region: "New England Region", served: states["us-new-eng"].served, programs: states["us-new-eng"].programs, locations: states["us-new-eng"].locations, expenditures: states["us-new-eng"].expenditures}
};

window.addEventListener('load', ()=>{
  globalStats("gl-us");
  if(window.innerWidth < 768){
    regionStats("reg-pa")
  }
  else {
    stateStats("us-ak");
  }
})

countrySelected.forEach(c => c.addEventListener('click', ()=>{
    let id = c.getAttribute('data-country');
    globalStats(id);
}))

stateSelected.forEach(s => s.addEventListener('click', ()=>{
  let id = s.getAttribute('data-state');
    stateStats(id);
}))

regionSelected.forEach(r => r.addEventListener('click', ()=>{
  let id = r.getAttribute('data-region');
  regionStats(id);
}))

/* function autoSelectCountries(isAllowed){
  var autoLoopCountries = 0;
  if(isAllowed){
    if(autoLoopCountries <= countriesArr.length){
      setInterval(()=>{
        if(autoLoopCountries == countriesArr.length){
          autoLoopCountries = 0;
        }
        let tmpCountry = countriesArr[autoLoopCountries];
        globalStats(tmpCountry);
        autoLoopCountries ++;
      }, 3000);
    }
  }
}

function autoSelectStates(isAllowed){
  var autoLoopStates = 0;
  if(isAllowed){
    if(autoLoopStates <= statesSumArr.length){
      setInterval(()=>{
        if(autoLoopStates == statesSumArr.length){
          autoLoopStates = 0;
        }
        let tmpState = statesSumArr[autoLoopStates];
        stateStats(tmpState);
        autoLoopStates ++;

      }, 3000);
    }
  }
} */


function globalStats(value){
    unitedStatesSum();
    countryName.textContent = countries[value].country;
    let tmpServed = countries[value].served;
    globalServed.textContent = tmpServed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    globalPrograms.textContent = countries[value].programs;
    globalLocations.textContent = countries[value].locations;
    let tmpExpenditures = countries[value].expenditures;
    globalExpenditures.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tmpExpenditures);
}

function stateStats(value){
  stateName.textContent = states[value].state;
  let tmpServed = states[value].served;
  stateServed.textContent = tmpServed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  statePrograms.textContent = states[value].programs;
  stateLocations.textContent = states[value].locations;
  let tmpExpenditures = states[value].expenditures;
  stateExpenditures.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tmpExpenditures);
}

function regionStats(value){
  regionName.textContent = regions[value].region;
  let tmpServed = regions[value].served;
  regionServed.textContent = tmpServed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  regionPrograms.textContent = regions[value].programs;
  regionLocations.textContent = regions[value].locations;
  let tmpExpenditures = regions[value].expenditures;
  regionExpenditures.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tmpExpenditures);
}


// control the text and image picker

  var slides = document.querySelectorAll('.selector-items-container');
  var btnSlide = document.querySelectorAll('.title-controls');

  function winsHighlightSlider(value){
    if($(slides[value]).hasClass('d-none')){
      for(var tmpVal = 0; tmpVal < slides.length; tmpVal ++){
        if(tmpVal != value){
          slides[tmpVal].classList.replace('d-flex', 'd-none');
          btnSlide[tmpVal].classList.replace('tc-active', 'tc-inactive');
        }
      }

      slides[value].classList.replace('d-none', 'd-flex');
      btnSlide[value].classList.replace('tc-inactive', 'tc-active');
    }
  }

// video and image slideshow
var btnSlideControls = document.querySelectorAll('.slider-control');
var tmpSlideIndex = 0;

btnSlideControls.forEach(btnClick => btnClick.addEventListener('click', ()=>{

  var slideType = btnClick.getAttribute('data-slider-controls');
  var direction = btnClick.getAttribute('data-slider-direction');
  var targetAttribute;

  if(slideType == "video-slider"){
    targetAttribute = ".video-slider-items";
  }else if(slideType == "image-text-slider") {
    targetAttribute = ".image-slider-items";
    
  }

  if(direction == "prev"){
    tmpSlideIndex --;
  }else if (direction == "next"){
    tmpSlideIndex ++;
  }

  if(tmpSlideIndex > 2){
    tmpSlideIndex = 0;
  }else if(tmpSlideIndex < 0){
    tmpSlideIndex = 2;
  }

  slider(targetAttribute, tmpSlideIndex, direction);

}))

function slider(targetAttr, slideIndex, dir){
  var target = document.querySelectorAll(targetAttr);
  for(vid = 0; vid < target.length; vid++){
    if(vid != slideIndex){
      target[vid].classList.replace('d-flex', 'd-none');
      target[vid].classList.replace('swipe-right', 'swipe-slideshow');
      target[vid].classList.replace('swipe-left', 'swipe-slideshow');
    }
  }
  if(dir == "prev"){
    target[slideIndex].classList.replace('swipe-slideshow', 'swipe-right');
  }else if(dir == "next"){
    target[slideIndex].classList.replace('swipe-slideshow', 'swipe-left');
  }
  target[slideIndex].classList.replace('d-none', 'd-flex');
}

// maps slider for mobile
var mapsControl = document.querySelectorAll('.scroll-arrow'); 
var countryContainerScroll = document.getElementById("country-scroll-container");
var regionContainerScroll = document.getElementById("region-scroll-container");
var tmpScrollValue = 0;

mapsControl.forEach(mapClick => mapClick.addEventListener('click', ()=>{
  let mapsData = mapClick.getAttribute('data-maps-slider');
  const scrollVal = 100;

  switch(mapsData){
    case "country-left":
      tmpScrollValue -= scrollVal;
      countryContainerScroll.scroll(tmpScrollValue, 0);
      break;
    case "country-right":
      tmpScrollValue += scrollVal;
      countryContainerScroll.scroll(tmpScrollValue, 0);
      break;
    case "region-left":
      tmpScrollValue -= scrollVal;
      regionContainerScroll.scroll(tmpScrollValue, 0);
      break;
    case "region-right":
      tmpScrollValue += scrollVal;
      regionContainerScroll.scroll(tmpScrollValue, 0);
      break;
  }

}));