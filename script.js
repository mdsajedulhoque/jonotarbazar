const products = [
    { id: 101, name: "স্টাডি প্যাক কম্বো (1 Flash Card- Arabic + 1 Flash Card- Early Math + 1 Flash Card- English)", category: "TodaysDeal", price: 1000, originalPrice: 1050, image: "Jonatar bazar-flash-cards-combo offer.jpg" },
    { id: 102, name: "প্লে টাইম কম্বো অফার (1 UNO + 1 chor police dakat babu + 1 Ludo)", category: "TodaysDeal", price: 800, originalPrice: 850, image: "JB-Game time-combo.jpg" },
    { id: 103, name: "স্টোরি টাইম পাপেট কম্বো (1 Red Bunny Puppet+ 1 Pink Bunny Puppet)", category: "TodaysDeal", price: 1400, originalPrice: 1500, image: "jonotar bazar-puppet-combo.jpg" },
    { id: 104, name: "স্টাডি প্যাক কম্বো (1 Flash Card- Bangla+ 1 Flash Card- English)", category: "TodaysDeal", price: 800, originalPrice: 830, image: "Jonatar bazar-flash-cards-combo offer-Bangla-English.jpg" },
    { id: 105, name: "সিঙ্গাপুর ম্যাথ বই লেভেল-১ (১এ+ ১বি)", category: "TodaysDeal", price: 750, originalPrice: 900, image: "Jonotar bazar-Book-Singapore-Math-1A-1B-Combo-Offer.jpg" },
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
    { id: 18, name: "মার্কাটা কি? ডালপুরি (Marka Ta Ki? Dalpuri)", category: "Books", price: 250, image: "Marka Ta Ki Dalpuri.jpg" }   
];

// Persistent Cart Initialization
let cart = JSON.parse(localStorage.getItem("jb_cart")) || [];
let currentDeliveryFee = 0;

function saveCart() {
    localStorage.setItem("jb_cart", JSON.stringify(cart));
}

function trackEvent(gaName, gaParams, fbName, fbParams) {
    if (typeof gtag === 'function') gtag('event', gaName, gaParams);
    if (typeof fbq === 'function') fbq('track', fbName, fbParams);
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof products !== "undefined") {
        renderProducts(products);
    }
    updateCartUI();
    
    const hash = window.location.hash.replace('#', '');
    const initialPage = hash ? hash : 'home';
    showPage(initialPage);
});

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        switchPageUI(event.state.page);
    } else {
        switchPageUI('home');
    }
});

function switchPageUI(pageName) {
    // Problem 1 Fix: Guard empty cart access to checkout
    if (pageName === 'checkout' && cart.length === 0) {
        pageName = 'home';
    }

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
    
    if (pageName === 'checkout') {
        renderCheckoutSummary();
    }

    window.scrollTo(0, 0);
}

function showPage(pageName) {
    if (pageName === 'checkout' && cart.length === 0) {
        alert("আপনার কার্ট খালি! অনুগ্রহ করে পণ্য যোগ করুন।");
        pageName = 'home';
    }
    switchPageUI(pageName);
    history.pushState({ page: pageName }, '', '#' + pageName);
}

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

function filterProducts(category, event) {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    if (event && event.target) event.target.classList.add("active");

    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

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

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    toggleCart(true);

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
    saveCart();
    updateCartUI();
    if (window.location.hash === '#checkout') {
        if (cart.length === 0) showPage('home');
        else renderCheckoutSummary();
    }
}

function changeQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
            if (window.location.hash === '#checkout') renderCheckoutSummary();
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

// Problem 2 Fix: Handle District & Upazila Selection & Dynamic Delivery Charges
function handleDistrictChange() {
    const district = document.getElementById("cust-district").value;
    const upazilaWrapper = document.getElementById("upazila-wrapper");
    const upazilaSelect = document.getElementById("cust-upazila");

    if (district === "Lakshmipur") {
        upazilaWrapper.style.display = "block";
        upazilaSelect.required = true;
        upazilaSelect.value = "";
        currentDeliveryFee = 0;
    } else if (district === "Other") {
        upazilaWrapper.style.display = "none";
        upazilaSelect.required = false;
        upazilaSelect.value = "N/A (Outside Lakshmipur)";
        currentDeliveryFee = 120; // Charge for outside Lakshmipur district
    } else {
        upazilaWrapper.style.display = "block";
        upazilaSelect.required = true;
        currentDeliveryFee = 0;
    }
    renderCheckoutSummary();
}

function updateDeliveryCharge() {
    const district = document.getElementById("cust-district").value;
    const upazila = document.getElementById("cust-upazila").value;

    if (district === "Lakshmipur") {
        if (upazila === "Lakshmipur Sadar") {
            currentDeliveryFee = 60;
        } else if (upazila) {
            currentDeliveryFee = 80; // Chandraganj, Raipur, Ramganj, Ramgati, Kamalnagar
        } else {
            currentDeliveryFee = 0;
        }
    }
    renderCheckoutSummary();
}

function renderCheckoutSummary() {
    const summaryBox = document.getElementById("checkout-items");
    const subtotalElem = document.getElementById("checkout-subtotal");
    const deliveryFeeElem = document.getElementById("checkout-delivery-fee");
    const totalElem = document.getElementById("checkout-total-price");

    if (!summaryBox) return;

    summaryBox.innerHTML = "";
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        summaryBox.innerHTML += `
            <div style="display:flex; justify-content:space-between; margin-bottom: 8px;">
                <span>${item.name} (x${item.quantity})</span>
                <span>৳${item.price * item.quantity}</span>
            </div>
        `;
    });

    const grandTotal = subtotal + currentDeliveryFee;

    if (subtotalElem) subtotalElem.innerText = subtotal;
    if (deliveryFeeElem) deliveryFeeElem.innerText = currentDeliveryFee;
    if (totalElem) totalElem.innerText = grandTotal;
}

function goToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    toggleCart();
    showPage('checkout');
}

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

// Final Order Submission Handler
async function handleOrderSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) {
        alert("আপনার কার্ট খালি!");
        showPage('home');
        return;
    }

    const district = document.getElementById("cust-district")?.value;
    const upazila = document.getElementById("cust-upazila")?.value;

    if (!district) {
        alert("অনুগ্রহ করে জেলা নির্বাচন করুন।");
        return;
    }
    if (district === "Lakshmipur" && !upazila) {
        alert("অনুগ্রহ করে উপজেলা নির্বাচন করুন।");
        return;
    }

    const orderId = 'ORD-' + Date.now();
    const name = document.getElementById("cust-name")?.value || "";
    const phone = document.getElementById("cust-phone")?.value || "";
    const fullAddress = document.getElementById("cust-address")?.value || "";
    const payment = document.getElementById("cust-payment")?.value || "";
    const mfsTrx = document.getElementById("mfs-trx-id")?.value || "";

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const grandTotal = subtotal + currentDeliveryFee;
    const deliveryLocationText = district === "Lakshmipur" ? `লক্ষ্মীপুর (${upazila})` : "অন্যান্য জেলা";

    const cartSummaryText = cart.map(i => `${i.name} (x${i.quantity}) - ৳${i.price * i.quantity}`).join('\n');
    const cartSummarySingleLine = cart.map(i => `${i.name} (x${i.quantity})`).join('; ');

    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = "Processing Order...";
    submitBtn.disabled = true;

    // Web3Forms Submit
    const emailPromise = fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            access_key: "0323a555-036c-45c0-b177-9182274bf941",
            subject: `🛒 New Order ${orderId} from ${name} (৳${grandTotal})`,
            Order_ID: orderId,
            Customer_Name: name,
            Phone: phone,
            District: district,
            Upazila_Area: upazila || "N/A",
            Address: fullAddress,
            Delivery_Fee: `৳${currentDeliveryFee}`,
            Payment_Method: payment,
            Transaction_ID: mfsTrx || "N/A",
            Ordered_Items: cartSummaryText,
            Subtotal: `৳${subtotal}`,
            Grand_Total: `৳${grandTotal}`
        })
    });

    // Google Sheets Submit
    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxeFwiQ11Y7oX8ro6zn2PPJ2HT29ryGphrkno0Lx_ZwYnOZZP6gHdUcUuHIy1JkHpk/exec";

    const sheetData = new FormData();
    sheetData.append("orderId", orderId);
    sheetData.append("name", name);
    sheetData.append("phone", phone);
    sheetData.append("district", district);
    sheetData.append("upazila", upazila || "N/A");
    sheetData.append("address", fullAddress);
    sheetData.append("deliveryFee", `৳${currentDeliveryFee}`);
    sheetData.append("payment", payment + (mfsTrx ? ` (Trx: ${mfsTrx})` : ''));
    sheetData.append("items", cartSummarySingleLine);
    sheetData.append("total", `৳${grandTotal}`);

    const sheetPromise = fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: sheetData
    });

    const [emailResult, sheetResult] = await Promise.allSettled([emailPromise, sheetPromise]);

    const emailOk = emailResult.status === 'fulfilled' && emailResult.value.ok;
    const sheetOk = sheetResult.status === 'fulfilled';

    if (!emailOk && !sheetOk) {
        alert("দুঃখিত, অর্ডার জমা হয়নি। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।");
        if (typeof hcaptcha !== 'undefined') hcaptcha.reset();
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
        return;
    }

    // Populate Confirmation UI
    const detailsBox = document.getElementById("order-details-box");
    if (detailsBox) {
        detailsBox.innerHTML = `
            <p><strong>Order ID:</strong> ${orderId}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Area:</strong> ${deliveryLocationText}</p>
            <p><strong>Address:</strong> ${fullAddress}</p>
            <p><strong>Subtotal:</strong> ৳${subtotal}</p>
            <p><strong>Delivery Fee:</strong> ৳${currentDeliveryFee}</p>
            <p><strong>Grand Total:</strong> ৳${grandTotal}</p>
            <p><strong>Payment Method:</strong> ${payment} ${mfsTrx ? '(' + mfsTrx + ')' : ''}</p>
        `;
    }

    trackEvent('purchase', {
        transaction_id: orderId,
        currency: 'BDT',
        value: grandTotal,
        payment_type: payment,
        items: cart.map(i => ({ item_id: String(i.id), item_name: i.name, price: i.price, quantity: i.quantity }))
    }, 'Purchase', { value: grandTotal, currency: 'BDT' });

    // Clear cart ONLY after successful checkout
    cart = [];
    saveCart();
    updateCartUI();

    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) checkoutForm.reset();
    currentDeliveryFee = 0;

    if (document.getElementById("mfs-details")) {
        document.getElementById("mfs-details").style.display = "none";
    }

    submitBtn.innerText = originalBtnText;
    submitBtn.disabled = false;

    showPage('confirmation');
}