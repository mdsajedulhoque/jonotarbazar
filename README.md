# 🛒 Jonotar Bazar (জনতার বাজার)

A lightweight, high-performance static e-commerce front-end tailored for Bangladesh. Built with pure HTML5, CSS3, and modern Vanilla JavaScript, **Jonotar Bazar** provides a fast, frictionless shopping experience without requiring heavy back-end servers or complex databases.

---

## 🌟 Key Features

* **⚡ Ultra-Fast Static Storefront:** Instant page loads with no server overhead.
* **📱 Mobile-First Responsive Design:** Fully optimized for seamless mobile and desktop browsing.
* **📦 Dynamic Product Catalog & Filtering:** Instant category filtering for Toys, Early Learning, Books, and Deals.
* **🛒 Interactive Cart Drawer:** Full cart management with real-time total calculations and slide-out accessibility.
* **💳 Integrated MFS Payment Method Support:** Native support for Cash on Delivery, bKash, and Nagad MFS transactions.
* **📩 Dual Parallel Checkout Engine:** 
  * Submits live orders asynchronously to **Web3Forms** for instant email alerts.
  * Records structured order rows directly to **Google Sheets** via Google Apps Script backend.
* **📈 Built-in Analytics & Tracking:** Pre-configured Google Tag Manager & Google Analytics integration (`G-KWV51VG69Z`).
* **💰 Multi-Provider Ad Monetization:** Containerized, mobile-safe slots for Google AdSense, Adsterra, and Bangladeshi Ruchi Ads without layout shift.

---

## 🛠️ Tech Stack & Integrations

* **Front-End:** HTML5, CSS3 (Flexbox/CSS Grid), Vanilla JavaScript (ES6+)
* **Icons & Fonts:** Font Awesome 6.4.0
* **Order Email Backend:** [Web3Forms API](https://web3forms.com/)
* **Database Backend:** Google Sheets + Google Apps Script Web App
* **Analytics:** Google Analytics 4 (GA4)
* **Hosting & CD:** GitHub Continuous Deployment via Netlify

---

## 📂 Project Structure

```text
jonotar-bazar/
├── index.html              # Main single-page app layout & ad containers
├── style.css               # Storefront styling & responsive ad grid rules
├── script.js              # Product rendering, cart state, & checkout logic
├── favicon.ico             # Desktop browser favicon
├── favicon.png             # Apple touch & mobile home screen icon
├── README.md               # Documentation
└── assets/ / root          # Product images & media assets
[![Netlify Status](https://api.netlify.com/api/v1/badges/137a7ecd-0bb8-4c2d-9385-8ec9ff67e72c/deploy-status)](https://app.netlify.com/projects/jonotarbazar/deploys)
