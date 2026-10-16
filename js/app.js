/**
 * Kerala Orchid Nursery - Interactive Application Logic
 * Features:
 * - Dynamic catalog rendering & filtering
 * - Search & sorting
 * - Quick-view modal with botanical specs
 * - WhatsApp live enquiry cart & order message builder
 * - Interactive FAQs and mobile menu
 */

// Replace this with your parents' actual WhatsApp number (with 91 country code for India)
const NURSERY_CONFIG = {
  nurseryName: "Malabar Orchid Flora & Nursery",
  location: "Thrissur / Ernakulam, Kerala, India",
  whatsappNumber: "919876543210", // UPDATE with actual WhatsApp number
  contactPhone: "+91 98765 43210",
  email: "info@keralaorchids.demo"
};

// Orchid Catalog Data
const ORCHID_CATALOG = [
  {
    id: "dend-01",
    name: "Dendrobium Sonia 'Earsakul'",
    botanical: "Dendrobium hybrid",
    category: "dendrobium",
    price: 350,
    statusBadge: "Top Seller in Kerala",
    image: "assets/images/dendrobium_sonia.jpg",
    difficulty: "Easy / Beginner",
    sunlight: "50-60% Shade Net",
    watering: "Daily misting (Every 1-2 days)",
    potting: "Coconut husk chunks & charcoal in perforated pot",
    bloomDuration: "6 to 8 weeks",
    description: "The crown jewel of Kerala home gardens. Highly resilient, loves tropical humidity, and produces sprays of rich magenta-purple blossoms with pure white throat contrasts."
  },
  {
    id: "vanda-02",
    name: "Vanda Coerulea 'Blue Orchid'",
    botanical: "Vanda coerulea Griff. ex Lindl.",
    category: "vanda",
    price: 950,
    statusBadge: "Collector's Choice",
    image: "assets/images/vanda_coerulea.jpg",
    difficulty: "Moderate",
    sunlight: "Bright Indirect / 50% Shade",
    watering: "Twice daily root soaking in summer",
    potting: "Hanging wooden slat basket / bare root",
    bloomDuration: "4 to 6 weeks, multiple times yearly",
    description: "Famous for its mesmerizing lattice tessellation pattern in royal violet-blue. Thrives with hanging aerial roots in Kerala's warm, humid breeze without soil."
  },
  {
    id: "phal-03",
    name: "Phalaenopsis White Cascade",
    botanical: "Phalaenopsis amabilis hybrid",
    category: "phalaenopsis",
    price: 650,
    statusBadge: "In Spike",
    image: "assets/images/phalaenopsis_white.jpg",
    difficulty: "Easy Indoor / Verandah",
    sunlight: "Filtered gentle morning light",
    watering: "When top moss feels dry (Every 3-4 days)",
    potting: "Sphagnum moss or coconut chips in transparent pot",
    bloomDuration: "Up to 3 months",
    description: "Serene, cascading white moth orchids. Ideal for shaded verandahs, sit-outs, and bright living spaces. Extremely long-lasting flowers that stay fresh for months."
  },
  {
    id: "catt-04",
    name: "Cattleya Queen 'Sunset Gold'",
    botanical: "Cattleya hybrid",
    category: "cattleya",
    price: 850,
    statusBadge: "Sweet Fragrance",
    image: "assets/images/cattleya_gold.jpg",
    difficulty: "Moderate",
    sunlight: "Bright filtered sunlight",
    watering: "Allow medium to dry slightly between watering",
    potting: "Coarse bark & charcoal chips",
    bloomDuration: "3 to 5 weeks",
    description: "The 'Queen of Orchids' featuring immense, velvety blooms in radiant sunrise golds and fiery reds. Emits a rich, intoxicating floral perfume in the morning hours."
  },
  {
    id: "dend-05",
    name: "Dendrobium Emma White",
    botanical: "Dendrobium Emma White",
    category: "dendrobium",
    price: 320,
    statusBadge: "Heavy Bloomer",
    image: "assets/images/hero_greenhouse.jpg",
    difficulty: "Very Easy",
    sunlight: "50-70% Shade Net",
    watering: "Daily in dry season",
    potting: "Coconut husk chunks",
    bloomDuration: "Up to 8 weeks",
    description: "Pure alabaster white blooms that form dense, multiple spikes simultaneously. Outstanding heat tolerance and exceptionally prolific bloomer under Kerala monsoons."
  },
  {
    id: "supp-06",
    name: "Kerala Orchid Potting & Bloom Care Kit",
    botanical: "Horticultural grade orchid substrate & feed",
    category: "supplies",
    price: 280,
    statusBadge: "Essential Care",
    image: "assets/images/care_supplies.jpg",
    difficulty: "Ready to use",
    sunlight: "N/A",
    watering: "Use during re-potting",
    potting: "Pre-treated coconut chunks, washed charcoal, slow-release NPK",
    bloomDuration: "Long-term root health",
    description: "Hand-curated substrate blend specially treated to prevent fungal rot during heavy rains. Includes steamed coconut husk chips, activated charcoal chunks, and bloom-booster micronutrients."
  }
];

// State
let currentCategory = "all";
let searchQuery = "";
let sortBy = "featured";
let cart = JSON.parse(localStorage.getItem("kerala_orchid_cart") || "[]");

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  initCatalog();
  initCart();
  initEventListeners();
  renderCatalog();
  updateCartUI();
});

function initEventListeners() {
  // Mobile Nav Toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => navMenu.classList.remove("open"));
    });
  }

  // Category Buttons
  const catButtons = document.querySelectorAll(".cat-btn");
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderCatalog();
    });
  });

  // Search input
  const searchInput = document.getElementById("catalogSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  // Sort select
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortBy = e.target.value;
      renderCatalog();
    });
  }

  // Cart Drawer open/close
  const cartBtn = document.getElementById("cartToggleBtn");
  const cartDrawer = document.getElementById("enquiryDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");

  if (cartBtn && cartDrawer && drawerOverlay) {
    cartBtn.addEventListener("click", () => openDrawer());
    closeDrawerBtn?.addEventListener("click", () => closeDrawer());
    drawerOverlay.addEventListener("click", () => closeDrawer());
  }

  // WhatsApp Order Submission
  const sendOrderBtn = document.getElementById("sendWhatsappOrderBtn");
  if (sendOrderBtn) {
    sendOrderBtn.addEventListener("click", handleWhatsAppSubmit);
  }

  // FAQ Accordions
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });

  // Quick View Modal
  const modalBackdrop = document.getElementById("quickviewBackdrop");
  const modalClose = document.getElementById("modalCloseBtn");
  if (modalBackdrop && modalClose) {
    modalClose.addEventListener("click", () => modalBackdrop.classList.remove("open"));
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) modalBackdrop.classList.remove("open");
    });
  }
}

function initCatalog() {
  // Initial setup if needed
}

function renderCatalog() {
  const grid = document.getElementById("orchidsGrid");
  if (!grid) return;

  let filtered = ORCHID_CATALOG.filter(item => {
    const matchCategory = currentCategory === "all" || item.category === currentCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery) ||
                        item.botanical.toLowerCase().includes(searchQuery) ||
                        item.description.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });

  if (sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-seedling" style="font-size: 3rem; margin-bottom: 1rem; color: var(--primary-accent);"></i>
        <h3>No orchids found matching "${searchQuery}"</h3>
        <p>Try searching for Dendrobium, Vanda, or resetting filters.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const isInCart = cart.some(c => c.id === item.id);
    return `
      <article class="orchid-card" data-id="${item.id}">
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy">
          <span class="card-badge-status">${item.statusBadge}</span>
          <button class="card-quickview-btn" onclick="openQuickView('${item.id}')" title="Quick View" aria-label="Quick View of ${item.name}">
            <i class="fa-solid fa-eye"></i>
          </button>
        </div>
        <div class="card-body">
          <span class="card-cat-label">${item.category.toUpperCase()}</span>
          <h3 class="card-title">${item.name}</h3>
          <p class="card-scientific">${item.botanical}</p>
          
          <div class="card-meta-chips">
            <span class="meta-chip"><i class="fa-solid fa-sun"></i> ${item.sunlight}</span>
            <span class="meta-chip"><i class="fa-solid fa-droplet"></i> ${item.watering.split('(')[0]}</span>
          </div>

          <div class="card-footer">
            <div class="card-price-box">
              <span class="price-sub">Price per plant</span>
              <span class="price-val">₹${item.price}</span>
            </div>
            <button class="btn-card-enquire ${isInCart ? 'added' : ''}" onclick="toggleCartItem('${item.id}')">
              <i class="fa-solid ${isInCart ? 'fa-check' : 'fa-plus'}"></i>
              <span>${isInCart ? 'Enquiring' : 'Add to Enquiry'}</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Quick View Modal
window.openQuickView = function(id) {
  const item = ORCHID_CATALOG.find(i => i.id === id);
  if (!item) return;

  const backdrop = document.getElementById("quickviewBackdrop");
  const modalContent = document.getElementById("quickviewContent");
  if (!backdrop || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-img-col">
      <img src="${item.image}" alt="${item.name}" class="modal-img">
    </div>
    <div class="modal-details-col">
      <span class="section-tag">${item.category.toUpperCase()}</span>
      <h2 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 4px;">${item.name}</h2>
      <p style="font-style: italic; color: var(--text-muted); margin-bottom: 1.2rem;">${item.botanical}</p>
      
      <div style="font-size: 1.6rem; font-weight: 800; color: var(--primary); margin-bottom: 1.2rem;">
        ₹${item.price} <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">/ potted plant</span>
      </div>

      <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.5rem;">
        ${item.description}
      </p>

      <div style="background: var(--surface-alt); padding: 1.2rem; border-radius: var(--radius-sm); margin-bottom: 1.8rem;">
        <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; color: var(--primary-accent);">
          <i class="fa-solid fa-leaf"></i> Growing Specifications in Kerala:
        </h4>
        <ul style="list-style: none; font-size: 0.88rem; color: var(--text-dark); display: flex; flex-direction: column; gap: 6px;">
          <li><strong>Sunlight:</strong> ${item.sunlight}</li>
          <li><strong>Watering:</strong> ${item.watering}</li>
          <li><strong>Substrate:</strong> ${item.potting}</li>
          <li><strong>Flowering Longevity:</strong> ${item.bloomDuration}</li>
        </ul>
      </div>

      <div style="margin-top: auto; display: flex; gap: 1rem;">
        <button class="btn-primary" style="flex: 1; justify-content: center;" onclick="addToCartAndOpen('${item.id}')">
          <i class="fa-brands fa-whatsapp"></i> Add & Enquire
        </button>
      </div>
    </div>
  `;

  backdrop.classList.add("open");
};

// Cart Drawer Functions
function openDrawer() {
  document.getElementById("enquiryDrawer")?.classList.add("open");
  document.getElementById("drawerOverlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  document.getElementById("enquiryDrawer")?.classList.remove("open");
  document.getElementById("drawerOverlay")?.classList.remove("open");
  document.body.style.overflow = "auto";
}

function initCart() {
  // Sync initial cart
}

window.addToCartAndOpen = function(id) {
  const exists = cart.find(i => i.id === id);
  if (!exists) {
    const item = ORCHID_CATALOG.find(i => i.id === id);
    if (item) cart.push({ ...item, qty: 1 });
  }
  saveCart();
  renderCatalog();
  updateCartUI();
  document.getElementById("quickviewBackdrop")?.classList.remove("open");
  openDrawer();
};

window.toggleCartItem = function(id) {
  const index = cart.findIndex(i => i.id === id);
  if (index > -1) {
    cart.splice(index, 1);
  } else {
    const item = ORCHID_CATALOG.find(i => i.id === id);
    if (item) cart.push({ ...item, qty: 1 });
  }
  saveCart();
  renderCatalog();
  updateCartUI();
};

window.updateQty = function(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
    saveCart();
    renderCatalog();
    updateCartUI();
  }
};

window.removeFromCart = function(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCatalog();
  updateCartUI();
};

function saveCart() {
  localStorage.setItem("kerala_orchid_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const countBadge = document.getElementById("cartCountBadge");
  const itemsContainer = document.getElementById("drawerItemsList");
  const emptyState = document.getElementById("drawerEmptyState");
  const footer = document.getElementById("drawerFooter");
  const totalDisplay = document.getElementById("drawerTotalPrice");

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (countBadge) {
    countBadge.textContent = totalItems;
    countBadge.style.display = totalItems > 0 ? "flex" : "none";
  }

  if (totalItems === 0) {
    if (emptyState) emptyState.style.display = "block";
    if (itemsContainer) itemsContainer.innerHTML = "";
    if (footer) footer.style.display = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (footer) footer.style.display = "block";
  if (totalDisplay) totalDisplay.textContent = `₹${totalPrice.toLocaleString("en-IN")}`;

  if (itemsContainer) {
    itemsContainer.innerHTML = cart.map(item => `
      <div class="drawer-item">
        <img src="${item.image}" alt="${item.name}" class="drawer-item-img">
        <div class="drawer-item-info">
          <div class="drawer-item-title">${item.name}</div>
          <div class="drawer-item-price">₹${item.price} each</div>
        </div>
        <div class="drawer-qty-controls">
          <button class="qty-btn" onclick="updateQty('${item.id}', -1)">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
        </div>
        <button class="drawer-remove-item" onclick="removeFromCart('${item.id}')" title="Remove">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join("");
  }
}

// WhatsApp Generator
function handleWhatsAppSubmit() {
  if (cart.length === 0) return;

  const customerName = document.getElementById("custName")?.value.trim() || "Orchid Enthusiast";
  const customerPlace = document.getElementById("custPlace")?.value.trim() || "Kerala";
  const customerNotes = document.getElementById("custNotes")?.value.trim() || "Please confirm plant availability and delivery.";

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  let message = `Namaskaram! 🌸 I would like to enquire about orchids from ${NURSERY_CONFIG.nurseryName}:\n\n`;
  message += `*ORDER / ENQUIRY LIST:*\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* (Qty: ${item.qty}) - ₹${item.price * item.qty}\n`;
  });

  message += `\n*Total Plants:* ${totalItems}`;
  message += `\n*Estimated Amount:* ₹${totalPrice.toLocaleString("en-IN")}\n`;
  message += `\n*Customer Details:*`;
  message += `\nName: ${customerName}`;
  message += `\nLocation: ${customerPlace}`;
  message += `\nNote: ${customerNotes}`;
  message += `\n\nCould you please send photos of current blooming spikes and delivery/parcel options? Thank you!`;

  const encodedUrl = `https://wa.me/${NURSERY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, "_blank");
}
