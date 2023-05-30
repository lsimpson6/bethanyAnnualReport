var scrollBar = document.getElementById('site-progress');
var body = document.body, html = document.documentElement;
var h = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var w = window.innerWidth;
var screenHeight = screen.clientHeight;
var tmpWidthHeight = 0;
var oldValue = 0;
var onePercent = screenHeight*.01;

for(var i = 0; i <= h; i + onePercent){
    console.log(i);
}


// get percent value scrolled
//var onePercent = screenHeight*.01;

//window.addEventListener('scroll', ()=>{

//    if(scrollY = )
    

//})


//        scrollBar.style.width = `${tmpWidthHeight}px`;