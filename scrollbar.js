var scrollBar = document.getElementById('site-progress');
var body = document.body, html = document.documentElement;
var h = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var w = window.innerWidth;
var screenHeight = window.screenHeight;
var tmpWidthHeight = 0;
var oldValue = 0;

window.addEventListener('scroll', ()=>{
    
    var incr = (h-screenHeight)/w;
    newValue = window.pageYOffset;

    if(oldValue - newValue < 0){
        tmpWidthHeight += incr;
    } else if(oldValue - newValue > 0){
        tmpWidthHeight -= incr;
    }

    oldValue = newValue;
    scrollBar.style.width = `${tmpWidthHeight}px`;
})


