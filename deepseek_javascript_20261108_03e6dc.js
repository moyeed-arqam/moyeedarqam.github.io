/* ------------------------------------------------------------
   EDIT THIS BLOCK WITH YOUR REAL LINKS.
   Empty values are hidden automatically.
   ------------------------------------------------------------ */
var CONFIG = {
  email:    "",                 // e.g. "moyeed@example.com"
  linkedin: "",                 // e.g. "https://linkedin.com/in/..."
  github:   "",                 // e.g. "https://github.com/..."
  azure:    "",                 // live WordPress-on-Azure URL
  resume:   "",                 // path to PDF, e.g. "assets/resume.pdf"
  certs:    []                  // see example below
};

/*
Example certs:
CONFIG.certs = [
  { title: "Course name", org: "DigiSkills.pk", date: "Month Year", url: "assets/certificate.pdf" }
];
*/

(function () {
  "use strict";

  /* Wire data-link buttons to CONFIG values */
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var key = a.dataset.link;
    var value = CONFIG[key];
    if (!value) return;
    a.href = key === "email" ? "mailto:" + value : value;
  });

  /* Hide any element whose required CONFIG value is empty */
  document.querySelectorAll("[data-need]").forEach(function (el) {
    if (!CONFIG[el.dataset.need]) el.hidden = true;
  });

  /* Render certificates if provided */
  if (CONFIG.certs.length) {
    var certSection = document.getElementById("certs");
    var certList = document.getElementById("certlist");
    certSection.hidden = false;
    CONFIG.certs.forEach(function (c) {
      var card = document.createElement("article");
      card.className = "card";
      var h3 = document.createElement("h3");
      h3.textContent = c.title;
      var p = document.createElement("p");
      p.textContent = c.org + (c.date ? " · " + c.date : "");
      card.appendChild(h3);
      card.appendChild(p);
      if (c.url) {
        var link = document.createElement("a");
        link.href = c.url;
        link.target = "_blank";
        link.rel = "noopener";
        link.className = "btn";
        link.style.marginTop = "14px";
        link.textContent = "View certificate ↗";
        card.appendChild(link);
      }
      certList.appendChild(card);
    });
  }

  /* Contact form -> mailto handoff */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = document.getElementById("name").value;
      var site = document.getElementById("site").value;
      var message = document.getElementById("message").value;
      var body =
        "Hi Moyeed,\n\n" +
        message +
        "\n\nWebsite: " + site +
        "\nFrom: " + name;
      window.location.href =
        "mailto:" + CONFIG.email +
        "?subject=" + encodeURIComponent("Website speed check request") +
        "&body=" + encodeURIComponent(body);
    });
  }

  /* Scroll reveal (respects reduced motion) */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealTargets = document.querySelectorAll(
      ".card, .project-card, .metric-card, .stat, .timeline li"
    );
    revealTargets.forEach(function (el) { el.classList.add("reveal"); });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(function (el) { observer.observe(el); });
  }

})();