// Page-aware content rendering. Each block runs only if its container exists.
document.addEventListener("DOMContentLoaded", () => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (t) => String(t).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  const reveal = (el) => { el.classList.add("reveal"); if (window.__revealObserver) window.__revealObserver.observe(el); };

  // ---- HERO (home) ----
  const hero = $("#hero-stats");
  if (hero) {
    hero.innerHTML = PROFILE.stats.map(s =>
      `<div class="stat"><span class="stat__num" data-count="${s.num}">0</span>${s.plus ? '<span class="stat__plus">+</span>' : ''}<span class="stat__label">${s.label}</span></div>`
    ).join("");
    const so = new IntersectionObserver((ents) => ents.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, target = +el.dataset.count, step = Math.max(1, Math.round(target / 40));
      let cur = 0; const tick = () => { cur += step; if (cur >= target) el.textContent = target; else { el.textContent = cur; requestAnimationFrame(tick); } };
      tick(); so.unobserve(el);
    }), { threshold: 0.5 });
    $$(".stat__num", hero).forEach(s => so.observe(s));
  }

  // ---- Featured projects (home) ----
  const feat = $("#featured-projects");
  if (feat) {
    feat.innerHTML = PROJECTS.map(p => `
      <a class="proj reveal" href="project.html?p=${p.slug}">
        <span class="proj__tag">${p.tag}</span>
        <h3 class="proj__title">${esc(p.title)}</h3>
        <p class="proj__desc">${esc(p.short)}</p>
        <span class="proj__more">View details →</span>
      </a>`).join("");
    $$(".reveal", feat).forEach(reveal);
  }

  // ---- About page ----
  const about = $("#about-body");
  if (about) about.innerHTML = ABOUT.map(p => `<p>${esc(p)}</p>`).join("");

  const journey = $("#journey");
  if (journey) {
    journey.innerHTML = JOURNEY.map(j => `
      <article class="tl-item reveal">
        <div class="tl-item__dot"></div>
        <div class="tl-item__card">
          <div class="tl-item__top"><h3>${esc(j.title)}</h3><span class="tl-item__dates">${esc(j.year)}</span></div>
          <p class="tl-item__org">${esc(j.org)}</p>
          <p class="edu-item__note">${esc(j.note)}</p>
        </div>
      </article>`).join("");
    $$(".reveal", journey).forEach(reveal);
  }

  const eduGrid = $("#edu-grid");
  if (eduGrid) {
    eduGrid.innerHTML = EDUCATION.map(e => `
      <article class="edu-item reveal">
        <div class="edu-item__top"><h3>${esc(e.title)}</h3><span class="edu-item__dates">${esc(e.dates)}</span></div>
        <p class="edu-item__org">${esc(e.org)}</p>
        <p class="edu-item__note">${esc(e.note)}</p>
      </article>`).join("");
    $$(".reveal", eduGrid).forEach(reveal);
  }

  const skillsGrid = $("#skills-grid");
  if (skillsGrid) {
    skillsGrid.innerHTML = SKILLS.map(s => `
      <div class="skill reveal">
        <h3 class="skill__group">${esc(s.group)}</h3>
        <div class="skill__items">${s.items.map(i => `<span>${esc(i)}</span>`).join("")}</div>
      </div>`).join("");
    $$(".reveal", skillsGrid).forEach(reveal);
  }

  const refs = $("#refs");
  if (refs) refs.innerHTML = REFERENCES.map(r =>
    `<div class="ref reveal"><strong>${esc(r.name)}</strong><span>${esc(r.title)}</span></div>`).join("")
    + '<p class="muted-note">Full contact details available on request.</p>';
  if (refs) $$(".reveal", refs).forEach(reveal);

  // ---- Experience page ----
  const tl = $("#timeline");
  if (tl) {
    tl.innerHTML = EXPERIENCE.map(e => `
      <article class="tl-item reveal">
        <div class="tl-item__dot"></div>
        <div class="tl-item__card">
          <div class="tl-item__top"><h3>${esc(e.role)}</h3><span class="tl-item__dates">${esc(e.dates)}</span></div>
          <p class="tl-item__org">${esc(e.org)}</p>
          <ul>${e.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
        </div>
      </article>`).join("");
    $$(".reveal", tl).forEach(reveal);
  }

  const tours = $("#tournaments");
  if (tours) {
    tours.innerHTML = TOURNAMENTS.map(t =>
      `<div class="tour reveal"><span class="tour__name">${esc(t.name)}</span><span class="tour__role">${esc(t.role)}</span></div>`).join("");
    $$(".reveal", tours).forEach(reveal);
  }

  // ---- Projects grid page ----
  const grid = $("#projects-grid");
  if (grid) {
    grid.innerHTML = PROJECTS.map(p => `
      <a class="proj reveal" href="project.html?p=${p.slug}">
        <span class="proj__tag">${p.tag}</span>
        <h3 class="proj__title">${esc(p.title)}</h3>
        <p class="proj__desc">${esc(p.short)}</p>
        <div class="proj__stack">${p.stack.slice(0, 4).map(s => `<span>${esc(s)}</span>`).join("")}</div>
        <span class="proj__more">View details →</span>
      </a>`).join("");
    $$(".reveal", grid).forEach(reveal);
  }

  // ---- Project detail page ----
  const detail = $("#project-detail");
  if (detail) {
    const slug = new URLSearchParams(location.search).get("p");
    const p = PROJECTS.find(x => x.slug === slug) || PROJECTS[0];
    document.title = p.title + " — Mahmud Hasan Shawon";
    const list = (arr) => `<ul class="detail__list">${arr.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`;
    detail.innerHTML = `
      <a href="projects.html" class="back-link">← All projects</a>
      <span class="proj__tag">${p.tag}</span>
      <h1 class="detail__title">${esc(p.title)}</h1>
      <p class="detail__meta">${esc(p.role)} · ${esc(p.dates)}</p>
      ${p.img ? `<img class="detail__img" src="${p.img}" alt="${esc(p.title)}">` : ""}
      <p class="detail__overview">${esc(p.overview)}</p>
      <h2 class="detail__h">The problem</h2><p class="detail__p">${esc(p.problem)}</p>
      <h2 class="detail__h">What I built</h2>${list(p.built)}
      <h2 class="detail__h">Outcomes</h2>${list(p.outcomes)}
      <h2 class="detail__h">Stack</h2>
      <div class="proj__stack">${p.stack.map(s => `<span>${esc(s)}</span>`).join("")}</div>`;
  }

  // ---- Links (contact + anywhere) ----
  $$(".links-target").forEach(box => {
    box.innerHTML = LINKS.map(l =>
      `<a class="contact__card" href="${l.href}"${l.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ''}>
        <span class="contact__k">${esc(l.key)}</span><span class="contact__v">${esc(l.value)}</span></a>`).join("");
  });

  // ---- smooth scroll for in-page anchors ----
  $$('a[href^="#"]').forEach(a => a.addEventListener("click", (ev) => {
    const id = a.getAttribute("href");
    if (id.length > 1) { const t = $(id); if (t) { ev.preventDefault(); t.scrollIntoView({ behavior: "smooth" }); } }
  }));
});
