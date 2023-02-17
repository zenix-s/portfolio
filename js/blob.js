const blob = document.querySelectorAll('.hideBlob');
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
            duration: 5000,
            fill: 'forwards'
            
        });
    });
}, 5000);