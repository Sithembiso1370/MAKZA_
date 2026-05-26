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

// Sidebar Drawer - Event Delegation Pattern
const sidebar = cacheElement('sidebar');
const sidebarBackdrop = cacheElement('sidebarBackdrop');

function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('visible');
}

// Single event listener on document for sidebar controls
document.addEventListener('click', (e) => {
    const target = e.target;
    
    if (target.id === 'menuToggle' || target.closest('#menuToggle')) {
        e.preventDefault();
        if (sidebar) sidebar.classList.add('open');
        if (sidebarBackdrop) sidebarBackdrop.classList.add('visible');
    } else if (target.id === 'sidebarClose' || target.id === 'sidebarBackdrop') {
        closeSidebar();
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

// Stories Data (Blog/Twitter Style) - Lazy loading enabled - Using Picsum to avoid CORS
const stories = [
    { name: 'Nike', img: 'https://picsum.photos/200/200?random=1' },
    { name: 'Adidas', img: 'https://picsum.photos/200/200?random=2' },
    { name: 'Apple', img: 'https://picsum.photos/200/200?random=3' },
    { name: 'Samsung', img: 'https://picsum.photos/200/200?random=4' },
    { name: 'Zara', img: 'https://picsum.photos/200/200?random=5' },
    { name: 'H&M', img: 'https://picsum.photos/200/200?random=6' },
    { name: 'IKEA', img: 'https://picsum.photos/200/200?random=7' },
    { name: 'McDonalds', img: 'https://picsum.photos/200/200?random=8' },
    { name: 'KFC', img: 'https://picsum.photos/200/200?random=9' },
    { name: 'Sony', img: 'https://picsum.photos/200/200?random=10' }
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
            <div class="story-ring">
                <div class="story-avatar">
                    <img src="${story.img}" alt="${story.name}" loading="lazy">
                </div>
            </div>
            <span class="story-name">${story.name}</span>
        `;
        fragment.appendChild(storyEl);
    });
    container.appendChild(fragment);
}

// Products Data - Optimized with lazy loading and efficient rendering - Using Picsum to avoid CORS
const products = [
    { id: 1, title: 'Wireless Headphones', brand: 'Sony', price: 99.99, originalPrice: 149.99, rating: 4.5, image: 'https://picsum.photos/400/400?random=1', badge: 'SALE' },
    { id: 2, title: 'Smart Watch Pro', brand: 'Apple', price: 299.99, originalPrice: 399.99, rating: 4.8, image: 'https://picsum.photos/400/400?random=2', badge: 'NEW' },
    { id: 3, title: 'Running Shoes', brand: 'Nike', price: 89.99, originalPrice: 129.99, rating: 4.6, image: 'https://picsum.photos/400/400?random=3', badge: '' },
    { id: 4, title: 'Laptop Stand', brand: 'Generic', price: 39.99, originalPrice: 59.99, rating: 4.3, image: 'https://picsum.photos/400/400?random=4', badge: 'HOT' },
    { id: 5, title: 'Bluetooth Speaker', brand: 'JBL', price: 79.99, originalPrice: 99.99, rating: 4.7, image: 'https://picsum.photos/400/400?random=5', badge: '' },
    { id: 6, title: 'Gaming Mouse', brand: 'Logitech', price: 59.99, originalPrice: 79.99, rating: 4.5, image: 'https://picsum.photos/400/400?random=6', badge: 'SALE' },
    { id: 7, title: 'Phone Case', brand: 'OtterBox', price: 29.99, originalPrice: 39.99, rating: 4.4, image: 'https://picsum.photos/400/400?random=7', badge: '' },
    { id: 8, title: 'USB-C Hub', brand: 'Anker', price: 49.99, originalPrice: 69.99, rating: 4.6, image: 'https://picsum.photos/400/400?random=8', badge: 'NEW' }
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

// Back to Top Button
const backToTopBtn = cacheElement('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Toast Notification Function
function showToast(message, type = 'info') {
    const toast = cacheElement('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Mobile Menu Button (alternative trigger)
const mobileMenuBtn = cacheElement('mobileMenuBtn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        const sidebar = cacheElement('sidebar');
        const sidebarBackdrop = cacheElement('sidebarBackdrop');
        if (sidebar) sidebar.classList.add('open');
        if (sidebarBackdrop) sidebarBackdrop.classList.add('visible');
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
