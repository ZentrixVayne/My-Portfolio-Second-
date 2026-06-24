/* =====================================================
   CODE WITH ARSHMAN ANIL — ULTIMATE PORTFOLIO SCRIPT
   ===================================================== */

/* -----------------------------------------------------
   1) DATA ARRAYS
   ----------------------------------------------------- */
const projects = [
  {
    title: "PyCJ Programming Language",
    description: "A custom programming language built in JavaScript with its own lexer, parser, and interpreter. Designed to make learning programming concepts easier and more intuitive.",
    github: "https://github.com/ZentrixVayne/PyCJ-Compiler",
    download: "https://pycjcompiler.vercel.app/",
    downloadText: "Visit Compiler",
    tag: "Langauge"
  },
  {
    title: "PyCJ Documentation Website",
    description: "PyCJ is a beginner-friendly programming language built in JavaScript with its own compiler and custom syntax. It transforms PyCJ code into JavaScript behind the scenes, making programming easier to learn while remaining powerful and interactive.",
    github: "https://github.com/ZentrixVayne/PyCj-Documentation",
    download: "https://pycjdocumentation.vercel.app/",
    downloadText: "Visit Documentation",
    tag: "Documentation"
  }    
  {
    title: "PyCJ Artificial Intelligence",
    description: "The official AI assistant for PyCJ — a custom programming language with its own lexer, parser, and interpreter designed to make learning to code intuitive and straightforward.",
    github: "https://github.com/ZentrixVayne/aura-ai",
    download: "https://pycjai.vercel.app/",
    downloadText: "Visit AI",
    tag: "Artificial Intelligence"
  },
];

const skills = [
  { icon: "🌐", name: "HTML", level: "Advanced" }, { icon: "🎨", name: "CSS", level: "Advanced" },
  { icon: "⚡", name: "JavaScript", level: "Intermediate" }, { icon: "🐍", name: "Python", level: "Advanced" },
  { icon: "💻", name: "Frontend Dev", level: "Advanced" }, { icon: "✨", name: "UI/UX Design", level: "Intermediate" },
  { icon: "🛡️", name: "Cyber Security", level: "Learning" }, { icon: "⚙️", name: "Lang Design", level: "Intermediate" }
];

const tools = [
  { icon: "devicon-vscode-plain", name: "VS Code" }, { icon: "devicon-python-plain", name: "Thonny" },
  { icon: "devicon-javascript-plain", name: "RunJS" }, { icon: "devicon-c-plain", name: "Dev C++" },
  { icon: "devicon-linux-plain", name: "Kali Linux" }, { icon: "fas fa-crosshairs", name: "Wireshark" },
  { icon: "fas fa-bug", name: "Burp Suite" }, { icon: "devicon-figma-plain", name: "Figma" },
  { icon: "devicon-git-plain", name: "Git" }, { icon: "devicon-github-original", name: "GitHub" }
];

const timelineData = [
  { year: "2021", title: "Started Coding", desc: "Wrote my first lines of code and discovered my passion for software development." },
  { year: "2023", title: "First Step in CyberSecurity", desc: "Dove into the world of ethical hacking, Kali Linux, and network security." },
  { year: "2025", title: "Python Expert", desc: "Mastered Python, building complex applications and diving deep into language design." },
  { year: "2026", title: "Created PyCJ Language", desc: "Designed and built my own programming language, PyCJ, with a custom compiler in JavaScript." }
];

const achievements = [
  { icon: "🛡️", title: "CTF Champion", desc: "Top 5% in National Cyber Security CTF Challenge" },
  { icon: "🐍", title: "Pythonista", desc: "Built a custom programming language from scratch" },
  { icon: "💻", title: "1000+ Hours", desc: "Of pure coding and problem-solving" },
  { icon: "🎓", title: "CS Prodigy", desc: "Highest grades in Computer Science track" }
];

const testimonials = [
  { text: "Arshman's problem-solving skills are unmatched. His code is as impenetrable as his cybersecurity knowledge!", name: "Ahmed R.", role: "CS Professor", avatar: "AR" },
  { text: "PyCJ is a marvel for a student his age. It shows a deep understanding of how computers actually read code.", name: "Sarah K.", role: "Senior Developer", avatar: "SK" },
  { text: "A brilliant mind with an incredible work ethic. He is destined to make huge waves in tech.", name: "Zain M.", role: "Ethical Hacker", avatar: "ZM" }
];

/* -----------------------------------------------------
   2) RENDER FUNCTIONS
   ----------------------------------------------------- */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => `
    <article class="project-card reveal" data-tilt data-tilt-max="4" data-tilt-speed="1000" data-tilt-glare data-tilt-max-glare="0.05">
      <span class="project-tag">${p.tag}</span>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-buttons">
        <a href="${p.github}" target="_blank" rel="noopener" class="project-btn btn-github magnetic">🔗 GitHub</a>
        <a href="${p.download}" target="_blank" rel="noopener" class="project-btn btn-download magnetic">${p.downloadText}</a>
      </div>
    </article>
  `).join('');
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".project-card"));
  }
}

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

function renderTools() {
  const grid = document.getElementById('toolsGrid');
  if (!grid) return;
  grid.innerHTML = tools.map(t => `
    <div class="tool-item">
      <i class="${t.icon}"></i>
      <span>${t.name}</span>
    </div>
  `).join('');
}

function renderTimeline() {
  const tl = document.getElementById('timeline');
  if (!tl) return;
  tl.innerHTML = timelineData.map(t => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">${t.year}</div>
        <h3 class="timeline-title">${t.title}</h3>
        <p class="timeline-desc">${t.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  if (!grid) return;
  grid.innerHTML = achievements.map(a => `
    <div class="achievement-card reveal">
      <div class="achievement-icon">${a.icon}</div>
      <h3>${a.title}</h3>
      <p>${a.desc}</p>
    </div>
  `).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;
  grid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card reveal">
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.avatar}</div>
        <div class="author-info">
          <h4>${t.name}</h4>
          <p>${t.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* -----------------------------------------------------
   3) PRELOADER & BLUR EFFECT
   ----------------------------------------------------- */
function setupPreloader() {
  const output = document.getElementById('term-output');
  const preloader = document.getElementById('preloader');
  const body = document.body;
  
  if (!output || !preloader) return;
  
  const lines = [
    { text: '> Initializing Arshman_OS...', delay: 200 },
    { text: '> Loading Cyber_Security_Module [OK]', delay: 400 },
    { text: '> Compiling JS_Expertise [OK]', delay: 600 },
    { text: '> Building PyCJ_Language [OK]', delay: 800 },
    { text: '> Portfolio Compiled Successfully!', delay: 1000 }
  ];

  let totalDelay = 0;
  lines.forEach(line => {
    totalDelay += line.delay;
    setTimeout(() => { output.innerHTML += `<div>${line.text}</div>`; }, totalDelay);
  });

  setTimeout(() => { preloader.classList.add('loaded'); body.classList.remove('is-blur'); }, totalDelay + 800);
}

/* -----------------------------------------------------
   4) ANIMATED ROLE TEXT
   ----------------------------------------------------- */
const roles = ["Frontend Developer", "Programming Language Creator", "Cyber Security Student", "Future Computer Scientist"];
let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeRole() {
  const el = document.getElementById('roleText');
  if (!el) return;
  const current = roles[roleIndex];
  el.textContent = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);
  let speed = isDeleting ? 45 : 90;
  if (!isDeleting && charIndex === current.length + 1) { speed = 1800; isDeleting = true; }
  else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; speed = 300; }
  setTimeout(typeRole, speed);
}

/* -----------------------------------------------------
   5) UI INTERACTIONS
   ----------------------------------------------------- */
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); navLinks.classList.toggle('open'); });
  navLinks.querySelectorAll('.nav-link').forEach(link => { link.addEventListener('click', () => { hamburger.classList.remove('active'); navLinks.classList.remove('open'); }); });
}

function setupNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  const backToTop = document.getElementById('backToTop');

  if (!navbar || !backToTop) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    backToTop.classList.toggle('show', window.scrollY > 500);
    let current = '';
    sections.forEach(section => { if (window.scrollY >= section.offsetTop - 120) current = section.getAttribute('id'); });
    links.forEach(link => { link.classList.remove('active'); if (link.getAttribute('href') === `#${current}`) link.classList.add('active'); });
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* -----------------------------------------------------
   6) THEME & MUSIC TOGGLES
   ----------------------------------------------------- */
function setupToggles() {
  const themeBtn = document.getElementById('themeToggle');
  if (!themeBtn) return;
  const html = document.documentElement;
  const icon = themeBtn.querySelector('i');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  if (icon) icon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';

  themeBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    if (icon) icon.className = next === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    if(typeof particlesJS !== 'undefined') resetParticles(next);
  });

  const musicBtn = document.getElementById('musicToggle');
  const audio = document.getElementById('bgMusic');
  if (musicBtn && audio) {
    audio.volume = 0.03; // 3% volume
    musicBtn.addEventListener('click', () => {
      if (audio.paused) { audio.play(); musicBtn.classList.add('active-music'); }
      else { audio.pause(); musicBtn.classList.remove('active-music'); }
    });
  }
}

/* -----------------------------------------------------
   7) SCROLL REVEAL & COUNTERS
   ----------------------------------------------------- */
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) { setTimeout(() => entry.target.classList.add('visible'), (i % 4) * 80); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function setupCounters() {
  let started = false;
  const startCounting = () => {
    if (started) return; started = true;
    document.querySelectorAll('.stat-number').forEach(counter => {
      const target = +counter.getAttribute('data-target'); const inc = target / (2000 / 20); let current = 0;
      const update = () => { current += inc; if (current < target) { counter.textContent = Math.floor(current).toLocaleString(); setTimeout(update, 20); } else { counter.textContent = target.toLocaleString() + '+'; } };
      update();
    });
  };
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) { const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) startCounting(); }); }, { threshold: 0.3 }); observer.observe(statsSection); }
}

/* -----------------------------------------------------
   8) PREMIUM EFFECTS (Cursor, Smooth Scroll, Particles)
   ----------------------------------------------------- */
let lenis; 

function setupCustomCursor() {
  const dot = document.getElementById('cursorDot');
  if (!dot || window.innerWidth < 768) return;
  let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0;
  window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
  function animateDot() { dotX += (mouseX - dotX) * 0.55; dotY += (mouseY - dotY) * 0.55; dot.style.transform = `translate(${dotX - 6}px, ${dotY - 6}px)`; requestAnimationFrame(animateDot); }
  animateDot();
  document.querySelectorAll('a, button, .magnetic').forEach(el => { el.addEventListener('mouseenter', () => dot.classList.add('expand')); el.addEventListener('mouseleave', () => dot.classList.remove('expand')); });
}

function setupMagneticButtons() {
  document.querySelectorAll('.magnetic').forEach(magnet => {
    magnet.addEventListener('mousemove', (e) => { const rect = magnet.getBoundingClientRect(); magnet.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * 0.3}px, ${(e.clientY - rect.top - rect.height / 2) * 0.3}px)`; });
    magnet.addEventListener('mouseleave', () => magnet.style.transform = 'translate(0, 0)');
  });
}

function setupSmoothScroll() {
  if (typeof Lenis === 'undefined') return;
  lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); } requestAnimationFrame(raf);
}

function setupParticles() {
  if(typeof particlesJS === 'undefined') return;
  resetParticles(document.documentElement.getAttribute('data-theme'));
}

function resetParticles(theme) {
  const color = theme === 'dark' ? '#3b82f6' : '#2563eb';
  particlesJS('particles-js', {
    particles: { number: { value: 60, density: { enable: true, value_area: 900 } }, color: { value: color }, shape: { type: "circle" }, opacity: { value: 0.5, random: true }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 150, color: color, opacity: 0.2, width: 1 }, move: { enable: true, speed: 1.5, direction: "none", random: true, out_mode: "out" } },
    interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" }, resize: true }, modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } } } }, retina_detect: true
  });
}

/* -----------------------------------------------------
   9) INIT
   ----------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  setupPreloader();
  renderProjects();
  renderSkills();
  renderTools();
  renderTimeline();
  renderAchievements();
  renderTestimonials();
  typeRole();
  setupMobileMenu();
  setupNavbar();
  setupToggles();
  setupScrollReveal();
  setupCounters();
  setYear();
  
  setupSmoothScroll(); 
  setupCustomCursor();
  setupMagneticButtons();
  setupParticles();

  if (typeof VanillaTilt !== 'undefined') { VanillaTilt.init(document.querySelectorAll(".info-card, .contact-card")); }
});

function setYear() { const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear(); }
