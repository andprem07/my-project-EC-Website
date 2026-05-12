/* Envision Contracting — minimal site JS */
(function () {
  // Mobile nav toggle
  var btn = document.querySelector(".menu-toggle");
  var nav = document.querySelector("nav.primary-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Mark active nav link
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.primary-nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();
