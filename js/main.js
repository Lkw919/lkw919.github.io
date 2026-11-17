/* ============================================================
   Kewu Li — personal site behaviour
   No dependencies: theme persistence, scroll reveal, smooth anchors.
   ============================================================ */

(function () {
  "use strict";

  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  // --- theme: honour the saved choice, then the OS preference ---
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", initial);

  if (toggle) {
    toggle.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  // --- reveal sections as they enter the viewport ---
  const sections = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    sections.forEach(function (section) { observer.observe(section); });
  } else {
    sections.forEach(function (section) { section.classList.add("visible"); });
  }

  // --- keep the footer year current ---
  const year = document.getElementById("year");
  if (year) { year.textContent = String(new Date().getFullYear()); }

  // --- close the mobile menu after choosing a link (small screens) ---
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 900) {
        document.querySelector(".nav").classList.remove("open");
      }
    });
  });
})();
