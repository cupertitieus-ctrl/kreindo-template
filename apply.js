(function () {
  var s = window.SITE || {};
  var r = document.documentElement;
  if (s.colors) {
    r.style.setProperty("--bg", s.colors.bg);
    r.style.setProperty("--ink", s.colors.ink);
    r.style.setProperty("--muted", s.colors.muted);
    r.style.setProperty("--accent", s.colors.accent);
    r.style.setProperty("--warm", s.colors.warm);
  }
  document.title = (s.name || "Business") + " — " + (s.city || "");
  function fill(sel, val, attr) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (attr) el.setAttribute(attr, val || "");
      else el.textContent = val || "";
    });
  }
  fill("[data-name]", s.name);
  fill("[data-city]", s.city);
  fill("[data-hero]", s.hero);
  fill("[data-hero-sub]", s.heroSub);
  fill("[data-cta]", s.cta);
  fill("[data-offer]", s.offer);
  fill("[data-rating]", s.rating);
  fill("[data-reviews]", s.reviews);
  fill("[data-years]", s.years);
  fill("[data-phone]", s.phone);
  fill("[data-phone-link]", s.phoneHref, "href");
})();
