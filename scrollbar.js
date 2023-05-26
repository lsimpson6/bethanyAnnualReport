var scrollBar = document.getElementById('site-progress');
var body = document.body, html = document.documentElement;
var h = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var w = window.innerWidth;
var scroll = scrollY;
var widthOverHeight = w/h;

window.addEventListener('scroll', ()=>{
    let tmpWidthHeight = 0;
    tmpWidthHeight += widthOverHeight;
    scrollBar.style.width = `${tmpWidthHeight}px`;
})


