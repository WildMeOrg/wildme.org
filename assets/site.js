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
  var current = null;          // { li, wrap } of the open top-level menu
  var closeTimer = null;
  var restoringFocus = false;  // true while we move focus ourselves (Escape), so focusin doesn't reopen

  function isTopItem(li) { return li && li.parentElement === nav; }
  function topLink(li) { var a = li.querySelector('a'); return a && a.parentElement === li ? a : null; }
  function wrapOf(li) { return current && current.li === li ? current.wrap : childWrap(li); }
  function menuLinks(wrap) {   // links the keyboard can reach: top level of the flyout plus any open nested flyout
    return Array.prototype.filter.call(wrap.querySelectorAll('a'), function (a) { return a.offsetParent !== null; });
  }
  function setExpanded(li, open) { var a = topLink(li); if (a && wrapOf(li)) a.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  function hideNested(wrap) {
    wrap.querySelectorAll('.wsite-menu-wrap').forEach(function (w) {
      w.style.display = 'none';
      var a = topLink(w.parentElement);
      if (a && a.hasAttribute('aria-expanded')) a.setAttribute('aria-expanded', 'false');
    });
  }
  function position() {
    if (!current) return;
    var h = header.getBoundingClientRect(), r = current.li.getBoundingClientRect(), wrap = current.wrap;
    wrap.style.top = (r.bottom - h.top) + 'px';
    var left = r.left - h.left, maxLeft = document.documentElement.clientWidth - h.left - wrap.offsetWidth - 8;
    wrap.style.left = Math.max(0, Math.min(left, maxLeft)) + 'px';
  }
  function closeMenu() {
    clearTimeout(closeTimer);
    if (!current) return;
    hideNested(current.wrap);
    current.wrap.style.display = 'none';
    current.li.appendChild(current.wrap);
    setExpanded(current.li, false);
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
    wrap.style.position = 'absolute';
    wrap.style.display = 'block';
    current = { li: li, wrap: wrap };
    position();
    setExpanded(li, true);
  }
  // Inside an open menu, show exactly the nested submenus along the path to the target.
  function syncNested(target) {
    if (!current) return;
    current.wrap.querySelectorAll('.wsite-menu-wrap').forEach(function (w) {
      var parentLi = w.parentElement;
      var open = parentLi.contains(target);
      if (open) {
        w.style.position = 'absolute';
        w.style.top = '0px';
        w.style.display = 'block';
        var room = document.documentElement.clientWidth - parentLi.getBoundingClientRect().right;
        w.style.left = (room >= w.offsetWidth ? parentLi.offsetWidth : -w.offsetWidth) + 'px';
      } else {
        w.style.display = 'none';
      }
      var a = topLink(parentLi);
      if (a && a.hasAttribute('aria-expanded')) a.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  function topItemFor(target) {
    var li = target.closest ? target.closest('li') : null;
    while (li && !isTopItem(li) && nav.contains(li)) li = li.parentElement.closest('li');
    return li && isTopItem(li) ? li : null;
  }
  function track(target) {
    var li = topItemFor(target);
    if (li) { openMenu(li); return; }
    if (host.contains(target)) { clearTimeout(closeTimer); syncNested(target); return; }
    if (current) closeSoon();
  }
  document.addEventListener('mouseover', function (e) { track(e.target); });
  document.addEventListener('focusin', function (e) {
    if (restoringFocus) return;
    var li = topItemFor(e.target);
    if (li) { openMenu(li); return; }
    if (current && host.contains(e.target)) { clearTimeout(closeTimer); syncNested(e.target); return; }
    closeMenu();
  });

  // Keyboard: Tab / Down enter the open menu, Up/Down move within it, Shift+Tab from the first
  // item returns to its menu button, Tab from the last item moves on to the next top-level item.
  function focusQuietly(el) { restoringFocus = true; el.focus(); restoringFocus = false; }
  document.addEventListener('keydown', function (e) {
    if (!current) return;
    var li = current.li, trigger = topLink(li), links = menuLinks(current.wrap);
    var inMenu = current.wrap.contains(document.activeElement);
    var onTrigger = document.activeElement === trigger;
    if (e.key === 'Escape') {
      closeMenu();
      if ((inMenu || onTrigger) && trigger) focusQuietly(trigger);
      return;
    }
    if (!links.length) return;
    var idx = links.indexOf(document.activeElement);
    if (onTrigger && ((e.key === 'Tab' && !e.shiftKey) || e.key === 'ArrowDown')) {
      e.preventDefault(); links[0].focus();
    } else if (inMenu && e.key === 'ArrowDown') {
      e.preventDefault(); links[Math.min(idx + 1, links.length - 1)].focus();
    } else if (inMenu && e.key === 'ArrowUp') {
      e.preventDefault(); if (idx <= 0) trigger.focus(); else links[idx - 1].focus();
    } else if (inMenu && e.key === 'Tab' && e.shiftKey && idx === 0) {
      e.preventDefault(); trigger.focus();
    } else if (inMenu && e.key === 'Tab' && !e.shiftKey && idx === links.length - 1) {
      var next = li.nextElementSibling && topLink(li.nextElementSibling);
      e.preventDefault();
      closeMenu();
      if (next) next.focus();
      else focusQuietly(trigger);
    }
  });

  // Menu items without their own page (Connect, Resources, About, "more...") act as buttons.
  function makeTrigger(li) {
    var a = topLink(li);
    if (!a || !childWrap(li)) return;
    a.setAttribute('aria-expanded', 'false');
    if (!a.hasAttribute('href')) { a.setAttribute('tabindex', '0'); a.setAttribute('role', 'button'); }
    a.addEventListener('keydown', function (e) {
      if ((e.key === 'Enter' || e.key === ' ') && (!a.hasAttribute('href') || a.getAttribute('href') === '#')) {
        e.preventDefault();
        if (!isTopItem(li)) {            // item moved into "more...": open it as a nested flyout and enter it
          var w = childWrap(li);
          syncNested(li);
          var first = w && menuLinks(w)[0];
          if (first) first.focus();
          return;
        }
        openMenu(li);                    // focus may already have opened it; Enter moves into it (Escape closes)
        var l = current ? menuLinks(current.wrap) : [];
        if (l.length) l[0].focus();
      }
    });
  }
  Array.prototype.forEach.call(nav.children, makeTrigger);

  // The header shrinks when it turns sticky; keep an open menu attached to its item.
  window.addEventListener('scroll', function () { if (current) position(); }, { passive: true });
  header.addEventListener('transitionend', function () { if (current) position(); });

  // "more..." menu: when the top bar would wrap (or squeeze the site title onto two lines),
  // trailing items move into a "more..." dropdown, as Weebly's navigation did.
  var items = Array.prototype.slice.call(nav.children);
  var more = document.createElement('li');
  more.className = 'wsite-menu-item-wrap wsite-nav-more';
  more.innerHTML = '<a class="wsite-menu-item" href="#">more...</a>' +
                   '<div class="wsite-menu-wrap" style="display:none"><ul class="wsite-menu"></ul></div>';
  var moreList = more.querySelector('ul');
  more.querySelector('a').addEventListener('click', function (e) { e.preventDefault(); openMenu(more); });
  makeTrigger(more);
  var title = document.getElementById('wsite-title');

  function titleLines() {
    if (!title) return 1;
    var range = document.createRange();
    range.selectNodeContents(title);
    var tops = {};
    Array.prototype.forEach.call(range.getClientRects(), function (r) { if (r.width > 0) tops[Math.round(r.top)] = 1; });
    return Object.keys(tops).length || 1;
  }
  function fits() {
    var visible = Array.prototype.filter.call(nav.children, function (li) { return li.offsetParent; });
    if (!visible.length) return true;
    var top = visible[0].offsetTop;
    return visible.every(function (li) { return li.offsetTop === top; }) && titleLines() <= 1;
  }
  function asSubitem(li, on) {
    var a = topLink(li);
    li.classList.toggle('wsite-menu-item-wrap', !on);
    li.classList.toggle('wsite-menu-subitem-wrap', on);
    if (!a) return;
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
    var focused = document.activeElement;
    var focusedMore = more.contains(focused) || (current && current.li === more && current.wrap.contains(focused));
    var focusedItem = !focusedMore && focused && (nav.contains(focused) || host.contains(focused) || moreList.contains(focused))
      ? items.filter(function (li) { return li.contains(focused) || (current && current.li === li && current.wrap.contains(focused)); })[0]
      : null;
    closeMenu();
    items.forEach(function (li) { asSubitem(li, false); nav.appendChild(li); });   // restore original order
    if (more.parentElement) more.parentElement.removeChild(more);
    if (nav.offsetParent && !fits()) {
      nav.appendChild(more);
      for (var i = items.length - 1; i > 0 && !fits(); i--) { asSubitem(items[i], true); moreList.insertBefore(items[i], moreList.firstChild); }
    }
    // keep keyboard focus on a visible control after items move (skip if the desktop bar is hidden)
    if ((focusedItem || focusedMore) && nav.offsetParent) {
      var target;
      if (focusedMore) target = more.parentElement ? more.querySelector('a') : topLink(items[items.length - 1]);
      else target = moreList.contains(focusedItem) ? more.querySelector('a') : topLink(focusedItem);
      if (target) focusQuietly(target);
    }
  }
  layout();
  var resizeTimer = null;
  window.addEventListener('resize', function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(layout, 150); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);   // re-measure once web fonts load
})();
