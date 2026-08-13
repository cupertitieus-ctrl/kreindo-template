(function () {
  var s = window.SITE || {};
  document.title = (s.name || "Your shop") + " — Kreindo";
  function t(sel, val) {
    document.querySelectorAll(sel).forEach(function (el) { el.textContent = val || ""; });
  }
  t("[data-name]", s.name);
  t("[data-city]", s.city);
  t("[data-lede]", s.lede);
  t("[data-cta]", s.cta);
  t("[data-offer]", s.offer);
  var h = document.querySelector("[data-hero]");
  if (h && s.hero) {
    var em = s.heroEm || "";
    if (em && s.hero.indexOf(em) !== -1) {
      h.innerHTML = s.hero.replace(em, "<em>" + em + "</em>");
    } else h.textContent = s.hero;
  }
  var chips = document.querySelector("[data-chips]");
  if (chips && s.chips) chips.innerHTML = s.chips.map(function (c) { return "<span>" + c + "</span>"; }).join("");
  var svc = document.querySelector("[data-services]");
  if (svc && s.services) svc.innerHTML = s.services.map(function (x) {
    return '<div class="card"><h3>' + x.t + "</h3><p>" + x.d + "</p></div>";
  }).join("");
  t("[data-proof]", s.proof);
  var st = document.querySelector("[data-steps]");
  if (st && s.steps) st.innerHTML = s.steps.map(function (x) { return "<li>" + x + "</li>"; }).join("");
})();
