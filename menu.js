// menu.js

// Function to load external HTML files into a container
function loadHTML(containerId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;

            // If loading the menu, reattach the script to ensure it runs
            if (url === 'menu.html') {
                var script = document.createElement('script');
                script.textContent = `
                    function toggleMenu() {
                        var menu = document.getElementById('menuItems');
                        if (menu.style.display === 'block') {
                            menu.style.display = 'none';
                        } else {
                            menu.style.display = 'block';
                        }
                    }
                `;
                document.body.appendChild(script);
            }
        });
}

// Load the header and menu when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadHTML('header-container', 'header.html');
    loadHTML('menu-container', 'menu.html');
});