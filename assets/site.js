// Site behavior that used to come from Weebly's main.js and the theme's jQuery-based custom.js:
// desktop dropdown menus, the mobile menu, submenu carets, the sticky header, and the fade-in.
(function () {
  var body = document.body;
  body.classList.add('fade-in');

  // Sticky header: the theme styles body.affix once the page has scrolled.
  function checkHeader() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (y > 50) body.classList.add('affix');
    else if (y === 0) body.classList.remove('affix');
  }
  checkHeader();
  window.addEventListener('scroll', checkHeader, { passive: true });

  function childWrap(li) {
    for (var i = 0; i < li.children.length; i++) {
      if (li.children[i].classList.contains('wsite-menu-wrap')) return li.children[i];
    }
    return null;
  }

  // Carets on items that have submenus (the theme uses them in the mobile menu).
  document.querySelectorAll('.wsite-menu-default li.wsite-menu-item-wrap, .wsite-menu li.wsite-menu-subitem-wrap').forEach(function (li) {
    if (!childWrap(li)) return;
    li.classList.add('has-submenu');
    var link = li.querySelector('a');
    if (link && link.parentElement === li) {
      var caret = document.createElement('span');
      caret.className = 'icon-caret';
      link.insertAdjacentElement('afterend', caret);
    }
  });

  // Mobile menu: hamburger toggles the panel, carets toggle submenus.
  // Both the header hamburger and the close (X) button inside the mobile panel toggle it.
  document.querySelectorAll('label.hamburger').forEach(function (btn) {
    btn.addEventListener('click', function () { body.classList.toggle('nav-open'); });
  });
  document.querySelectorAll('.mobile-nav li.has-submenu > span.icon-caret').forEach(function (caret) {
    caret.addEventListener('click', function () {
      var wrap = childWrap(caret.parentElement);
      if (wrap) wrap.classList.toggle('open');
    });
  });
  if (window.innerWidth < 1024) {
    document.querySelectorAll('.mobile-nav li.wsite-menu-subitem-wrap.wsite-nav-current').forEach(function (li) {
      for (var el = li.parentElement; el && !el.classList.contains('mobile-nav'); el = el.parentElement) {
        if (el.classList.contains('wsite-menu-wrap')) el.classList.add('open');
      }
    });
  }

  // Desktop dropdowns. The theme styles flyouts only inside #wsite-menus (placed in the header),
  // so the open submenu moves there, positioned under its menu item, and moves back when closed.
  var header = document.querySelector('.birdseye-header');
  var nav = document.querySelector('.desktop-nav .wsite-menu-default');
  if (!header || !nav) return;
  var host = document.createElement('div');
  host.id = 'wsite-menus';
  header.appendChild(host);
  var current = null;   // { li, wrap } of the open top-level menu
  var closeTimer = null;

  function isTopItem(li) { return li && li.parentElement === nav; }
  function hideNested(wrap) { wrap.querySelectorAll('.wsite-menu-wrap').forEach(function (w) { w.style.display = 'none'; }); }
  function closeMenu() {
    clearTimeout(closeTimer);
    if (!current) return;
    hideNested(current.wrap);
    current.wrap.style.display = 'none';
    current.li.appendChild(current.wrap);
    current = null;
  }
  function closeSoon() { clearTimeout(closeTimer); closeTimer = setTimeout(closeMenu, 150); }
  function openMenu(li) {
    clearTimeout(closeTimer);
    if (current && current.li === li) return;
    closeMenu();
    var wrap = childWrap(li);
    if (!wrap) return;
    host.appendChild(wrap);
    var h = header.getBoundingClientRect(), r = li.getBoundingClientRect();
    wrap.style.position = 'absolute';
    wrap.style.top = (r.bottom - h.top) + 'px';
    wrap.style.display = 'block';
    var left = r.left - h.left, maxLeft = document.documentElement.clientWidth - h.left - wrap.offsetWidth - 8;
    wrap.style.left = Math.max(0, Math.min(left, maxLeft)) + 'px';
    current = { li: li, wrap: wrap };
  }
  // Inside an open menu, show exactly the nested submenus along the path to the target.
  function syncNested(target) {
    if (!current) return;
    current.wrap.querySelectorAll('.wsite-menu-wrap').forEach(function (w) {
      var parentLi = w.parentElement;
      if (parentLi.contains(target)) {
        w.style.position = 'absolute';
        w.style.top = '0px';
        w.style.display = 'block';
        var room = document.documentElement.clientWidth - parentLi.getBoundingClientRect().right;
        w.style.left = (room >= w.offsetWidth ? parentLi.offsetWidth : -w.offsetWidth) + 'px';
      } else {
        w.style.display = 'none';
      }
    });
  }
  function track(target) {
    var li = target.closest ? target.closest('li') : null;
    while (li && !isTopItem(li) && nav.contains(li)) li = li.parentElement.closest('li');
    if (li && isTopItem(li)) { openMenu(li); return; }
    if (host.contains(target)) { clearTimeout(closeTimer); syncNested(target); return; }
    if (current) closeSoon();
  }
  document.addEventListener('mouseover', function (e) { track(e.target); });
  document.addEventListener('focusin', function (e) {
    track(e.target);
    if (current && !current.li.contains(e.target) && !host.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || !current) return;
    var link = current.li.querySelector('a');
    closeMenu();
    if (link) link.focus();
  });

  // "more..." menu: when the top bar would wrap (or squeeze the site title onto two lines),
  // trailing items move into a "more..." dropdown, as Weebly's navigation did.
  var items = Array.prototype.slice.call(nav.children);
  var more = document.createElement('li');
  more.className = 'wsite-menu-item-wrap wsite-nav-more';
  more.innerHTML = '<a class="wsite-menu-item" href="#" aria-haspopup="true">more...</a>' +
                   '<div class="wsite-menu-wrap" style="display:none"><ul class="wsite-menu"></ul></div>';
  var moreList = more.querySelector('ul');
  more.querySelector('a').addEventListener('click', function (e) { e.preventDefault(); openMenu(more); });
  var title = document.getElementById('wsite-title');

  function fits() {
    var visible = Array.prototype.filter.call(nav.children, function (li) { return li.offsetParent; });
    if (!visible.length) return true;
    var top = visible[0].offsetTop;
    var oneRow = visible.every(function (li) { return li.offsetTop === top; });
    var titleOneLine = !title || title.getClientRects().length <= 1;
    return oneRow && titleOneLine;
  }
  function asSubitem(li, on) {
    var a = li.querySelector('a');
    li.classList.toggle('wsite-menu-item-wrap', !on);
    li.classList.toggle('wsite-menu-subitem-wrap', on);
    if (!a || a.parentElement !== li) return;
    a.classList.toggle('wsite-menu-item', !on);
    a.classList.toggle('wsite-menu-subitem', on);
    // dropdown items wrap their text in span.wsite-menu-title, which the theme pads
    var span = a.querySelector(':scope > span.wsite-menu-title[data-more]');
    if (on && !span) {
      span = document.createElement('span');
      span.className = 'wsite-menu-title';
      span.setAttribute('data-more', '');
      while (a.firstChild) span.appendChild(a.firstChild);
      a.appendChild(span);
    } else if (!on && span) {
      while (span.firstChild) a.insertBefore(span.firstChild, span);
      a.removeChild(span);
    }
  }
  function layout() {
    closeMenu();
    items.forEach(function (li) { asSubitem(li, false); nav.appendChild(li); });   // restore original order
    if (more.parentElement) more.parentElement.removeChild(more);
    if (!nav.offsetParent || fits()) return;                 // desktop nav hidden (mobile) or everything fits
    nav.appendChild(more);
    for (var i = items.length - 1; i > 0 && !fits(); i--) { asSubitem(items[i], true); moreList.insertBefore(items[i], moreList.firstChild); }
  }
  layout();
  var resizeTimer = null;
  window.addEventListener('resize', function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(layout, 150); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);   // re-measure once web fonts load
})();
