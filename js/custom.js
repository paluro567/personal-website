// js/custom.js
document.addEventListener("DOMContentLoaded", function() {
    var sitemapLink = document.querySelector('.md-nav__item a[href="sitemap.xml"]');
    if (sitemapLink) {
        sitemapLink.parentElement.style.display = "none";
    }
});
