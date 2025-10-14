# Just Makhana - Premium E-commerce Website

A modern, responsive e-commerce website for "Just Makhana" - hand-picked raw makhana brand, built with vanilla HTML, CSS, and JavaScript following exact brand guidelines.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Brand Compliant**: Exact color palette (#385a51, #66a86d, #8ec484, #a7d384, #b6d89b, #eae8cf)
- **Typography**: El Messiri for headings, Montserrat for body text
- **E-commerce Ready**: Shopping cart, product filters, checkout flow
- **Accessibility**: WCAG compliant with keyboard navigation and ARIA labels
- **Performance**: Optimized images, lazy loading, service worker caching
- **SEO Optimized**: Meta tags, sitemap, structured data

## 🚀 Quick Start

1. **Clone or download** the project files
2. **Open `index.html`** in a web browser
3. **For development**: Use a local server (Live Server, Python's http.server, etc.)

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

## 📁 Project Structure

```
Just Makhana/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Complete CSS with brand colors
├── js/
│   └── main.js            # Interactive functionality
├── assets/                # Images and media files
├── components.md          # Component library documentation
├── robots.txt            # SEO robots file
├── sitemap.xml           # XML sitemap
├── sw.js                 # Service worker for PWA
└── README.md             # This file
```

## 🎨 Brand Guidelines

### Colors
- **Primary Green**: `#385a51` - Headers, CTAs, primary elements
- **Secondary Green**: `#66a86d` - Secondary actions, accents
- **Accent Greens**: `#8ec484`, `#a7d384`, `#b6d89b` - Light accents
- **Neutral Cream**: `#eae8cf` - Backgrounds, neutral elements

### Typography
- **Logo**: El Messiri 700
- **Headings**: El Messiri 400-700
- **Body Text**: Montserrat 300-700

### Logo Usage
- Main logo: "Just Makhana" with tagline "HAND PICKED RAW MAKHANA"
- Compact version for mobile navigation
- Always maintain proper spacing and contrast

## 🛍️ E-commerce Features

### Shopping Cart
- Local storage persistence
- Add/remove items
- Quantity management
- Real-time total calculation

### Product Management
- Category filtering (Raw, Roasted, Flavored)
- Weight and price filters
- Product detail modals
- Responsive product grid

### Checkout Process
- Cart review
- Stripe-ready integration points
- Order confirmation flow

## 📱 Pages & Sections

1. **Homepage**
   - Hero with brand messaging
   - Product categories
   - Our story teaser
   - Testimonials slider
   - Newsletter signup

2. **Shop**
   - Product grid with filters
   - Category navigation
   - Product detail modals

3. **About/Our Story**
   - Sourcing information
   - Farmer partnerships
   - Sustainability messaging

4. **Recipes & Tips**
   - Recipe cards
   - Nutritional information
   - Downloadable guides

5. **Contact**
   - Contact form
   - Business information
   - Wholesale inquiries

## 🔧 Customization

### Adding Products
Edit the `getProducts()` method in `js/main.js`:

```javascript
{
  id: 7,
  name: 'New Product Name',
  category: 'raw', // raw, roasted, flavored
  price: 399,
  weight: '250g',
  image: './assets/new-product.jpg',
  description: 'Product description',
  nutrition: 'Nutritional information'
}
```

### Modifying Colors
Update CSS custom properties in `css/styles.css`:

```css
:root {
  --primary-green: #385a51;
  --secondary-green: #66a86d;
  /* Add your custom colors */
}
```

### Adding New Sections
1. Add HTML structure following existing patterns
2. Include appropriate CSS classes
3. Add JavaScript functionality if needed
4. Update navigation links

## 🚀 Performance Optimization

- **Images**: Use WebP format, include fallbacks
- **CSS**: Minify for production
- **JavaScript**: Minify and consider code splitting
- **Fonts**: Preload critical fonts
- **Caching**: Service worker handles offline functionality

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Focus management in modals

## 📈 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph
- Structured data markup
- XML sitemap
- Robots.txt
- Fast loading times

## 🔌 Integration Ready

### Payment Processing
- Stripe integration points in checkout flow
- WooCommerce/Shopify template structure
- Order management hooks

### Analytics
- Google Analytics ready
- Event tracking setup
- Conversion tracking points

### Email Marketing
- Newsletter signup integration
- Customer communication templates
- Automated email triggers

## 🛠️ Development

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Dependencies
- No external JavaScript libraries
- Google Fonts (El Messiri, Montserrat)
- Modern CSS features (Grid, Flexbox, Custom Properties)

## 📄 License

This project is created for Just Makhana brand. All brand assets and content are proprietary.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**Built with ❤️ for Just Makhana - Hand Picked Raw Makhana**