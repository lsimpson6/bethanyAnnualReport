var scrollBar = document.getElementById('site-progress');
var body = document.body, html = document.documentElement;
var h = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var w = window.innerWidth;
var widthOverHeight = w/h;
var tmpWidthHeight = 0;
var oldValue = 0;

window.addEventListener('scroll', ()=>{
    
    newValue = window.pageYOffset;
    tmpWidthHeight += widthOverHeight;

    if(oldValue - newValue < 0){
        tmpWidthHeight -= widthOverHeight;
    } else if(oldValue - newValue > 0){
        tmpWidthHeight += widthOverHeight;
    }

    oldValue = newValue;
    scrollBar.style.width = `${tmpWidthHeight}px`;
})


