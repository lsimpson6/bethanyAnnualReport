var scrollBar = document.getElementById('site-progress');
var h = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var w = window.innerWidth;
var scroll = scrollY;

window.addEventListener('scroll', ()=>{
    scrollBar.style.width = `${w/h}px`;
})


