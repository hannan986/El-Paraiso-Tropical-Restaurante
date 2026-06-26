'use strict';

/* =============================================
   NAVBAR — scroll effect & mobile toggle
   ============================================= */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.style.transform = isOpen ? 'rotate(90deg)' : '';
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.style.transform = '';
  });
});

/* =============================================
   SCROLL REVEAL — Intersection Observer
   ============================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* =============================================
   SET MINIMUM DATE for reservation calendar
   ============================================= */
const dateInput = document.getElementById('res-date');
if (dateInput) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;
}

/* =============================================
   MENU — fetch & render
   ============================================= */
const menuGrid    = document.getElementById('menuGrid');
const menuTabs    = document.getElementById('menuTabs');
const menuLoading = document.getElementById('menuLoading');

let menuData = {};
let activeCategory = '';

async function fetchMenu() {
  try {
    const res = await fetch('/api/menu');
    if (!res.ok) throw new Error('Failed to load menu');
    menuData = await res.json();
    const categories = Object.keys(menuData);
    renderTabs(categories);
    renderMenu(categories[0]);
  } catch (err) {
    if (menuLoading) {
      menuLoading.innerHTML = '<p style="color:#E76F51">Unable to load menu. Please try again later.</p>';
    }
  }
}

function renderTabs(categories) {
  if (!menuTabs) return;
  menuTabs.innerHTML = '';
  categories.forEach((cat, i) => {
    const btn = document.createElement('button');
    btn.className = 'menu-tab' + (i === 0 ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      menuTabs.querySelectorAll('.menu-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(cat);
    });
    menuTabs.appendChild(btn);
  });
}

function renderMenu(category) {
  if (!menuGrid) return;
  activeCategory = category;
  const items = menuData[category] || [];

  if (menuLoading) menuLoading.style.display = 'none';

  menuGrid.innerHTML = '';
  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${i * 60}ms`;

    const dietaryHTML = (item.dietary || []).map(d =>
      `<span class="dietary-tag ${d.replace(/\s/g, '-').toLowerCase()}">${d}</span>`
    ).join('');

    const popularBadge = item.popular
      ? '<span class="menu-popular-badge">Popular</span>'
      : '';

    card.innerHTML = `
      <div class="menu-card-body">
        <div class="menu-card-name">
          <span>${item.name}</span>
          ${popularBadge}
        </div>
        <p class="menu-card-desc">${item.description}</p>
        <div class="menu-card-footer">
          <span class="menu-card-price">$${Number(item.price).toFixed(2)}</span>
          <div class="menu-dietary">${dietaryHTML}</div>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

/* =============================================
   SPECIALS — fetch & render
   ============================================= */
const specialsGrid = document.getElementById('specialsGrid');

async function fetchSpecials() {
  if (!specialsGrid) return;
  try {
    const res = await fetch('/api/specials');
    if (!res.ok) throw new Error();
    const specials = await res.json();
    specialsGrid.innerHTML = '';
    specials.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'special-card reveal';
      card.style.animationDelay = `${i * 80}ms`;
      card.innerHTML = `
        <span class="special-icon">${s.icon}</span>
        <p class="special-day">${s.day}</p>
        <h3 class="special-title">${s.title}</h3>
        <p class="special-desc">${s.description}</p>
      `;
      specialsGrid.appendChild(card);
      revealObserver.observe(card);
    });
  } catch {
    /* silent — specials section still visible */
  }
}

/* =============================================
   TESTIMONIALS CAROUSEL
   ============================================= */
const track     = document.getElementById('testimonialsTrack');
const dotsWrap  = document.getElementById('testiDots');
const prevBtn   = document.getElementById('testiPrev');
const nextBtn   = document.getElementById('testiNext');

let currentCard = 0;

function initTestimonials() {
  if (!track) return;
  const cards = track.querySelectorAll('.testimonial-card');
  if (!cards.length) return;

  // Build dots
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Review ${i + 1}`);
    dot.addEventListener('click', () => goToCard(i));
    dotsWrap.appendChild(dot);
  });

  function goToCard(index) {
    currentCard = Math.max(0, Math.min(index, cards.length - 1));
    const cardWidth = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${currentCard * cardWidth}px)`;
    dotsWrap.querySelectorAll('.testi-dot').forEach((d, i) => {
      d.classList.toggle('active', i === currentCard);
    });
  }

  prevBtn && prevBtn.addEventListener('click', () => goToCard(currentCard - 1));
  nextBtn && nextBtn.addEventListener('click', () => goToCard(currentCard + 1));

  // Auto-advance
  let autoTimer = setInterval(() => goToCard((currentCard + 1) % cards.length), 5000);
  track.parentElement.addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.parentElement.addEventListener('mouseleave', () => {
    autoTimer = setInterval(() => goToCard((currentCard + 1) % cards.length), 5000);
  });

  // Recalculate on resize
  window.addEventListener('resize', () => goToCard(currentCard), { passive: true });
}

/* =============================================
   RESERVATION FORM
   ============================================= */
const reservationForm = document.getElementById('reservationForm');
const resMessage      = document.getElementById('resMessage');
const resSubmitBtn    = document.getElementById('resSubmitBtn');

function showFormMessage(el, type, text) {
  el.className = `form-message ${type}`;
  el.textContent = text;
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function setSubmitLoading(btn, loading) {
  const textSpan    = btn.querySelector('.btn-text');
  const loadingSpan = btn.querySelector('.btn-loading');
  btn.disabled = loading;
  textSpan.style.display    = loading ? 'none' : '';
  loadingSpan.style.display = loading ? '' : 'none';
}

reservationForm && reservationForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(reservationForm));
  setSubmitLoading(resSubmitBtn, true);
  resMessage.className = 'form-message';

  try {
    const res = await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    if (json.success) {
      showFormMessage(resMessage, 'success', json.message);
      reservationForm.reset();
    } else {
      showFormMessage(resMessage, 'error', json.message || 'Something went wrong. Please try again.');
    }
  } catch {
    showFormMessage(resMessage, 'error', 'Network error. Please try again or call us directly.');
  } finally {
    setSubmitLoading(resSubmitBtn, false);
  }
});

/* =============================================
   CONTACT FORM
   ============================================= */
const contactForm  = document.getElementById('contactForm');
const ctMessage    = document.getElementById('ctMessage');
const ctSubmitBtn  = document.getElementById('ctSubmitBtn');

contactForm && contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(contactForm));
  setSubmitLoading(ctSubmitBtn, true);
  ctMessage.className = 'form-message';

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    if (json.success) {
      showFormMessage(ctMessage, 'success', json.message);
      contactForm.reset();
    } else {
      showFormMessage(ctMessage, 'error', json.message || 'Something went wrong. Please try again.');
    }
  } catch {
    showFormMessage(ctMessage, 'error', 'Network error. Please check your connection and try again.');
  } finally {
    setSubmitLoading(ctSubmitBtn, false);
  }
});

/* =============================================
   NEWSLETTER
   ============================================= */
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const btn   = e.target.querySelector('button');
  btn.textContent = '✓ Joined!';
  btn.style.background = '#52B788';
  input.value = '';
  setTimeout(() => {
    btn.textContent = 'Join';
    btn.style.background = '';
  }, 3000);
}
window.handleNewsletter = handleNewsletter;

/* =============================================
   SMOOTH SCROLL offset for sticky nav
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 16;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* =============================================
   INIT
   ============================================= */
fetchMenu();
fetchSpecials();
initTestimonials();
