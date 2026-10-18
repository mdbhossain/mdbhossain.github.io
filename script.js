(() => {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // Define this before any rendering function can call setupRevealObservers().
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const esc = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  // Optional profile photo
  const profileImage = document.getElementById("profile-image");
  const portraitPlaceholder = document.getElementById("portrait-placeholder");
  if (data.profileImage && profileImage) {
    profileImage.src = data.profileImage;
    profileImage.hidden = false;
    portraitPlaceholder.hidden = true;
    profileImage.addEventListener("error", () => {
      profileImage.hidden = true;
      portraitPlaceholder.hidden = false;
    });
  }

  // Render education
  const educationGrid = document.getElementById("education-grid");
  // "Ph.D. in Electrical & Computer Engineering" -> level "Ph.D." + field "Electrical & Computer Engineering"
  educationGrid.innerHTML = data.education.map((item, index) => {
    const [level, ...rest] = String(item.degree).split(" in ");
    const field = rest.join(" in ");
    return `
    <article class="education-card reveal" style="--delay:${index * 70}ms">
      ${field ? `<span class="education-level">${esc(level)}</span>` : ""}
      <h3>${esc(field || level)}</h3>
      <p class="education-institution">${esc(item.institution)}</p>
    </article>`;
  }).join("");

  // Render research areas
  const researchGrid = document.getElementById("research-grid");
  if (researchGrid) researchGrid.innerHTML = data.researchAreas.map((item) => `
    <article class="research-card reveal">
      <span class="research-number">${esc(item.number)}</span>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.text)}</p>
    </article>
  `).join("");

  // Render projects
  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid) projectsGrid.innerHTML = data.projects.map((item) => `
    <article class="project-card">
      <div class="project-meta"><span>${esc(item.status)}</span></div>
      <h4>${esc(item.title)}</h4>
      <p>${esc(item.text)}</p>
      <div class="tag-row">${item.tags.map(tag => `<span>${esc(tag)}</span>`).join("")}</div>
    </article>
  `).join("");

  // Render experience
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const parseYM = (value) => {
    if (!value || value === "present") {
      const now = new Date();
      return { y: now.getFullYear(), m: now.getMonth() + 1, present: true };
    }
    const [y, m] = value.split("-").map(Number);
    return { y, m, present: false };
  };
  const monthsBetween = (start, end) => (end.y * 12 + end.m) - (start.y * 12 + start.m) + 1; // inclusive
  const formatDuration = (months) => {
    const y = Math.floor(months / 12), m = months % 12;
    const parts = [];
    if (y) parts.push(`${y} yr${y > 1 ? "s" : ""}`);
    if (m) parts.push(`${m} mo${m > 1 ? "s" : ""}`);
    return parts.join(" ") || "1 mo";
  };
  const formatYM = (d) => d.present ? "Present" : `${MONTHS[d.m - 1]} ${d.y}`;

  const experienceTimeline = document.getElementById("experience-timeline");
  const totals = { teaching: 0, research: 0 };
  // Group consecutive roles at the same institution into one card
  const experienceGroups = [];
  data.experience.forEach((item) => {
    const last = experienceGroups[experienceGroups.length - 1];
    if (last && last.institution === item.institution) last.items.push(item);
    else experienceGroups.push({ institution: item.institution, place: item.place, items: [item] });
  });
  const renderRole = (item) => {
    const kind = item.type === "teaching" ? "teaching" : "research";
    const start = parseYM(item.start), end = parseYM(item.end);
    const months = monthsBetween(start, end);
    totals[kind] += months;
    const courses = (item.courses || []).map(c => `<span>${esc(c)}</span>`).join("");
    const mentees = (item.mentees || []).map(m => `
              <li><strong>${esc(m.name)}</strong><span>${esc(m.position || "")}</span></li>`).join("");
    return `
    <article class="timeline-item timeline-${kind}">
      <div class="timeline-marker" aria-hidden="true"></div>
      <div class="timeline-period">${formatYM(start)} – ${formatYM(end)}</div>
      <div class="timeline-content">
        <div class="timeline-head">
          <h3>${esc(item.role)} <span class="timeline-type">${kind === "teaching" ? "Teaching" : "Research"}</span></h3>
          <span class="timeline-duration">${formatDuration(months)}</span>
        </div>
        <p class="timeline-org">${esc(item.unit)}</p>
        ${courses ? `
        <div class="timeline-detail">
          <span class="timeline-detail-label">Courses</span>
          <div class="timeline-courses">${courses}</div>
        </div>` : ""}
        ${mentees ? `
        <div class="timeline-detail">
          <span class="timeline-detail-label">Student mentoring</span>
          <ul class="timeline-mentees">${mentees}
          </ul>
        </div>` : ""}
      </div>
    </article>`;
  };
  experienceTimeline.innerHTML = experienceGroups.map(group => `
    <div class="timeline-group reveal">
      <div class="timeline-inst"><strong>${esc(group.institution)}</strong><span>${esc(group.place || "")}</span></div>
      ${group.items.map(renderRole).join("")}
    </div>
  `).join("");
  const experienceTotals = document.getElementById("experience-totals");
  if (experienceTotals) {
    experienceTotals.innerHTML = `
      <span class="total-teaching"><b>Teaching</b> ${formatDuration(totals.teaching)}</span>
      <span class="total-research"><b>Research</b> ${formatDuration(totals.research)}</span>`;
  }

  // Publications
  const publicationList = document.getElementById("publication-list");
  const renderPublications = (filter = "all") => {
    const filtered = data.publications.filter(item => filter === "all" || item.type === filter);
    publicationList.innerHTML = filtered.map((item, index) => `
      <article class="publication-item reveal ${item.featured ? "publication-featured" : ""}" style="--delay:${index * 45}ms">
        <div class="publication-year">${esc(item.year)}</div>
        <div class="publication-body">
          <div class="publication-badges">
            <span>${esc(item.type)}</span>
            ${item.featured ? "<span>featured</span>" : ""}
          </div>
          <h3>${esc(item.title)}</h3>
          <p class="publication-authors">${esc(item.authors)}</p>
          <p class="publication-venue">${esc(item.venue)}</p>
        </div>
        <a class="publication-link" href="${esc(item.url)}" target="_blank" rel="noopener" aria-label="Open publication: ${esc(item.title)}">↗</a>
      </article>
    `).join("");
    setupRevealObservers();
  };
  renderPublications("journal"); // journal papers are shown by default

  document.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach(btn => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      renderPublications(button.dataset.filter);
    });
  });

  // Courses
  const courseList = document.getElementById("course-list");
  if (courseList) courseList.innerHTML = data.courses.map((course, index) => `
    <div class="course-item">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div><strong>${esc(course.title)}</strong><small>${esc(course.note)}</small></div>
    </div>
  `).join("");

  // Service
  const serviceList = document.getElementById("service-list");
  serviceList.innerHTML = data.service.map(item => `
    <div class="service-item">
      <span class="service-period">${esc(item.period)}</span>
      <p><strong>${esc(item.title)}</strong> · ${esc(item.organization)}</p>
    </div>
  `).join("");

  // Memberships
  const memberships = document.getElementById("memberships");
  if (memberships) {
    const items = (data.memberships || []).map(m => m.url
      ? `<a href="${esc(m.url)}" target="_blank" rel="noopener">Member, ${esc(m.name)}</a>`
      : `<span>Member, ${esc(m.name)}</span>`);
    memberships.innerHTML = items.length ? `<span class="memberships-label">Memberships</span>${items.join('<span class="memberships-sep" aria-hidden="true">·</span>')}` : "";
  }

  // Skills
  const skillGroups = document.getElementById("skill-groups");
  if (skillGroups) skillGroups.innerHTML = data.skills.map(group => `
    <div class="skill-group">
      <h4>${esc(group.group)}</h4>
      <div class="skill-pills">${group.items.map(item => `<span>${esc(item)}</span>`).join("")}</div>
    </div>
  `).join("");

  // News
  const newsHtml = (data.news || []).map(item => `
      <li>
        <span class="news-date">${esc(item.date)}</span>
        ${item.url
          ? `<a class="news-text" href="${esc(item.url)}" target="_blank" rel="noopener">${esc(item.text)}</a>`
          : `<span class="news-text">${esc(item.text)}</span>`}
      </li>
    `).join("");
  document.querySelectorAll(".news-list").forEach(list => { list.innerHTML = newsHtml; });

  // News sidebar follows the page: level with the top of the photo at first, then held 100px from the top
  const newsSidebar = document.querySelector(".news-sidebar");
  if (newsSidebar) {
    const placeNews = () => {
      newsSidebar.style.setProperty("--news-top", `${Math.max(100, 112 - window.scrollY)}px`);
    };
    window.addEventListener("scroll", placeNews, { passive: true });
    placeNews();
  }

  // Hero focus keywords (static, glowing chips)
  const focusKeywords = document.getElementById("focus-keywords");
  if (focusKeywords) {
    focusKeywords.innerHTML = (data.focusKeywords || []).map((item, index) => `
      <li style="--i:${index}"><span>${esc(item)}</span></li>
    `).join("");
  }

  // Navigation / mobile menu
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    navLinks.classList.toggle("is-open", !open);
  });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));

  // Theme
  const themeToggle = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("mbh-theme");
  if (storedTheme) document.documentElement.dataset.theme = storedTheme;
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("mbh-theme", next);
  });

  // Scroll progress + header + back to top
  const progress = document.getElementById("scroll-progress");
  const header = document.getElementById("site-header");
  const backToTop = document.getElementById("back-to-top");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
    backToTop.classList.toggle("is-visible", window.scrollY > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Copy email
  const copyButton = document.getElementById("copy-email");
  const copyStatus = document.getElementById("copy-status");
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.email);
      copyStatus.textContent = "Email copied.";
    } catch {
      copyStatus.textContent = copyButton.dataset.email;
    }
    setTimeout(() => { copyStatus.textContent = ""; }, 2500);
  });

  // Reveal animations
  function setupRevealObservers() {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px" });
    elements.forEach(el => observer.observe(el));
  }
  setupRevealObservers();

  // Active navigation section
  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...navLinks.querySelectorAll("a[href^='#']")];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  document.getElementById("current-year").textContent = new Date().getFullYear();
})();
