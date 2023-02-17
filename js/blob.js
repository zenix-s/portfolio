const blob = document.querySelector('.hideBlob');
const width = window.innerWidth;
const height = window.innerHeight;
// the blob follows the mouse
// document.addEventListener('mousemove', function(e) {
//     blob.animate([
//         { 
//             top : e.pageY + 'px',
//             left : e.pageX + 'px'
//         }
//     ], {
//         duration: 1000,
//         fill: 'forwards'
//     });
//     // console log the width of the blob element
//     // console.log(blob.clientWidth/2);
//     // if (e.pageX > width - blob.clientWidth/2) {
//     //     blob.style.left = width - 200 + 'px';
//     // }else if (e.pageX < blob.clientWidth/2) {
//     //     blob.style.left = 200 + 'px';
//     // }else {
//     //     blob.style.left = e.pageX + 'px';
//     // }

//     // if (e.pageY > height - blob.clientHeight/2) {
//     //     blob.style.top = height - 200 + 'px';
//     // }else if (e.pageY < blob.clientHeight/2) {
//     //     blob.style.top = 200 + 'px';
//     // }else {
//     //     blob.style.top = e.pageY + 'px';
//     // }
// });

setInterval(function() {
    blob.animate([
        { 
            top : Math.random() * height + 'px',
            left : Math.random() * width + 'px'
        }
    ], {
        duration: 5000,
        fill: 'forwards'
    });
}, 5000);