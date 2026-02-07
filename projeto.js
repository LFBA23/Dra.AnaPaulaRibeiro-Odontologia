// Efeito no header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 80) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        header.style.padding = '15px 0';
    }
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});