'use strict';

/* =============================================
   MENU PAGE — Embedded data & renderer
   ============================================= */
const MENU_DATA = {
  "Starters": [
    { id:1,  name:"Tostones con Mojo",      description:"Crispy twice-fried green plantain slices served with our signature garlic-citrus mojo sauce",                     price:8.00,  dietary:["vegan","gluten-free"], popular:true,  emoji:"🍌", bg:"linear-gradient(135deg,#2D6A4F,#52B788)", imageFile:"Tostones con Mojo.jpg" },
    { id:2,  name:"Ceviche Tropical",        description:"Fresh shrimp marinated in lime juice with mango, cucumber, red onion, cilantro and jalapeño",                     price:14.00, dietary:["gluten-free"],         popular:true,  emoji:"🦐", bg:"linear-gradient(135deg,#1B4332,#2D6A4F)", imageFile:"Ceviche Tropical.jpg" },
    { id:3,  name:"Empanadas Tropicales",    description:"Golden-baked pastries stuffed with seasoned beef picadillo, olives and raisins — served with chimichurri",       price:12.00, dietary:[],                       popular:false, emoji:"🥟", bg:"linear-gradient(135deg,#E76F51,#F4A261)", imageFile:"Empanadas Tropicales.jpg" },
    { id:4,  name:"Yuca Frita",              description:"Crispy fried cassava sticks with roasted garlic aioli and a squeeze of fresh lime",                              price:7.00,  dietary:["vegan","gluten-free"], popular:false, emoji:"🍟", bg:"linear-gradient(135deg,#F4A261,#FFD166)", imageFile:"Yuca Frita.png" },
    { id:5,  name:"Queso Fundido",           description:"Melted Oaxacan cheese with roasted poblano peppers and chorizo, served with warm tortillas",                     price:11.00, dietary:[],                       popular:true,  emoji:"🧀", bg:"linear-gradient(135deg,#C9A06A,#F4A261)", imageFile:"Queso Fundido.jpg" }
  ],
  "Salads": [
    { id:6,  name:"Ensalada Tropicana",      description:"Mixed greens, mango slices, toasted coconut, avocado and red onion with passion fruit vinaigrette",             price:13.00, dietary:["vegan","gluten-free"], popular:true,  emoji:"🥗", bg:"linear-gradient(135deg,#52B788,#95D5B2)", imageFile:"Ensalada Tropicana.jpg" },
    { id:7,  name:"Papaya & Avocado Salad",  description:"Ripe papaya, creamy avocado, arugula, pepitas and cotija cheese with lime-honey dressing",                      price:12.00, dietary:["gluten-free"],         popular:false, emoji:"🥑", bg:"linear-gradient(135deg,#2D6A4F,#74C69D)", imageFile:"Papaya & Avocado Salad.jpg" },
    { id:8,  name:"Chayote Slaw",            description:"Shredded chayote squash, carrot and cabbage tossed in a tangy citrus dressing with fresh herbs",               price:10.00, dietary:["vegan","gluten-free"], popular:false, emoji:"🥬", bg:"linear-gradient(135deg,#40916C,#52B788)", imageFile:"Chayote Slaw.jpg" }
  ],
  "Main Dishes": [
    { id:9,  name:"Ropa Vieja",              description:"Slow-braised shredded beef in sofrito tomato sauce with bell peppers, olives and capers — served with rice and black beans", price:22.00, dietary:["gluten-free"], popular:true,  emoji:"🥩", bg:"linear-gradient(135deg,#C1440E,#E76F51)", imageFile:"Ropa Vieja.jpg" },
    { id:10, name:"Pollo al Mojo",           description:"Whole roasted half-chicken marinated in citrus mojo with garlic, oregano and cumin — with rice and maduros",   price:20.00, dietary:["gluten-free"],         popular:true,  emoji:"🍗", bg:"linear-gradient(135deg,#D4770C,#F4A261)", imageFile:"Pollo al Mojo.jpg" },
    { id:11, name:"Camarones al Coco",       description:"Jumbo shrimp in a creamy coconut milk sauce with pineapple and roasted peppers over arroz blanco",             price:24.00, dietary:["gluten-free"],         popular:true,  emoji:"🍤", bg:"linear-gradient(135deg,#E76F51,#FFB347)", imageFile:"Camarones al Coco.jpg" },
    { id:12, name:"Puerco Asado",            description:"Slow-roasted mojo-marinated pork shoulder, fork-tender, served with yuca con mojo and congri",                 price:21.00, dietary:["gluten-free"],         popular:false, emoji:"🍖", bg:"linear-gradient(135deg,#A0522D,#C1440E)", imageFile:"Puerco Asado.jpg" },
    { id:13, name:"Pescado Tropical",        description:"Fresh grilled mahi-mahi with mango salsa, coconut rice and sautéed tropical vegetables",                       price:26.00, dietary:["gluten-free"],         popular:true,  emoji:"🐟", bg:"linear-gradient(135deg,#1B4332,#40916C)", imageFile:"Pescado Tropical.jpg" },
    { id:14, name:"Bandeja Paisa",           description:"Traditional Colombian mixed platter: red beans, white rice, ground beef, chicharron, egg, avocado and plantain", price:23.00, dietary:["gluten-free"],        popular:false, emoji:"🍛", bg:"linear-gradient(135deg,#8B4513,#D4770C)", imageFile:"Bandeja Paisa.jpg" }
  ],
  "Sides": [
    { id:15, name:"Arroz con Frijoles Negros", description:"Cuban black beans slowly simmered with sofrito over fluffy white rice",                                        price:5.00,  dietary:["vegan","gluten-free"], popular:true,  emoji:"🍚", bg:"linear-gradient(135deg,#1B4332,#2D6A4F)", imageFile:"Arroz con Frijoles Negros.jpg" },
    { id:16, name:"Maduros",                 description:"Caramelized sweet plantains, golden and tender",                                                                price:5.00,  dietary:["vegan","gluten-free"], popular:true,  emoji:"🍌", bg:"linear-gradient(135deg,#D4A017,#FFD166)", imageFile:"Maduros.jpg" },
    { id:17, name:"Yuca con Mojo",           description:"Boiled cassava drizzled with warm garlic-citrus mojo sauce",                                                   price:6.00,  dietary:["vegan","gluten-free"], popular:false, emoji:"🌿", bg:"linear-gradient(135deg,#52B788,#95D5B2)", imageFile:"Yuca con Mojo.jpg" },
    { id:18, name:"Congri",                  description:"Rice cooked together with black beans, garlic and cumin — a Cuban staple",                                     price:5.00,  dietary:["vegan","gluten-free"], popular:false, emoji:"🫘", bg:"linear-gradient(135deg,#3D1C02,#8B4513)", imageFile:"Congri.jpg" }
  ],
  "Desserts": [
    { id:19, name:"Tres Leches Cake",        description:"Sponge cake soaked in three milks, topped with fresh whipped cream and tropical fruit",                        price:8.00,  dietary:[],                       popular:true,  emoji:"🎂", bg:"linear-gradient(135deg,#D4A5A5,#E76F51)", imageFile:"Tres Leches Cake.jpg" },
    { id:20, name:"Flan Cubano",             description:"Classic silky Cuban custard with a golden caramel sauce — grandma's original recipe",                          price:7.00,  dietary:["gluten-free"],         popular:true,  emoji:"🍮", bg:"linear-gradient(135deg,#C9A06A,#FFD166)", imageFile:null },
    { id:21, name:"Churros con Chocolate",   description:"Crispy cinnamon-sugar churros served with thick dark chocolate dipping sauce",                                  price:9.00,  dietary:[],                       popular:false, emoji:"🍫", bg:"linear-gradient(135deg,#3D1C02,#8B4513)", imageFile:"Churros con Chocolate.jpg" },
    { id:22, name:"Arroz con Leche",         description:"Creamy rice pudding infused with cinnamon and lemon zest, dusted with nutmeg",                                 price:7.00,  dietary:["gluten-free"],         popular:false, emoji:"🥛", bg:"linear-gradient(135deg,#C9A06A,#E8D5B7)", imageFile:"Arroz con Leche.jpg" }
  ],
  "Drinks": [
    { id:23, name:"Mojito Clásico",     description:"Havana Club rum, fresh mint, lime juice, sugar and sparkling water",                                            price:12.00, dietary:["vegan","gluten-free"], popular:true,  emoji:"🍹", bg:"linear-gradient(135deg,#2D6A4F,#52B788)", imageFile:"Mojito Clásico.jpg" },
    { id:24, name:"Piña Colada Tropical", description:"Coconut rum blended with fresh pineapple, coconut cream and a splash of passion fruit",                      price:13.00, dietary:["vegan","gluten-free"], popular:true,  emoji:"🍍", bg:"linear-gradient(135deg,#D4A017,#FFD166)", imageFile:"Piña Colada Tropical.jpg" },
    { id:25, name:"Cuba Libre",              description:"Premium rum, Mexican Coca-Cola and fresh lime — the classic",                                                   price:10.00, dietary:["vegan","gluten-free"], popular:false, emoji:"🥃", bg:"linear-gradient(135deg,#3D1C02,#8B4513)", imageFile:null },
    { id:26, name:"Agua de Jamaica",         description:"House-made hibiscus flower tea, lightly sweetened and served over ice",                                         price:5.00,  dietary:["vegan","gluten-free"], popular:false, emoji:"🌺", bg:"linear-gradient(135deg,#8B0000,#E76F51)", imageFile:"Agua de Jamaica.jpg" },
    { id:27, name:"Jugo Tropical",           description:"Freshly blended seasonal tropical fruit juice — mango, guava, papaya or tamarind",                             price:6.00,  dietary:["vegan","gluten-free"], popular:true,  emoji:"🥭", bg:"linear-gradient(135deg,#D4770C,#FFD166)", imageFile:"Jugo Tropical.jpg" },
    { id:28, name:"Sangria Tropical",        description:"Red wine with tropical fruits, rum and fresh citrus — served by the glass or pitcher",                         price:11.00, dietary:["vegan"],               popular:false, emoji:"🍷", bg:"linear-gradient(135deg,#6B0D0D,#C1440E)", imageFile:"Sangria Tropical.jpg" }
  ]
};

const CATEGORY_META = {
  "Starters":    { icon:"🥘", label:"Starters" },
  "Salads":      { icon:"🥗", label:"Salads" },
  "Main Dishes": { icon:"🍽️", label:"Main Dishes" },
  "Sides":       { icon:"🌽", label:"Sides" },
  "Desserts":    { icon:"🍮", label:"Desserts" },
  "Drinks":      { icon:"🍹", label:"Drinks" }
};

/* =============================================
   STATE
   ============================================= */
let activeFilter = 'all'; // 'all' | 'vegan' | 'gluten-free' | 'popular'
let searchQuery  = '';

/* =============================================
   NAVBAR scroll
   ============================================= */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle && navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (e) => {
  const nb = document.getElementById('navbar');
  if (nb && !nb.contains(e.target) && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
  }
});

/* =============================================
   SIDEBAR active category on scroll
   ============================================= */
function initSidebarScroll() {
  const sideLinks = document.querySelectorAll('.mp-sidebar-link');
  const sections  = document.querySelectorAll('.mp-category-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        sideLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* =============================================
   RENDER
   ============================================= */
function renderMenu() {
  const container = document.getElementById('mpContent');
  if (!container) return;
  container.innerHTML = '';

  const categories = Object.keys(MENU_DATA);
  let totalVisible = 0;

  categories.forEach(cat => {
    const items = MENU_DATA[cat].filter(item => {
      const matchFilter =
        activeFilter === 'all' ||
        (activeFilter === 'popular' && item.popular) ||
        item.dietary.includes(activeFilter);
      const matchSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery);
      return matchFilter && matchSearch;
    });

    if (!items.length) return;
    totalVisible += items.length;

    const meta = CATEGORY_META[cat] || { icon:'🍽️' };
    const sectionId = cat.toLowerCase().replace(/\s+/g, '-');

    const section = document.createElement('div');
    section.className = 'mp-category-section reveal';
    section.id = sectionId;

    section.innerHTML = `
      <div class="mp-category-header">
        <span class="mp-cat-icon">${meta.icon}</span>
        <h2 class="mp-cat-title">${cat}</h2>
        <span class="mp-cat-count">${items.length} item${items.length !== 1 ? 's' : ''}</span>
      </div>
      <div class="mp-items-grid" id="grid-${sectionId}"></div>
    `;
    container.appendChild(section);

    const grid = section.querySelector(`#grid-${sectionId}`);
    items.forEach((item, i) => {
      const dietaryHTML = item.dietary.map(d =>
        `<span class="dietary-tag ${d.replace(/\s/g,'-').toLowerCase()}">${d}</span>`
      ).join('');

      const imgInner = item.imageFile
        ? `<img src="images/${encodeURIComponent(item.imageFile)}" alt="${item.name}" loading="lazy" onerror="mpImgError(this,'${item.bg}','${item.emoji}')" />`
        : `<span style="font-size:2rem">${item.emoji}</span>`;
      const bgStyle = item.imageFile ? '' : `background:${item.bg}`;

      const card = document.createElement('div');
      card.className = 'mp-item-card';
      card.style.animationDelay = `${i * 50}ms`;
      card.innerHTML = `
        <div class="mp-item-img" style="${bgStyle}">
          ${imgInner}
        </div>
        <div class="mp-item-body">
          <div class="mp-item-top">
            <span class="mp-item-name">${item.name}</span>
            ${item.popular ? '<span class="menu-popular-badge">Popular</span>' : ''}
          </div>
          <p class="mp-item-desc">${item.description}</p>
          <div class="mp-item-footer">
            <span class="mp-item-price">$${Number(item.price).toFixed(2)}</span>
            <div class="menu-dietary">${dietaryHTML}</div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  });

  if (!totalVisible) {
    container.innerHTML = `<div class="mp-empty"><p>🔍 No items match your search.</p><button onclick="clearSearch()" class="btn btn-primary">Clear Filter</button></div>`;
  }

  // Re-observe reveal elements
  document.querySelectorAll('.mp-category-section.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  initSidebarScroll();
}

/* =============================================
   FILTERS
   ============================================= */
document.querySelectorAll('.mp-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mp-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderMenu();
  });
});

/* =============================================
   SEARCH
   ============================================= */
const searchInput = document.getElementById('mpSearch');
searchInput && searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.toLowerCase().trim();
  renderMenu();
});

function clearSearch() {
  if (searchInput) searchInput.value = '';
  searchQuery  = '';
  activeFilter = 'all';
  document.querySelectorAll('.mp-filter-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.filter === 'all')
  );
  renderMenu();
}
window.clearSearch = clearSearch;

/* =============================================
   SCROLL REVEAL
   ============================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

/* =============================================
   IMAGE FALLBACK
   ============================================= */
function mpImgError(img, bg, emoji) {
  const box = img.parentElement;
  box.style.background = bg;
  img.remove();
  const span = document.createElement('span');
  span.style.fontSize = '2rem';
  span.textContent = emoji;
  box.appendChild(span);
}
window.mpImgError = mpImgError;

/* =============================================
   SMOOTH SCROLL for sidebar links
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = (navbar ? navbar.offsetHeight : 72) + 16;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  });
});

/* =============================================
   INIT
   ============================================= */
renderMenu();
