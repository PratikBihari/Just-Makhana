# Just Makhana Component Library

## Brand Colors
```css
--primary-green: #385a51    /* Primary header/CTA accent */
--secondary-green: #66a86d  /* Secondary actions */
--accent-green-1: #8ec484   /* Light accents */
--accent-green-2: #a7d384   /* Lighter accents */
--accent-green-3: #b6d89b   /* Lightest accents */
--neutral-cream: #eae8cf    /* Background/neutral */
```

## Typography
- **Logo Font**: El Messiri (700 weight)
- **Headings**: El Messiri (400, 500, 600, 700)
- **Body Text**: Montserrat (300, 400, 500, 600, 700)

## Components

### Buttons
```html
<!-- Primary Button -->
<button class="btn btn--primary">Shop Raw Makhana</button>

<!-- Secondary Button -->
<button class="btn btn--secondary">Learn Our Story</button>

<!-- Outline Button -->
<button class="btn btn--outline">View Details</button>

<!-- Full Width Button -->
<button class="btn btn--primary btn--full">Proceed to Checkout</button>
```

### Cards
```html
<!-- Category Card -->
<div class="category-card">
  <img src="image.jpg" alt="Description">
  <h3>Card Title</h3>
  <p>Card description</p>
  <button class="btn btn--outline">Action</button>
</div>

<!-- Product Card -->
<div class="product-card">
  <img src="product.jpg" alt="Product name">
  <div class="product-card__content">
    <h3>Product Name</h3>
    <div class="product-card__price">₹299</div>
    <p>Product description</p>
    <div class="product-card__actions">
      <button class="btn btn--outline">View Details</button>
      <button class="btn btn--primary">Add to Cart</button>
    </div>
  </div>
</div>
```

### Hero Section
```html
<section class="hero">
  <div class="container">
    <div class="hero__content">
      <h2 class="hero__title">Just Makhana — Hand Picked Raw Makhana</h2>
      <p class="hero__subtitle">Naturally crisp. Farm-sourced. Hand-picked.</p>
      <div class="hero__actions">
        <a href="#shop" class="btn btn--primary">Shop Raw Makhana</a>
        <a href="#about" class="btn btn--secondary">Learn Our Story</a>
      </div>
    </div>
    <div class="hero__image">
      <img src="hero-image.jpg" alt="Hero image">
    </div>
  </div>
</section>
```

### Modal
```html
<div class="modal" id="modal-id">
  <div class="modal__content">
    <div class="modal__header">
      <h2>Modal Title</h2>
      <button class="modal__close">&times;</button>
    </div>
    <div class="modal__body">
      Modal content goes here
    </div>
    <div class="modal__footer">
      <button class="btn btn--primary">Action</button>
    </div>
  </div>
</div>
```

### Forms
```html
<form class="contact__form">
  <input type="text" placeholder="Your Name" required>
  <input type="email" placeholder="Your Email" required>
  <select required>
    <option value="">Select Option</option>
    <option value="general">General Question</option>
  </select>
  <textarea placeholder="Your Message" rows="5" required></textarea>
  <button type="submit" class="btn btn--primary">Send Message</button>
</form>
```

## Copy Snippets

### Hero Section
- **Title**: "Just Makhana — Hand Picked Raw Makhana"
- **Subtitle**: "Naturally crisp. Farm-sourced. Hand-picked."
- **Primary CTA**: "Shop Raw Makhana"
- **Secondary CTA**: "Learn Our Story"

### Product Categories
- **Raw Makhana**: "Pure, unprocessed fox nuts"
- **Roasted Makhana**: "Lightly roasted for extra crunch"
- **Flavored Varieties**: "Natural spices and seasonings"

### Sustainability
- **Badge Text**: "100% Sustainable Sourcing"
- **Story**: "From the pristine wetlands of Bihar to your table, every makhana is carefully hand-picked by local farmers who have perfected this art for generations."

## Usage Guidelines

1. **Colors**: Always use the exact brand colors defined in CSS variables
2. **Typography**: Maintain font hierarchy - El Messiri for headings, Montserrat for body
3. **Spacing**: Use CSS custom properties for consistent spacing
4. **Accessibility**: Include proper ARIA labels and keyboard navigation
5. **Responsive**: All components are mobile-first responsive
6. **Performance**: Images should be optimized WebP format when possible

## Animation Classes
- `data-aos="fade-up"` - Fade in from bottom
- `data-aos-delay="100"` - Add delay to animations
- Hover effects are built into components automatically