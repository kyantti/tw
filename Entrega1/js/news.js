// news.js

document.addEventListener("DOMContentLoaded", function() {
    // Get all the "Leer más" links
    const readMoreLinks = document.querySelectorAll('.read-more');

    // Add click event listener to each "Leer más" link
    readMoreLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Find the parent article element
            const article = link.closest("article");

            // Find the full-content div inside the article
            const fullContent = article.querySelector(".full-content");

            // Toggle the display of full-content
            fullContent.style.display = fullContent.style.display === 'none' ? 'block' : 'none';

            // Change the text of the link based on the full-content display state
            link.textContent = fullContent.style.display === 'none' ? 'Leer más' : 'Cerrar';
        });
    });
});
