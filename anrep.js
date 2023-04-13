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
  var clickToMoveMap = document.querySelectorAll('.drag-to-move-map');
  var bars = document.querySelectorAll('.bar-chart');

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
      }
      else {
        topHeader.style.backgroundColor = 'transparent';
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
      }
      else {
        for(let f = 0; f <= 2; f++){
          if(!($(fixed[f]).hasClass('fixed'))){
            fixed[f].classList.add('fixed');
          }
        }
      }

    // animate increase in need

      var increaseNeed = document.getElementById('percent-increase');
      var increaseNeedY = increaseNeed.getBoundingClientRect().top;
      var percent = 0;
      var percentValue = 130;

      if($(increaseNeed).hasClass('todo')){
        if(increaseNeedY <= winHeight){
          increaseNeed.classList.replace('todo', 'done');
          setInterval(() => {
            if(percent < percentValue){
              percent += 1;
            }
            increaseNeed.textContent = percent + "%";
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

var stateName = document.getElementById('state-name');
var stateServed = document.getElementById('state-people-served');
var statePrograms = document.getElementById('state-program-count');
var stateLocations = document.getElementById('state-location-count');
var stateExpenditures = document.getElementById('state-expenditure-total');

var countrySelected = document.querySelectorAll('.country');
var stateSelected = document.querySelectorAll('.state');

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
  "us-va": {state: "Virgnia", served: 1330, programs: 7, locations: 1, expenditures: 958299},
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

var isAutoRotateAllowed;

window.addEventListener('load', ()=>{
  globalStats("gl-us");
  stateStats("us-ak");
  isAutoRotateAllowed = true;
  autoSelectMaps(isAutoRotateAllowed);
})

countrySelected.forEach(c => c.addEventListener('click', ()=>{
    var id = c.getAttribute('data-country');
    globalStats(id);
    isAutoRotateAllowed = false;
    autoSelectMaps(isAutoRotateAllowed);
}))

stateSelected.forEach(s => s.addEventListener('click', ()=>{
    var id = s.getAttribute('data-state');
    stateStats(id);
    isAutoRotateAllowed = false;
    autoSelectMaps(isAutoRotateAllowed);
}))

function autoSelectMaps(isAllowed){
  var autoLoopCountries = 0;

  if(isAllowed){
    if(autoLoopCountries <= countriesArr.length){
      if(autoLoopCountries >= countriesArr.length){
        autoLoopCountries = 0;
      }
      setInterval(()=>{
        let tmpCountry = countriesArr[autoLoopCountries];
        globalStats(tmpCountry);
        autoLoopCountries ++;
      }, 3000);
    }
  }
}

function globalStats(value){
    unitedStatesSum();
    countryName.textContent = countries[value].country;
    var tmpServed = countries[value].served;
    globalServed.textContent = tmpServed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    globalPrograms.textContent = countries[value].programs;
    globalLocations.textContent = countries[value].locations;
    var tmpExpenditures = countries[value].expenditures;
    globalExpenditures.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tmpExpenditures);
}

function stateStats(value){
  stateName.textContent = states[value].state;
  var tmpServed = states[value].served;
  stateServed.textContent = tmpServed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  statePrograms.textContent = states[value].programs;
  stateLocations.textContent = states[value].locations;
  var tmpExpenditures = states[value].expenditures;
  stateExpenditures.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tmpExpenditures);
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

  slider(targetAttribute, tmpSlideIndex);

}))

function slider(targetAttr, slideIndex){
  var target = document.querySelectorAll(targetAttr);
  for(vid = 0; vid < target.length; vid++){
    if(vid != slideIndex){
      target[vid].classList.replace('d-flex', 'd-none');
    }
  }
  target[slideIndex].classList.replace('d-none', 'd-flex');
}