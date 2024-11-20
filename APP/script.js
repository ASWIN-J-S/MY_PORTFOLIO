document.getElementById('menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when any link inside it is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function () {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.add('hidden');
    });
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



window.addEventListener('scroll', function () {
    const progressBar = document.getElementById('progress-bar');
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = document.documentElement.scrollTop;
    const scrollPercentage = (scrollPosition / scrollTotal) * 100;

    // Update the width of the progress bar
    progressBar.style.width = `${scrollPercentage}%`;
});