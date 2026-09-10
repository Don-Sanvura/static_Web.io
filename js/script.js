/* ==========================================================================
   Don Sanvura — Portfolio CV
   Interactive enhancements
   ========================================================================== */
(function () {
  "use strict";

  /* ----------------------------------------------------------------------
     1. Smooth scroll for skip link (accessibility)
     ---------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "#main-content") {
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          target.focus({ preventScroll: true });
        }
      }
    });
  });

  /* ----------------------------------------------------------------------
     2. Fade-in animation on scroll (subtle, professional)
     ---------------------------------------------------------------------- */
  var entries = document.querySelectorAll(".entry, .content-section, .sidebar-section");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    entries.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(12px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------------------
     3. Active link highlight in sidebar (visual polish)
     ---------------------------------------------------------------------- */
  var contactLinks = document.querySelectorAll(".contact-list a");

  contactLinks.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      this.style.color = "#5b3a8e";
    });
    link.addEventListener("mouseleave", function () {
      this.style.color = "";
    });
  });

  /* ----------------------------------------------------------------------
     4. Update footer year dynamically (small reliability touch)
     ---------------------------------------------------------------------- */
  var footer = document.querySelector(".footer p");
  if (footer) {
    var currentYear = new Date().getFullYear();
    footer.textContent =
      "References available on request. Last updated: " + currentYear + ".";
  }

  /* ----------------------------------------------------------------------
     5. Keyboard navigation enhancement — focus outline for project cards
     ---------------------------------------------------------------------- */
  var projectEntries = document.querySelectorAll(".entry");

  projectEntries.forEach(function (entry) {
    entry.setAttribute("tabindex", "0");
    entry.addEventListener("focus", function () {
      this.style.borderColor = "#1a7f5a";
      this.style.boxShadow = "0 8px 24px rgba(26, 26, 46, 0.08)";
    });
    entry.addEventListener("blur", function () {
      this.style.borderColor = "";
      this.style.boxShadow = "";
    });
  });

  /* ----------------------------------------------------------------------
     6. Console message — professional branding (inspect element)
     ---------------------------------------------------------------------- */
  console.log(
    "%cDon Sanvura%c — Software Engineer · AI Researcher\n" +
      "Portfolio: https://don-sanvura.github.io/MrSanvura.github.io/\n" +
      "GitHub: https://github.com/Don-Sanvura",
    "font-size: 14px; font-weight: bold; color: #1a7f5a;",
    "font-size: 12px; color: #5b3a8e;"
  );
})();