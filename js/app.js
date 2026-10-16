/**
 * Orchid Haven Nursery - Interactive Application Logic
 * Location: Chathari, Tripunithura, Kerala
 * Instagram: @orchid.haven_nursery
 */

const NURSERY_CONFIG = {
  nurseryName: "Orchid Haven Nursery",
  location: "Chathari, Tripunithura, Ernakulam, Kerala (Krishibhavan Unit)",
  whatsappNumber: "919495819173",
  contactPhone: "+91 94958 19173",
  instagramUrl: "https://www.instagram.com/orchid.haven_nursery/",
  instagramHandle: "@orchid.haven_nursery",
  email: "orchidhaven.kerala@gmail.com"
};

// Authentic Orchid Catalog Data from Orchid Haven Nursery
const ORCHID_CATALOG = [
  {
    id: "dend-real-01",
    name: "Dendrobium Royal Purple Velvet",
    botanical: "Dendrobium hybrid (Cutflower Special)",
    category: "dendrobium",
    price: 350,
    statusBadge: "Farm Fresh Bloom",
    image: "assets/images/nursery/dendrobium_purple_velvet.jpg",
    difficulty: "Easy / Beginner",
    sunlight: "50-60% Green Net",
    watering: "Daily misting (Every 1-2 days)",
    potting: "Coconut husk chunks & charcoal in perforated pot",
    bloomDuration: "6 to 8 weeks",
    description: "Grown directly in our Chathari, Tripunithura shade net nursery. Outstanding deep velvet purple blooms with bright white throat contrast. Very prolific cutflower variety that thrives under Kerala sun."
  },
  {
    id: "dend-real-02",
    name: "Dendrobium Burana Green Apple",
    botanical: "Dendrobium Burana Jade / Green Apple",
    category: "dendrobium",
    price: 380,
    statusBadge: "Rare Lime Color",
    image: "assets/images/nursery/dendrobium_burana_green.jpg",
    difficulty: "Easy",
    sunlight: "50% Filtered Light",
    watering: "Every morning",
    potting: "Charcoal & coconut fiber",
    bloomDuration: "Up to 8 weeks",
    description: "Highly sought-after exotic lime-green petals with a delicate pastel throat blush. An absolute showstopper in garden verandahs and sit-outs."
  },
  {
    id: "dend-real-03",
    name: "Dendrobium Pink Splash / Candy Stripe",
    botanical: "Dendrobium splash-petal hybrid",
    category: "dendrobium",
    price: 360,
    statusBadge: "Bicolor Bloom",
    image: "assets/images/nursery/dendrobium_pink_splash.jpg",
    difficulty: "Beginner Friendly",
    sunlight: "50-70% Shade Net",
    watering: "Daily in dry season",
    potting: "Coconut husk cubes",
    bloomDuration: "6 to 7 weeks",
    description: "Artistic two-tone blossoms with vibrant magenta flaring across pure porcelain white petals. Exceptionally resistant to monsoon fungal rot."
  },
  {
    id: "dend-real-04",
    name: "Dendrobium Sunset Burgundy & Gold",
    botanical: "Dendrobium hybrid",
    category: "dendrobium",
    price: 370,
    statusBadge: "Rich Tone",
    image: "assets/images/nursery/dendrobium_burgundy_gold.jpg",
    difficulty: "Easy",
    sunlight: "50-60% Light",
    watering: "Moderate daily misting",
    potting: "Perforated orchid clay pot",
    bloomDuration: "5 to 7 weeks",
    description: "Intense, deep wine-burgundy petals crowned with a glowing amber-gold center. Strong, thick pseudobulbs that produce heavy recurrent flower spikes."
  },
  {
    id: "dend-real-05",
    name: "Dendrobium Pastel Lilac Breeze",
    botanical: "Dendrobium hybrid",
    category: "dendrobium",
    price: 340,
    statusBadge: "Sweet Pastel",
    image: "assets/images/nursery/dendrobium_pastel_lilac.jpg",
    difficulty: "Very Easy",
    sunlight: "50-70% Shade Net",
    watering: "Daily morning watering",
    potting: "Charcoal & husk mix",
    bloomDuration: "Up to 7 weeks",
    description: "Gentle lavender-pink hues fading softly to white. Multi-branching spikes with delicate flowers that stay fresh for weeks in Kerala's warm breeze."
  },
  {
    id: "dend-real-06",
    name: "Dendrobium Sonia White Crystal",
    botanical: "Dendrobium hybrid (White with Fuchsia Lip)",
    category: "dendrobium",
    price: 350,
    statusBadge: "Farm Favorite",
    image: "assets/images/nursery/dendrobium_snow_purple.jpg",
    difficulty: "Very Easy",
    sunlight: "50-70% Shade Net",
    watering: "Daily morning misting",
    potting: "Coconut husk & charcoal",
    bloomDuration: "7 to 8 weeks",
    description: "Pristine crystalline white petals with a striking deep fuchsia throat. Incredibly floriferous, forming cascading sprays of flowers that last almost two months."
  },
  {
    id: "dend-real-07",
    name: "Dendrobium Antelope Violet Twist",
    botanical: "Dendrobium spatulata hybrid",
    category: "dendrobium",
    price: 390,
    statusBadge: "Exotic Petals",
    image: "assets/images/nursery/dendrobium_antelope_twist.jpg",
    difficulty: "Easy",
    sunlight: "50% Filtered Sunlight",
    watering: "Daily during summer",
    potting: "Perforated pot with charcoal",
    bloomDuration: "6 to 8 weeks",
    description: "Distinguished by whimsical corkscrew twisted petals resembling antelope horns in hues of amethyst violet and lilac. Long-lasting and highly unique."
  },
  {
    id: "vanda-06",
    name: "Vanda Coerulea 'Blue Queen'",
    botanical: "Vanda coerulea Griff. ex Lindl.",
    category: "vanda",
    price: 950,
    statusBadge: "Collector's Choice",
    image: "assets/images/vanda_coerulea.jpg",
    difficulty: "Moderate",
    sunlight: "Bright indirect / 50% Shade",
    watering: "Twice daily root misting",
    potting: "Hanging wooden slat basket / bare root",
    bloomDuration: "4 to 6 weeks",
    description: "Famous for its royal blue tessellated petals and dramatic aerial roots. Needs no potting soil—hangs gracefully in your shaded verandah."
  },
  {
    id: "phal-07",
    name: "Phalaenopsis White Cascade",
    botanical: "Phalaenopsis amabilis hybrid",
    category: "phalaenopsis",
    price: 650,
    statusBadge: "Indoor Special",
    image: "assets/images/phalaenopsis_white.jpg",
    difficulty: "Easy Shaded",
    sunlight: "Gentle indirect light / Verandah",
    watering: "When substrate is dry (Every 3-4 days)",
    potting: "Sphagnum moss or coconut chips in clear pot",
    bloomDuration: "Up to 12 weeks",
    description: "Classic cascading white moth orchid. Magnificent blooms that last up to 3 months indoors near a bright window or shaded Kerala verandah."
  },
  {
    id: "supp-08",
    name: "Kerala Orchid Potting & Bloom Kit",
    botanical: "Substrate & Micronutrient Mix",
    category: "supplies",
    price: 280,
    statusBadge: "Care Essential",
    image: "assets/images/care_supplies.jpg",
    difficulty: "Ready to use",
    sunlight: "N/A",
    watering: "Use during re-potting",
    potting: "Treated coconut chips, graded charcoal, bio-fungicide, slow-release NPK",
    bloomDuration: "Long-term root health",
    description: "Hand-curated substrate blend specially treated to prevent root rot during heavy Kerala monsoons. Includes chunky charcoal, washed husk, and bloom-booster feed."
  }
];

// State Management
let currentCategory = "all";
let searchQuery = "";
let sortBy = "featured";
let cart = JSON.parse(localStorage.getItem("kerala_orchid_cart") || "[]");

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
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

  // Category Filter Buttons
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
  const mobileFloatingCartBtn = document.getElementById("mobileFloatingCartBtn");

  if (cartBtn && cartDrawer && drawerOverlay) {
    cartBtn.addEventListener("click", () => openDrawer());
    closeDrawerBtn?.addEventListener("click", () => closeDrawer());
    drawerOverlay.addEventListener("click", () => closeDrawer());
    mobileFloatingCartBtn?.addEventListener("click", () => openDrawer());
  }

  // WhatsApp Order Submission
  const sendOrderBtn = document.getElementById("sendWhatsappOrderBtn");
  if (sendOrderBtn) {
    sendOrderBtn.addEventListener("click", handleWhatsAppSubmit);
  }

  // FAQ Accordion
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

  // Fullscreen Image Lightbox Listeners
  const lightboxModal = document.getElementById("imageLightbox");
  const lightboxClose = document.getElementById("lightboxCloseBtn");
  const lightboxOverlay = document.getElementById("lightboxOverlay");
  const lightboxPrev = document.getElementById("lightboxPrevBtn");
  const lightboxNext = document.getElementById("lightboxNextBtn");

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener("click", closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener("click", showPrevLightboxImage);
  if (lightboxNext) lightboxNext.addEventListener("click", showNextLightboxImage);

  // Global Keyboard shortcuts (Escape to close, Left/Right arrows to browse)
  document.addEventListener("keydown", (e) => {
    if (lightboxModal && lightboxModal.classList.contains("active")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrevLightboxImage();
      if (e.key === "ArrowRight") showNextLightboxImage();
    } else if (modalBackdrop && modalBackdrop.classList.contains("open")) {
      if (e.key === "Escape") modalBackdrop.classList.remove("open");
    }
  });

  // Touch Swipe navigation on mobile for Lightbox
  if (lightboxModal) {
    let touchStartX = 0;
    let touchEndX = 0;

    lightboxModal.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 45) {
        if (swipeDistance > 0) {
          showPrevLightboxImage();
        } else {
          showNextLightboxImage();
        }
      }
    }, { passive: true });
  }
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
        <p>Try searching for Dendrobium, Vanda, or resetting the category filter.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const isInCart = cart.some(c => c.id === item.id);
    return `
      <article class="orchid-card" data-id="${item.id}">
        <div class="card-img-wrap" onclick="openLightboxFromCatalog('${item.id}')" title="Click to view full photo">
          <img src="${item.image}" alt="${item.name}" class="card-img expandable-img" loading="lazy">
          <span class="card-badge-status">${item.statusBadge}</span>
          <div class="card-action-btns">
            <button class="card-zoom-btn" onclick="event.stopPropagation(); openLightboxFromCatalog('${item.id}')" title="Full Screen View" aria-label="Full screen view of ${item.name}">
              <i class="fa-solid fa-expand"></i>
            </button>
            <button class="card-quickview-btn" onclick="event.stopPropagation(); openQuickView('${item.id}')" title="Quick Details" aria-label="Quick Details of ${item.name}">
              <i class="fa-solid fa-circle-info"></i>
            </button>
          </div>
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
    <div class="modal-img-col" onclick="openLightboxFromCatalog('${item.id}')" style="cursor: zoom-in;" title="Click for fullscreen view">
      <img src="${item.image}" alt="${item.name}" class="modal-img expandable-img">
      <div style="text-align: center; margin-top: 8px; font-size: 0.8rem; color: var(--text-muted); cursor: pointer;">
        <i class="fa-solid fa-expand"></i> Click photo for full screen
      </div>
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

  const mobileBadge = document.getElementById("mobileCartBadge");
  const mobileBar = document.getElementById("mobileFloatingBar");
  const mobileTotal = document.getElementById("mobileFloatingTotal");

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (countBadge) {
    countBadge.textContent = totalItems;
    countBadge.style.display = totalItems > 0 ? "flex" : "none";
  }

  if (mobileBadge) {
    mobileBadge.textContent = totalItems;
  }

  if (mobileTotal) {
    mobileTotal.textContent = totalItems > 0 ? `₹${totalPrice.toLocaleString("en-IN")}` : "View Plants";
  }

  if (mobileBar) {
    if (totalItems > 0) {
      mobileBar.classList.add("visible");
    } else {
      mobileBar.classList.remove("visible");
    }
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

// WhatsApp Order Generator
function handleWhatsAppSubmit() {
  if (cart.length === 0) return;

  const customerName = document.getElementById("custName")?.value.trim() || "Orchid Enthusiast";
  const customerPlace = document.getElementById("custPlace")?.value.trim() || "Kerala";
  const customerNotes = document.getElementById("custNotes")?.value.trim() || "Please confirm plant availability and delivery options.";

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  let message = `Namaskaram! 🌸 I would like to enquire about orchids from ${NURSERY_CONFIG.nurseryName} (@orchid.haven_nursery, Chathari, Tripunithura):\n\n`;
  message += `*MY PLANT ENQUIRY LIST:*\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* (Qty: ${item.qty}) - ₹${item.price * item.qty}\n`;
  });

  message += `\n*Total Plants:* ${totalItems}`;
  message += `\n*Estimated Value:* ₹${totalPrice.toLocaleString("en-IN")}\n`;
  message += `\n*Customer Details:*`;
  message += `\nName: ${customerName}`;
  message += `\nLocation: ${customerPlace}`;
  message += `\nNote: ${customerNotes}`;
  message += `\n\nCould you please share photos of the current blooming spikes and confirm parcel/pickup options? Thank you!`;

  const encodedUrl = `https://wa.me/${NURSERY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, "_blank");
}

// ==========================================================================
// Fullscreen Lightbox / Expandable Image Viewer (YogaParvati Style)
// ==========================================================================

const GALLERY_PHOTOS = [
  {
    image: "assets/images/nursery/greenhouse_backdrop.jpg",
    title: "Chathari Greenhouse Canopy & Shade Benches",
    desc: "Our high-density shade house overlooking historic Tripunithura with healthy root systems and flourishing cutflower benches."
  },
  {
    image: "assets/images/nursery/dendrobium_burana_green.jpg",
    title: "Dendrobium Burana Green Apple",
    desc: "Exotic lime-green petals with a delicate pastel blush throat, photographed fresh in our Chathari nursery."
  },
  {
    image: "assets/images/nursery/dendrobium_snow_purple.jpg",
    title: "Dendrobium Sonia White Crystal",
    desc: "Crystalline white sprays with an intense fuchsia lip, thriving under Kerala shade netting."
  },
  {
    image: "assets/images/nursery/dendrobium_antelope_twist.jpg",
    title: "Dendrobium Antelope Violet Twist",
    desc: "Rare antelope spatulata orchid featuring spiral corkscrew petals in royal amethyst tones."
  },
  {
    image: "assets/images/nursery/dendrobium_pink_splash.jpg",
    title: "Dendrobium Pink Splash / Candy Stripe",
    desc: "Artistic two-tone flare blooms with strong humidity tolerance for Kerala home gardens."
  },
  {
    image: "assets/images/nursery/mother_desk.jpg",
    title: "Warm Hospitality & Order Dispatch",
    desc: "Smt. Deepa A.N. counseling visiting garden enthusiasts and preparing pristine potted orchids at Orchid Haven."
  }
];

let currentLightboxList = [];
let currentLightboxIndex = 0;

function openLightbox(list, startIndex = 0) {
  if (!list || list.length === 0) return;
  currentLightboxList = list;
  currentLightboxIndex = Math.max(0, Math.min(startIndex, list.length - 1));

  const modal = document.getElementById("imageLightbox");
  if (!modal) return;

  updateLightboxContent();
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent page background scrolling
}

function updateLightboxContent() {
  const item = currentLightboxList[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById("lightboxImage");
  const title = document.getElementById("lightboxTitle");
  const desc = document.getElementById("lightboxDesc");
  const counter = document.getElementById("lightboxCounter");
  const prevBtn = document.getElementById("lightboxPrevBtn");
  const nextBtn = document.getElementById("lightboxNextBtn");

  if (img) {
    img.style.opacity = "0.3";
    img.style.transform = "scale(0.96)";
    img.style.transition = "opacity 0.25s ease, transform 0.25s ease";
    
    const tempImg = new Image();
    tempImg.src = item.image;
    tempImg.onload = () => {
      img.src = item.image;
      img.alt = item.title || item.name || "Orchid Haven Nursery";
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    };
  }

  if (title) title.textContent = item.title || item.name || "";
  if (desc) desc.textContent = item.desc || item.description || item.botanical || "";
  
  if (counter) {
    if (currentLightboxList.length > 1) {
      counter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxList.length}`;
      counter.style.display = "inline-block";
    } else {
      counter.style.display = "none";
    }
  }

  if (prevBtn && nextBtn) {
    const showNav = currentLightboxList.length > 1;
    prevBtn.style.display = showNav ? "flex" : "none";
    nextBtn.style.display = showNav ? "flex" : "none";
  }
}

function closeLightbox() {
  const modal = document.getElementById("imageLightbox");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showPrevLightboxImage() {
  if (currentLightboxList.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
  updateLightboxContent();
}

function showNextLightboxImage() {
  if (currentLightboxList.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
  updateLightboxContent();
}

window.openGalleryLightbox = function(index) {
  openLightbox(GALLERY_PHOTOS, index);
};

window.openFounderLightbox = function(who) {
  const founderPhotos = [
    {
      image: "assets/images/nursery/mother_kasavu.jpg",
      title: "Smt. Deepa A.N. — Founder & The Brain",
      desc: "Retd. Higher Grade Assistant (HGA), LIC of India. Conceived, planned, and founded Orchid Haven Nursery with visionary botanical curation and strategic intellect."
    },
    {
      image: "assets/images/nursery/father_sivadasan.jpg",
      title: "Sri Sivadasan A.K. — Co-Founder & Chief Handyman",
      desc: "Retd. Assistant Manager (Finance & Accounts), Kochi Refinery. The master builder and physical craftsman creating the benches and shade structures at Orchid Haven."
    }
  ];
  const idx = who === 'father' ? 1 : 0;
  openLightbox(founderPhotos, idx);
};

window.openLightboxFromCatalog = function(itemId) {
  const catalogList = ORCHID_CATALOG.map(item => ({
    image: item.image,
    title: item.name,
    desc: `${item.botanical} • ₹${item.price} • ${item.statusBadge} — ${item.description}`
  }));
  const idx = ORCHID_CATALOG.findIndex(i => i.id === itemId);
  openLightbox(catalogList, idx >= 0 ? idx : 0);
};

window.openLightboxManual = function(imgSrc, titleText, descText) {
  openLightbox([{
    image: imgSrc,
    title: titleText,
    desc: descText
  }], 0);
};

