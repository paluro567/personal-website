document.addEventListener("DOMContentLoaded", function () {
  // Hide sitemap link from nav if it appears
  var sitemapLink = document.querySelector('.md-nav__item a[href="sitemap.xml"]');
  if (sitemapLink) {
    sitemapLink.parentElement.style.display = "none";
  }
});
