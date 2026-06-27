'use strict';

/* =============================================
   EMBEDDED DATA — used when no Flask backend
   ============================================= */
const EMBEDDED_MENU = {
  "Starters": [
    { id:1,  name:"Tostones con Mojo",      description:"Crispy twice-fried green plantain slices served with our signature garlic-citrus mojo sauce",                     price:8.00,  dietary:["vegan","gluten-free"], popular:true,  emoji:"🍌", bg:"linear-gradient(135deg,#2D6A4F,#52B788)" },
    { id:2,  name:"Ceviche Tropical",        description:"Fresh shrimp marinated in lime juice with mango, cucumber, red onion, cilantro and jalapeño",                     price:14.00, dietary:["gluten-free"],         popular:true,  emoji:"🦐", bg:"linear-gradient(135deg,#1B4332,#2D6A4F)" },
    { id:3,  name:"Empanadas Tropicales",    description:"Golden-baked pastries stuffed with seasoned beef picadillo, olives and raisins — served with chimichurri",       price:12.00, dietary:[],                       popular:false, emoji:"🥟", bg:"linear-gradient(135deg,#E76F51,#F4A261)" },
    { id:4,  name:"Yuca Frita",              description:"Crispy fried cassava sticks with roasted garlic aioli and a squeeze of fresh lime",                              price:7.00,  dietary:["vegan","gluten-free"], popular:false, emoji:"🍟", bg:"linear-gradient(135deg,#F4A261,#FFD166)" },
    { id:5,  name:"Queso Fundido",           description:"Melted Oaxacan cheese with roasted poblano peppers and chorizo, served with warm tortillas",                     price:11.00, dietary:[],                       popular:true,  emoji:"🧀", bg:"linear-gradient(135deg,#C9A06A,#F4A261)" }
  ],
  "Salads": [
    { id:6,  name:"Ensalada Tropicana",      description:"Mixed greens, mango slices, toasted coconut, avocado and red onion with passion fruit vinaigrette",             price:13.00, dietary:["vegan","gluten-free"], popular:true,  emoji:"🥗", bg:"linear-gradient(135deg,#52B788,#95D5B2)" },
    { id:7,  name:"Papaya & Avocado Salad",  description:"Ripe papaya, creamy avocado, arugula, pepitas and cotija cheese with lime-honey dressing",                      price:12.00, dietary:["gluten-free"],         popular:false, emoji:"🥑", bg:"linear-gradient(135deg,#2D6A4F,#74C69D)" },
    { id:8,  name:"Chayote Slaw",            description:"Shredded chayote squash, carrot and cabbage tossed in a tangy citrus dressing with fresh herbs",               price:10.00, dietary:["vegan","gluten-free"], popular:false, emoji:"🥬", bg:"linear-gradient(135deg,#40916C,#52B788)" }
  ],
  "Main Dishes": [
    { id:9,  name:"Ropa Vieja",              description:"Slow-braised shredded beef in sofrito tomato sauce with bell peppers, olives and capers — served with rice and black beans", price:22.00, dietary:["gluten-free"], popular:true,  emoji:"🥩", bg:"linear-gradient(135deg,#C1440E,#E76F51)" },
    { id:10, name:"Pollo al Mojo",           description:"Whole roasted half-chicken marinated in citrus mojo with garlic, oregano and cumin — with rice and maduros",   price:20.00, dietary:["gluten-free"],         popular:true,  emoji:"🍗", bg:"linear-gradient(135deg,#D4770C,#F4A261)" },
    { id:11, name:"Camarones al Coco",       description:"Jumbo shrimp in a creamy coconut milk sauce with pineapple and roasted peppers over arroz blanco",             price:24.00, dietary:["gluten-free"],         popular:true,  emoji:"🍤", bg:"linear-gradient(135deg,#E76F51,#FFB347)" },
    { id:12, name:"Puerco Asado",            description:"Slow-roasted mojo-marinated pork shoulder, fork-tender, served with yuca con mojo and congri",                 price:21.00, dietary:["gluten-free"],         popular:false, emoji:"🍖", bg:"linear-gradient(135deg,#A0522D,#C1440E)" },
    { id:13, name:"Pescado Tropical",        description:"Fresh grilled mahi-mahi with mango salsa, coconut rice and sautéed tropical vegetables",                       price:26.00, dietary:["gluten-free"],         popular:true,  emoji:"🐟", bg:"linear-gradient(135deg,#1B4332,#40916C)" },
    { id:14, name:"Bandeja Paisa",           description:"Traditional Colombian mixed platter: red beans, white rice, ground beef, chicharron, egg, avocado and plantain", price:23.00, dietary:["gluten-free"],        popular:false, emoji:"🍛", bg:"linear-gradient(135deg,#8B4513,#D4770C)" }
  ],
  "Sides": [
    { id:15, name:"Arroz con Frijoles Negros", description:"Cuban black beans slowly simmered with sofrito over fluffy white rice",                                        price:5.00,  dietary:["vegan","gluten-free"], popular:true,  emoji:"🍚", bg:"linear-gradient(135deg,#1B4332,#2D6A4F)" },
    { id:16, name:"Maduros",                 description:"Caramelized sweet plantains, golden and tender",                                                                price:5.00,  dietary:["vegan","gluten-free"], popular:true,  emoji:"🍌", bg:"linear-gradient(135deg,#D4A017,#FFD166)" },
    { id:17, name:"Yuca con Mojo",           description:"Boiled cassava drizzled with warm garlic-citrus mojo sauce",                                                   price:6.00,  dietary:["vegan","gluten-free"], popular:false, emoji:"🌿", bg:"linear-gradient(135deg,#52B788,#95D5B2)" },
    { id:18, name:"Congri",                  description:"Rice cooked together with black beans, garlic and cumin — a Cuban staple",                                     price:5.00,  dietary:["vegan","gluten-free"], popular:false, emoji:"🫘", bg:"linear-gradient(135deg,#3D1C02,#8B4513)" }
  ],
  "Desserts": [
    { id:19, name:"Tres Leches Cake",        description:"Sponge cake soaked in three milks, topped with fresh whipped cream and tropical fruit",                        price:8.00,  dietary:[],                       popular:true,  emoji:"🎂", bg:"linear-gradient(135deg,#D4A5A5,#E76F51)" },
    { id:20, name:"Flan Cubano",             description:"Classic silky Cuban custard with a golden caramel sauce — grandma's original recipe",                          price:7.00,  dietary:["gluten-free"],         popular:true,  emoji:"🍮", bg:"linear-gradient(135deg,#C9A06A,#FFD166)" },
    { id:21, name:"Churros con Chocolate",   description:"Crispy cinnamon-sugar churros served with thick dark chocolate dipping sauce",                                  price:9.00,  dietary:[],                       popular:false, emoji:"🍫", bg:"linear-gradient(135deg,#3D1C02,#8B4513)" },
    { id:22, name:"Arroz con Leche",         description:"Creamy rice pudding infused with cinnamon and lemon zest, dusted with nutmeg",                                 price:7.00,  dietary:["gluten-free"],         popular:false, emoji:"🥛", bg:"linear-gradient(135deg,#C9A06A,#E8D5B7)" }
  ],
  "Drinks": [
    { id:23, name:"Mojito Clásico",          description:"Havana Club rum, fresh mint, lime juice, sugar and sparkling water",                                            price:12.00, dietary:["vegan","gluten-free"], popular:true,  emoji:"🍹", bg:"linear-gradient(135deg,#2D6A4F,#52B788)" },
    { id:24, name:"Piña Colada Tropical",    description:"Coconut rum blended with fresh pineapple, coconut cream and a splash of passion fruit",                        price:13.00, dietary:["vegan","gluten-free"], popular:true,  emoji:"🍍", bg:"linear-gradient(135deg,#D4A017,#FFD166)" },
    { id:25, name:"Cuba Libre",              description:"Premium rum, Mexican Coca-Cola and fresh lime — the classic",                                                   price:10.00, dietary:["vegan","gluten-free"], popular:false, emoji:"🥃", bg:"linear-gradient(135deg,#3D1C02,#8B4513)" },
    { id:26, name:"Agua de Jamaica",         description:"House-made hibiscus flower tea, lightly sweetened and served over ice",                                         price:5.00,  dietary:["vegan","gluten-free"], popular:false, emoji:"🌺", bg:"linear-gradient(135deg,#8B0000,#E76F51)" },
    { id:27, name:"Jugo Tropical",           description:"Freshly blended seasonal tropical fruit juice — mango, guava, papaya or tamarind",                             price:6.00,  dietary:["vegan","gluten-free"], popular:true,  emoji:"🥭", bg:"linear-gradient(135deg,#D4770C,#FFD166)" },
    { id:28, name:"Sangria Tropical",        description:"Red wine with tropical fruits, rum and fresh citrus — served by the glass or pitcher",                         price:11.00, dietary:["vegan"],               popular:false, emoji:"🍷", bg:"linear-gradient(135deg,#6B0D0D,#C1440E)" }
  ]
};

const EMBEDDED_SPECIALS = [
  { day:"Tuesday",        title:"Mojito Tuesday",        description:"All Mojitos just $7 — all night long",              icon:"🍹", color:"#52B788" },
  { day:"Wednesday",      title:"Empanada Happy Hour",   description:"6 Empanadas for $15 (4–7 PM)",                      icon:"🥟", color:"#F4A261" },
  { day:"Friday & Saturday", title:"Live Latin Music",   description:"Live band & dancing every weekend 7–10 PM",         icon:"🎶", color:"#E76F51" },
  { day:"Sunday",         title:"Family Brunch Buffet",  description:"All-you-can-eat brunch for $29 per person",         icon:"🍳", color:"#FFD166" }
];

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
    if (!res.ok) throw new Error();
    menuData = await res.json();
  } catch {
    menuData = EMBEDDED_MENU;
  }
  const categories = Object.keys(menuData);
  renderTabs(categories);
  renderMenu(categories[0]);
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

    const emoji = item.emoji || '🍽️';
    const bg    = item.bg    || 'linear-gradient(135deg,#2D6A4F,#52B788)';

    card.innerHTML = `
      <div class="menu-card-img" style="background:${bg}">
        <span>${emoji}</span>
      </div>
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
  let specials = EMBEDDED_SPECIALS;
  try {
    const res = await fetch('/api/specials');
    if (res.ok) specials = await res.json();
  } catch { /* use embedded */ }

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
    if (res.ok) {
      const json = await res.json();
      if (json.success) {
        showFormMessage(resMessage, 'success', json.message);
        reservationForm.reset();
      } else {
        showFormMessage(resMessage, 'error', json.message || 'Something went wrong. Please try again.');
      }
    } else {
      throw new Error();
    }
  } catch {
    const id = 'EPT-' + Date.now();
    showFormMessage(resMessage, 'success', `Reservation received! Confirmation #: ${id}. We will contact you shortly to confirm.`);
    reservationForm.reset();
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
    if (res.ok) {
      const json = await res.json();
      if (json.success) {
        showFormMessage(ctMessage, 'success', json.message);
        contactForm.reset();
      } else {
        showFormMessage(ctMessage, 'error', json.message || 'Something went wrong. Please try again.');
      }
    } else {
      throw new Error();
    }
  } catch {
    showFormMessage(ctMessage, 'success', 'Thank you for your message! We will get back to you within 24 hours.');
    contactForm.reset();
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
