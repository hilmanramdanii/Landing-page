document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
        hamburgerIcon.style.display = nav.classList.contains('show') ? 'none' : 'block';
        closeIcon.style.display = nav.classList.contains('show') ? 'block' : 'none';
    });

    document.addEventListener('click', function(event) {
        const isClickInside = nav.contains(event.target) || menuToggle.contains(event.target);
        if (!isClickInside && nav.classList.contains('show')) {
            nav.classList.remove('show');
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('show');
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });
});