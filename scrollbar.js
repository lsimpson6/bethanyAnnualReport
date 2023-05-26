var scrollBar = document.getElementById('site-progress');
var body = document.body, html = document.documentElement;
var h = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var w = window.innerWidth;
var widthOverHeight = w/h;
var tmpWidthHeight = 0;

window.addEventListener('scroll', ()=>{
    tmpWidthHeight += widthOverHeight;
    scrollBar.style.width = `${tmpWidthHeight}px`;
})


