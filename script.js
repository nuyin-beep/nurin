document.addEventListener('DOMContentLoaded', () => {
    // Menyerlahkan pautan aktif pada navigasi berdasarkan fail semasa
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.floating-menu a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});