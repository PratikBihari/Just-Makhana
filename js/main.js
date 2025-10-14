// Just Makhana - Main JavaScript
class JustMakhanaApp {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('justMakhanaCart')) || [];
    this.products = this.getProducts();
    this.currentTestimonial = 0;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateCartUI();
    this.startTestimonialSlider();
    this.setupSmoothScrolling();
    this.setupAnimations();
  }

  getProducts() {
    return [
      {
        id: 1,
        name: 'Premium Raw Makhana',
        category: 'raw',
        price: 299,
        weight: '250g',
        image: './assets/raw-makhana-250g.svg',
        description: 'Pure, unprocessed fox nuts directly from Bihar farms',
        nutrition: 'High protein, low fat, rich in calcium and magnesium'
      },
      {
        id: 2,
        name: 'Raw Makhana Family Pack',
        category: 'raw',
        price: 549,
        weight: '500g',
        image: './assets/raw-makhana-500g.svg',
        description: 'Perfect for families who love healthy snacking',
        nutrition: 'High protein, low fat, rich in calcium and magnesium'
      },
      {
        id: 3,
        name: 'Lightly Roasted Makhana',
        category: 'roasted',
        price: 349,
        weight: '250g',
        image: './assets/roasted-makhana-250g.svg',
        description: 'Perfectly roasted for extra crunch and flavor',
        nutrition: 'Enhanced taste, same nutritional benefits'
      },
      {
        id: 4,
        name: 'Himalayan Salt Makhana',
        category: 'flavored',
        price: 399,
        weight: '200g',
        image: './assets/salt-makhana.svg',
        description: 'Seasoned with pure Himalayan pink salt',
        nutrition: 'Natural minerals from Himalayan salt'
      },
      {
        id: 5,
        name: 'Turmeric Spiced Makhana',
        category: 'flavored',
        price: 399,
        weight: '200g',
        image: './assets/turmeric-makhana.svg',
        description: 'Anti-inflammatory turmeric with aromatic spices',
        nutrition: 'Curcumin benefits with protein power'
      },
      {
        id: 6,
        name: 'Chaat Masala Makhana',
        category: 'flavored',
        price: 399,
        weight: '200g',
        image: './assets/chaat-makhana.svg',
        description: 'Tangy chaat masala for the perfect evening snack',
        nutrition: 'Digestive spices with healthy crunch'
      }
    ];
  }

  setupEventListeners() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', 
          navToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
        );
      });
    }

    // Cart button
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
      cartBtn.addEventListener('click', () => this.openCartModal());
    }

    // Modal close buttons
    document.querySelectorAll('.modal__close').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.closeModal(e.target.closest('.modal'));
      });
    });

    // Modal backdrop click
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeModal(modal);
        }
      });
    });

    // Forms
    this.setupForms();

    // Product filters
    this.setupProductFilters();

    // Keyboard navigation
    this.setupKeyboardNavigation();
  }

  setupForms() {
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        this.showNotification('Thank you for subscribing! Welcome to Just Makhana family.', 'success');
        e.target.reset();
      });
    }

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        e.target.reset();
      });
    }
  }

  setupProductFilters() {
    const weightFilter = document.getElementById('weight-filter');
    const priceFilter = document.getElementById('price-filter');

    if (weightFilter) {
      weightFilter.addEventListener('change', () => this.filterProducts());
    }
    if (priceFilter) {
      priceFilter.addEventListener('change', () => this.filterProducts());
    }
  }

  setupKeyboardNavigation() {
    // Escape key to close modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
          this.closeModal(activeModal);
        }
      }
    });
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  setupAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements with fade-up animation
    document.querySelectorAll('[data-aos="fade-up"]').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  showProducts(category) {
    const productsSection = document.getElementById('products-section');
    const productsGrid = document.getElementById('products-grid');
    
    if (!productsSection || !productsGrid) return;

    // Filter products by category
    const filteredProducts = category === 'all' 
      ? this.products 
      : this.products.filter(product => product.category === category);

    // Generate product HTML
    productsGrid.innerHTML = filteredProducts.map(product => `
      <div class="product-card" data-product-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" loading="lazy" 
             onerror="this.src='./assets/placeholder-product.svg'">
        <div class="product-card__content">
          <h3>${product.name}</h3>
          <div class="product-card__price">₹${product.price}</div>
          <p>${product.description}</p>
          <div class="product-card__actions">
            <button class="btn btn--outline" onclick="app.showProductDetails(${product.id})">
              View Details
            </button>
            <button class="btn btn--primary" onclick="app.addToCart(${product.id})">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Show products section
    productsSection.style.display = 'block';
    productsSection.scrollIntoView({ behavior: 'smooth' });
  }

  filterProducts() {
    const weightFilter = document.getElementById('weight-filter');
    const priceFilter = document.getElementById('price-filter');
    const productsGrid = document.getElementById('products-grid');

    if (!productsGrid) return;

    const weightValue = weightFilter?.value || '';
    const priceValue = priceFilter?.value || '';

    let filteredProducts = [...this.products];

    // Filter by weight
    if (weightValue) {
      filteredProducts = filteredProducts.filter(product => 
        product.weight === weightValue
      );
    }

    // Filter by price
    if (priceValue) {
      const [min, max] = priceValue.split('-').map(p => parseInt(p) || Infinity);
      filteredProducts = filteredProducts.filter(product => {
        if (priceValue === '500+') return product.price >= 500;
        return product.price >= min && product.price <= max;
      });
    }

    // Update grid
    productsGrid.innerHTML = filteredProducts.map(product => `
      <div class="product-card" data-product-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" loading="lazy"
             onerror="this.src='./assets/placeholder-product.svg'">
        <div class="product-card__content">
          <h3>${product.name}</h3>
          <div class="product-card__price">₹${product.price}</div>
          <p>${product.description}</p>
          <div class="product-card__actions">
            <button class="btn btn--outline" onclick="app.showProductDetails(${product.id})">
              View Details
            </button>
            <button class="btn btn--primary" onclick="app.addToCart(${product.id})">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  showProductDetails(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const title = document.getElementById('product-title');
    const details = document.getElementById('product-details');

    title.textContent = product.name;
    details.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
        <div>
          <img src="${product.image}" alt="${product.name}" 
               style="width: 100%; border-radius: 12px; margin-bottom: 1rem;"
               onerror="this.src='./assets/placeholder-product.svg'">
        </div>
        <div>
          <div style="font-size: 1.5rem; font-weight: 600; color: var(--secondary-green); margin-bottom: 1rem;">
            ₹${product.price}
          </div>
          <div style="margin-bottom: 1rem;">
            <strong>Weight:</strong> ${product.weight}
          </div>
          <div style="margin-bottom: 1rem;">
            <strong>Description:</strong><br>
            ${product.description}
          </div>
          <div style="margin-bottom: 2rem;">
            <strong>Nutrition:</strong><br>
            ${product.nutrition}
          </div>
          <div style="display: flex; gap: 1rem;">
            <button class="btn btn--primary" onclick="app.addToCart(${product.id}); app.closeModal(document.getElementById('product-modal'))">
              Add to Cart
            </button>
            <button class="btn btn--secondary" onclick="app.addToCart(${product.id}); app.closeModal(document.getElementById('product-modal')); app.openCartModal()">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    `;

    this.openModal(modal);
  }

  addToCart(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = this.cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.saveCart();
    this.updateCartUI();
    this.showNotification(`${product.name} added to cart!`, 'success');
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    this.updateCartUI();
    this.updateCartModal();
  }

  updateQuantity(productId, change) {
    const item = this.cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
      this.removeFromCart(productId);
    } else {
      this.saveCart();
      this.updateCartUI();
      this.updateCartModal();
    }
  }

  saveCart() {
    localStorage.setItem('justMakhanaCart', JSON.stringify(this.cart));
  }

  updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = totalItems;
    }
  }

  openCartModal() {
    const modal = document.getElementById('cart-modal');
    this.updateCartModal();
    this.openModal(modal);
  }

  updateCartModal() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (!cartItems) return;

    if (this.cart.length === 0) {
      cartItems.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
      cartTotal.textContent = '0';
      checkoutBtn.disabled = true;
      return;
    }

    const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartItems.innerHTML = this.cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" 
             onerror="this.src='./assets/placeholder-product.svg'">
        <div class="cart-item__info">
          <div class="cart-item__name">${item.name}</div>
          <div class="cart-item__price">₹${item.price} × ${item.quantity}</div>
        </div>
        <div class="cart-item__quantity">
          <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, -1)" aria-label="Decrease quantity">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
        </div>
        <button onclick="app.removeFromCart(${item.id})" style="color: var(--text-light); padding: 0.5rem;" aria-label="Remove item">×</button>
      </div>
    `).join('');

    cartTotal.textContent = total;
    checkoutBtn.disabled = false;

    // Setup checkout button
    checkoutBtn.onclick = () => this.proceedToCheckout();
  }

  proceedToCheckout() {
    // Simulate checkout process
    this.showNotification('Redirecting to secure checkout...', 'info');
    
    // In a real app, this would redirect to Stripe/payment gateway
    setTimeout(() => {
      this.showNotification('Thank you for your order! You will receive a confirmation email shortly.', 'success');
      this.cart = [];
      this.saveCart();
      this.updateCartUI();
      this.closeModal(document.getElementById('cart-modal'));
    }, 2000);
  }

  openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    
    // Focus management
    const firstFocusable = modal.querySelector('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }

  closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  startTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonials__dots .dot');
    
    if (testimonials.length === 0) return;

    setInterval(() => {
      this.currentTestimonial = (this.currentTestimonial + 1) % testimonials.length;
      this.showTestimonial(this.currentTestimonial);
    }, 5000);
  }

  showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonials__dots .dot');

    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    this.currentTestimonial = index;
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--primary-green);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.2);
      z-index: 3000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      max-width: 300px;
    `;

    if (type === 'success') {
      notification.style.background = 'var(--secondary-green)';
    } else if (type === 'error') {
      notification.style.background = '#e74c3c';
    }

    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 4 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 4000);
  }
}

// Global functions for onclick handlers
window.showProducts = (category) => window.app.showProducts(category);
window.showTestimonial = (index) => window.app.showTestimonial(index);

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new JustMakhanaApp();
});

// Service Worker Registration for PWA capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}