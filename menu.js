// menu.js

// Function to load external HTML files into a container
function loadHTML(containerId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;

            // Reattach the script to ensure it runs after loading
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
        });
}

// Load the menu when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadHTML('menu-container', 'menu.html');
});