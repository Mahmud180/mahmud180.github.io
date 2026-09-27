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

  // scroll progress bar
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  document.body.appendChild(progress);

  // mobile toggle
  const toggle = nav.querySelector("#navToggle");
  const links = nav.querySelector(".nav__links");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

  // shrink nav + scroll progress + reveal (rAF-throttled, no IntersectionObserver
  // dependency so content is never left hidden if IO is unavailable)
  const doReveal = () => {
    const vh = window.innerHeight;
    document.querySelectorAll(".reveal:not(.in)").forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.88) {
        const sibs = el.parentElement
          ? Array.from(el.parentElement.children).filter(c => c.classList.contains("reveal"))
          : [el];
        const idx = Math.max(0, sibs.indexOf(el));
        el.style.transitionDelay = Math.min(idx * 90, 450) + "ms";
        el.classList.add("in");
      }
    });
  };

  let ticking = false;
  const onScroll = () => {
    nav.classList.toggle("nav--scrolled", window.scrollY > 40);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
    doReveal();
    ticking = false;
  };
  const schedule = () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  window.addEventListener("load", schedule);
  onScroll();

  // reveal shim: script.js calls window.__revealObserver.observe(el) after it
  // injects content — we just re-run the viewport check on the next frame.
  window.__revealObserver = { observe: schedule };

  // final failsafe: nothing stays hidden even if a frame is missed
  setTimeout(doReveal, 300);
  setTimeout(doReveal, 1200);

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    // cursor spotlight on cards (delegated pointermove)
    const SEL = ".proj,.pillar,.contact__card,.skill,.edu-item,.tl-item__card,.tour,.ref";
    document.addEventListener("pointermove", (e) => {
      const card = e.target.closest ? e.target.closest(SEL) : null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    }, { passive: true });

    // subtle hero photo parallax
    const frame = document.querySelector(".photo__frame");
    if (frame) {
      window.addEventListener("pointermove", (e) => {
        const dx = (e.clientX / window.innerWidth - 0.5) * 10;
        const dy = (e.clientY / window.innerHeight - 0.5) * 10;
        frame.style.transform = `translate(${dx}px, ${dy}px)`;
      }, { passive: true });
    }
  }
})();
