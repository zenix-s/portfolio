const blob = document.querySelectorAll('.blob');
let width = window.innerWidth;
let height = window.innerHeight;

window.onresize = function() {
    width = window.innerWidth;
    height = window.innerHeight;
}

window.onload = function() {
    blob.forEach(function(item) {
        item.style.top = Math.random() * height + 'px';
        item.style.left = Math.random() * width + 'px';
        item.animate([
            { 
                top : Math.random() * height + 'px',
                left : Math.random() * width + 'px',
            }
        ], {
            duration: 10000,
            fill: 'forwards'
            
        });
    });
}

setInterval(function() {
    blob.forEach(function(item) {
        item.animate([
            { 
                top : Math.random() * height + 'px',
                left : Math.random() * width + 'px',
            }
        ], {
            duration: 10000,
            fill: 'forwards'
            
        });
    });
}, 10000);