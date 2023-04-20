(function (){
  var winHeight = window.innerHeight;
  var sectionTitle = document.getElementById('section-title');
  var textSelector = ["Annual Report", "Motivated by Faith", "Global Impact","Local Impact","Mission and Vision", "Wins and Highlights", "Video Testimonials", "In the U.S.", "Refugees and Immigrants", "Around the world", "Testimonials", "Financials", "Power of Family", "Pray with Us", "Support Bethany"];
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

      // changes text on top
      for(var i = 0; i < target.length; i++){
        var tmpTarget = target[i];
        var tyPos = tmpTarget.getBoundingClientRect().top;
        var x = 0;
        if((tyPos-(topHeaderHeight + 60)) <= 0){
            if(i > textSelector.length){
              sectionTitle.textContent = textSelector[0];
            }
            else {
              sectionTitle.textContent = textSelector[i];
            }
        }
      }

      //change header color
      if((firstElementTop-(topHeaderHeight + 60)) <= 0){
        topHeader.style.backgroundColor = '#ffffff';
          voiletToWhite[0].style.color = "#473C93";
          voiletToWhite[1].style.fill = "#473C93";
      }
      else {
        topHeader.style.backgroundColor = 'transparent';
        voiletToWhite[0].style.color = "#ffffff";
        voiletToWhite[1].style.fill = "#ffffff";
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
      var txtFadeBottom = txtFade[txt].getBoundingClientRect().bottom;

      if(window.innerWidth < 768){
        var fadeHeightLow = 200
        var fadeHeightHigh =  400;
      }
      else {
        fadeHeightLow = winHeight/1.5;
        fadeHeightHigh =  winHeight/2.5;
      }

      if(txtFadeTop > fadeHeightLow && txtFadeBottom > fadeHeightHigh){
        txtFade[txt].classList.replace('increase-opacity', 'defualt-opacity');
      }
      else {
        txtFade[txt].classList.replace('defualt-opacity', 'increase-opacity');
      }
    }

    // animate heart
    var heartSvg = document.getElementById('TODO-FILL');

    if(heartSvg.getBoundingClientRect().top < winHeight && ($(heartSvg).hasClass('todo'))){
      heartSvg.classList.add('fillheart');
      heartSvg.classList.remove('todo');
    }

    });
      
})();

// maps slider for mobile
var mapsControl = document.querySelectorAll('.scroll-arrow'); 
var countryContainerScroll = document.getElementById("country-scroll-container");
var regionContainerScroll = document.getElementById("region-scroll-container");
var tmpScrollValue = 0;

mapsControl.forEach(mapClick => mapClick.addEventListener('click', ()=>{
  let mapsData = mapClick.getAttribute('data-maps-slider');
  const scrollVal = 200;

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

var prayerContainer = document.getElementById('prayer-container');
var prayerScrollBtn = document.querySelectorAll('.scroll-arrows');
var prayerPromts = document.querySelectorAll('.prayer-prompts');
var tmpPrayerVal = 0;
var xMax = prayerContainer.scrollWidth;

function hideArrowsOnScroll(x){
  if(x <= 0){
    prayerScrollBtn[0].classList.add('opacity-0');
  }else {
    prayerScrollBtn[0].classList.remove('opacity-0');
  }

  if(x >= xMax){
    prayerScrollBtn[1].classList.add('opacity-0');
  }else {
    prayerScrollBtn[1].classList.remove('opacity-0');
  }
}

prayerScrollBtn.forEach(btnPrayer => btnPrayer.addEventListener('click', ()=>{
  let prayerDirection = btnPrayer.getAttribute('data-prayer-slider');
  let scrollVal = 400;

  if(window.innerWidth < 768){
    scrollVal = 150;
  }else {
    scrollVal = 400;
  }

  if(tmpPrayerVal >= (xMax+scrollVal)){
    tmpPrayerVal = (xMax + scrollVal);
  }else if(tmpPrayerVal < (0-scrollVal)) {
    tmpPrayerVal <= (0 - scrollVal);
  }

  switch(prayerDirection){
    case "left":
      tmpPrayerVal -= scrollVal;
      prayerContainer.scroll(tmpPrayerVal, 0);
      break;
    case "right":
      tmpPrayerVal += scrollVal;
      prayerContainer.scroll(tmpPrayerVal, 0);
      break;
  }

  hideArrowsOnScroll(tmpPrayerVal);

}));

var btnToggleMenu = document.getElementById('dropdown-menu-toggle');
var toggleMenu = document.getElementById('drop-down-menu');

btnToggleMenu.addEventListener('click', ()=>{
  $(toggleMenu).toggleClass('show-dropdown-menu');
});

var scrollHints = document.querySelectorAll('.scroll-hints');
var scrollContainer = document.querySelectorAll('.scroll-maps-container');

scrollContainer.forEach(sc => sc.addEventListener('click', ()=>{
    hintContainer = sc.getAttribute('data-scroll-maps-hint');
    for(var hint = 0; hint < scrollHints.length; hint++){
      targetHint = scrollHints[hint].getAttribute('data-scroll-maps-hint');
      if(hintContainer = targetHint){
        targetHint.classList.add('d-none');
      }  
    }
}));
