# 🌺 Orchid Haven Nursery — Chathari, Tripunithura, Kerala

A modern, botanical-luxury website crafted for **Orchid Haven Nursery** (`@orchid.haven_nursery`), a family-run orchid haven in **Chathari, Tripunithura, Kerala, India**, officially recognized under the **State Horticulture Mission (MIDH 2026-27, Krishibhavan Tripunithura)**.

---

## 🌟 Key Features

1. **Brand Identity**:
   - Nursery: **Orchid Haven Nursery**
   - Location: **📍 Chathari, Tripunithura, Ernakulam, Kerala (PIN: 682301)**
   - Instagram: [@orchid.haven_nursery](https://www.instagram.com/orchid.haven_nursery/)
   - WhatsApp / Phone: **+91 94958 19173**
   - Founders: **The Founder & Visionary Brain (Retd. Higher Grade Assistant - HGA, LIC of India)** and **Sri Sivadasan A.K. (Co-Founder & Operations Lead / Handyman, Retd. Assistant Manager - Finance & Accounts, Kochi Refinery)**
2. **Authentic Orchid Catalog**:
   - Filter by popular varieties (*Dendrobiums*, *Vandas*, *Phalaenopsis*, *Substrates*).
   - Real-time search & price sorting.
   - Real photos of Orchid Haven blooms (*Burana Green Apple*, *Royal Purple Velvet*, *Pink Splash*, *Sunset Burgundy*, *Pastel Lilac*, *Sonia White Crystal*, *Antelope Violet Twist*).
   - Quick-view modals with detailed botanical specs.
3. **Integrated WhatsApp Order & Enquiry Drawer**:
   - Customers can add multiple plants to their basket.
   - Generates an instant, pre-formatted WhatsApp message link with items, estimated prices, and delivery location sent directly to the nursery (+91 94958 19173).
4. **Greenhouse Video Tour**:
   - Embedded video player of the actual shade house in Chathari.
5. **Kerala Climate Orchid Care Guide**:
   - 50–70% green shade nets, monsoon vs summer watering, potting in charcoal and coconut husk chunks, and NPK fertilizer cycles.

---

## 📂 Project Structure

```
Orchid Nursery/
├── index.html                 # Main website structure & SEO
├── css/
│   └── style.css              # Custom styling, animations & theme
├── js/
│   └── app.js                 # Catalog database, filters, WhatsApp & Instagram config
├── assets/
│   └── images/
│       ├── nursery/           # Real photos and greenhouse tour video
│       │   ├── father_sivadasan.jpg
│       │   ├── mother_kasavu.jpg
│       │   ├── mother_desk.jpg
│       │   ├── greenhouse_tour.mp4
│       │   ├── greenhouse_backdrop.jpg
│       │   ├── dendrobium_purple_velvet.jpg
│       │   ├── dendrobium_burana_green.jpg
│       │   ├── dendrobium_pink_splash.jpg
│       │   ├── dendrobium_burgundy_gold.jpg
│       │   ├── dendrobium_pastel_lilac.jpg
│       │   ├── dendrobium_snow_purple.jpg
│       │   └── dendrobium_antelope_twist.jpg
│       └── care_supplies.jpg
├── .gitignore
└── README.md
```

---

## ⚙️ Nursery Configuration

Open [js/app.js](file:///Users/amaldasambattuparambilsivadasan/Desktop/Orchid%20Nursery/js/app.js):

```javascript
const NURSERY_CONFIG = {
  nurseryName: "Orchid Haven Nursery",
  location: "Chathari, Tripunithura, Ernakulam, Kerala (Krishibhavan Unit)",
  whatsappNumber: "919495819173",
  contactPhone: "+91 94958 19173",
  instagramUrl: "https://www.instagram.com/orchid.haven_nursery/",
  instagramHandle: "@orchid.haven_nursery",
  email: "orchidhaven.kerala@gmail.com"
};
```

---

## 🚀 How to Run Locally

Preview immediately:
- Double-click `index.html` to open it in any web browser.
- Or visit the local server: `http://localhost:8899`

---

## 🌐 Pushing to GitHub & Free Hosting (GitHub Pages)

1. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update Orchid Haven branding and Instagram integration"
   ```

2. **Link to GitHub**:
   - Create a new repository on [GitHub](https://github.com/new) (e.g. `orchid-haven-nursery`).
   - Run:
     ```bash
     git remote add origin https://github.com/YOUR_USERNAME/orchid-haven-nursery.git
     git push -u origin main
     ```

3. **Enable Free Website Hosting (GitHub Pages)**:
   - Go to your repository **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Branch**, select `main` and `/ (root)`, then click **Save**.
   - Your website will immediately be live worldwide at:  
     `https://YOUR_USERNAME.github.io/orchid-haven-nursery/`
