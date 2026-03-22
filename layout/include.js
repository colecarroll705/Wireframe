document.addEventListener("DOMContentLoaded", function() {
    // Fetch and insert header
    fetch("/layout/header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".nav-container").innerHTML = data;
            
            const currentPage = window.location.pathname;
            const navLinks = document.querySelectorAll('.nav-container a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        });

    // Fetch and insert footer
    fetch("/layout/footer.html")
        .then(response => response.text())
        .then(data => {
            const footer = document.createElement('div');
            footer.className = 'footer-container';
            footer.innerHTML = data;
            document.body.appendChild(footer);
        });
});