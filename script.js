// // script.js — local images version
// // All images should be inside: img/food/
// // Make sure filenames exactly match.

// /////////////////////////////
// // Food data (LOCAL IMAGES)
// /////////////////////////////
// const foodData = [
//     {id:1, name:"Margherita Pizza", price:12.99, category:"pizza",
//         image:"img/food/p1.jpg", alt:"Margherita Pizza",
//         description:"Classic pizza with tomato & cheese"},

//     {id:2, name:"Pepperoni Pizza", price:14.99, category:"pizza",
//         image:"img/food/pizza.jpg", alt:"Pepperoni Pizza",
//         description:"Spicy pepperoni with mozzarella"},

//     {id:3, name:"Cheeseburger", price:9.99, category:"burger",
//         image:"img/food/b1.jpg", alt:"Cheeseburger",
//         description:"Beef patty with cheese & lettuce"},

//     {id:4, name:"Chicken Burger", price:10.99, category:"burger",
//         image:"img/food/Chicken-Burger.jpg", alt:"Chicken Burger",
//         description:"Grilled chicken with special sauce"},

//     {id:5, name:"Club Sandwich", price:8.99, category:"sandwich",
//         image:"img/food/s1.jpg", alt:"Club Sandwich",
//         description:"Triple layered sandwich"},

//     {id:6, name:"Veg Sandwich", price:7.99, category:"sandwich",
//         image:"img/food/sandwich.jpg", alt:"Veg Sandwich",
//         description:"Fresh veggies & hummus"},

//     {id:7, name:"Chicken Biryani", price:11.99, category:"biryani",
//         image:"img/food/chicken-biryani.jpg", alt:"Chicken Biryani",
//         description:"Aromatic basmati rice with chicken"},

//     {id:8, name:"Veg Biryani", price:9.99, category:"biryani",
//         image:"img/food/veg-bri.jpg", alt:"Veg Biryani",
//         description:"Flavourful rice cooked with veggies"},

//     {id:9, name:"Chicken Shawarma", price:8.99, category:"shawarma",
//         image:"img/food/chicken-shawarma.jpg", alt:"Chicken Shawarma",
//         description:"Chicken wrapped in pita bread"},

//     {id:10, name:"Spicy Shawarma", price:9.49, category:"shawarma",
//         image:"img/food/spyci-shawarma.jpg", alt:"Spicy Shawarma",
//         description:"Extra spicy shawarma roll"},

//     {id:11, name:"Gobi Manchurian", price:7.49, category:"starter",
//         image:"img/food/Gobi-Manc.avif", alt:"Gobi Manchurian",
//         description:"Crispy fried cauliflower"},

//     {id:12, name:"Fried Rice", price:8.99, category:"rice",
//         image:"img/food/f-rice.jpg", alt:"Fried Rice",
//         description:"Veg fried rice with sauces"},

//     {id:13, name:"Veg Roll", price:5.99, category:"roll",
//         image:"img/food/veg-rol.webp", alt:"Veg Roll",
//         description:"Crispy vegetable roll"},

//     {id:14, name:"Paneer Roll", price:6.49, category:"roll",
//         image:"img/food/Paneer-roll.jpg", alt:"Paneer Roll",
//         description:"Soft paneer wrap"},

//     {id:15, name:"Gol Gappa", price:4.99, category:"chat",
//         image:"img/food/gol-gappe.jpg", alt:"Gol Gappa",
//         description:"Crispy puri with masala water"},

//     {id:16, name:"Aloo Tikki", price:6.99, category:"chat",
//         image:"img/food/aloo.jpg", alt:"Aloo Tikki",
//         description:"Crispy aloo patties"},

//     {id:17, name:"Chicken Kebab", price:12.49, category:"kebab",
//         image:"img/food/ch-kabab.jpg", alt:"Chicken Kebab",
//         description:"Juicy chicken kebabs"},

//     {id:18, name:"Fried Fish", price:13.99, category:"seafood",
//         image:"img/food/Fried-fish.jpg", alt:"Fried Fish",
//         description:"Crispy golden fried fish"},

//     {id:19, name:"Chocolate Brownie", price:5.99, category:"sweet",
//         image:"img/food/Brownie.jpg", alt:"Chocolate Brownie",
//         description:"Rich chocolate dessert"},

//     {id:20, name:"Gulab Jamun", price:4.99, category:"sweet",
//         image:"img/food/gulab-jamun.webp", alt:"Gulab Jamun",
//         description:"Sweet syrup dessert"}
// ];

// /////////////////////////////
// // App state + helpers
// /////////////////////////////
// let cart = [];
// let currentUser = null;

// const qs = s => document.querySelector(s);
// const qsa = s => Array.from(document.querySelectorAll(s));

// document.addEventListener('DOMContentLoaded', () => {
//   loadCart(); loadAuth(); renderNavUser();
//   displayFeaturedFoods();
//   // categories are static in index.html but we still ensure any dynamic behavior:
//   initResponsiveAnimations();
//   wireCartModal();
// });

// /////////////////////////////
// // AUTH (localStorage demo)
// /////////////////////////////
// function loadAuth(){ const u = localStorage.getItem('currentUser'); if (u) currentUser = JSON.parse(u); }
// function renderNavUser(){
//   const nav = qs('.main-nav'); if(!nav) return;
//   // remove existing userArea if any
//   const existing = qs('#userArea'); if (existing) existing.remove();

//   const a = document.createElement('a'); a.id = 'userArea'; a.href = '#';
//   a.className = 'nav-link';

//   if (currentUser) {
//     a.innerHTML = `Hello, ${currentUser.name.split(' ')[0]} &nbsp; <span id="logoutInline" style="font-weight:700;cursor:pointer;color:var(--primary)">Logout</span>`;
//     nav.appendChild(a);
//     qs('#logoutInline').addEventListener('click', ()=> { localStorage.removeItem('currentUser'); currentUser = null; renderNavUser(); alert('Logged out'); window.location = 'index.html'; });
//   } else {
//     a.innerHTML = `<a href="login.html" class="nav-link">Login</a>`;
//     nav.appendChild(a);
//   }
// }

// /////////////////////////////
// // CART FUNCTIONS
// /////////////////////////////
// function saveCart(){ localStorage.setItem('cart', JSON.stringify(cart)); }
// function loadCart(){ const saved = localStorage.getItem('cart'); if (saved) cart = JSON.parse(saved); updateCartUI(); }

// function addToCart(id){
//   const f = foodData.find(x=>x.id===id); if(!f) return;
//   const ex = cart.find(i=>i.id===id);
//   if (ex) ex.quantity += 1; else cart.push({ id: f.id, name: f.name, price: f.price, image: f.image, quantity: 1 });
//   saveCart(); updateCartUI(); toast(`${f.name} added to cart`);
// }

// function removeFromCart(id){ cart = cart.filter(i=>i.id!==id); saveCart(); updateCartUI(); }
// function updateQuantity(id, change){ const it = cart.find(i=>i.id===id); if(!it) return; it.quantity += change; if (it.quantity <= 0) removeFromCart(id); else saveCart(), updateCartUI(); }

// function updateCartUI(){
//   const cnt = cart.reduce((t,i)=>t+i.quantity,0);
//   const cc = qs('.cart-count'); if (cc) cc.textContent = cnt;
//   const cartItems = qs('#cartItems'); if (!cartItems) return;
//   if (cart.length === 0) { cartItems.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>'; qs('#cartTotal') && (qs('#cartTotal').textContent = '0.00'); return; }
//   cartItems.innerHTML = '';
//   let total = 0;
//   cart.forEach(item => {
//     const itotal = item.price * item.quantity; total += itotal;
//     const div = document.createElement('div'); div.className = 'cart-item';
//     div.innerHTML = `<div class="item-info"><h4>${item.name}</h4><p class="item-price">$${item.price.toFixed(2)} each</p></div>
//       <div class="item-quantity"><button class="quantity-btn minus" data-id="${item.id}">-</button><span class="quantity">${item.quantity}</span><button class="quantity-btn plus" data-id="${item.id}">+</button></div>
//       <p class="item-total">$${itotal.toFixed(2)}</p><button class="remove-item" data-id="${item.id}">×</button>`;
//     cartItems.appendChild(div);
//   });
//   qs('#cartTotal') && (qs('#cartTotal').textContent = total.toFixed(2));
//   qsa('.quantity-btn.minus').forEach(b=>b.addEventListener('click', ()=> updateQuantity(parseInt(b.dataset.id), -1)));
//   qsa('.quantity-btn.plus').forEach(b=>b.addEventListener('click', ()=> updateQuantity(parseInt(b.dataset.id), 1)));
//   qsa('.remove-item').forEach(b=>b.addEventListener('click', ()=> removeFromCart(parseInt(b.dataset.id))));
// }

// /////////////////////////////
// // FEATURED / MENU RENDER
// /////////////////////////////
// function displayFeaturedFoods(){
//   const el = qs('#featuredFoods'); if(!el) return; el.innerHTML = '';
//   const items = foodData.slice(0,6);
//   items.forEach(f => {
//     const card = document.createElement('div'); card.className = 'food-card';
//     card.innerHTML = `<img src="${f.image}" alt="${f.alt}"><div class="food-info"><h3>${f.name}</h3><p>${f.description}</p><span class="price">$${f.price.toFixed(2)}</span><button class="add-to-cart" data-id="${f.id}">Add to Cart</button></div>`;
//     el.appendChild(card);
//   });
//   qsa('.add-to-cart').forEach(b => b.addEventListener('click', function(){ addToCart(parseInt(this.dataset.id)); }));
// }

// /////////////////////////////
// // CHECKOUT & BILL
// /////////////////////////////
// function checkout(){
//   if (cart.length === 0) { alert('Your cart is empty'); return; }
//   if (!currentUser) { if (confirm('Please login to checkout. Go to login page?')) window.location = 'login.html'; return; }
//   const order = { items: [...cart], total: parseFloat(qs('#cartTotal').textContent), timestamp: new Date().toISOString(), user: currentUser.email };
//   const orders = JSON.parse(localStorage.getItem('orders')) || [];
//   orders.push(order); localStorage.setItem('orders', JSON.stringify(orders));
//   generateBill(order);
//   cart = []; saveCart(); updateCartUI();
// }

// function generateBill(order){
//   let bill = `=====================================\n          FOODIE DELIGHT\n          ORDER RECEIPT\n=====================================\nDate: ${new Date(order.timestamp).toLocaleString()}\n\nItems:\n-------------------------------------\n`;
//   order.items.forEach(item => {
//     bill += `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${(item.price*item.quantity).toFixed(2)}\n`;
//   });
//   bill += `\nTotal Amount: $${order.total.toFixed(2)}\n\n=====================================\n    Thank you for your order!\n  Visit us again at Foodie Delight\n=====================================\n`;
//   showBill(bill, order);
// }

// function showBill(bill, order){
//   let modal = qs('#billModal');
//   if (!modal){
//     modal = document.createElement('div'); modal.id = 'billModal'; modal.className = 'cart-modal';
//     modal.innerHTML = `<div class="cart-content" style="width:90%;max-width:700px;">
//       <div class="cart-header"><h2>Order Bill Preview</h2><span class="close-btn" id="closeBill">&times;</span></div>
//       <div class="cart-body" style="padding:20px;">
//         <pre id="billPreview" style="white-space:pre-wrap;font-family:monospace;background:#f8f9fa;padding:20px;border-radius:5px;max-height:400px;overflow:auto"></pre>
//         <div class="cart-footer" style="display:flex;gap:10px;justify-content:center;margin-top:12px;">
//           <button class="btn-primary" id="downloadTxt">Download TXT</button>
//           <button class="btn-primary" id="closeBillBtn">Close</button>
//         </div>
//       </div></div>`;
//     document.body.appendChild(modal);
//     qs('#closeBill').addEventListener('click', ()=> modal.style.display = 'none');
//     qs('#closeBillBtn').addEventListener('click', ()=> modal.style.display = 'none');
//     qs('#downloadTxt').addEventListener('click', ()=> {
//       const blob = new Blob([bill], { type: 'text/plain' }); const url = URL.createObjectURL(blob);
//       const a = document.createElement('a'); a.href = url; a.download = `foodie-bill-${Date.now()}.txt`; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
//     });
//   }
//   qs('#billPreview').textContent = bill;
//   modal.style.display = 'flex';
// }

// /////////////////////////////
// // CONTACT (if contact form present)
// /////////////////////////////
// document.addEventListener('submit', (e) => {
//   if (e.target && e.target.id === 'contactForm') {
//     e.preventDefault();
//     const name = qs('#name').value.trim();
//     const email = qs('#email').value.trim();
//     const message = qs('#message').value.trim();
//     if (!name || !email || !message) { alert('Please fill all fields'); return; }
//     const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
//     messages.push({ name, email, message, timestamp: new Date().toISOString() });
//     localStorage.setItem('contactMessages', JSON.stringify(messages));
//     e.target.reset();
//     alert('Thanks for your message!');
//   }
// });

// /////////////////////////////
// // Toast helper
// /////////////////////////////
// function toast(msg){
//   const t = document.createElement('div'); t.style.position='fixed'; t.style.right='20px'; t.style.bottom='20px';
//   t.style.background='linear-gradient(90deg,var(--primary),#2a5298)'; t.style.color='white'; t.style.padding='10px 14px';
//   t.style.borderRadius='10px'; t.style.boxShadow='0 10px 30px rgba(16,24,40,0.12)'; t.style.zIndex=9999; t.textContent=msg;
//   document.body.appendChild(t); setTimeout(()=>{ t.style.opacity=0; setTimeout(()=>t.remove(),400); },2000);
// }

// /////////////////////////////
// // Cart modal wiring & misc
// /////////////////////////////
// function wireCartModal(){
//   const cartLink = qs('#cartLink'); const cartModal = qs('#cartModal'); const closeCart = qs('#closeCart'); if(cartLink){ cartLink.addEventListener('click', (e)=>{ e.preventDefault(); openCart(); }); }
//   if (closeCart) closeCart.addEventListener('click', closeCartModal);
//   if (qs('#checkoutBtn')) qs('#checkoutBtn').addEventListener('click', checkout);
//   window.addEventListener('click', function(event){ if (event.target === cartModal) closeCartModal(); });
// }
// function openCart(){ const modal = qs('#cartModal'); if(modal){ modal.style.display = 'flex'; } }
// function closeCartModal(){ const modal = qs('#cartModal'); if(modal){ modal.style.display = 'none'; } }

// /////////////////////////////
// // ADMIN helpers (for admin.html)
// /////////////////////////////
// function renderAdminTables(){
//   const orders = JSON.parse(localStorage.getItem('orders')) || [];
//   const contacts = JSON.parse(localStorage.getItem('contactMessages')) || [];
//   const ordersT = qs('#ordersTable tbody'); const contactsT = qs('#contactsTable tbody');
//   if (ordersT) { ordersT.innerHTML = ''; orders.forEach((o, idx) => {
//     const tr = document.createElement('tr'); const items = o.items.map(i=>`${i.name} x ${i.quantity}`).join(', ');
//     tr.innerHTML = `<td>${idx+1}</td><td>${o.user||'---'}</td><td>${items}</td><td>$${o.total.toFixed(2)}</td><td>${new Date(o.timestamp).toLocaleString()}</td><td><button class="small-btn ghost" onclick="deleteOrder(${idx})">Delete</button></td>`;
//     ordersT.appendChild(tr);
//   }); }
//   if (contactsT) { contactsT.innerHTML = ''; contacts.forEach((c, idx) => {
//     const tr = document.createElement('tr'); tr.innerHTML = `<td>${idx+1}</td><td>${escapeHtml(c.name)}</td><td>${escapeHtml(c.email)}</td><td>${escapeHtml(c.message)}</td><td>${new Date(c.timestamp).toLocaleString()}</td><td><button class="small-btn ghost" onclick="deleteContact(${idx})">Delete</button></td>`;
//     contactsT.appendChild(tr);
//   }); }
// }
// function deleteOrder(idx){ const orders = JSON.parse(localStorage.getItem('orders')) || []; orders.splice(idx,1); localStorage.setItem('orders', JSON.stringify(orders)); renderAdminTables(); }
// function deleteContact(idx){ const contacts = JSON.parse(localStorage.getItem('contactMessages')) || []; contacts.splice(idx,1); localStorage.setItem('contactMessages', JSON.stringify(contacts)); renderAdminTables(); }
// function exportOrdersCSV(){ const orders = JSON.parse(localStorage.getItem('orders')) || []; let csv='User,Items,Total,Date\n'; orders.forEach(o => { const items = o.items.map(i=>`${i.name} x ${i.quantity}`).join('|'); csv += `${o.user||''},"${items}",${o.total},"${new Date(o.timestamp).toLocaleString()}"\n`; }); downloadBlob(csv, `orders-${Date.now()}.csv`); }
// function exportContactsCSV(){ const contacts = JSON.parse(localStorage.getItem('contactMessages')) || []; let csv='Name,Email,Message,Date\n'; contacts.forEach(c => { csv += `"${(c.name||'').replace(/"/g,'""')}","${(c.email||'').replace(/"/g,'""')}","${(c.message||'').replace(/"/g,'""')}","${new Date(c.timestamp).toLocaleString()}"\n`; }); downloadBlob(csv, `contacts-${Date.now()}.csv`); }
// function downloadBlob(content, filename){ const blob = new Blob([content], { type: 'text/csv' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); }
// function escapeHtml(s){ return String(s).replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// /////////////////////////////
// // Responsive + Animations (hamburger, reveal, add-to-cart pulse)
// /////////////////////////////
// function initResponsiveAnimations(){
//   // MOBILE NAV TOGGLE
//   const mobileToggle = document.getElementById('mobileNavToggle');
//   const mainNav = document.querySelector('.main-nav');
//   if (mobileToggle && mainNav) {
//     mobileToggle.addEventListener('click', () => {
//       const isOpen = mainNav.classList.toggle('mobile-open');
//       mobileToggle.classList.toggle('open', isOpen);
//       if (isOpen) document.body.style.overflow = 'hidden'; else document.body.style.overflow = '';
//     });

//     document.addEventListener('click', (e) => {
//       if (!mainNav.classList.contains('mobile-open')) return;
//       if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
//         mainNav.classList.remove('mobile-open');
//         mobileToggle.classList.remove('open');
//         document.body.style.overflow = '';
//       }
//     });
//   }

//   // REVEAL ON SCROLL (IntersectionObserver)
//   const revealItems = document.querySelectorAll('.reveal, .stagger');
//   if ('IntersectionObserver' in window) {
//     const io = new IntersectionObserver((entries, obs) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//           obs.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.12 });
//     revealItems.forEach(el => io.observe(el));
//   } else {
//     revealItems.forEach(el => el.classList.add('visible'));
//   }

//   // ADD-TO-CART PULSE
//   document.addEventListener('click', (e) => {
//     const btn = e.target.closest('.add-to-cart');
//     if (!btn) return;
//     btn.classList.remove('add-pulse'); void btn.offsetWidth; btn.classList.add('add-pulse');
//     const cartCount = document.querySelector('.cart-count');
//     if (cartCount) {
//       cartCount.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.18)' }, { transform: 'scale(1)' }], { duration: 400, easing: 'cubic-bezier(.2,.9,.25,1)' });
//     }
//   });

//   // Smooth anchor scroll
//   document.querySelectorAll('a[href^="#"]').forEach(a => {
//     a.addEventListener('click', function(e){
//       const href = this.getAttribute('href');
//       if (href === '#' || href === '') return;
//       const target = document.querySelector(href);
//       if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
//     });
//   });
// }

// /////////////////////////////
// // Expose admin functions globally for inline buttons
// /////////////////////////////
// window.deleteOrder = deleteOrder;
// window.deleteContact = deleteContact;
// window.exportOrdersCSV = exportOrdersCSV;
// window.exportContactsCSV = exportContactsCSV;
// window.renderAdminTables = renderAdminTables;

// // Wire checkout button clicks appearing outside main flow
// document.addEventListener('click', (e) => {
//   if (e.target && e.target.id === 'checkoutBtn') checkout();
// });

/* ==========================================================
   FOOD DATA (LOCAL IMAGES + ALT TEXT)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* REGISTER */
    const regForm = document.getElementById("registerForm");
    if (regForm) {
        regForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = regName.value.trim();
            const email = regEmail.value.trim();
            const password = regPassword.value.trim();

            let users = JSON.parse(localStorage.getItem("users")) || [];

            if (users.some(u => u.email === email)) {
                alert("Email already registered!");
                return;
            }

            users.push({ name, email, password });
            localStorage.setItem("users", JSON.stringify(users));

            localStorage.setItem("currentUser", JSON.stringify({ name, email }));

            alert("Account created successfully!");
            window.location = "index.html";
        });
    }

    /* LOGIN */
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = loginEmail.value.trim();
            const password = loginPassword.value.trim();

            let users = JSON.parse(localStorage.getItem("users")) || [];

            const user = users.find(u => u.email === email && u.password === password);

            if (!user) {
                alert("Invalid email or password!");
                return;
            }

            localStorage.setItem("currentUser", JSON.stringify({ name: user.name, email: user.email }));
            alert("Welcome back, " + user.name + "!");

            window.location = "index.html";
        });
    }
});




const foodData = [
    {id:1, name:"Margherita Pizza", price:12.99, category:"pizza",
        image:"img/food/p1.jpg", alt:"Margherita Pizza",
        description:"Classic pizza with tomato & cheese"},

    {id:2, name:"Pepperoni Pizza", price:14.99, category:"pizza",
        image:"img/food/pizza.jpg", alt:"Pepperoni Pizza",
        description:"Spicy pepperoni with mozzarella"},

    {id:3, name:"Cheeseburger", price:9.99, category:"burger",
        image:"img/food/b1.jpg", alt:"Cheeseburger",
        description:"Beef patty with cheese & lettuce"},

    {id:4, name:"Chicken Burger", price:10.99, category:"burger",
        image:"img/food/Chicken-Burger.jpg", alt:"Chicken Burger",
        description:"Grilled chicken with special sauce"},

    {id:5, name:"Club Sandwich", price:8.99, category:"sandwich",
        image:"img/food/s1.jpg", alt:"Club Sandwich",
        description:"Triple layered sandwich"},

    {id:6, name:"Veg Sandwich", price:7.99, category:"sandwich",
        image:"img/food/sandwich.jpg", alt:"Veg Sandwich",
        description:"Fresh veggies & hummus"},

    {id:7, name:"Chicken Biryani", price:11.99, category:"biryani",
        image:"img/food/chicken-biryani.jpg", alt:"Chicken Biryani",
        description:"Aromatic basmati rice with chicken"},

    {id:8, name:"Veg Biryani", price:9.99, category:"biryani",
        image:"img/food/veg-bri.jpg", alt:"Veg Biryani",
        description:"Flavourful rice cooked with veggies"},

    {id:9, name:"Chicken Shawarma", price:8.99, category:"shawarma",
        image:"img/food/chicken-shawarma.jpg", alt:"Chicken Shawarma",
        description:"Chicken wrapped in pita bread"},

    {id:10, name:"Spicy Shawarma", price:9.49, category:"shawarma",
        image:"img/food/spyci-shawarma.jpg", alt:"Spicy Shawarma",
        description:"Extra spicy shawarma roll"},

    {id:11, name:"Gobi Manchurian", price:7.49, category:"starter",
        image:"img/food/Gobi-Manc.avif", alt:"Gobi Manchurian",
        description:"Crispy fried cauliflower"},

    {id:12, name:"Fried Rice", price:8.99, category:"rice",
        image:"img/food/f-rice.jpg", alt:"Fried Rice",
        description:"Veg fried rice with sauces"},

    {id:13, name:"Veg Roll", price:5.99, category:"roll",
        image:"img/food/veg-rol.webp", alt:"Veg Roll",
        description:"Crispy vegetable roll"},

    {id:14, name:"Paneer Roll", price:6.49, category:"roll",
        image:"img/food/Paneer-roll.jpg", alt:"Paneer Roll",
        description:"Soft paneer wrap"},

    {id:15, name:"Gol Gappa", price:4.99, category:"chat",
        image:"img/food/gol-gappe.jpg", alt:"Gol Gappa",
        description:"Crispy puri with masala water"},

    {id:16, name:"Aloo Tikki", price:6.99, category:"chat",
        image:"img/food/aloo.jpg", alt:"Aloo Tikki",
        description:"Crispy aloo patties"},

    {id:17, name:"Chicken Kebab", price:12.49, category:"kebab",
        image:"img/food/ch-kabab.jpg", alt:"Chicken Kebab",
        description:"Juicy chicken kebabs"},

    {id:18, name:"Fried Fish", price:13.99, category:"seafood",
        image:"img/food/Fried-fish.jpg", alt:"Fried Fish",
        description:"Crispy golden fried fish"},

    {id:19, name:"Chocolate Brownie", price:5.99, category:"sweet",
        image:"img/food/Brownie.jpg", alt:"Chocolate Brownie",
        description:"Rich chocolate dessert"},

    {id:20, name:"Gulab Jamun", price:4.99, category:"sweet",
        image:"img/food/gulab-jamun.webp", alt:"Gulab Jamun",
        description:"Sweet syrup dessert"}
];

/////////////////////////////
// App state + helpers
/////////////////////////////
let cart = [];
let currentUser = null;

const qs = s => document.querySelector(s);
const qsa = s => Array.from(document.querySelectorAll(s));

document.addEventListener('DOMContentLoaded', () => {
  // load cart/auth
  loadCartFromLocalStorage();
  loadAuth();
  renderNavUser();

  // render UI pieces
  displayFeaturedFoods();

  // init behaviors
  initResponsiveAnimations();
  wireCartModal();

  // if on menu page, render menu & setup filters
  if (document.getElementById('menuGrid')) {
      displayMenuFoods('all');
      setupFilters();
  }
});

/////////////////////////////
// AUTH (localStorage demo)
/////////////////////////////
function loadAuth(){ const u = localStorage.getItem('currentUser'); if (u) currentUser = JSON.parse(u); }
function renderNavUser(){
  const nav = qs('.main-nav'); if(!nav) return;
  // remove existing userArea if any
  const existing = qs('#userArea'); if (existing) existing.remove();

  const a = document.createElement('a'); a.id = 'userArea'; a.href = '#';
  a.className = 'nav-link';

  if (currentUser) {
    a.innerHTML = `Hello, ${currentUser.name.split(' ')[0]} &nbsp; <span id="logoutInline" style="font-weight:700;cursor:pointer;color:var(--primary)">Logout</span>`;
    nav.appendChild(a);
    qs('#logoutInline').addEventListener('click', ()=> { localStorage.removeItem('currentUser'); currentUser = null; renderNavUser(); alert('Logged out'); window.location = 'index.html'; });
  } else {
    a.innerHTML = `<a href="login.html" class="nav-link">Login</a>`;
    nav.appendChild(a);
  }
}

/////////////////////////////
// CART FUNCTIONS (aliases + storage compatibility)
/////////////////////////////

// keep two names so both older code variants work
function saveCart() { saveCartToLocalStorage(); }
function loadCart() { loadCartFromLocalStorage(); }

// The actual implementations used throughout
function saveCartToLocalStorage() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch(e) { console.warn('Failed to save cart:', e); }
}
function loadCartFromLocalStorage() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        try { cart = JSON.parse(saved); } catch(e) { cart = []; }
    } else {
        cart = [];
    }
    updateCartUI();
}

function addToCart(id){
  const f = foodData.find(x=>x.id===id); if(!f) return;
  const ex = cart.find(i=>i.id===id);
  if (ex) ex.quantity += 1; else cart.push({ id: f.id, name: f.name, price: f.price, image: f.image, quantity: 1 });
  saveCartToLocalStorage();
  updateCartUI();
  toast(`${f.name} added to cart`);
}

function removeFromCart(id){ cart = cart.filter(i=>i.id!==id); saveCartToLocalStorage(); updateCartUI(); }
function updateQuantity(id, change){ const it = cart.find(i=>i.id===id); if(!it) return; it.quantity += change; if (it.quantity <= 0) removeFromCart(id); else saveCartToLocalStorage(), updateCartUI(); }

function updateCartUI(){
  const cnt = cart.reduce((t,i)=>t+i.quantity,0);
  const cc = qs('.cart-count'); if (cc) cc.textContent = cnt;
  const cartItems = qs('#cartItems'); if (!cartItems) return;
  if (cart.length === 0) { cartItems.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>'; qs('#cartTotal') && (qs('#cartTotal').textContent = '0.00'); return; }
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const itotal = item.price * item.quantity; total += itotal;
    const div = document.createElement('div'); div.className = 'cart-item';
    div.innerHTML = `<div class="item-info"><h4>${item.name}</h4><p class="item-price">$${item.price.toFixed(2)} each</p></div>
      <div class="item-quantity"><button class="quantity-btn minus" data-id="${item.id}">-</button><span class="quantity">${item.quantity}</span><button class="quantity-btn plus" data-id="${item.id}">+</button></div>
      <p class="item-total">$${itotal.toFixed(2)}</p><button class="remove-item" data-id="${item.id}">×</button>`;
    cartItems.appendChild(div);
  });
  qs('#cartTotal') && (qs('#cartTotal').textContent = total.toFixed(2));
  qsa('.quantity-btn.minus').forEach(b=>b.addEventListener('click', ()=> updateQuantity(parseInt(b.dataset.id), -1)));
  qsa('.quantity-btn.plus').forEach(b=>b.addEventListener('click', ()=> updateQuantity(parseInt(b.dataset.id), 1)));
  qsa('.remove-item').forEach(b=>b.addEventListener('click', ()=> removeFromCart(parseInt(b.dataset.id))));
}

/////////////////////////////
// FEATURED / MENU RENDER
/////////////////////////////
function displayFeaturedFoods(){
  const el = qs('#featuredFoods'); if(!el) return; el.innerHTML = '';
  const items = foodData.slice(0,6);
  items.forEach(f => {
    const card = document.createElement('div'); card.className = 'food-card';
    card.innerHTML = `<img src="${f.image}" alt="${f.alt}"><div class="food-info"><h3>${f.name}</h3><p>${f.description}</p><span class="price">$${f.price.toFixed(2)}</span><button class="add-to-cart" data-id="${f.id}">Add to Cart</button></div>`;
    el.appendChild(card);
  });
  qsa('.add-to-cart').forEach(b => b.addEventListener('click', function(){ addToCart(parseInt(this.dataset.id)); }));
}

// MENU page functions (for menu.html)
function displayMenuFoods(category = 'all') {
    const menuFoods = document.getElementById('menuGrid');
    if (!menuFoods) return;

    menuFoods.innerHTML = '';

    const filteredFoods = category === 'all' 
        ? foodData 
        : foodData.filter(food => food.category === category);

    filteredFoods.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.innerHTML = `
            <img src="${food.image}" alt="${food.alt}">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <span class="price">$${food.price.toFixed(2)}</span>
                <button class="add-to-cart" data-id="${food.id}">Add to Cart</button>
            </div>
        `;
        menuFoods.appendChild(foodCard);
    });

    // Add event listeners
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            addToCart(foodId);
        });
    });
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            displayMenuFoods(category);

            // ripple effect
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 500);
        });
    });
}

/////////////////////////////
// CHECKOUT & BILL PREVIEW (NEW)
/////////////////////////////
// fuction checkout

function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("Please login before checkout.");
        window.location = "login.html";
        return;
    }

    const order = {
        items: [...cart],
        total: parseFloat(document.getElementById("cartTotal").textContent),
        timestamp: new Date().toISOString(),
        user: currentUser.email
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    generateBillPreview(order);

    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}


// Generate bill preview
function generateBillPreview(order) {
    // Create bill content
    let billContent = `
=====================================
          FOODIE DELIGHT
      ORDER RECEIPT & BILL
=====================================

Date: ${new Date(order.timestamp).toLocaleString()}

Items:
-------------------------------------
`;

    order.items.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        billContent += `${item.name}
  Price: $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal}
-------------------------------------
`;
    });

    billContent += `
Total Amount: $${order.total.toFixed(2)}

=====================================
    Thank you for your order!
  Visit us again at Foodie Delight
=====================================
`;

    // Show bill preview modal
    showBillPreview(billContent, order);
}

// Show bill preview modal
function showBillPreview(billContent, order) {
    // Create modal if it doesn't exist
    let billModal = document.getElementById('billModal');
    if (!billModal) {
        billModal = document.createElement('div');
        billModal.id = 'billModal';
        billModal.className = 'cart-modal';
        billModal.innerHTML = `
            <div class="cart-content" style="width: 90%; max-width: 700px;">
                <div class="cart-header">
                    <h2>Order Bill Preview</h2>
                    <span class="close-btn" id="closeBill">&times;</span>
                </div>
                <div class="cart-body" style="padding: 20px;">
                    <div id="billPreview" style="white-space: pre-wrap; font-family: monospace; background: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; max-height: 400px; overflow-y: auto;">
                        <!-- Bill content will be inserted here -->
                    </div>
                    <div class="cart-footer" style="display: flex; gap: 10px; justify-content: center;">
                        <button class="btn-primary" id="downloadTxt" style="background: #28a745;">Download as TXT</button>
                        <button class="btn-primary" id="downloadPdf" style="background: #dc3545;">Download as PDF</button>
                        <button class="btn-primary" id="closeBillBtn">Close</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(billModal);

        // Add event listeners
        document.getElementById('closeBill').addEventListener('click', () => {
            billModal.style.display = 'none';
        });

        document.getElementById('closeBillBtn').addEventListener('click', () => {
            billModal.style.display = 'none';
        });

        document.getElementById('downloadTxt').addEventListener('click', () => {
            downloadBillAsTxt(billContent, order);
        });

        document.getElementById('downloadPdf').addEventListener('click', () => {
            downloadBillAsPdf(billContent, order);
        });

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === billModal) {
                billModal.style.display = 'none';
            }
        });
    }

    // Update bill content
    document.getElementById('billPreview').textContent = billContent;

    // Show modal
    billModal.style.display = 'flex';
}

// Download bill as TXT
function downloadBillAsTxt(billContent, order) {
    const blob = new Blob([billContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `foodie-delight-bill-${new Date(order.timestamp).getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Download bill as PDF (print-friendly)
function downloadBillAsPdf(billContent, order) {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Foodie Delight Bill</title>
            <style>
                body { font-family: monospace; margin: 20px; }
                pre { white-space: pre-wrap; }
            </style>
        </head>
        <body>
            <pre>${billContent}</pre>
            <script>
                window.onload = function() {
                    window.print();
                }
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

/////////////////////////////
// CONTACT (if contact form present)
/////////////////////////////
document.addEventListener('submit', (e) => {
  if (e.target && e.target.id === 'contactForm') {
    e.preventDefault();
    const name = qs('#name').value.trim();
    const email = qs('#email').value.trim();
    const message = qs('#message').value.trim();
    if (!name || !email || !message) { alert('Please fill all fields'); return; }
    const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    messages.push({ name, email, message, timestamp: new Date().toISOString() });
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    e.target.reset();
    alert('Thanks for your message!');
  }
});

/////////////////////////////
// Toast helper
/////////////////////////////
function toast(msg){
  const t = document.createElement('div'); t.style.position='fixed'; t.style.right='20px'; t.style.bottom='20px';
  t.style.background='linear-gradient(90deg,var(--primary),#2a5298)'; t.style.color='white'; t.style.padding='10px 14px';
  t.style.borderRadius='10px'; t.style.boxShadow='0 10px 30px rgba(16,24,40,0.12)'; t.style.zIndex=9999; t.textContent=msg;
  document.body.appendChild(t); setTimeout(()=>{ t.style.opacity=0; setTimeout(()=>t.remove(),400); },2000);
}

/////////////////////////////
// Cart modal wiring & misc
/////////////////////////////
function wireCartModal(){
  const cartLink = qs('#cartLink'); const cartModal = qs('#cartModal'); const closeCart = qs('#closeCart'); if(cartLink){ cartLink.addEventListener('click', (e)=>{ e.preventDefault(); openCart(); }); }
  if (closeCart) closeCart.addEventListener('click', closeCartModal);
  if (qs('#checkoutBtn')) qs('#checkoutBtn').addEventListener('click', checkout);
  window.addEventListener('click', function(event){ if (event.target === cartModal) closeCartModal(); });
}
function openCart(){ const modal = qs('#cartModal'); if(modal){ modal.style.display = 'flex'; } }
function closeCartModal(){ const modal = qs('#cartModal'); if(modal){ modal.style.display = 'none'; } }

/////////////////////////////
// ADMIN helpers (for admin.html)
/////////////////////////////
function renderAdminTables(){
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const contacts = JSON.parse(localStorage.getItem('contactMessages')) || [];
  const ordersT = qs('#ordersTable tbody'); const contactsT = qs('#contactsTable tbody');
  if (ordersT) { ordersT.innerHTML = ''; orders.forEach((o, idx) => {
    const tr = document.createElement('tr'); const items = o.items.map(i=>`${i.name} x ${i.quantity}`).join(', ');
    tr.innerHTML = `<td>${idx+1}</td><td>${o.user||'---'}</td><td>${items}</td><td>$${o.total.toFixed(2)}</td><td>${new Date(o.timestamp).toLocaleString()}</td><td><button class="small-btn ghost" onclick="deleteOrder(${idx})">Delete</button></td>`;
    ordersT.appendChild(tr);
  }); }
  if (contactsT) { contactsT.innerHTML = ''; contacts.forEach((c, idx) => {
    const tr = document.createElement('tr'); tr.innerHTML = `<td>${idx+1}</td><td>${escapeHtml(c.name)}</td><td>${escapeHtml(c.email)}</td><td>${escapeHtml(c.message)}</td><td>${new Date(c.timestamp).toLocaleString()}</td><td><button class="small-btn ghost" onclick="deleteContact(${idx})">Delete</button></td>`;
    contactsT.appendChild(tr);
  }); }
}
function deleteOrder(idx){ const orders = JSON.parse(localStorage.getItem('orders')) || []; orders.splice(idx,1); localStorage.setItem('orders', JSON.stringify(orders)); renderAdminTables(); }
function deleteContact(idx){ const contacts = JSON.parse(localStorage.getItem('contactMessages')) || []; contacts.splice(idx,1); localStorage.setItem('contactMessages', JSON.stringify(contacts)); renderAdminTables(); }
function exportOrdersCSV(){ const orders = JSON.parse(localStorage.getItem('orders')) || []; let csv='User,Items,Total,Date\n'; orders.forEach(o => { const items = o.items.map(i=>`${i.name} x ${i.quantity}`).join('|'); csv += `${o.user||''},"${items}",${o.total},"${new Date(o.timestamp).toLocaleString()}"\n`; }); downloadBlob(csv, `orders-${Date.now()}.csv`); }
function exportContactsCSV(){ const contacts = JSON.parse(localStorage.getItem('contactMessages')) || []; let csv='Name,Email,Message,Date\n'; contacts.forEach(c => { csv += `"${(c.name||'').replace(/"/g,'""')}","${(c.email||'').replace(/"/g,'""')}","${(c.message||'').replace(/"/g,'""')}","${new Date(c.timestamp).toLocaleString()}"\n`; }); downloadBlob(csv, `contacts-${Date.now()}.csv`); }
function downloadBlob(content, filename){ const blob = new Blob([content], { type: 'text/csv' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); }
function escapeHtml(s){ return String(s).replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/////////////////////////////
// Responsive + Animations (hamburger, reveal, add-to-cart pulse)
/////////////////////////////
function initResponsiveAnimations(){
  // MOBILE NAV TOGGLE
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mainNav = document.querySelector('.main-nav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('mobile-open');
      mobileToggle.classList.toggle('open', isOpen);
      if (isOpen) document.body.style.overflow = 'hidden'; else document.body.style.overflow = '';
    });

    document.addEventListener('click', (e) => {
      if (!mainNav.classList.contains('mobile-open')) return;
      if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        mainNav.classList.remove('mobile-open');
        mobileToggle.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // REVEAL ON SCROLL (IntersectionObserver)
  const revealItems = document.querySelectorAll('.reveal, .stagger');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(el => io.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add('visible'));
  }

  // ADD-TO-CART PULSE
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart');
    if (!btn) return;
    btn.classList.remove('add-pulse'); void btn.offsetWidth; btn.classList.add('add-pulse');
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      cartCount.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.18)' }, { transform: 'scale(1)' }], { duration: 400, easing: 'cubic-bezier(.2,.9,.25,1)' });
    }
  });

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

/////////////////////////////
// Expose admin functions globally for inline buttons
/////////////////////////////
window.deleteOrder = deleteOrder;
window.deleteContact = deleteContact;
window.exportOrdersCSV = exportOrdersCSV;
window.exportContactsCSV = exportContactsCSV;
window.renderAdminTables = renderAdminTables;

// Wire checkout button clicks appearing outside main flow
document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'checkoutBtn') checkout();
});


