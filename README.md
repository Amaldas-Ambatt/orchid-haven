# 🌺 Malabar Orchid Flora & Nursery — Kerala, India

A modern, responsive, botanical-luxury website crafted for an authentic family-run orchid nursery in Kerala, India.

---

## 🌟 Key Features

1. **Botanical Luxury Design**: Deep emerald green, rich tropical accents, and gold styling with smooth responsive typography.
2. **Interactive Orchid Catalog**:
   - Filter by popular varieties (*Dendrobiums*, *Vandas*, *Phalaenopsis*, *Cattleyas*, and *Substrates*).
   - Real-time instant search bar & price sorting.
   - Quick-view popups with detailed botanical specs and Kerala climate care instructions.
3. **Integrated WhatsApp Order & Enquiry Drawer**:
   - Customers can add multiple plants to their basket.
   - Generates an instant, pre-formatted WhatsApp message link with items, estimated prices, and delivery location to send directly to your parents!
   - Works seamlessly on Android, iPhone, and desktop browsers without any payment gateway or backend server required.
4. **Kerala Climate Orchid Care Guide**:
   - Specific advice on shade netting (50-70%), monsoon drainage, potting in charcoal and coconut husk chunks, and NPK fertilizer cycles.
5. **Nursery Story & Visiting Guide**:
   - Highlighting parents' passion, climate acclimation, visiting hours, and courier/parcel dispatch across Kerala & Pan-India.

---

## 📂 Project Structure

```
Orchid Nursery/
├── index.html                 # Main website structure & SEO
├── css/
│   └── style.css              # Custom styling, animations & theme
├── js/
│   └── app.js                 # Catalog database, filters & WhatsApp logic
├── assets/
│   └── images/                # Orchid photos (hero, nursery, varieties)
│       ├── hero_greenhouse.jpg
│       ├── dendrobium_sonia.jpg
│       ├── vanda_coerulea.jpg
│       ├── phalaenopsis_white.jpg
│       ├── cattleya_gold.jpg
│       ├── nursery_story.jpg
│       └── care_supplies.jpg
├── .gitignore
└── README.md
```

---

## 📸 Replacing with Your Parents' Real Photos

When you have the pictures of your parents' nursery and orchids ready:
1. Place your photo files inside `assets/images/`.
2. Either name them the same as the existing files (e.g. `dendrobium_sonia.jpg`, `nursery_story.jpg`, `hero_greenhouse.jpg`), OR update the file paths inside [js/app.js](file:///Users/amaldasambattuparambilsivadasan/Desktop/Orchid%20Nursery/js/app.js) in the `ORCHID_CATALOG` list!

---

## ⚙️ Updating Nursery Details & WhatsApp Number

Open [js/app.js](file:///Users/amaldasambattuparambilsivadasan/Desktop/Orchid%20Nursery/js/app.js) and update the `NURSERY_CONFIG` at the very top:

```javascript
const NURSERY_CONFIG = {
  nurseryName: "Your Nursery Name",       // e.g. Sree Orchid Farm
  location: "Kottayam / Thrissur, Kerala",
  whatsappNumber: "919876543210",         // Your parents' 10-digit number with '91' prefix
  contactPhone: "+91 98765 43210",
  email: "yournursery@gmail.com"
};
```

You can also update the phone number in [index.html](file:///Users/amaldasambattuparambilsivadasan/Desktop/Orchid%20Nursery/index.html) search for `919876543210`.

---

## 🚀 How to Run Locally

You can preview the website immediately:
- Simply double-click `index.html` to open it in any web browser.
- Or run a lightweight local server:
  ```bash
  python3 -m http.server 8080
  ```
  and visit `http://localhost:8080` in your browser.

---

## 🌐 Pushing to GitHub & Hosting for Free on GitHub Pages

1. **Commit your files**:
   ```bash
   git add .
   git commit -m "Initial commit of Kerala Orchid Nursery website"
   ```

2. **Link to your GitHub repository**:
   - Create a new repository on [GitHub](https://github.com/new) (e.g., `kerala-orchid-nursery`).
   - Run:
     ```bash
     git remote add origin https://github.com/YOUR_USERNAME/kerala-orchid-nursery.git
     git push -u origin main
     ```

3. **Enable Free Website Hosting (GitHub Pages)**:
   - Go to your GitHub repository **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Branch**, select `main` and `/ (root)`, then click **Save**.
   - In 1 minute, your website will be live worldwide at:  
     `https://YOUR_USERNAME.github.io/kerala-orchid-nursery/` (no domain purchase needed)!
