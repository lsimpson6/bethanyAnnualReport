var scrollBar = document.getElementById('site-progress');
var body = document.body, html = document.documentElement;
var h = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var w = window.innerWidth;
var scroll = scrollY;

window.addEventListener('scroll', ()=>{
    scrollBar.style.width = `${w/h}px`;
})


