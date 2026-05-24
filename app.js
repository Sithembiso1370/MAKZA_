// Makzaz Global Store - Main JavaScript

// Page Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('pageLoader').classList.add('hidden');
    }, 800);
});

// Mobile Drawer
const menuToggle = document.getElementById('menuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose = document.getElementById('drawerClose');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mobileDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
    });
}

if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
}

if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
}

function closeDrawer() {
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
}

// Location Toggle
const locations = ['New York', 'London', 'Lagos', 'Johannesburg', 'Nairobi', 'Accra', 'Cairo', 'Dubai'];
let currentLocationIndex = 0;
const locationBtn = document.getElementById('locationBtn');
const locationText = document.getElementById('locationText');

if (locationBtn && locationText) {
    locationBtn.addEventListener('click', () => {
        currentLocationIndex = (currentLocationIndex + 1) % locations.length;
        locationText.textContent = locations[currentLocationIndex];
    });
}

// Hero Slider
const sliderWrapper = document.getElementById('sliderWrapper');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
const sliderDots = document.getElementById('sliderDots');

let currentSlide = 0;
const totalSlides = 3;

function initSlider() {
    if (!sliderWrapper) return;
    
    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        sliderDots.appendChild(dot);
    }
    
    updateSlider();
    
    // Auto slide every 5 seconds
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
    
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
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

// Stories Data (Blog/Twitter Style)
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
    const container = document.getElementById('storiesContainer');
    if (!container) return;
    
    container.innerHTML = stories.map(story => `
        <div class="story-item">
            <div class="story-avatar">
                <img src="${story.img}" alt="${story.name}">
            </div>
            <span class="story-name">${story.name}</span>
        </div>
    `).join('');
}

// Products Data
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

function createProductCard(product) {
    return `
        <div class="product-card" onclick="window.location.href='pages/product.html?id=${product.id}'">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
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
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
                    <span>(${product.rating})</span>
                </div>
            </div>
        </div>
    `;
}

function renderProducts(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = productList.map(createProductCard).join('');
}

// Search Functionality
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = e.target.value;
            if (query) {
                window.location.href = `pages/search.html?q=${encodeURIComponent(query)}`;
            }
        }
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    renderStories();
    renderProducts('flashDealsGrid', products.slice(0, 4));
    renderProducts('categoryProductsGrid', products);
});

console.log('Makzaz Global Store loaded successfully!');
