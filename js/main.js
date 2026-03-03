/* ============================================
   MAIN JAVASCRIPT
   Handles: navigation, scroll animations,
   skill bar animations, mobile menu,
   and dynamic content rendering.
   ============================================ */

(function () {
  "use strict";

  // ── Wait for DOM and content data ─────────
  document.addEventListener("DOMContentLoaded", init);

  function init() {
    renderContent();
    setupNavigation();
    setupScrollReveal();
    setupSkillBars();
    setupMobileMenu();
    setupSmoothScroll();
    setupParallax();
    setupScrollProgress();
    setupCustomCursor();
    setupMagneticButtons();
    setup3DCardTilt();
    setupHeroRoleSwitcher();
    setupCopyEmail();
    setupCardGlow();
    setupHighlightReveal();
    setupKineticTypography();
  }

  // ============================================
  // RENDER CONTENT FROM DATA FILE
  // ============================================

  function renderContent() {
    if (typeof PROFILE === "undefined") return;

    const d = PROFILE;

    // Hero
    setText(".hero-firstname", d.firstName);
    setText(".hero-lastname", d.lastName);
    setText(".hero-title-static", d.title);
    setText(".hero-tagline-text", d.tagline);

    // About
    setText(".about-summary", d.about.summary);
    renderHighlights(d.about.highlights);
    renderPhoto(d.about.photo);

    // Skills
    renderSkills(d.skills);

    // Experience
    renderExperience(d.experience);

    // Projects
    renderProjects(d.projects);

    // Education
    renderEducation(d.education);
    renderCertifications(d.certifications);
    renderVolunteering(d.volunteering);
    renderHonors(d.honors);

    // Contact
    setAttr(".contact-email-link", "href", `mailto:${d.email}`);
    setText(".contact-email-text", d.email);
    setText(".contact-location", d.location);
    renderSocials(d.social);

    // Footer
    setText(".footer-name", d.name);
  }

  function setText(sel, text) {
    const el = document.querySelector(sel);
    if (el) el.textContent = text;
  }

  function setAttr(sel, attr, val) {
    const el = document.querySelector(sel);
    if (el) el.setAttribute(attr, val);
  }

  // ── Render helpers ──────────────────────────

  function renderPhoto(src) {
    const container = document.querySelector(".about-photo");
    if (!container) return;

    const img = new Image();
    img.src = src;
    img.alt = PROFILE.name + " - Professional headshot";
    img.onload = function () {
      const placeholder = container.querySelector(".about-photo-placeholder");
      if (placeholder) placeholder.style.display = "none";
      container.prepend(img);
    };
  }

  function renderHighlights(items) {
    const container = document.querySelector(".about-highlights");
    if (!container || !items) return;

    container.innerHTML = items
      .map(
        (item) => `
      <li class="about-highlight">
        <svg class="about-highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
        <span>${escapeHtml(item)}</span>
      </li>`
      )
      .join("");
  }

  function renderSkills(skills) {
    const container = document.querySelector(".skills-grid");
    if (!container || !skills) return;

    const icons = {
      layout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
      server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
      cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
      users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    };

    container.innerHTML = skills
      .map(
        (cat, ci) => `
      <div class="skill-card reveal reveal-delay-${ci + 1}">
        <div class="skill-card-header">
          <div class="skill-card-icon">${icons[cat.icon] || icons.layout}</div>
          <h3 class="skill-card-title">${escapeHtml(cat.category)}</h3>
        </div>
        <div class="skill-items">
          ${cat.items
            .map(
              (s) => `
            <div class="skill-item">
              <div class="skill-item-header">
                <span class="skill-item-name">${escapeHtml(s.name)}</span>
                <span class="skill-item-level">${s.level}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-bar-fill" data-level="${s.level}"></div>
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>`
      )
      .join("");
  }

  function renderExperience(items) {
    const container = document.querySelector(".timeline");
    if (!container || !items) return;

    container.innerHTML = items
      .map(
        (exp, i) => `
      <div class="timeline-item reveal reveal-delay-${Math.min(i + 1, 4)}">
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          <h3 class="timeline-role">${escapeHtml(exp.role)}</h3>
          <span class="timeline-company">${escapeHtml(exp.company)}</span>
        </div>
        <div class="timeline-meta">
          <span>${escapeHtml(exp.period)}</span>
          <span>${escapeHtml(exp.location)}</span>
        </div>
        <p class="timeline-description">${escapeHtml(exp.description)}</p>
        <div class="timeline-tags">
          ${exp.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
        </div>
      </div>`
      )
      .join("");
  }

  function renderProjects(items) {
    const container = document.querySelector(".projects-grid");
    if (!container || !items) return;

    container.innerHTML = items
      .map(
        (proj, i) => `
      <div class="project-card ${proj.featured ? "featured" : ""} reveal reveal-delay-${Math.min(i + 1, 4)}">
        <div class="project-header">
          <div class="project-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <a href="${escapeHtml(proj.link)}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View ${escapeHtml(proj.title)} on GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
        <h3 class="project-title">${escapeHtml(proj.title)}</h3>
        <p class="project-description">${escapeHtml(proj.description)}</p>
        <div class="project-tags">
          ${proj.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
        </div>
      </div>`
      )
      .join("");
  }

  function renderEducation(items) {
    const container = document.querySelector(".education-list");
    if (!container || !items) return;

    container.innerHTML = items
      .map(
        (edu) => `
      <div class="edu-card">
        <h4 class="edu-degree">${escapeHtml(edu.degree)}</h4>
        <div class="edu-institution">${escapeHtml(edu.institution)}</div>
        <div class="edu-period">${escapeHtml(edu.period)}</div>
        ${edu.details ? `<p class="edu-details">${escapeHtml(edu.details)}</p>` : ""}
      </div>`
      )
      .join("");
  }

  function renderCertifications(items) {
    const container = document.querySelector(".certifications-list");
    if (!container || !items) return;

    // Split: first 4 as full cards, rest as compact grid
    var mainCerts = items.slice(0, 4);
    var compactCerts = items.slice(4);

    var mainHTML = mainCerts
      .map(
        (cert) => `
      <div class="cert-card">
        <div class="cert-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        </div>
        <div>
          <div class="cert-name">${escapeHtml(cert.name)}</div>
          <div class="cert-issuer">${escapeHtml(cert.issuer)}${cert.year ? " &middot; " + escapeHtml(cert.year) : ""}</div>
        </div>
      </div>`
      )
      .join("");

    var compactHTML = "";
    if (compactCerts.length > 0) {
      compactHTML = '<div class="cert-compact-grid">' +
        compactCerts
          .map(
            (cert) => `
          <div class="cert-compact-item">
            <div class="cert-compact-name">${escapeHtml(cert.name)}</div>
            <div class="cert-compact-issuer">${escapeHtml(cert.issuer)}${cert.year ? " &middot; " + escapeHtml(cert.year) : ""}</div>
          </div>`
          )
          .join("") +
        "</div>";
    }

    container.innerHTML = mainHTML + compactHTML;
  }

  function renderVolunteering(items) {
    const container = document.querySelector(".volunteering-list");
    if (!container || !items) return;

    container.innerHTML = items
      .map(
        (vol) => `
      <div class="cert-card">
        <div class="cert-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <div>
          <div class="cert-name">${escapeHtml(vol.role)}</div>
          <div class="cert-issuer">${escapeHtml(vol.organization)} &middot; ${escapeHtml(vol.period)}</div>
        </div>
      </div>`
      )
      .join("");
  }

  function renderHonors(items) {
    const container = document.querySelector(".honors-list");
    if (!container || !items) return;

    container.innerHTML = items
      .map(
        (hon) => `
      <div class="cert-card">
        <div class="cert-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <div>
          <div class="cert-name">${escapeHtml(hon.title)}</div>
          <div class="cert-issuer">${escapeHtml(hon.issuer)} &middot; ${escapeHtml(hon.year)}</div>
        </div>
      </div>`
      )
      .join("");
  }

  function renderSocials(social) {
    const container = document.querySelector(".contact-socials");
    if (!container || !social) return;

    const icons = {
      linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
      github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
      twitter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>`,
    };

    const labels = {
      linkedin: "LinkedIn",
      github: "GitHub",
      twitter: "X / Twitter",
    };

    container.innerHTML = Object.entries(social)
      .map(
        ([key, url]) => `
      <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer"
         class="social-link" aria-label="${labels[key] || key}">
        ${icons[key] || ""}
      </a>`
      )
      .join("");
  }

  // ============================================
  // NAVIGATION
  // ============================================

  function setupNavigation() {
    const nav = document.querySelector(".nav");
    const links = document.querySelectorAll(".nav-link[data-section]");
    const sections = document.querySelectorAll(".section[id]");

    // Scrolled state
    function updateNav() {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }

    // Active section tracking
    function updateActiveLink() {
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.getAttribute("id");
        }
      });
      links.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("data-section") === current
        );
      });
    }

    window.addEventListener("scroll", () => {
      updateNav();
      updateActiveLink();
    }, { passive: true });

    updateNav();
  }

  // ============================================
  // SCROLL REVEAL
  // ============================================

  function setupScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });
  }

  // ============================================
  // SKILL BAR ANIMATION
  // ============================================

  function setupSkillBars() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".skill-bar-fill");
            bars.forEach((bar, i) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.level + "%";
                bar.classList.add("animated");
              }, i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".skill-card").forEach((card) => {
      observer.observe(card);
    });
  }

  // ============================================
  // MOBILE MENU
  // ============================================

  function setupMobileMenu() {
    const toggle = document.querySelector(".nav-toggle");
    const mobile = document.querySelector(".nav-mobile");

    if (!toggle || !mobile) return;

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      mobile.classList.toggle("open");
      document.body.style.overflow = mobile.classList.contains("open")
        ? "hidden"
        : "";
    });

    mobile.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("open");
        mobile.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================

  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const id = this.getAttribute("href");
        if (id === "#") return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // ============================================
  // SUBTLE PARALLAX
  // ============================================

  function setupParallax() {
    const orbs = document.querySelectorAll(".hero-orb");
    const shapes = document.querySelectorAll(".hero-shape");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!orbs.length && !shapes.length) return;

    let ticking = false;

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const vh = window.innerHeight;

          if (scrollY < vh * 1.5) {
            orbs.forEach((orb, i) => {
              const speed = 0.03 + i * 0.015;
              orb.style.transform = `translateY(${scrollY * speed}px)`;
            });
            shapes.forEach((shape, i) => {
              const speed = 0.02 + i * 0.01;
              shape.style.transform = `translateY(${scrollY * speed}px)`;
            });
          }

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================
  // UTILITY
  // ============================================

  function escapeHtml(str) {
    if (typeof str !== "string") return str;
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ============================================
  // SCROLL PROGRESS BAR
  // ============================================

  function setupScrollProgress() {
    const bar = document.querySelector(".scroll-progress-bar");
    if (!bar) return;

    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + "%";
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
  }

  // ============================================
  // CUSTOM CURSOR
  // ============================================

  function setupCustomCursor() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.innerWidth < 769) return;

    const cursor = document.querySelector(".custom-cursor");
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!cursor || !dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover states for interactive elements
    var hoverTargets = document.querySelectorAll("a, button, .btn, .project-card, .skill-card, .social-link, .nav-link, .tag");

    hoverTargets.forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        cursor.classList.add("cursor-hover");
      });
      el.addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor-hover");
        cursor.classList.remove("cursor-text");
      });
    });

    // Text cursor for headings
    var textTargets = document.querySelectorAll("h1, h2, .hero-name");
    textTargets.forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        cursor.classList.add("cursor-text");
      });
      el.addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor-text");
      });
    });

    // Hide on mouse leave window
    document.addEventListener("mouseleave", function () {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    });
    document.addEventListener("mouseenter", function () {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    });

    // Add body class for custom cursor styling
    document.body.style.cursor = "none";
    document.querySelectorAll("a, button").forEach(function (el) {
      el.style.cursor = "none";
    });
  }

  // ============================================
  // MAGNETIC BUTTONS
  // ============================================

  function setupMagneticButtons() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    var buttons = document.querySelectorAll(".btn, .social-link, .copy-email-btn");

    buttons.forEach(function (btn) {
      btn.classList.add("btn-magnetic");

      btn.addEventListener("mousemove", function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = "translate(" + (x * 0.2) + "px, " + (y * 0.2) + "px)";
      });

      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "";
      });
    });
  }

  // ============================================
  // 3D CARD TILT
  // ============================================

  function setup3DCardTilt() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    var cards = document.querySelectorAll(".skill-card, .project-card");

    cards.forEach(function (card) {
      card.classList.add("tilt-card");

      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var y = (e.clientY - rect.top) / rect.height;
        var tiltX = (0.5 - y) * 8;
        var tiltY = (x - 0.5) * 8;

        card.style.transform = "perspective(1000px) rotateX(" + tiltX + "deg) rotateY(" + tiltY + "deg) translateY(-4px)";
      });

      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  // ============================================
  // HERO ROLE SWITCHER (Typing Effect)
  // ============================================

  function setupHeroRoleSwitcher() {
    var currentEl = document.querySelector(".hero-role-current");
    if (!currentEl) return;
    if (typeof PROFILE === "undefined") return;

    var roles = [
      PROFILE.title,
      "Controls & Assurance",
      "Security Operations & Incident Response",
      "GRC & Risk Management",
    ];

    var roleIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typeSpeed = 60;
    var deleteSpeed = 35;
    var pauseEnd = 2200;
    var pauseStart = 500;

    function type() {
      var currentRole = roles[roleIndex];

      if (!isDeleting) {
        currentEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
          // Finished typing — pause then delete
          setTimeout(function () {
            isDeleting = true;
            type();
          }, pauseEnd);
          return;
        }
        setTimeout(type, typeSpeed);
      } else {
        currentEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(type, pauseStart);
          return;
        }
        setTimeout(type, deleteSpeed);
      }
    }

    // Start after hero animation completes
    setTimeout(type, 1500);
  }

  // ============================================
  // COPY EMAIL BUTTON
  // ============================================

  function setupCopyEmail() {
    var btn = document.querySelector(".copy-email-btn");
    if (!btn) return;
    if (typeof PROFILE === "undefined") return;

    var copyIcon = btn.querySelector(".copy-icon");
    var checkIcon = btn.querySelector(".check-icon");

    btn.addEventListener("click", function () {
      var email = PROFILE.email;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () {
          showCopied();
        });
      } else {
        // Fallback
        var textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showCopied();
      }
    });

    function showCopied() {
      btn.classList.add("copied");
      if (copyIcon) copyIcon.style.display = "none";
      if (checkIcon) checkIcon.style.display = "block";

      setTimeout(function () {
        btn.classList.remove("copied");
        if (copyIcon) copyIcon.style.display = "block";
        if (checkIcon) checkIcon.style.display = "none";
      }, 2000);
    }
  }

  // ============================================
  // CARD GLOW FOLLOW MOUSE
  // ============================================

  function setupCardGlow() {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    var cards = document.querySelectorAll(".skill-card, .project-card");

    cards.forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", x + "px");
        card.style.setProperty("--mouse-y", y + "px");
      });
    });
  }

  // ============================================
  // STAGGERED HIGHLIGHT REVEAL
  // ============================================

  function setupHighlightReveal() {
    var highlights = document.querySelector(".about-highlights");
    if (!highlights) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            highlights.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(highlights);
  }

  // ============================================
  // KINETIC TYPOGRAPHY (subtle tracking on scroll)
  // ============================================

  function setupKineticTypography() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var titles = document.querySelectorAll(".section-title");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("kinetic");
          }
        });
      },
      { threshold: 0.5 }
    );

    titles.forEach(function (t) { observer.observe(t); });
  }
})();
