const products = [
  
    { 
        id: 101, 
        name: "স্টাডি প্যাক কম্বো (1 Flash Card- Arabic + 1 Flash Card- Early Math + 1 Flash Card- English)", 
        category: "TodaysDeal", 
        price: 1000, 
        originalPrice: 1050, 
        image: "Jonatar bazar-flash-cards-combo offer.jpg" 
    },
    { 
        id: 102, 
        name: "প্লে টাইম কম্বো অফার (1 UNO + 1 chor police dakat babu + 1 Ludo)", 
        category: "TodaysDeal", 
        price: 800, 
        originalPrice: 850, 
        image: "JB-Game time-combo.jpg" 
    },
    { 
        id: 103, 
        name: "স্টোরি টাইম পাপেট কম্বো (1 Red Bunny Puppet+ 1 Pink Bunny Puppet)", 
        category: "TodaysDeal", 
        price: 1400, 
        originalPrice: 1500, 
        image: "jonotar bazar-puppet-combo.jpg" 
    },
    { 
        id: 104, 
        name: "স্টাডি প্যাক কম্বো (1 Flash Card- Bangla+ 1 Flash Card- English)", 
        category: "TodaysDeal", 
        price: 800, 
        originalPrice: 830, 
        image: "Jonatar bazar-flash-cards-combo offer-Bangla-English.jpg" 
    },
    { 
        id: 105, 
        name: "সিঙ্গাপুর ম্যাথ বই লেভেল-১ (১এ+ ১বি)", 
        category: "TodaysDeal", 
        price: 750, 
        originalPrice: 900, 
        image: "Jonotar bazar-Book-Singapore-Math-1A-1B-Combo-Offer.jpg" 
    },

    
    { id: 1, name: "গুফি চোর পুলিশ ডাকাত বাবু (Goofi chor police dakat babu)", category: "Toys", price: 250, image: "Goofi-Toys-Chor-Police-Dakat-Babu.jpeg" },
    { id: 2, name: "লুডু বোর্ড- ছোট (Ludo Board - Small)", category: "Toys", price: 350, image: "Goofi-Toys-Ludu-1-22 by 22.jpg" },
    { id: 3, name: "হ্যান্ড পাপেট- লাল (Hand Puppet- Red)", category: "Toys", price: 750, image: "Goofi-Toys-Hand-Puppet-Red.jpg" },
    { id: 4, name: "হ্যান্ড পাপেট- হলুদ (Hand Puppet- Yellow)", category: "Toys", price: 750, image: "Goofi-Toys- Puppet-Yellow.jpg" },
    { id: 5, name: "হ্যান্ড পাপেট- গোলাপি (Hand Puppet- Pink)", category: "Toys", price: 750, image: "Goofi-Toys-Hand-Puppet-Pink.jpg" },
    { id: 6, name: "উনো (UNO)", category: "Toys", price: 250, image: "Goofi-Toys-Uno.jpg" },
    { id: 7, name: "ফ্ল্যাশ কার্ড - বাংলা (Flash Card- Bangla)", category: "Early Learning", price: 480, image: "Goofi-Toys-Flashcard-bangla-.jpg" },
    { id: 8, name: "ফ্ল্যাশ কার্ড - ইংরেজি (Flash Card- English)", category: "Early Learning", price: 350, image: "Goofi-Toys-English_Flash-Card.jpg" },
    { id: 9, name: "ফ্ল্যাশ কার্ড - প্রাথমিক গণিত (Flash Card- Early Math)", category: "Early Learning", price: 350, image: "Goofi-Toys-Early-Math-Flash Cards.jpg" },
    { id: 10, name: "ফ্ল্যাশ কার্ড - আরবি (Flash Card- Arabic)", category: "Early Learning", price: 350, image: "Goofi-Toys-Arabic-Flash-Card-Box-.jpg" },
    { id: 11, name: "সিঙ্গাপুর ম্যাথ ১এ- ইংরেজি-বাংলা (Singapore Math 1A- English-Bangla Edition)", category: "Books", price: 450, image: "Singapore-Math-1A-bangla.jpg" },
    { id: 12, name: "সিঙ্গাপুর ম্যাথ ১বি- ইংরেজি-বাংলা (Singapore Math 1B- English-Bangla Edition)", category: "Books", price: 450, image: "Singapore-Math-1B-English-bangla.jpg" },
    { id: 13, name: "সিঙ্গাপুর ম্যাথ ২এ (Singapore Math 2A)", category: "Books", price: 450, image: "Singapore-Math-Level-2-2A.jpg" },
    { id: 14, name: "সিঙ্গাপুর ম্যাথ ২বি (Singapore Math 2B)", category: "Books", price: 490, image: "Singapore-Math-Level-2-2B.jpg" },
    { id: 15, name: "বর্ণ নিয়ে খেলি - স্বরবর্ণ (Borno Niye Kheli- Sarborno)", category: "Books", price: 380, image: "Goofi-Books-Borno-Niye-kheli-Sorborno.jpg" },
    { id: 16, name: "অক্ষর থেকে ছবি - ইংরেজি (Letter to picture- English)", category: "Books", price: 340, image: "Goofi-Toys-Letter-to-Picture-English.jpg" },
    { id: 17, name: "অক্ষর থেকে ছবি - বাংলা (Letter to picture- Bangla)", category: "Books", price: 350, image: "Goofi-Toys-Letter-to-Picture-Bangla.jpg" },
    { id: 18, name: "মার্কাটা কি? ডালপুরি (Marka Ta Ki? Dalpuri)", category: "Books", price: 250, image: "Marka Ta Ki Dalpuri.jpg" },    
];

let cart = [];
// Track event helper
function trackEvent(gaName, gaParams, fbName, fbParams) {
    if (typeof gtag === 'function') gtag('event', gaName, gaParams);
    if (typeof fbq === 'function') fbq('track', fbName, fbParams);
}
// Initialize Page & History State
document.addEventListener("DOMContentLoaded", () => {
    if (typeof products !== "undefined") {
        renderProducts(products);
    }
    
    const hash = window.location.hash.replace('#', '');
    const initialPage = hash ? hash : 'home';
    switchPageUI(initialPage);
    history.replaceState({ page: initialPage }, '', '#' + initialPage);
});

// Browser Back / Forward Navigation Handler
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        switchPageUI(event.state.page);
    } else {
        switchPageUI('home');
    }
});

// Switch visible UI page
function switchPageUI(pageName) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => page.classList.remove("active-page"));

    let targetId = pageName.endsWith('-page') ? pageName : pageName + "-page";
    let targetPage = document.getElementById(targetId);

    if (targetPage) {
        targetPage.classList.add("active-page");
    } else {
        const homePage = document.getElementById("home-page");
        if (homePage) homePage.classList.add("active-page");
    }
    window.scrollTo(0, 0);
}

// Navigation Trigger
function showPage(pageName) {
    switchPageUI(pageName);
    history.pushState({ page: pageName }, '', '#' + pageName);
}

// Render Products Grid
function renderProducts(items) {
    const container = document.getElementById("product-container");
    if (!container) return;
    container.innerHTML = "";

    items.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        let priceHtml = `<div class="price">৳${product.price}</div>`;
        let badgeHtml = "";

        if (product.originalPrice && product.originalPrice > product.price) {
            const savings = product.originalPrice - product.price;
            badgeHtml = `<span class="deal-badge">SAVE ৳${savings}</span>`;
            priceHtml = `
                <div class="price">
                    ৳${product.price} 
                    <span class="old-price">৳${product.originalPrice}</span>
                </div>
            `;
        }

        const isDeal = product.category === 'TodaysDeal';
        const imgClass = isDeal ? 'product-img deal-img' : 'product-img';

        card.innerHTML = `
            <div class="img-wrapper">
                ${badgeHtml}
                <img src="${product.image}" class="${imgClass}" alt="${product.name}">
            </div>
            <div>
                <div class="category">${isDeal ? "🔥 Today's Deal" : product.category}</div>
                <h3>${product.name}</h3>
                ${priceHtml}
            </div>
            <button class="btn btn-primary btn-block" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        `;
        container.appendChild(card);
    });
}

// Category Filter
function filterProducts(category, event) {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    if (event && event.target) event.target.classList.add("active");

    if (typeof products === "undefined") return;

    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// Cart Drawer Visibility Controls
function toggleCart(forceOpen = false) {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");

    if (!drawer || !overlay) return;

    if (forceOpen) {
        drawer.classList.add("open");
        overlay.classList.add("show");
    } else {
        drawer.classList.toggle("open");
        overlay.classList.toggle("show");
    }
}

// Cart Operations
function addToCart(productId) {
    if (typeof products === "undefined") return;
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    toggleCart(true);

    // Track AddToCart (Google Analytics + Meta Pixel)
    trackEvent('add_to_cart', {
        currency: 'BDT',
        value: product.price,
        items: [{ item_id: String(product.id), item_name: product.name, price: product.price, quantity: 1 }]
    }, 'AddToCart', {
        content_name: product.name,
        content_ids: [String(product.id)],
        content_type: 'product',
        value: product.price,
        currency: 'BDT'
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function changeQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotalPrice = document.getElementById("cart-total-price");

    if (!cartItems || !cartCount || !cartTotalPrice) return;

    cartItems.innerHTML = "";
    let total = 0;
    let totalItems = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        totalItems += item.quantity;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <small>৳${item.price} x ${item.quantity}</small>
            </div>
            <div>
                <button onclick="changeQuantity(${item.id}, -1)">-</button>
                <span style="margin: 0 5px;">${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
                <button style="color:red; margin-left:10px; border:none; background:none; cursor:pointer;" onclick="removeFromCart(${item.id})">&times;</button>
            </div>
        `;
        cartItems.appendChild(div);
    });

    cartCount.innerText = totalItems;
    cartTotalPrice.innerText = total;
}

// Payment method selector
function togglePaymentDetails() {
    const paymentElem = document.getElementById("cust-payment");
    const mfsBox = document.getElementById("mfs-details");
    const mfsName = document.getElementById("selected-mfs-name");

    if (!paymentElem || !mfsBox || !mfsName) return;

    const method = paymentElem.value;

    if (method === "bKash" || method === "Nagad") {
        mfsName.innerText = method;
        mfsBox.style.display = "block";
    } else {
        mfsBox.style.display = "none";
    }
}

// Proceed to Checkout
function goToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    toggleCart();
    
    const summaryBox = document.getElementById("checkout-items");
    const checkoutTotal = document.getElementById("checkout-total-price");
    
    if (summaryBox) summaryBox.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        if (summaryBox) {
            summaryBox.innerHTML += `
                <div style="display:flex; justify-content:space-between; margin-bottom: 8px;">
                    <span>${item.name} (x${item.quantity})</span>
                    <span>৳${item.price * item.quantity}</span>
                </div>
            `;
        }
    });

    if (checkoutTotal) checkoutTotal.innerText = total;
    //Track event
trackEvent('begin_checkout', {
    currency: 'BDT',
    value: total,
    items: cart.map(i => ({ item_id: String(i.id), item_name: i.name, price: i.price, quantity: i.quantity }))
}, 'InitiateCheckout', {
    value: total,
    currency: 'BDT',
    num_items: cart.reduce((s, i) => s + i.quantity, 0)
});

    showPage('checkout');
}

// Final Order Submission (Web3Forms + Google Sheets)
async function handleOrderSubmit(event) {
    event.preventDefault();
//Empty cart notification
    if (cart.length === 0) {
    alert("Your cart is empty!");
    showPage('home');
    return;
}
const orderId = 'ORD-' + Date.now();
    // 1. Gather Form Data
    const name = document.getElementById("cust-name")?.value || "";
    const phone = document.getElementById("cust-phone")?.value || "";
    const address = document.getElementById("cust-address")?.value || "";
    const payment = document.getElementById("cust-payment")?.value || "";
    const mfsTrx = document.getElementById("mfs-trx-id")?.value || "";

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const cartSummaryText = cart.map(i => `${i.name} (x${i.quantity}) - ৳${i.price * i.quantity}`).join('\n');
    const cartSummarySingleLine = cart.map(i => `${i.name} (x${i.quantity})`).join('; ');

    // 2. Button Loading State
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = "Processing Order...";
    submitBtn.disabled = true;

    // -----------------------------------------------------------------
    // METHOD 1: Web3Forms (Email Notification)
    // -----------------------------------------------------------------
    const emailPromise = fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            access_key: "0323a555-036c-45c0-b177-9182274bf941",
            subject: `🛒 New Order from ${name} (৳${total})`,
            Customer_Name: name,
            Phone: phone,
            Address: address,
            Payment_Method: payment,
            Transaction_ID: mfsTrx || "N/A",
            Ordered_Items: cartSummaryText,
            Total_Amount: `৳${total}`
        })
    });

    // -----------------------------------------------------------------
    // METHOD 2: Google Sheets (Database Recording)
    // -----------------------------------------------------------------
    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxeFwiQ11Y7oX8ro6zn2PPJ2HT29ryGphrkno0Lx_ZwYnOZZP6gHdUcUuHIy1JkHpk/exec";

    const sheetData = new FormData();
    sheetData.append("name", name);
    sheetData.append("phone", phone);
    sheetData.append("address", address);
    sheetData.append("payment", payment + (mfsTrx ? ` (Trx: ${mfsTrx})` : ''));
    sheetData.append("items", cartSummarySingleLine);
    sheetData.append("total", `৳${total}`);

    const sheetPromise = fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: sheetData
    });

    // Execute Email and Google Sheet requests in parallel
    const [emailResult, sheetResult] = await Promise.allSettled([emailPromise, sheetPromise]);

    const emailOk = emailResult.status === 'fulfilled' && emailResult.value.ok;
    const sheetOk = sheetResult.status === 'fulfilled';

    // Verification check
    if (!emailOk && !sheetOk) {
        alert("দুঃখিত, অর্ডার জমা হয়নি। ইন্টারনেট দেখে আবার চেষ্টা করুন।");
        if (typeof hcaptcha !== 'undefined') hcaptcha.reset();
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
        return;
    }

    // 3. Update Order Confirmation Screen Details
    const detailsBox = document.getElementById("order-details-box");
    if (detailsBox) {
        detailsBox.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Payment Method:</strong> ${payment} ${mfsTrx ? '(' + mfsTrx + ')' : ''}</p>
            <p><strong>Total Amount:</strong> ৳${total}</p>
        `;
    }

    // Universal Purchase Event Safely Execution
    trackEvent('purchase', {
    transaction_id: orderId,
    currency: 'BDT',
    value: total,
    payment_type: payment,
    items: cart.map(i => ({ item_id: String(i.id), item_name: i.name, price: i.price, quantity: i.quantity }))
}, 'Purchase', { value: total, currency: 'BDT' });

    // 4. Reset Cart, Form and Show Confirmation Page
    cart = [];
    updateCartUI();
    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) checkoutForm.reset();

    if (document.getElementById("mfs-details")) {
        document.getElementById("mfs-details").style.display = "none";
    }

    submitBtn.innerText = originalBtnText;
    submitBtn.disabled = false;

    showPage('confirmation');
}