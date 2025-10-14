# Deployment Guide - Just Makhana Website

## 🚀 Quick Deployment Options

### 1. Static Hosting (Recommended)

#### Netlify
1. Drag and drop the entire folder to [netlify.com/drop](https://netlify.com/drop)
2. Or connect your Git repository for automatic deployments
3. Configure custom domain in Netlify settings

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts for deployment

#### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch (main/master)
4. Site will be available at `username.github.io/repository-name`

### 2. Traditional Web Hosting

#### cPanel/Shared Hosting
1. Compress all files into a ZIP
2. Upload to your hosting provider's file manager
3. Extract files to the public_html directory
4. Update any absolute paths if needed

#### FTP Upload
```bash
# Using FileZilla or similar FTP client
# Upload all files to your web server's root directory
# Ensure proper file permissions (644 for files, 755 for directories)
```

## 🔧 Pre-Deployment Checklist

### 1. Image Optimization
- [ ] Replace placeholder images with actual product photos
- [ ] Optimize images (use WebP format with JPG fallbacks)
- [ ] Compress images to reduce file sizes
- [ ] Ensure all image paths are correct

### 2. Content Updates
- [ ] Update contact information (phone, email, address)
- [ ] Add real product data and pricing
- [ ] Update social media links
- [ ] Customize copy and messaging

### 3. SEO Configuration
- [ ] Update meta titles and descriptions
- [ ] Add Google Analytics tracking code
- [ ] Submit sitemap to Google Search Console
- [ ] Configure robots.txt for your domain

### 4. Performance Optimization
- [ ] Minify CSS and JavaScript files
- [ ] Enable gzip compression on server
- [ ] Set up proper caching headers
- [ ] Test page load speeds

## 🛠️ Production Optimizations

### CSS Minification
```bash
# Using online tools or build processes
# Minify css/styles.css for production
```

### JavaScript Minification
```bash
# Minify js/main.js for production
# Consider using Terser or similar tools
```

### Image Optimization Script
```bash
# Using ImageMagick or similar tools
# Convert images to WebP format
magick input.jpg -quality 80 output.webp
```

## 🔒 Security Considerations

### HTTPS Setup
- Ensure SSL certificate is installed
- Redirect HTTP to HTTPS
- Update any hardcoded HTTP links

### Content Security Policy
Add to your server configuration or HTML head:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; img-src 'self' data:;">
```

## 📊 Analytics & Monitoring

### Google Analytics 4
Add before closing `</head>` tag:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel (Optional)
```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🛒 E-commerce Integration

### Stripe Integration
1. Sign up for Stripe account
2. Get API keys from Stripe dashboard
3. Update checkout functionality in `js/main.js`
4. Implement webhook handling for order processing

### Payment Gateway Setup
```javascript
// Example Stripe integration
const stripe = Stripe('pk_test_your_publishable_key');

// In your checkout function
const {error} = await stripe.redirectToCheckout({
  lineItems: cartItems,
  mode: 'payment',
  successUrl: 'https://yoursite.com/success',
  cancelUrl: 'https://yoursite.com/cancel',
});
```

## 📧 Email Configuration

### Contact Form Backend
Set up a backend service to handle form submissions:
- Netlify Forms (automatic with Netlify hosting)
- Formspree.io
- EmailJS
- Custom PHP/Node.js backend

### Newsletter Integration
- Mailchimp API integration
- ConvertKit setup
- Custom email service

## 🔍 SEO Post-Deployment

### Google Search Console
1. Add and verify your website
2. Submit sitemap.xml
3. Monitor indexing status
4. Check for crawl errors

### Local SEO (if applicable)
- Set up Google My Business
- Add structured data for local business
- Optimize for local keywords

## 📱 PWA Configuration

The website includes basic PWA functionality. To enhance:

1. **Add Web App Manifest**
```json
{
  "name": "Just Makhana",
  "short_name": "JustMakhana",
  "description": "Hand Picked Raw Makhana",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#385a51",
  "theme_color": "#385a51",
  "icons": [
    {
      "src": "/assets/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

2. **Update Service Worker**
- Add more caching strategies
- Implement offline functionality
- Add push notification support

## 🧪 Testing Checklist

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

### Performance Testing
- [ ] Google PageSpeed Insights
- [ ] GTmetrix analysis
- [ ] WebPageTest.org
- [ ] Mobile performance testing

### Accessibility Testing
- [ ] WAVE Web Accessibility Evaluator
- [ ] Lighthouse accessibility audit
- [ ] Keyboard navigation testing
- [ ] Screen reader testing

## 📞 Support & Maintenance

### Regular Updates
- Monitor website performance
- Update content regularly
- Check for broken links
- Update dependencies
- Backup website files

### Monitoring
- Set up uptime monitoring
- Monitor Core Web Vitals
- Track conversion rates
- Monitor error logs

---

**Ready to launch Just Makhana! 🚀**

For technical support during deployment, refer to your hosting provider's documentation or contact their support team.