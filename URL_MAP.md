# URL Map & Redirects for niiro.win-win.partners

## Current Site Structure (Updated Implementation)
Based on the new code-based implementation, here's the URL mapping:

### Main Pages
| Current URL | New URL | Status | Notes |
|-------------|---------|--------|-------|
| `/` | `/` | ✅ Keep | Homepage with banners and products |
| `/about` | `/marketing/about` | ✅ Redirect | Company information |
| `/contact` | `/marketing/contact` | ✅ Redirect | Contact form |
| `/services` | `/marketing/services` | ✅ Redirect | Services overview |
| `/products` | `/products` | ✅ Keep | Products listing page (e-commerce) |

### E-commerce Pages (Internal System)
| Current URL | New URL | Status | Notes |
|-------------|---------|--------|-------|
| `/products` | `/products` | ✅ Keep | Product listing with search/filter |
| `/products/[slug]` | `/products/[slug]` | ✅ Keep | Individual product pages |
| `/cart` | `/cart` | ✅ Keep | Shopping cart page |
| `/checkout` | `/checkout` | ✅ Keep | Checkout process |
| `/order-success` | `/order-success` | ✅ Keep | Order confirmation page |

### Marketing Pages
| Current URL | New URL | Status | Notes |
|-------------|---------|--------|-------|
| `/marketing/about` | `/marketing/about` | ✅ Keep | About page |
| `/marketing/services` | `/marketing/services` | ✅ Keep | Services page |
| `/marketing/contact` | `/marketing/contact` | ✅ Keep | Contact page |
| `/marketing/products` | `/products` | ✅ Redirect | Redirect to main products page |

### Removed W2 Dependencies
| Old W2 URL | New Internal URL | Status | Notes |
|------------|------------------|--------|-------|
| `https://niiro.win-win.partners/store` | `/products` | ✅ Replaced | Now uses internal e-commerce |
| `https://niiro.win-win.partners/cart` | `/cart` | ✅ Replaced | Internal shopping cart |
| `https://niiro.win-win.partners/checkout` | `/checkout` | ✅ Replaced | Internal checkout system |
| `https://niiro.win-win.partners/booking` | `/marketing/contact` | ✅ Replaced | Contact form for bookings |
| `https://niiro.win-win.partners/login` | `/login` | ✅ Replaced | Internal login system |
| `https://niiro.win-win.partners/register` | `/register` | ✅ Replaced | Internal registration |

## Redirect Strategy
- **Marketing pages**: Organized under `/marketing/*` for better structure
- **E-commerce**: Fully internal system with no external dependencies
- **SEO preservation**: All redirects use 301 status codes
- **Domain strategy**: Single domain with internal routing
- **No W2 integration**: Complete independence from external systems

## Implementation
- **Redirects configured** in `next.config.js`
- **Internal routing** for all e-commerce functionality
- **Shopping cart** with persistent storage (Zustand)
- **Checkout process** with form validation
- **Product management** with real product images
- **SNS integration** with Instagram, X, and YouTube links

## Features Implemented
- ✅ **Homepage** with banners and featured products
- ✅ **Product listing** with search, filter, and sort
- ✅ **Individual product pages** with galleries and specifications
- ✅ **Shopping cart** with add/remove/update functionality
- ✅ **Checkout process** with contact and payment forms
- ✅ **Order confirmation** with success page
- ✅ **Marketing pages** (About, Services, Contact)
- ✅ **SNS integration** with social media links
- ✅ **Mobile responsive** design
- ✅ **Professional UI** matching Revitalize SAUNA style

## Product Categories
- **Sauna Equipment** (7 products): Heaters, benches, doors, lighting, stones, thermometers, buckets
- **Wellness Products** (2 products): Essential oils, towels
- **Accessories** (3 products): Various sauna accessories

## Technical Stack
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for components
- **Zustand** for state management
- **Vercel** for hosting