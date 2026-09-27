// Homepage hero slideshow: crossfades .hero-slide backgrounds and keeps the photo credit in sync.
// The first slide is set in the HTML, so the page still has a photo without JavaScript.
(function () {
  var slides = document.querySelectorAll('.hero-slide');
  var credit = document.querySelector('.hero-credit');
  if (slides.length < 2 || !credit) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function esc(s) {
    return s.replace(/[&<>"]/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]; });
  }
  function load(slide) {
    if (!slide.style.backgroundImage) slide.style.backgroundImage = "url('" + slide.dataset.src + "')";
  }
  function showCredit(s) {
    credit.innerHTML = esc(s.dataset.label) + ' &middot; Photo: <a href="' + esc(s.dataset.page) +
      '" target="_blank" rel="noopener">' + esc(s.dataset.artist) + '</a>, <a href="' + esc(s.dataset.licenseUrl) +
      '" target="_blank" rel="noopener">' + esc(s.dataset.license) + '</a>';
  }

  // Fetch the remaining photos only after the page has finished loading.
  window.addEventListener('load', function () { Array.prototype.forEach.call(slides, load); });

  var i = 0;
  setInterval(function () {
    var next = (i + 1) % slides.length;
    load(slides[next]);
    slides[i].classList.remove('is-active');
    slides[next].classList.add('is-active');
    showCredit(slides[next]);
    i = next;
  }, 7000);
})();
