var scrollBar = document.getElementById('site-progress');
var body = document.body, html = document.documentElement;
var h = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var w = window.innerWidth;
var screenHeight = screen.clientHeight;
var tmpWidthHeight = 0;
var oldValue = 0;
var onePercent = h*.01;


var amountScrolled = scrollY;
var barWidth = 0;
window.addEventListener('scroll', ()=>{


    if(amountScrolled = onePercent){
        barWidth ++;
        scrollBar.style.width = `${barWidth}%`;
        onePercent += onePercent;
    }
  

})
