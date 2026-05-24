// =========================================
// PRODUCT & STORIES DATA
// =========================================
const products = [
  { id: 1, name: "Handwoven Kente Scarf", price: 35, image: "https://images.unsplash.com/photo-1598946884667-4ae6dee45d55?w=600", category: "fashion", rating: 4.8, likes: 1240, seller: "Kente Masters", sellerAvatar: "https://ui-avatars.com/api/?name=KM&background=e67e22&color=fff", description: "Authentic Ghanaian kente with vibrant patterns" },
  { id: 2, name: "Smartphone 5G - AfriTech", price: 249, image: "https://images.unsplash.com/photo-1592899677977-9e10cb588be2?w=600", category: "electronics", rating: 4.0, likes: 890, seller: "AfriTech", sellerAvatar: "https://ui-avatars.com/api/?name=AT&background=1e3a5f&color=fff", description: "Latest 5G tech with local warranty" },
  { id: 3, name: "Beaded Wall Decor", price: 45, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600", category: "home", rating: 5.0, likes: 2100, seller: "Maasai Art", sellerAvatar: "https://ui-avatars.com/api/?name=MA&background=10b981&color=fff", description: "Handcrafted Maasai beadwork art" },
  { id: 4, name: "Organic Shea Butter", price: 12, image: "https://images.unsplash.com/photo-1600758208050-a202d5b9c5e4?w=600", category: "beauty", rating: 4.9, likes: 3400, seller: "Pure Glow", sellerAvatar: "https://ui-avatars.com/api/?name=PG&background=f69c0d&color=fff", description: "100% pure, unrefined shea butter" },
  { id: 5, name: "Ankara Dress", price: 55, image: "https://images.unsplash.com/photo-1614252232746-7f558a3eb3dd?w=600", category: "fashion", rating: 4.7, likes: 1500, seller: "AfroChic", sellerAvatar: "https://ui-avatars.com/api/?name=AC&background=c95a0f&color=fff", description: "Premium wax print dress" },
  { id: 6, name: "Carved Wooden Mask", price: 85, image: "https://images.unsplash.com/photo-1564517859771-34533d9ddf12?w=600", category: "arts", rating: 4.6, likes: 950, seller: "Yoruba Arts", sellerAvatar: "https://ui-avatars.com/api/?name=YA&background=333&color=fff", description: "Traditional Yoruba ceremonial mask" },
  { id: 7, name: "Solar Power Bank", price: 29, image: "https://images.unsplash.com/photo-1609592008020-20ab293db2fb?w=600", category: "electronics", rating: 4.2, likes: 2800, seller: "SolarTech", sellerAvatar: "https://ui-avatars.com/api/?name=ST&background=0f0&color=000", description: "20000mAh with solar charging" },
  { id: 8, name: "Handmade Clay Pot", price: 22, image: "https://images.unsplash.com/photo-1610701596007-115022388418?w=600", category: "home", rating: 4.5, likes: 600, seller: "Clay Works", sellerAvatar: "https://ui-avatars.com/api/?name=CW&background=8c7a6b&color=fff", description: "Traditional clay cooking pot" },
];

const stories = [
  { name: "Kente Masters", image: "https://images.unsplash.com/photo-1598946884667-4ae6dee45d55?w=100", hasStory: true },
  { name: "AfriTech", image: "https://images.unsplash.com/photo-1592899677977-9e10cb588be2?w=100", hasStory: true },
  { name: "Maasai Art", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=100", hasStory: true },
  { name: "Pure Glow", image: "https://images.unsplash.com/photo-1600758208050-a202d5b9c5e4?w=100", hasStory: false },
  { name: "AfroChic", image: "https://images.unsplash.com/photo-1614252232746-7f558a3eb3dd?w=100", hasStory: true },
  { name: "Yoruba Arts", image: "https://images.unsplash.com/photo-1564517859771-34533d9ddf12?w=100", hasStory: true },
];

let cartCount = parseInt(localStorage.getItem('cartCount') || '0');
let currentCategory = "all";

// =========================================
// CATEGORIES DATA (Updated with all departments)
// =========================================
const categories = [
  { name: "All", icon: "fa-th-large", key: "all" },
  { name: "Prepared Meals", icon: "fa-utensils", key: "prepared-meals" },
  { name: "Fashion and Apparel", icon: "fa-tshirt", key: "fashion" },
  { name: "Electronics and Gadgets", icon: "fa-mobile-alt", key: "electronics" },
  { name: "Home and Living", icon: "fa-couch", key: "home" },
  { name: "Beauty and Personal Care", icon: "fa-spa", key: "beauty" },
  { name: "Health & Wellness", icon: "fa-heartbeat", key: "health" },
  { name: "Groceries and Food", icon: "fa-shopping-basket", key: "groceries" },
  { name: "Toys and Baby Products", icon: "fa-baby", key: "toys" },
  { name: "Automotive", icon: "fa-car", key: "automotive" },
  { name: "Sports and Outdoors", icon: "fa-futbol", key: "sports" },
  { name: "4IR", icon: "fa-robot", key: "4ir" }
];

// =========================================
// RENDER FUNCTIONS
// =========================================

// 1. Render Social Feed (Most Liked - Fixture 1)
function renderSocialFeed() {
  const container = document.getElementById('socialFeedGrid');
  // Sort by likes descending for "Most Liked"
  const sorted = [...products].sort((a, b) => b.likes - a.likes).slice(0, 4);
  
  container.innerHTML = sorted.map(p => `
    <article class="social-card">
      <div class="social-header">
        <img src="${p.sellerAvatar}" alt="${p.seller}">
        <div class="user-info">
          <span>${p.seller}</span>
          <small>Posted 2h ago</small>
        </div>
        <i class="fas fa-ellipsis-h more"></i>
      </div>
      <div class="social-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="social-actions">
        <div class="social-action" onclick="toggleLike(this)">
          <i class="far fa-heart"></i> <span>${p.likes}</span>
        </div>
        <div class="social-action">
          <i class="far fa-comment"></i> <span>${Math.floor(p.likes * 0.1)}</span>
        </div>
        <div class="social-action" onclick="shareProduct('${p.name}')">
          <i class="far fa-share-alt"></i> <span>Share</span>
        </div>
      </div>
      <div class="social-stats">
        ${p.likes} likes • ${Math.floor(p.likes * 0.1)} comments
      </div>
      <div class="social-caption">
        <strong>${p.seller}</strong> ${p.description} ✨ #AfricanCrafts
      </div>
      <div class="social-product-info">
        <span class="social-price">R ${p.price.toFixed(2)}</span>
        <button class="social-add-btn" onclick="addToCart('${p.name}')">Add to Cart</button>
      </div>
    </article>
  `).join('');
}

// 2. Render Standard Grid (New Arrivals - Fixture 2)
function renderStandardGrid() {
  const container = document.getElementById('productGrid');
  // Sort by ID descending for "Newest"
  const sorted = [...products].sort((a, b) => b.id - a.id).slice(0, 4);
  
  container.innerHTML = sorted.map(p => `
    <div class="product-card">
      <div class="card-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="card-badge">${p.rating}★</div>
        <div class="card-social">
          <button class="social-btn" onclick="toggleLike(this)"><i class="far fa-heart"></i></button>
          <button class="social-btn" onclick="shareProduct('${p.name}')"><i class="far fa-share-alt"></i></button>
        </div>
        <div class="seller-info">
          <img src="${p.sellerAvatar}" alt="${p.seller}">
          <span>${p.seller}</span>
        </div>
      </div>
      <div class="card-details">
        <h3 class="card-title">${p.name}</h3>
        <div class="card-rating">
          ${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 ? '½' : ''}
          <span style="color: var(--text-muted);">(${p.likes} likes)</span>
        </div>
        <div class="card-price">R ${p.price.toFixed(2)}</div>
        <div class="card-actions">
          <button class="btn-cart" onclick="addToCart('${p.name}')">
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// 3. Render Flash Sales (Horizontal Scroll - Fixture 3)
function renderFlashSales() {
  const container = document.getElementById('flashSalesContainer');
  // Random subset with discount for flash sales
  const shuffled = [...products].sort(() => 0.5 - Math.random()).slice(0, 5);
  
  container.innerHTML = shuffled.map(p => {
    const discount = 20 + Math.floor(Math.random() * 30); // 20-50% off
    const salePrice = p.price * (1 - discount/100);
    
    return `
      <div class="flash-card">
        <div class="flash-image">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="flash-details">
          <h3 class="flash-title">${p.name}</h3>
          <div class="flash-price">R ${salePrice.toFixed(2)}</div>
          <div class="flash-original">R ${p.price.toFixed(2)}</div>
          <div class="flash-discount">-${discount}% OFF</div>
          <button class="flash-btn" onclick="addToCart('${p.name}')">
            <i class="fas fa-bolt"></i> Grab Deal
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// 4. Render Stories
function renderStories() {
  const container = document.getElementById('storiesCarousel');
  container.innerHTML = stories.map(s => `
    <div class="story-card">
      <div class="story-ring">
        <div class="story-ring-inner">
          <img src="${s.image}" alt="${s.name}" loading="lazy">
        </div>
      </div>
      <div class="story-name">${s.name}</div>
    </div>
  `).join('');
}

// =========================================
// INTERACTION HANDLERS
// =========================================

window.addToCart = (productName) => {
  cartCount++;
  document.getElementById('cartCount').innerText = cartCount;
  const mobileCartCount = document.getElementById('mobileCartCount');
  if (mobileCartCount) mobileCartCount.innerText = cartCount;
  localStorage.setItem('cartCount', cartCount);
  showToast(`✓ ${productName} added to cart`, 'success');
};

window.toggleLike = (btn) => {
  const icon = btn.querySelector('i');
  const countSpan = btn.querySelector('span');
  
  if (btn.classList.contains('liked')) {
    btn.classList.remove('liked');
    icon.className = 'far fa-heart';
    if (countSpan) countSpan.innerText = parseInt(countSpan.innerText) - 1;
  } else {
    btn.classList.add('liked');
    icon.className = 'fas fa-heart';
    if (countSpan) countSpan.innerText = parseInt(countSpan.innerText) + 1;
    showToast('❤️ Added to your likes', 'success');
  }
};

window.shareProduct = (productName) => {
  if (navigator.share) {
    navigator.share({
      title: productName,
      text: `Check out ${productName} on MAKZAZ!`,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(`Check out ${productName} on MAKZAZ! ${window.location.href}`);
    showToast('🔗 Link copied to clipboard', 'success');
  }
};

function showToast(message, type = '') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  toastMessage.innerText = message;
  toast.className = `toast ${type} show`;
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// =========================================
// FILTERS & SEARCH
// =========================================

document.getElementById('resetFilters')?.addEventListener('click', () => {
  document.getElementById('sortSelect').value = 'Newest';
  document.getElementById('ratingSelect').value = 'All';
  document.getElementById('priceRange').value = 500;
  document.getElementById('priceValue').innerText = 'R500';
  showToast('Filters reset', 'success');
  renderProducts();
});

document.getElementById('priceRange')?.addEventListener('input', (e) => {
  document.getElementById('priceValue').innerText = `R${e.target.value}`;
});

// =========================================
// RENDER CATEGORY TABS (Desktop & Mobile)
// =========================================

function renderCategoryTabs() {
  const container = document.getElementById('categoryTabs');
  const mobileContainer = document.getElementById('mobileCategoriesList');
  
  if (!container || !mobileContainer) return;
  
  // Render desktop tabs
  container.innerHTML = categories.map(cat => `
    <button class="category-tab ${cat.key === 'all' ? 'active' : ''}" data-category="${cat.key}">
      <i class="fas ${cat.icon}"></i> ${cat.name}
    </button>
  `).join('');
  
  // Render mobile menu categories
  mobileContainer.innerHTML = categories.map(cat => `
    <a href="#" class="mobile-menu-link category-link" data-category="${cat.key}">
      <i class="fas ${cat.icon}"></i> ${cat.name}
    </a>
  `).join('');
  
  // Add event listeners to desktop tabs
  container.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      
      // Sync mobile menu active state
      mobileContainer.querySelectorAll('.category-link').forEach(link => {
        link.classList.toggle('active', link.dataset.category === currentCategory);
      });
      
      renderProducts();
      showToast(`Showing ${tab.innerText.trim()} category`, 'success');
    });
  });
  
  // Add event listeners to mobile category links
  mobileContainer.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.dataset.category;
      currentCategory = category;
      
      // Sync desktop tabs active state
      container.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
      });
      
      // Update mobile menu active state
      mobileContainer.querySelectorAll('.category-link').forEach(l => {
        l.classList.toggle('active', l.dataset.category === category);
      });
      
      renderProducts();
      closeMobileMenu();
      showToast(`Showing ${link.innerText.trim()} category`, 'success');
    });
  });
}

// Search Functionality
document.getElementById('searchInput')?.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  if (term.length > 2) {
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(term) || 
      p.seller.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term)
    );
    const grid = document.getElementById('productGrid');
    if (filtered.length === 0) {
      grid.innerHTML = '<div style="text-align: center; padding: 50px; grid-column: 1/-1;"><i class="fas fa-search" style="font-size: 40px; color: var(--text-muted); margin-bottom: 15px;"></i><p>No products found 😢</p></div>';
    } else {
      // Re-render with filtered products
      renderProducts(filtered);
    }
  } else if (term.length === 0) {
    renderProducts();
  }
});

// =========================================
// MOBILE MENU FUNCTIONALITY
// =========================================

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const categoryLinks = document.querySelectorAll('.category-link');

// Open mobile menu
mobileMenuBtn?.addEventListener('click', () => {
  mobileMenuOverlay.classList.add('active');
  mobileMenuDrawer.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close mobile menu
function closeMobileMenu() {
  mobileMenuOverlay.classList.remove('active');
  mobileMenuDrawer.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

mobileMenuClose?.addEventListener('click', closeMobileMenu);
mobileMenuOverlay?.addEventListener('click', closeMobileMenu);

// Category links in mobile menu
categoryLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const category = link.getAttribute('data-category');
    
    // Update active state
    categoryLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    // Update main category tabs
    currentCategory = category;
    document.querySelectorAll('.category-tab').forEach(tab => {
      tab.classList.remove('active');
      if (tab.innerText.toLowerCase() === category || 
          (category === 'all' && tab.innerText === 'All')) {
        tab.classList.add('active');
      }
    });
    
    // Render products with new category
    renderProducts();
    showToast(`Showing ${link.innerText} category`, 'success');
    
    // Close menu after selection
    closeMobileMenu();
  });
});

// Mobile theme toggle
mobileThemeToggle?.addEventListener('click', (e) => {
  e.preventDefault();
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  
  // Update icons in both toggles
  const desktopIcon = themeToggle?.querySelector('i');
  const mobileIcon = mobileThemeToggle.querySelector('i');
  const iconClass = isDark ? 'fas fa-moon' : 'fas fa-sun';
  
  if (desktopIcon) desktopIcon.className = iconClass;
  if (mobileIcon) mobileIcon.className = iconClass;
  
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  showToast(`Switched to ${isDark ? 'light' : 'dark'} mode`, 'success');
});

// =========================================
// THEME & INITIALIZATION
// =========================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle?.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  
  // Update icons in both toggles
  const desktopIcon = themeToggle.querySelector('i');
  const mobileIcon = mobileThemeToggle?.querySelector('i');
  const iconClass = isDark ? 'fas fa-moon' : 'fas fa-sun';
  
  if (desktopIcon) desktopIcon.className = iconClass;
  if (mobileIcon) mobileIcon.className = iconClass;
  
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  showToast(`Switched to ${isDark ? 'light' : 'dark'} mode`, 'success');
});

// Load saved preferences
const savedCart = localStorage.getItem('cartCount');
if (savedCart) {
  cartCount = parseInt(savedCart);
  document.getElementById('cartCount').innerText = cartCount;
  const mobileCartCount = document.getElementById('mobileCartCount');
  if (mobileCartCount) mobileCartCount.innerText = cartCount;
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
  const isDark = savedTheme === 'dark';
  const desktopIcon = themeToggle?.querySelector('i');
  const mobileIcon = mobileThemeToggle?.querySelector('i');
  const iconClass = isDark ? 'fas fa-sun' : 'fas fa-moon';
  
  if (desktopIcon) desktopIcon.className = iconClass;
  if (mobileIcon) mobileIcon.className = iconClass;
}

// Main render function (for standard grid)
function renderProducts(filteredProducts = null) {
  const container = document.getElementById('productGrid');
  let productsToRender = filteredProducts || products;
  
  // Apply category filter
  if (currentCategory !== "all") {
    productsToRender = productsToRender.filter(p => p.category === currentCategory);
  }
  
  container.innerHTML = productsToRender.map(p => `
    <div class="product-card">
      <div class="card-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="card-badge">${p.rating}★</div>
        <div class="card-social">
          <button class="social-btn" onclick="toggleLike(this)"><i class="far fa-heart"></i></button>
          <button class="social-btn" onclick="shareProduct('${p.name}')"><i class="far fa-share-alt"></i></button>
        </div>
        <div class="seller-info">
          <img src="${p.sellerAvatar}" alt="${p.seller}">
          <span>${p.seller}</span>
        </div>
      </div>
      <div class="card-details">
        <h3 class="card-title">${p.name}</h3>
        <div class="card-rating">
          ${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 ? '½' : ''}
          <span style="color: var(--text-muted);">(${p.likes} likes)</span>
        </div>
        <div class="card-price">R ${p.price.toFixed(2)}</div>
        <div class="card-actions">
          <button class="btn-cart" onclick="addToCart('${p.name}')">
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryTabs();  // Render category tabs (desktop & mobile)
  renderSocialFeed();    // Fixture 1: Social Feed (Most Liked)
  renderStandardGrid();  // Fixture 2: Standard Grid (New Arrivals)
  renderFlashSales();    // Fixture 3: Flash Sales (Horizontal Scroll)
  renderStories();       // Stories Carousel
  
  // Welcome toast
  setTimeout(() => showToast('👋 Welcome to MAKZAZ! Explore authentic African products', 'success'), 1000);
});

// ============================================
// HERO SLIDER FUNCTIONALITY
// ============================================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const sliderDots = document.getElementById('sliderDots');

// Initialize slider dots
if (sliderDots && slides.length > 0) {
  sliderDots.innerHTML = Array.from(slides).map((_, i) => 
    `<span class="slider-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></span>`
  ).join('');
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (sliderDots) {
      sliderDots.children[i]?.classList.remove('active');
    }
  });
  
  if (slides[index]) {
    slides[index].classList.add('active');
    if (sliderDots) {
      sliderDots.children[index]?.classList.add('active');
    }
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Auto-advance slider every 5 seconds
if (slides.length > 0) {
  setInterval(nextSlide, 5000);
}

// ============================================
// LOCATION FUNCTIONALITY
// ============================================
const locationBtn = document.querySelector('.location-btn');
const userLocationEl = document.getElementById('userLocation');

if (locationBtn && userLocationEl) {
  locationBtn.addEventListener('click', () => {
    const cities = ['New York', 'London', 'Lagos', 'Johannesburg', 'Nairobi', 'Accra', 'Cairo', 'Dubai'];
    const currentCity = userLocationEl.textContent;
    const currentIndex = cities.indexOf(currentCity);
    const nextCity = cities[(currentIndex + 1) % cities.length];
    userLocationEl.textContent = nextCity;
    showToast(`📍 Location changed to ${nextCity}`, 'success');
  });
}

// Set random location on load
if (userLocationEl) {
  const randomCities = ['New York', 'London', 'Lagos', 'Johannesburg', 'Nairobi'];
  userLocationEl.textContent = randomCities[Math.floor(Math.random() * randomCities.length)];
}
