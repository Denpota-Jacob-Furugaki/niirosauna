# URL Map & Redirects for niiro.win-win.partners

## Current Site Structure (from crawl)
Based on the current site at https://niiro.win-win.partners/, here's the URL mapping:

### Main Pages
| Current URL | New URL | Status | Notes |
|-------------|---------|--------|-------|
| `/` | `/` | ✅ Keep | Homepage |
| `/about` | `/marketing/about` | ✅ Redirect | Company information |
| `/contact` | `/marketing/contact` | ✅ Redirect | Contact form |
| `/services` | `/marketing/services` | ✅ Redirect | Services overview |
| `/products` | `/marketing/products` | ✅ Redirect | Products overview |

### E-commerce Pages (W2 Integration)
| Current URL | New URL | Status | Notes |
|-------------|---------|--------|-------|
| `/store` | `https://niiro.win-win.partners/store` | 🔗 Deep Link | Redirect to W2 store |
| `/store/category/*` | `https://niiro.win-win.partners/store/category/*` | 🔗 Deep Link | Category pages |
| `/store/product/*` | `https://niiro.win-win.partners/store/product/*` | 🔗 Deep Link | Product pages |
| `/cart` | `https://niiro.win-win.partners/cart` | 🔗 Deep Link | Shopping cart |
| `/checkout` | `https://niiro.win-win.partners/checkout` | 🔗 Deep Link | Checkout process |

### Booking Pages (W2 Integration)
| Current URL | New URL | Status | Notes |
|-------------|---------|--------|-------|
| `/booking` | `https://niiro.win-win.partners/booking` | 🔗 Deep Link | Booking system |
| `/appointments` | `https://niiro.win-win.partners/appointments` | 🔗 Deep Link | Appointment booking |

### Members Area (W2 Integration)
| Current URL | New URL | Status | Notes |
|-------------|---------|--------|-------|
| `/members` | `https://niiro.win-win.partners/members` | 🔗 Deep Link | Members portal |
| `/login` | `https://niiro.win-win.partners/login` | 🔗 Deep Link | User login |
| `/register` | `https://niiro.win-win.partners/register` | 🔗 Deep Link | User registration |

## Redirect Strategy
- **Marketing pages**: Move to `/marketing/*` for better organization
- **E-commerce/Booking/Members**: Deep link to W2 system to maintain functionality
- **SEO preservation**: All redirects use 301 status codes
- **Domain strategy**: Use `niiro.win-win.partners` for marketing, W2 subdomain for transactions

## Implementation
- Redirects configured in `next.config.js`
- Deep links use `window.location.href` for seamless transition
- Fallback pages created for core marketing content
