(() => {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  if (!data) return;

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
  educationGrid.innerHTML = data.education.map((item, index) => `
    <article class="education-card reveal" style="--delay:${index * 70}ms">
      <span class="education-index">0${index + 1}</span>
      <h3>${esc(item.degree)}</h3>
      <p class="education-institution">${esc(item.institution)}</p>
      <p class="education-period">${esc(item.period)}</p>
      <p>${esc(item.detail)}</p>
    </article>
  `).join("");

  // Render research areas
  const researchGrid = document.getElementById("research-grid");
  researchGrid.innerHTML = data.researchAreas.map((item) => `
    <article class="research-card reveal">
      <span class="research-number">${esc(item.number)}</span>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.text)}</p>
    </article>
  `).join("");

  // Render projects
  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = data.projects.map((item) => `
    <article class="project-card">
      <div class="project-meta"><span>${esc(item.status)}</span></div>
      <h4>${esc(item.title)}</h4>
      <p>${esc(item.text)}</p>
      <div class="tag-row">${item.tags.map(tag => `<span>${esc(tag)}</span>`).join("")}</div>
    </article>
  `).join("");

  // Render experience
  const experienceTimeline = document.getElementById("experience-timeline");
  experienceTimeline.innerHTML = data.experience.map((item) => `
    <article class="timeline-item reveal">
      <div class="timeline-marker" aria-hidden="true"></div>
      <div class="timeline-period">${esc(item.period)}</div>
      <div class="timeline-content">
        <h3>${esc(item.role)}</h3>
        <p class="timeline-org">${esc(item.organization)}</p>
        <p class="timeline-location">${esc(item.location)}</p>
        <ul>${item.points.map(point => `<li>${esc(point)}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");

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
  renderPublications();

  document.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach(btn => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      renderPublications(button.dataset.filter);
    });
  });

  // Courses
  const courseList = document.getElementById("course-list");
  courseList.innerHTML = data.courses.map((course, index) => `
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
      <div><strong>${esc(item.title)}</strong><p>${esc(item.organization)}</p></div>
    </div>
  `).join("");

  // Skills
  const skillGroups = document.getElementById("skill-groups");
  skillGroups.innerHTML = data.skills.map(group => `
    <div class="skill-group">
      <h4>${esc(group.group)}</h4>
      <div class="skill-pills">${group.items.map(item => `<span>${esc(item)}</span>`).join("")}</div>
    </div>
  `).join("");

  // Rotating hero focus
  const rotatingFocus = document.getElementById("rotating-focus");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (rotatingFocus && data.rotatingFocus.length > 1 && !reducedMotion) {
    let focusIndex = 0;
    setInterval(() => {
      rotatingFocus.classList.add("is-changing");
      setTimeout(() => {
        focusIndex = (focusIndex + 1) % data.rotatingFocus.length;
        rotatingFocus.textContent = data.rotatingFocus[focusIndex];
        rotatingFocus.classList.remove("is-changing");
      }, 260);
    }, 3200);
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
