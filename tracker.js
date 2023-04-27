
const fs = require('fs')
    
var dropdownClick = document.getElementById('dropdown-menu-toggle');
var data;
var x = 0;

dropdownClick.addEventListener('click', ()=>{
    x++;
    data = x + " dropdown clicks";
})
    
fs.writeFile('https://cdn.jsdelivr.net/gh/lsimpson6/bethanyAnnualReport@f8fde236f71c24842f29067b04fb32570cf93ccc/tracker.txt', data, (err) => {
        
    if (err) throw err;
})