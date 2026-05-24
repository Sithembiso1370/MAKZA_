# MAKZAZ E-Commerce Navigation Guide

## How to Navigate All Pages

### 🏠 Main Entry Point
Open `index.html` in your browser to start from the homepage.

---

## 📱 From Homepage (index.html)

### Header Navigation
- **Location Icon** - User location (placeholder)
- **Messages Icon** - Messages with badge (3)
- **Cart Icon** - Goes to `pages/cart.html`
- **Theme Toggle** - Switch between light/dark mode

### Search Bar
- Type and click search → Goes to `pages/search.html`

### Mobile Bottom Nav
- **Home** - Stays on homepage
- **Search** - `pages/search.html`
- **Stories** - Scrolls to stories section
- **Account** - `pages/login.html`
- **Cart** - `pages/cart.html`

### Footer Links

#### Shop Section
- Fashion → `pages/category.html?cat=fashion`
- Electronics → `pages/category.html?cat=electronics`
- Home → `pages/category.html?cat=home`
- Beauty → `pages/category.html?cat=beauty`
- Arts → `pages/category.html?cat=arts`
- Fast Food → `pages/fast-food.html`

#### Account Section
- Login → `pages/login.html`
- Sign Up → `pages/signup.html`
- Cart → `pages/cart.html`
- Checkout → `pages/checkout.html`

#### Support Section
- FAQ → `pages/faq.html`
- Terms & Conditions → `pages/terms.html`
- Search → `pages/search.html`

#### Admin Section
- Dashboard → `pages/admin/dashboard.html`
- Products → `pages/admin/products.html`
- Orders → `pages/admin/orders.html`
- Customers → `pages/admin/customers.html`
- Suppliers → `pages/admin/suppliers.html`
- Staff → `pages/admin/staff.html`
- Carts → `pages/admin/carts.html`

---

## 🛍️ Customer Pages Navigation

### Product Page (`pages/product.html`)
- Breadcrumb links back to Home/Category
- "You May Also Like" products link to other products
- Footer has full navigation

### Cart Page (`pages/cart.html`)
- "Proceed to Checkout" button → `pages/checkout.html`
- Footer navigation available

### Checkout Page (`pages/checkout.html`)
- Order confirmation would go back to home
- Footer navigation available

### Category Page (`pages/category.html`)
- Filter by category via URL params
- Product links go to product page
- Add to cart goes to cart page

### Brand Page (`pages/brand.html`)
- Shows products by brand
- Links to product pages

### Fast Food Page (`pages/fast-food.html`)
- Specialized category page
- Links to product pages

### Search Page (`pages/search.html`)
- Search results display
- Links to relevant products

### Login/Signup Pages
- Login form submits → redirects to `index.html`
- Link between login ↔ signup
- Social login buttons (placeholders)

### FAQ Page (`pages/faq.html`)
- Accordion-style FAQs
- Footer navigation

### Terms Page (`pages/terms.html`)
- Full terms content
- Footer navigation

---

## 🔧 Admin Pages Navigation

All admin pages have a sidebar navigation:

### Sidebar Links (on all admin pages)
- Dashboard → `dashboard.html`
- Products → `products.html`
- Orders → `orders.html`
- Customers → `customers.html`
- Suppliers → `suppliers.html`
- Staff → `staff.html`
- Carts → `carts.html`
- Back to Site → `../../index.html`

### Admin Dashboard (`admin/dashboard.html`)
- Stats overview
- Recent orders table
- "View All" links to respective pages

### Admin Products (`admin/products.html`)
- Full CRUD interface (frontend only)
- Add, Edit, Delete products
- No backend API calls

### Admin Orders (`admin/orders.html`)
- Orders by status: Received, Processed, Delivering, Delivered
- Status change buttons
- Order details view

### Admin Customers/Suppliers/Staff
- Table views with actions
- Add/Edit/Delete functionality (frontend mock)

### Admin Carts (`admin/carts.html`)
- View all active carts
- Cart details

---

## 🔄 Quick Navigation Paths

### Shopping Flow
```
Homepage → Category → Product → Cart → Checkout
```

### Admin Flow
```
Homepage → Footer: Admin → Dashboard → Any Admin Page
```

### Account Flow
```
Homepage → Login/Signup → Account Actions
```

### Support Flow
```
Any Page → Footer: FAQ/Terms → Read Content
```

---

## 📋 Complete Page List

### Customer-Facing (12 pages)
1. `/index.html` - Homepage
2. `/pages/product.html` - Product Details
3. `/pages/brand.html` - Brand Page
4. `/pages/category.html` - Category Page
5. `/pages/cart.html` - Shopping Cart
6. `/pages/checkout.html` - Checkout
7. `/pages/search.html` - Search Results
8. `/pages/fast-food.html` - Fast Food Category
9. `/pages/login.html` - Login
10. `/pages/signup.html` - Sign Up
11. `/pages/faq.html` - FAQ
12. `/pages/terms.html` - Terms & Conditions

### Admin Pages (7 pages)
13. `/pages/admin/dashboard.html` - Admin Dashboard
14. `/pages/admin/products.html` - Product CRUD
15. `/pages/admin/orders.html` - Order Management
16. `/pages/admin/customers.html` - Customer Management
17. `/pages/admin/suppliers.html` - Supplier Management
18. `/pages/admin/staff.html` - Staff Management
19. `/pages/admin/carts.html` - Cart Management

**Total: 19 HTML Pages**

---

## 💡 Tips

1. **No Authentication Required** - All pages are accessible without login
2. **No Backend** - All data is mocked in JavaScript
3. **Responsive** - Works on mobile and desktop
4. **Dark Mode** - Toggle available on all pages
5. **Footer Navigation** - Every page has footer with main links
6. **Mobile Menu** - Hamburger menu on mobile for full navigation
