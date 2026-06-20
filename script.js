/* =====================================================
   CODE WITH ARSHMAN ANIL — PORTFOLIO SCRIPT
   Handles: Projects, Skills, Counters, Menu, Scroll Reveal,
   Lenis Smooth Scroll, Custom Cursor, 3D Tilt, Magnetics
   ===================================================== */

/* -----------------------------------------------------
   1) PROJECTS ARRAY
   -----------------------------------------------------
   👇 TO ADD A NEW PROJECT:
   Just copy one object below, paste it inside the array,
   and edit the title / description / github / download / downloadText.
   The new card will appear automatically on the website.
   ----------------------------------------------------- */
const projects = [
  {
    title: "PyCJ Programming Language",
    description: "A custom programming language built in Python with its own lexer, parser, and interpreter. Designed to make learning programming concepts easier and more intuitive.",
    github: "https://github.com/ZentrixVayne/PyCJ-Compiler",
    download: "https://pycjcompiler.netlify.app/",
    downloadText: "Visit", // You can change this to "Download" or anything else
    tag: "Language"
  }
  /* Example of adding a new project:
  ,
  {
    title: "My New Project",
    description: "Short description of the project goes here.",
    github: "https://github.com/ZentrixVayne",
    download: "#",
    downloadText: "Download",
    tag: "New"
  }
  */
];

/* -----------------------------------------------------
   2) SKILLS ARRAY
   -----------------------------------------------------
   👇 TO ADD A NEW SKILL:
   Copy one object, paste it in the array, and edit.
   ----------------------------------------------------- */
const skills = [
  { icon: "🌐", name: "HTML",        level: "Advanced" },
  { icon: "🎨", name: "CSS",         level: "Advanced" },
  { icon: "⚡", name: "JavaScript",  level: "Intermediate" },
  { icon: "🐍", name: "Python",      level: "Advanced" },
  { icon: "💻", name: "Frontend Development", level: "Advanced" },
  { icon: "✨", name: "UI/UX Design", level: "Intermediate" },
  { icon: "🛡️", name: "Cyber Security", level: "Learning" },
  { icon: "⚙️", name: "Programming Language Design", level: "Intermediate" }
];

/* -----------------------------------------------------
   3) RENDER PROJECTS DYNAMICALLY
   ----------------------------------------------------- */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = projects.map(p => `
    <article class="project-card reveal" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.2">
      <span class="project-tag">${p.tag || 'Project'}</span>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-buttons">
        <a href="${p.github}" target="_blank" rel="noopener" class="project-btn btn-github magnetic">🔗 GitHub</a>
        <a href="${p.download}" target="_blank" rel="noopener" class="project-btn btn-download magnetic">${p.downloadText || '⬇ Download'}</a>
      </div>
    </article>
  `).join('');
  
  // Initialize Tilt.js on the new cards
  VanillaTilt.init(document.querySelectorAll(".project-card"));
}

/* -----------------------------------------------------
   4) RENDER SKILLS DYNAMICALLY
   ----------------------------------------------------- */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  grid.innerHTML = skills.map(s => `
    <div class="skill-card reveal">
      <div class="skill-icon">${s.icon}</div>
      <h3>${s.name}</h3>
      <p>${s.level}</p>
    </div>
  `).join('');
}

/* -----------------------------------------------------
   5) ANIMATED ROLE TEXT (Hero)
   ----------------------------------------------------- */
const roles = [
  "Frontend Developer",
  "Programming Language Creator",
  "Cyber Security Student",
  "Future Computer Scientist"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const el = document.getElementById('roleText');
  if (!el) return;

  const current = roles[roleIndex];

  if (isDeleting) {
    el.textContent = current.substring(0, charIndex--);
  } else {
    el.textContent = current.substring(0, charIndex++);
  }

  let speed = isDeleting ? 45 : 90;

  if (!isDeleting && charIndex === current.length + 1) {
    speed = 1800; // pause at full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 300;
  }

  setTimeout(typeRole, speed);
}

/* -----------------------------------------------------
   6) MOBILE HAMBURGER MENU
   ----------------------------------------------------- */
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

/* -----------------------------------------------------
   7) NAVBAR SCROLL EFFECT + ACTIVE LINK HIGHLIGHT
   ----------------------------------------------------- */
function setupNavbar() {
  const navbar   = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* -----------------------------------------------------
   8) SCROLL REVEAL ANIMATIONS
   ----------------------------------------------------- */
function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, (i % 4) * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
}

/* -----------------------------------------------------
   9) ANIMATED COUNTERS (Statistics Section)
   ----------------------------------------------------- */
function setupCounters() {
  const counters = document.querySelectorAll('.stat-number');
  let started = false;

  const startCounting = () => {
    if (started) return;
    started = true;

    counters.forEach(counter => {
      const target   = +counter.getAttribute('data-target');
      const duration = 2000;
      const stepTime = 20;
      const steps    = duration / stepTime;
      const inc       = target / steps;

      let current = 0;
      const update = () => {
        current += inc;
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString();
          setTimeout(update, stepTime);
        } else {
          counter.textContent = target.toLocaleString() + '+';
        }
      };
      update();
    });
  };

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) startCounting();
      });
    }, { threshold: 0.3 });
    observer.observe(statsSection);
  }
}

/* -----------------------------------------------------
   10) CURRENT YEAR IN FOOTER
   ----------------------------------------------------- */
function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* -----------------------------------------------------
   11) ULTRA SMOOTH SCROLL (Lenis)
   ----------------------------------------------------- */
function setupSmoothScroll() {
  if (typeof Lenis === 'undefined') return;
  
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

/* -----------------------------------------------------
   12) CUSTOM CURSOR
   ----------------------------------------------------- */
function setupCustomCursor() {
  const dot = document.getElementById('cursorDot');
  if (!dot) return;

  let mouseX = 0, mouseY = 0;
  let dotX = 0, dotY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateDot() {
    dotX += (mouseX - dotX) * 0.15;
    dotY += (mouseY - dotY) * 0.15;
    dot.style.transform = `translate(${dotX - 6}px, ${dotY - 6}px)`;
    requestAnimationFrame(animateDot);
  }
  animateDot();

  document.querySelectorAll('a, button, .magnetic').forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('expand'));
    el.addEventListener('mouseleave', () => dot.classList.remove('expand'));
  });
}

/* -----------------------------------------------------
   13) MAGNETIC BUTTONS
   ----------------------------------------------------- */
function setupMagneticButtons() {
  const magnets = document.querySelectorAll('.magnetic');
  
  magnets.forEach(magnet => {
    magnet.addEventListener('mousemove', (e) => {
      const rect = magnet.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      magnet.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    magnet.addEventListener('mouseleave', () => {
      magnet.style.transform = 'translate(0, 0)';
    });
  });
}

/* -----------------------------------------------------
   14) INIT EVERYTHING ON DOM READY
   ----------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
  typeRole();
  setupMobileMenu();
  setupNavbar();
  setupScrollReveal();
  setupCounters();
  setYear();
  
  // 🚀 PREMIUM FEATURES INITIALIZED
  setupSmoothScroll();
  setupCustomCursor();
  setupMagneticButtons();
  
  // Initialize Tilt on static HTML cards (About & Contact)
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".info-card, .contact-card"));
  }
});