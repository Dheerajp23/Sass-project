const bar = document.querySelector('.bar');
    
    
    
const show = document.querySelector('.show');
document.querySelector('.bar').addEventListener('click', function() {
    

    if (show.style.visibility === 'hidden') {
        bar.style.transform = 'rotate(90deg)';
        bar.style.transition = 'linear 0.5s';
        show.style.visibility = 'visible';
        show.style.opacity = '1';
        show.style.transition = 'linear 0.5s';
    } else {
        bar.style.transform = 'rotate(0deg)';
        bar.style.transition = 'linear 0.5s';
        show.style.visibility = 'hidden';
        show.style.opacity = '0';
        show.style.transition = 'linear 0.5s';
    }
}
);


document.querySelectorAll('.linkss').forEach(function(link) {
    link.addEventListener('click', function() {
        bar.style.transform = 'rotate(0deg)';
        bar.style.transition = 'linear 0.5s';
        show.style.visibility = 'hidden';
        show.style.opacity = '0';
        show.style.transition = 'linear 0.5s';
    });
});