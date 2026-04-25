const sections = document.querySelectorAll('.animate-section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

document.getElementById('btnContact').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
});