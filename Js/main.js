document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.carrusel', { delay: 500});

document.querySelector('#clase').addEventListener('click', (event)=>{
    event.preventDefault();
    
});

