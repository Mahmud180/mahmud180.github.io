// Shared header + footer injected into every page. Keeps nav consistent
// across the multi-page site without duplicating markup.
(function () {
  const PAGES = [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About" },
    { href: "experience.html", label: "Experience" },
    { href: "projects.html", label: "Projects" },
    { href: "contact.html", label: "Contact" }
  ];

  // current file name (handles project.html detail pages -> highlight Projects)
  let here = location.pathname.split("/").pop() || "index.html";
  if (here === "" ) here = "index.html";
  const activeFor = here === "project.html" ? "projects.html" : here;

  const nav = document.createElement("header");
  nav.className = "nav";
  nav.id = "nav";
  nav.innerHTML =
    '<a href="index.html" class="nav__brand">MHS<span>.</span></a>' +
    '<nav class="nav__links">' +
    PAGES.map(p => `<a href="${p.href}"${p.href === activeFor ? ' class="active"' : ''}>${p.label}</a>`).join("") +
    '</nav>' +
    '<button class="nav__toggle" id="navToggle" aria-label="Toggle menu">☰</button>';
  document.body.insertBefore(nav, document.body.firstChild);

  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML =
    `<p>&copy; ${new Date().getFullYear()} Mahmud Hasan Shawon · Dhaka, Bangladesh</p>` +
    '<p class="footer__mono">Built and maintained by hand.</p>';
  document.body.appendChild(footer);

  // mobile toggle
  const toggle = nav.querySelector("#navToggle");
  const links = nav.querySelector(".nav__links");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

  // shrink on scroll
  window.addEventListener("scroll", () => nav.classList.toggle("nav--scrolled", window.scrollY > 40));

  // scroll reveal (used on all pages)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  window.__revealObserver = io;
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
})();
