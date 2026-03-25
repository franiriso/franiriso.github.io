import { portfolioContent } from "./content.js";

const tabs = [
  {
    id: "home",
    label: "Home",
    rail: "Home",
    mobile: "Home",
    icon: "home_max",
    headerKicker: "Home",
    headerTitle: "Profile overview"
  },
  {
    id: "projects",
    label: "Tech specs",
    rail: "Specs",
    mobile: "Specs",
    icon: "memory",
    headerKicker: "Tech specs",
    headerTitle: "Projects, theses, publications, and technical outputs"
  },
  {
    id: "resume",
    label: "History",
    rail: "History",
    mobile: "History",
    icon: "timeline",
    headerKicker: "History",
    headerTitle: "Experience and education timeline"
  }
];

const statusBars = [
  { label: "Embedded integration", value: 89 },
  { label: "Robotics autonomy", value: 92 },
  { label: "Electronics prototyping", value: 81 },
  { label: "Medical signal analysis", value: 78 }
];

const techIcons = {
  amber: "precision_manufacturing",
  cyan: "robot_2",
  blue: "code_blocks",
  silver: "monitoring",
  green: "hub",
  red: "memory"
};

const app = {
  root: document.documentElement,
  topNav: document.querySelector("#tab-nav"),
  sideNav: document.querySelector("#side-nav"),
  mobileNav: document.querySelector("#mobile-nav"),
  hero: document.querySelector("#top"),
  sectionHead: document.querySelector("#section-head"),
  sectionHeadKicker: document.querySelector("#section-head-kicker"),
  sectionHeadTitle: document.querySelector("#section-head-title"),
  panels: Array.from(document.querySelectorAll(".tab-panel"))
};

let currentTabId = "home";

function createMarkup() {
  renderHero();
  setupProfileImage();
  renderNavigation();
  renderAbout();
  renderStatus();
  renderHighlights();
  renderTech();
  renderLanguages();
  renderTimeline("experience-panel", "Experience", portfolioContent.resume.experience, experienceCard);
  renderTimeline("education-panel", "Education", portfolioContent.resume.education, educationCard);
  renderProjects();
}

function renderHero() {
  const hero = portfolioContent.hero;
  const contactHref = hero.contact.find((entry) => entry.href.startsWith("mailto:"))?.href || "#";

  document.querySelector("#hero-copy").innerHTML = `
    <p class="eyebrow">${hero.eyebrow}</p>
    <h1>${hero.name}</h1>
    <h2>${hero.title}</h2>
    <p class="hero__summary">${hero.summary}</p>
    <div class="hero__actions">
      <a class="hero-action hero-action--primary" href="${contactHref}">Contact</a>
      <button class="hero-action hero-action--secondary" type="button" data-jump="resume">Open resume</button>
    </div>
    <div class="contact-grid">
      ${hero.contact
        .map(
          (item) => `
            <a class="contact-chip" href="${item.href}" target="_blank" rel="noreferrer">
              <span>${item.label}</span>
              <strong>${item.value}</strong>
            </a>
          `
        )
        .join("")}
    </div>
  `;

  document.querySelector("#photo-panel").innerHTML = `
    <div class="photo-frame">
      <span class="photo-frame__label">Profile</span>
      <div class="photo-frame__media">
        <img class="profile-photo" src="${hero.photo.src}" alt="${hero.photo.alt}">
      </div>
      <div class="photo-frame__reticle" aria-hidden="true"></div>
    </div>
    <div class="hero__note">
      <p>${hero.statusLabel}</p>
      <strong>${hero.statusValue}</strong>
      <span>${hero.location}</span>
    </div>
  `;
}

function setupProfileImage() {
  const image = document.querySelector(".profile-photo");
  if (!image) {
    return;
  }

  image.addEventListener(
    "error",
    () => {
      image.src = "assets/profile-photo-placeholder.svg";
    },
    { once: true }
  );

  if (image.src.includes("placeholder")) {
    return;
  }

  if (image.src.includes("cutout")) {
    image.classList.add("is-cutout");
    return;
  }

  image.addEventListener(
    "load",
    () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }

      context.drawImage(image, 0, 0);
      const frame = context.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = frame.data;
      let minX = canvas.width;
      let minY = canvas.height;
      let maxX = -1;
      let maxY = -1;
      const alphaCutoff = 28;

      for (let i = 0; i < pixels.length; i += 4) {
        const red = pixels[i];
        const green = pixels[i + 1];
        const blue = pixels[i + 2];
        const alpha = pixels[i + 3];
        const whiteness = (red + green + blue) / 3;

        if (whiteness > 244) {
          pixels[i + 3] = 0;
        } else if (whiteness > 224 && alpha > 0) {
          pixels[i + 3] = Math.round(alpha * 0.5);
        }

        if (pixels[i + 3] > alphaCutoff) {
          const pixelIndex = i / 4;
          const x = pixelIndex % canvas.width;
          const y = Math.floor(pixelIndex / canvas.width);
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
      }

      context.putImageData(frame, 0, 0);

      // If no foreground was detected, keep the processed full image.
      if (maxX < 0 || maxY < 0) {
        image.src = canvas.toDataURL("image/png");
        image.classList.add("is-cutout");
        return;
      }

      const boxWidth = maxX - minX + 1;
      const boxHeight = maxY - minY + 1;
      const paddingRatio = 0.07;
      const paddedWidth = Math.round(boxWidth * (1 + paddingRatio * 2));
      const paddedHeight = Math.round(boxHeight * (1 + paddingRatio * 2));
      const cropStartX = Math.max(0, Math.round(minX - boxWidth * paddingRatio));
      const cropStartY = Math.max(0, Math.round(minY - boxHeight * paddingRatio));
      const cropWidth = Math.min(paddedWidth, canvas.width - cropStartX);
      const cropHeight = Math.min(paddedHeight, canvas.height - cropStartY);

      // Light zoom-in by center-cropping a bit more.
      const zoom = 1.08;
      const zoomWidth = Math.max(1, Math.round(cropWidth / zoom));
      const zoomHeight = Math.max(1, Math.round(cropHeight / zoom));
      const zoomStartX = cropStartX + Math.round((cropWidth - zoomWidth) / 2);
      const zoomStartY = cropStartY + Math.round((cropHeight - zoomHeight) / 2);

      const outCanvas = document.createElement("canvas");
      outCanvas.width = zoomWidth;
      outCanvas.height = zoomHeight;
      const outContext = outCanvas.getContext("2d");
      if (!outContext) {
        image.src = canvas.toDataURL("image/png");
        image.classList.add("is-cutout");
        return;
      }

      outContext.drawImage(
        canvas,
        zoomStartX,
        zoomStartY,
        zoomWidth,
        zoomHeight,
        0,
        0,
        zoomWidth,
        zoomHeight
      );

      image.src = outCanvas.toDataURL("image/png");
      image.classList.add("is-cutout");
    },
    { once: true }
  );
}

function renderNavigation() {
  if (app.topNav) {
    app.topNav.innerHTML = tabs
      .map(
        (tab, index) => `
          <button
            class="tab-button tab-button--top${index === 0 ? " is-active" : ""}"
            id="tab-${tab.id}"
            type="button"
            role="tab"
            aria-controls="panel-${tab.id}"
            aria-selected="${index === 0}"
            data-tab="${tab.id}"
          >
            <span class="material-symbols-outlined" aria-hidden="true">${tab.icon}</span>
            <span class="tab-button__label">${tab.label}</span>
          </button>
        `
      )
      .join("");
  }

  if (app.sideNav) {
    app.sideNav.innerHTML = `
      <div class="side-nav__rail">
        ${tabs
          .map(
            (tab, index) => `
              <button class="rail-button${index === 0 ? " is-active" : ""}" type="button" data-tab="${tab.id}" aria-label="${tab.label}">
                <span class="material-symbols-outlined">${tab.icon}</span>
                <span>${tab.rail}</span>
              </button>
            `
          )
          .join("")}
      </div>
    `;
  }

  if (app.mobileNav) {
    app.mobileNav.innerHTML = tabs
      .map(
        (tab, index) => `
          <button class="mobile-button${index === 0 ? " is-active" : ""}" type="button" data-tab="${tab.id}" aria-label="${tab.label}">
            <span class="material-symbols-outlined">${tab.icon}</span>
            <span>${tab.mobile}</span>
          </button>
        `
      )
      .join("");
  }
}

function renderAbout() {
  const { aboutBlocks, currentlyExploring } = portfolioContent.home;
  document.querySelector("#about-panel").innerHTML = `
    <div class="card-header">
      <p class="section-kicker">Identity</p>
      <h3>Engineering across hardware and software.</h3>
    </div>
    <div class="about-grid">
      ${aboutBlocks
        .map(
          (block) => `
            <article class="signal-card">
              <h4>${block.title}</h4>
              <p>${block.text}</p>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="explore-strip">
      <p class="section-kicker">Currently building / exploring</p>
      <div class="explore-tags">
        ${currentlyExploring.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderStatus() {
  const hero = portfolioContent.hero;
  document.querySelector("#status-panel").innerHTML = `
    <div class="card-header">
      <p class="section-kicker">Telemetry</p>
      <h3>Quick profile</h3>
    </div>
    <p class="status-summary">${hero.availability}</p>
    <div class="telemetry-list">
      ${hero.telemetry
        .map(
          (item) => `
            <div class="telemetry-row">
              <span>${item.label}</span>
              <strong>${item.value}</strong>
            </div>
          `
        )
        .join("")}
    </div>
    <div class="status-bars">
      ${statusBars
        .map(
          (bar) => `
            <div class="status-bars__row">
              <div class="status-bars__meta">
                <span>${bar.label}</span>
                <strong>${bar.value}%</strong>
              </div>
              <div class="status-bars__track">
                <div class="status-bars__fill" style="width: ${bar.value}%"></div>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderHighlights() {
  document.querySelector("#highlights-panel").innerHTML = `
    <div class="card-header">
      <p class="section-kicker">Engineering DNA</p>
      <h3>At a glance</h3>
    </div>
    <div class="highlight-strip">
      ${portfolioContent.home.highlights
        .map(
          (item) => `
            <div class="highlight-card">
              <span>${item.label}</span>
              <strong>${item.value}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderTech() {
  document.querySelector("#tech-panel").innerHTML = `
    <div class="card-header">
      <p class="section-kicker">Tech stack</p>
      <h3>Main tools and domains</h3>
    </div>
    <div class="cluster-grid">
      ${portfolioContent.home.techGroups.map((group, index) => techGroupCard(group, index)).join("")}
    </div>
  `;
}

function renderLanguages() {
  document.querySelector("#languages-panel").innerHTML = `
    <div class="card-header">
      <p class="section-kicker">Languages</p>
      <h3>Languages I use at work</h3>
    </div>
    <div class="language-grid">
      ${portfolioContent.home.languages.map(languageCard).join("")}
    </div>
  `;
}

function publicationMarkup() {
  const publication = portfolioContent.home.publication;
  return `
    <div class="card-header">
      <p class="section-kicker">Publication</p>
      <h3>${publication.title}</h3>
    </div>
    <article class="publication-card">
      <p class="publication-card__citation">${publication.citation}</p>
      <p>${publication.description}</p>
    </article>
  `;
}

function renderTimeline(targetId, heading, items, renderer) {
  document.querySelector(`#${targetId}`).innerHTML = `
    <div class="card-header">
      <p class="section-kicker">Resume</p>
      <h3>${heading}</h3>
    </div>
    <div class="timeline">
      ${items.map(renderer).join("")}
    </div>
  `;
}

function renderProjects() {
  const degreeSpecs = portfolioContent.projects.degreeSpecs;
  document.querySelector("#projects-panel").innerHTML = `
    <div class="card-header">
      <p class="section-kicker">Tech specs</p>
      <h3>${degreeSpecs.title}</h3>
    </div>
    <p class="projects-intro">${degreeSpecs.summary}</p>
    <div class="degree-specs-grid">
      ${degreeSpecs.items
        .map(
          (item) => `
            <article class="degree-spec-card">
              <h4>${item.degree}</h4>
              <p>${item.institution}</p>
              <span>${item.period}</span>
            </article>
          `
        )
        .join("")}
    </div>
    ${publicationMarkup()}
    <div class="card-header">
      <p class="section-kicker">Projects</p>
      <h3>Projects and thesis placeholders</h3>
    </div>
    <p class="projects-intro">${portfolioContent.projects.intro}</p>
    <div class="projects-grid">
      ${portfolioContent.projects.cards.map(projectCard).join("")}
    </div>
  `;
}

function techGroupCard(group, index) {
  const icon = techIcons[group.accent] || "tune";

  return `
    <article class="cluster-card cluster-card--${group.accent}">
      <div class="cluster-card__top">
        <span class="material-symbols-outlined">${icon}</span>
        <span class="cluster-card__id">Module ${index + 1}</span>
      </div>
      <div class="cluster-card__header">
        <h4>${group.title}</h4>
        <p>${group.description}</p>
      </div>
      <div class="cluster-card__items">
        ${group.items.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </article>
  `;
}

function languageCard(language) {
  return `
    <article class="language-card">
      <div class="language-card__head">
        <h4>${language.name}</h4>
        <span>${language.level}</span>
      </div>
      <div class="language-card__meter" aria-hidden="true">
        <div class="language-card__fill" style="width: ${language.score}%"></div>
      </div>
      <p>${language.context}</p>
    </article>
  `;
}

function experienceCard(item) {
  return `
    <article class="timeline-card">
      <div class="timeline-card__node" aria-hidden="true"></div>
      <div class="timeline-card__body">
        <div class="timeline-card__meta">
          <span>${item.period}</span>
          <span class="location-flag">${formatLocation(item.location)}</span>
        </div>
        <h4>${item.role}</h4>
        <p class="timeline-card__org">${item.organization}</p>
        <p>${item.summary}</p>
        <ul>
          ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
        <div class="tag-row">
          ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </article>
  `;
}

function educationCard(item) {
  return `
    <article class="timeline-card">
      <div class="timeline-card__node" aria-hidden="true"></div>
      <div class="timeline-card__body">
        <div class="timeline-card__meta">
          <span>${item.period}</span>
          <span class="location-flag">${formatLocation(item.location)}</span>
        </div>
        <h4>${item.degree}</h4>
        <p class="timeline-card__org">${item.institution}</p>
        <p>${item.summary}</p>
        <ul>
          ${item.details.map((detail) => `<li>${detail}</li>`).join("")}
        </ul>
      </div>
    </article>
  `;
}

function projectCard(item) {
  return `
    <article class="project-card${item.featured ? " project-card--featured" : ""}">
      <div class="project-card__media">
        ${item.featured ? '<span class="project-badge">Featured</span>' : ""}
        <p>${item.mediaLabel}</p>
      </div>
      <div class="project-card__content">
        <h4>${item.title}</h4>
        <p>${item.blurb}</p>
        <div class="tag-row">
          ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          ${item.links
            .map(
              (link) => `
                <a class="project-link${link.href ? "" : " is-placeholder"}" href="${link.href || "#"}"${link.href ? ' target="_blank" rel="noreferrer"' : ' aria-disabled="true" tabindex="-1"'}>
                  ${link.label}
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function activateTab(tabId, updateHash = true) {
  if (!tabs.some((tab) => tab.id === tabId)) {
    return;
  }

  currentTabId = tabId;

  document.querySelectorAll("[data-tab]").forEach((element) => {
    const isActive = element.dataset.tab === tabId;
    element.classList.toggle("is-active", isActive);
    if (element.getAttribute("role") === "tab") {
      element.setAttribute("aria-selected", String(isActive));
    }
  });

  app.panels.forEach((panel) => {
    const isActive = panel.dataset.panel === tabId;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  updateViewMode(tabId);
  if (updateHash) {
    history.replaceState(null, "", `#${tabId}`);
  }
}

function bindNavigation() {
  document.addEventListener("click", (event) => {
    const tabTrigger = event.target.closest("[data-tab]");
    if (tabTrigger) {
      event.preventDefault();
      activateTab(tabTrigger.dataset.tab);
      return;
    }

    const jumpTrigger = event.target.closest("[data-jump]");
    if (jumpTrigger) {
      event.preventDefault();
      activateTab(jumpTrigger.dataset.jump);
    }
  });

  const hashTab = window.location.hash.replace("#", "");
  if (hashTab) {
    activateTab(hashTab, false);
  } else {
    updateViewMode(currentTabId);
  }

  window.addEventListener("hashchange", () => {
    const nextTab = window.location.hash.replace("#", "");
    if (nextTab) {
      activateTab(nextTab, false);
    }
  });
}

function updateViewMode(tabId) {
  const tabMeta = tabs.find((tab) => tab.id === tabId);
  if (!tabMeta) {
    return;
  }

  if (app.hero) {
    const hideHero = tabId !== "home";
    app.hero.classList.toggle("is-collapsed", hideHero);
    app.hero.setAttribute("aria-hidden", String(hideHero));
  }

  if (!app.sectionHead || !app.sectionHeadKicker || !app.sectionHeadTitle) {
    return;
  }

  if (tabId === "home") {
    app.sectionHead.hidden = true;
    app.sectionHead.classList.remove("is-visible");
    return;
  }

  app.sectionHeadKicker.textContent = tabMeta.headerKicker;
  app.sectionHeadTitle.textContent = tabMeta.headerTitle;
  app.sectionHead.hidden = false;
  requestAnimationFrame(() => app.sectionHead.classList.add("is-visible"));
}

function formatLocation(location) {
  const flagMap = [
    { key: "Italy", flag: "🇮🇹" },
    { key: "Sweden", flag: "🇸🇪" },
    { key: "Spain", flag: "🇪🇸" },
    { key: "Hungary", flag: "🇭🇺" },
    { key: "France", flag: "🇫🇷" },
    { key: "Argentina", flag: "🇦🇷" }
  ];

  const found = flagMap.find((entry) => location.includes(entry.key));
  if (!found) {
    return location;
  }

  return `<span class="flag-badge">${found.flag}</span>${location}`;
}

function bindAmbientMotion() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchLike = window.matchMedia("(hover: none)").matches;
  if (prefersReduced || isTouchLike || !app.root) {
    return;
  }

  let rafId = null;
  let nextX = 50;
  let nextY = 50;

  const paint = () => {
    app.root.style.setProperty("--pointer-x", `${nextX}%`);
    app.root.style.setProperty("--pointer-y", `${nextY}%`);
    document.body.classList.add("is-hovering-bg");
    rafId = null;
  };

  window.addEventListener("pointermove", (event) => {
    nextX = (event.clientX / window.innerWidth) * 100;
    nextY = (event.clientY / window.innerHeight) * 100;

    if (!rafId) {
      rafId = requestAnimationFrame(paint);
    }
  });

  window.addEventListener("pointerleave", () => {
    document.body.classList.remove("is-hovering-bg");
  });
}

function bindReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".panel-card, .project-card, .timeline-card").forEach((node) => observer.observe(node));
}

createMarkup();
bindNavigation();
bindAmbientMotion();
bindReveal();
requestAnimationFrame(() => document.body.classList.add("is-booted"));
