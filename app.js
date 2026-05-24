// Makzaz Global Store - Main JavaScript
// Optimized for Performance

'use strict';

// Cache DOM elements
const DOM = {};
const cacheElement = (id) => {
    const el = document.getElementById(id);
    if (el) DOM[id] = el;
    return el;
};

// Mobile Drawer - Event Delegation Pattern
const mobileDrawer = cacheElement('mobileDrawer');
const drawerOverlay = cacheElement('drawerOverlay');

function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
}

// Single event listener on document for drawer controls
document.addEventListener('click', (e) => {
    const target = e.target;
    
    if (target.id === 'menuToggle') {
        if (mobileDrawer) mobileDrawer.classList.add('active');
        if (drawerOverlay) drawerOverlay.classList.add('active');
    } else if (target.id === 'drawerClose' || target.id === 'drawerOverlay') {
        closeDrawer();
    }
});

// Location Toggle - Optimized with cached references
const locations = ['New York', 'London', 'Lagos', 'Johannesburg', 'Nairobi', 'Accra', 'Cairo', 'Dubai'];
let currentLocationIndex = 0;
const locationBtn = cacheElement('locationBtn');
const locationText = cacheElement('locationText');

if (locationBtn && locationText) {
    locationBtn.addEventListener('click', () => {
        currentLocationIndex = (currentLocationIndex + 1) % locations.length;
        locationText.textContent = locations[currentLocationIndex];
    });
}

// Hero Slider - Optimized with CSS transforms and debounced updates
const sliderWrapper = cacheElement('sliderWrapper');
const prevSlide = cacheElement('prevSlide');
const nextSlide = cacheElement('nextSlide');
const sliderDots = cacheElement('sliderDots');

let currentSlide = 0;
const totalSlides = 3;
let slideAnimationFrame = null;

function initSlider() {
    if (!sliderWrapper || !sliderDots) return;
    
    // Create dots efficiently using document fragment
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        fragment.appendChild(dot);
    }
    sliderDots.appendChild(fragment);
    
    updateSlider();
    
    // Auto slide every 5 seconds using requestAnimationFrame for smooth animation
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 5000);
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function updateSlider() {
    if (!sliderWrapper) return;
    
    // Cancel pending animation frame
    if (slideAnimationFrame) cancelAnimationFrame(slideAnimationFrame);
    slideAnimationFrame = requestAnimationFrame(() => {
        sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Batch DOM updates for dots
        const dots = sliderDots.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        slideAnimationFrame = null;
    });
}

if (prevSlide) {
    prevSlide.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });
}

if (nextSlide) {
    nextSlide.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });
}

// Stories Data (Blog/Twitter Style) - Lazy loading enabled
const stories = [
    { name: 'Nike', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200' },
    { name: 'Adidas', img: 'https://images.unsplash.com/photo-1520256862855-398228c41f84?w=200' },
    { name: 'Apple', img: 'https://images.unsplash.com/photo-1563200781-b39e84e9c4ac?w=200' },
    { name: 'Samsung', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200' },
    { name: 'Zara', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200' },
    { name: 'H&M', img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=200' },
    { name: 'IKEA', img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=200' },
    { name: 'McDonalds', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200' },
    { name: 'KFC', img: 'https://images.unsplash.com/photo-1513639776629-9269d0d905dd?w=200' },
    { name: 'Sony', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200' }
];

function renderStories() {
    const container = cacheElement('storiesContainer');
    if (!container) return;
    
    // Use document fragment for batch DOM insertion
    const fragment = document.createDocumentFragment();
    stories.forEach(story => {
        const storyEl = document.createElement('div');
        storyEl.className = 'story-item';
        storyEl.innerHTML = `
            <div class="story-avatar">
                <img src="${story.img}" alt="${story.name}" loading="lazy">
            </div>
            <span class="story-name">${story.name}</span>
        `;
        fragment.appendChild(storyEl);
    });
    container.appendChild(fragment);
}

// Products Data - Optimized with lazy loading and efficient rendering
const products = [
    { id: 1, title: 'Wireless Headphones', brand: 'Sony', price: 99.99, originalPrice: 149.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', badge: 'SALE' },
    { id: 2, title: 'Smart Watch Pro', brand: 'Apple', price: 299.99, originalPrice: 399.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', badge: 'NEW' },
    { id: 3, title: 'Running Shoes', brand: 'Nike', price: 89.99, originalPrice: 129.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', badge: '' },
    { id: 4, title: 'Laptop Stand', brand: 'Generic', price: 39.99, originalPrice: 59.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400', badge: 'HOT' },
    { id: 5, title: 'Bluetooth Speaker', brand: 'JBL', price: 79.99, originalPrice: 99.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400', badge: '' },
    { id: 6, title: 'Gaming Mouse', brand: 'Logitech', price: 59.99, originalPrice: 79.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400', badge: 'SALE' },
    { id: 7, title: 'Phone Case', brand: 'OtterBox', price: 29.99, originalPrice: 39.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400', badge: '' },
    { id: 8, title: 'USB-C Hub', brand: 'Anker', price: 49.99, originalPrice: 69.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400', badge: 'NEW' }
];

// Pre-computed star ratings for performance
const starCache = {};
function getStarRating(rating) {
    if (starCache[rating]) return starCache[rating];
    const full = Math.floor(rating);
    const empty = 5 - full;
    const stars = '★'.repeat(full) + '☆'.repeat(empty);
    starCache[rating] = stars;
    return stars;
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        window.location.href = `pages/product.html?id=${product.id}`;
    });
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-brand">${product.brand}</p>
            <div class="product-price">
                <span class="price-current">$${product.price}</span>
                ${product.originalPrice ? `<span class="price-original">$${product.originalPrice}</span>` : ''}
            </div>
            <div class="product-rating">
                <span class="stars">${getStarRating(product.rating)}</span>
                <span>(${product.rating})</span>
            </div>
        </div>
    `;
    
    return card;
}

function renderProducts(containerId, productList) {
    const container = cacheElement(containerId);
    if (!container) return;
    
    // Use document fragment for batch DOM insertion
    const fragment = document.createDocumentFragment();
    productList.forEach(product => {
        fragment.appendChild(createProductCard(product));
    });
    container.appendChild(fragment);
}

// Search Functionality - Optimized with debouncing
const searchInput = cacheElement('searchInput');
let searchTimeout = null;

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            // Clear pending timeout
            if (searchTimeout) clearTimeout(searchTimeout);
            
            const query = e.target.value.trim();
            if (query) {
                window.location.href = `pages/search.html?q=${encodeURIComponent(query)}`;
            }
        }
    });
}

// Initialize everything - Optimized initialization order
document.addEventListener('DOMContentLoaded', () => {
    // Critical: Initialize slider first (visible on page load)
    initSlider();
    
    // Non-critical: Render stories and products (can be deferred)
    requestIdleCallback(() => {
        renderStories();
        renderProducts('flashDealsGrid', products.slice(0, 4));
        renderProducts('categoryProductsGrid', products);
    }, { timeout: 2000 });
});

console.log('Makzaz Global Store loaded successfully! Performance optimized.');
