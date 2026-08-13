(function () {
  var s = window.SITE || {};
  document.title = (s.name || "YOUR SHOP") + " — Kreindo";
  function t(sel, val) {
    document.querySelectorAll(sel).forEach(function (el) { el.textContent = val || ""; });
  }
  t("[data-name]", s.name);
  t("[data-eyebrow]", s.eyebrow);
  t("[data-lede]", s.lede);
  t("[data-cta]", s.cta);
  t("[data-secondary]", s.secondary);
  t("[data-nav-cta]", s.navCta);
  document.querySelectorAll("[data-cta-href]").forEach(function (el) { el.setAttribute("href", s.ctaHref || "#contact"); });
  document.querySelectorAll("[data-secondary-href]").forEach(function (el) { el.setAttribute("href", s.secondaryHref || "#services"); });
  var h = document.querySelector("[data-hero]");
  if (h && s.hero) {
    var em = s.heroEm || "";
    h.innerHTML = em && s.hero.indexOf(em) !== -1 ? s.hero.replace(em, "<em>" + em + "</em>") : s.hero;
  }
  var chips = document.querySelector("[data-chips]");
  if (chips && s.chips) chips.innerHTML = s.chips.map(function (c) { return "<span>" + c + "</span>"; }).join("");
  var cards = document.querySelector("[data-cards]");
  if (cards && s.cards) cards.innerHTML = s.cards.map(function (x) {
    return '<article class="card"><h3>' + x.t + "</h3><p>" + x.d + "</p></article>";
  }).join("");
  var steps = document.querySelector("[data-steps]");
  if (steps && s.steps) steps.innerHTML = s.steps.map(function (x) {
    return "<li><div class='n'>" + x.n + "</div><div><h3>" + x.t + "</h3><p>" + x.d + "</p></div></li>";
  }).join("");
})();
