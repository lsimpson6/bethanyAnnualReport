(function (){
  var wmmIndex = 0;
  var winHeight = window.innerHeight;
  var sectionTitle = document.getElementById('section-title');
  var target = document.querySelectorAll('.title-target');
  var animate = document.querySelectorAll('.animate');
  var rainfall = document.querySelectorAll('.rainfall');
  var firstElement = document.getElementById('first-element');
  var fixed = document.querySelectorAll('.fixed');
  var topHeaderHeight = document.getElementById('blogofixed').clientHeight;
  var topHeader = document.getElementById('blogofixed');
  var bgOverlay = document.getElementById('bgdarkoverlay');
  var clickToMoveMap = document.querySelectorAll('.drag-to-move-map');
  var desktopOnly = document.querySelectorAll('.desktop-only');
  var voiletToWhite = document.querySelectorAll('.v2w');
  var tmpHeight;
  var paymentForm = document.querySelectorAll('.form-title-and-description');
  var wmmFade = document.querySelectorAll('.wmm-fade');


    window.addEventListener('load',()=>{


      for(let pt = 0; pt < paymentForm.length; pt ++){
        paymentForm[pt].classList.add('animate');
      }
      tmpHeight = 0;
      if(window.innerWidth < 768){
        tmpHeight = winHeight/1.5;
      }
      else {
        tmpHeight = winHeight/1.5;
      }
    });


    window.addEventListener('scroll', ()=>{
      var firstElementTop = firstElement.getBoundingClientRect().top;

      // changes text on top
      for(var i = 0; i < target.length; i++){
        var tmpTarget = target[i];
        var tyPos = tmpTarget.getBoundingClientRect().top;
        let targetTitle = tmpTarget.getAttribute('data-title');

        if((tyPos-(topHeaderHeight + 60)) <= 0){
            if(targetTitle != ""){
              sectionTitle.textContent = targetTitle
            }
            else {
              sectionTitle.textContent = "Annual Report"
            }
        }
      }

      if(wmmFade.length > 0){
          if(wmmIndex < wmmFade.length){
            setTimeout(()=>{
            let fadeTop = wmmFade[wmmIndex].getBoundingClientRect().top;
            if(fadeTop <= tmpHeight){
                wmmFade[wmmIndex].style = 'opacity:1;';
            }
            wmmIndex ++;
            }, 100) 
          }
      }

      //aniamte payment form 
      for(let pt = 0; pt < paymentForm.length; pt ++){
        var frmContent = paymentForm[pt].getBoundingClientRect().top;
        if(frmContent < winHeight){
          paymentForm[pt].classList.add('fade-in');
          paymentForm[pt].classList.remove('animate');
        }
      }

    // animate images 
    var img = document.querySelectorAll('.animate-img');

    for(var im = 0; im < img.length; im++){
      var imgTop = img[im].getBoundingClientRect().top;
      if(imgTop <= winHeight && ($(img[im]).hasClass('animate-img'))){
          if(imgTop <= winHeight){
            if($(img[im]).hasClass('animate-img')){
              img[im].classList.replace('animate-img','grow-image');
            }
          }
      }
    }

      //change header color
      if((firstElementTop-(topHeaderHeight + 60)) <= 0){
        topHeader.style.backgroundColor = '#ffffff';
        for(let headIndex = 0; headIndex < voiletToWhite.length; headIndex ++){
          voiletToWhite[headIndex].style.fill = "#473C93";
          voiletToWhite[headIndex].style.color = "#473C93";
        }
      }
      else {
        topHeader.style.backgroundColor = 'transparent';
        for(let headIndex = 0; headIndex < voiletToWhite.length; headIndex ++){
          voiletToWhite[headIndex].style.fill = "#ffffff";
          voiletToWhite[headIndex].style.color = "#ffffff";
        }
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

      var pieChart = document.querySelectorAll('.pie');
      for(var pc = 0; pc < pieChart.length; pc ++){
        let yPie = pieChart[pc].getBoundingClientRect().top;
        if(yPie < winHeight){
          pieChart[pc].classList.add('pie-animation');
        }
      }

      // rainfall effect on location pins
      for(let r = 0; r < rainfall.length; r++){
        var tmpRainfall = rainfall[r];
        var rainfallBottom = tmpRainfall.getBoundingClientRect().bottom;
        if(rainfallBottom < (tmpHeight*1.5)){
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

    // animate bar graphs
    var bars = document.querySelectorAll('.bar');
    var barWidth;
    var tmpBarWidth = 0;

    bars.forEach((bar)=>{
      var barWidth = bar.getAttribute('data-bar-width');
      var barPosFromTop = bar.getBoundingClientRect().top;

      if(barPosFromTop < winHeight){
          bar.classList.replace('width-zero', 'grow-bars');
      }

    });

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

function hideArrowsOnScroll(x, xMax, xScroll){
  let tmpXScroll = xScroll*1.5;
  if(x <= 0){
    prayerScrollBtn[0].classList.add('opacity-0');
  }else {
    prayerScrollBtn[0].classList.remove('opacity-0');
  }

  if(x >= (xMax + tmpXScroll)){
    prayerScrollBtn[1].classList.add('opacity-0');
  }else {
    prayerScrollBtn[1].classList.remove('opacity-0');
  }
}

prayerScrollBtn.forEach(btnPrayer => btnPrayer.addEventListener('click', ()=>{
  let prayerDirection = btnPrayer.getAttribute('data-prayer-slider');
  let scrollVal = 400;
  let boxs = document.querySelectorAll('.prayer-prompts');
  var xMax = prayerContainer.offsetWidth;

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

  hideArrowsOnScroll(tmpPrayerVal, xMax, scrollVal);

}));

var btnToggleMenu = document.getElementById('dropdown-menu-toggle');
var toggleMenu = document.getElementById('drop-down-menu');
var links = document.querySelectorAll('.inpagenav');

btnToggleMenu.addEventListener('click', ()=>{
  $(toggleMenu).toggleClass('show-dropdown-menu');
});

links.forEach(link => link.addEventListener('click', ()=>{
  $(toggleMenu).toggleClass('show-dropdown-menu');
}));

var scrollHints = document.querySelectorAll('.scroll-hint');
var scrollContainer = document.querySelectorAll('.scroll-maps-container');


scrollContainer.forEach(sClick => sClick.addEventListener('click', ()=>{
  hideHint(sClick);
}));

scrollContainer.forEach(sScrol => sScrol.addEventListener('scroll', ()=>{
  hideHint(sScrol);
}));


function hideHint(sc){
  var hintContainer = sc.getAttribute('data-scroll-maps-hint');
  for(var hint = 0; hint < scrollHints.length; hint++){
    var targetHint = scrollHints[hint].getAttribute('data-scroll-maps-hint');
    if(hintContainer == targetHint && ($(scrollHints[hint]).hasClass('d-flex'))){
      scrollHints[hint].classList.replace('d-flex','d-none');
    }  
  }
}