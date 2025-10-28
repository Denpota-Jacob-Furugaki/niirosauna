export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  currency: string;
  category: string;
  subcategory?: string;
  images: string[];
  thumbnail: string;
  inStock: boolean;
  stockQuantity?: number;
  sku: string;
  tags: string[];
  specifications?: Record<string, string>;
  relatedProducts?: string[];
  slug: string;
  featured: boolean;
  newArrival: boolean;
  onSale: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
  productCount: number;
}

// Sample product data - replace with actual products from your W2 system
export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    slug: "electronics",
    description: "Electronic devices and accessories",
    productCount: 15,
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories", 
    description: "Various accessories and add-ons",
    productCount: 8,
  },
  {
    id: "home-garden",
    name: "Home & Garden",
    slug: "home-garden",
    description: "Home improvement and garden products",
    productCount: 12,
  },
  {
    id: "health-beauty",
    name: "Health & Beauty",
    slug: "health-beauty",
    description: "Health and beauty products",
    productCount: 6,
  },
];

export const products: Product[] = [
  {
    id: "prod-001",
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation, perfect for music lovers and professionals. Features 30-hour battery life, quick charge, and premium sound quality.",
    shortDescription: "Wireless headphones with noise cancellation",
    price: 199.99,
    originalPrice: 249.99,
    currency: "USD",
    category: "electronics",
    subcategory: "audio",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800",
    ],
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    inStock: true,
    stockQuantity: 25,
    sku: "WH-001",
    tags: ["wireless", "noise-cancellation", "premium", "audio"],
    specifications: {
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "250g",
      "Color": "Black"
    },
    slug: "premium-wireless-headphones",
    featured: true,
    newArrival: false,
    onSale: true,
  },
  {
    id: "prod-002",
    name: "Smart Fitness Tracker",
    description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and waterproof design. Perfect for athletes and health-conscious individuals.",
    shortDescription: "Advanced fitness tracker with heart rate monitoring",
    price: 149.99,
    currency: "USD",
    category: "health-beauty",
    subcategory: "fitness",
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800",
    ],
    thumbnail: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
    inStock: true,
    stockQuantity: 18,
    sku: "FT-002",
    tags: ["fitness", "health", "tracker", "waterproof"],
    specifications: {
      "Display": "1.4 inch AMOLED",
      "Battery Life": "7 days",
      "Water Resistance": "5ATM",
      "Sensors": "Heart rate, GPS, Accelerometer",
      "Compatibility": "iOS & Android"
    },
    slug: "smart-fitness-tracker",
    featured: true,
    newArrival: true,
    onSale: false,
  },
  {
    id: "prod-003",
    name: "Ergonomic Office Chair",
    description: "Comfortable ergonomic office chair designed for long work sessions. Features adjustable height, lumbar support, and breathable mesh back.",
    shortDescription: "Ergonomic office chair with lumbar support",
    price: 299.99,
    currency: "USD",
    category: "home-garden",
    subcategory: "furniture",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1592078615290-033f1fed7469?w=800",
    ],
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    inStock: true,
    stockQuantity: 12,
    sku: "OC-003",
    tags: ["ergonomic", "office", "chair", "comfortable"],
    specifications: {
      "Material": "Mesh & Foam",
      "Weight Capacity": "300 lbs",
      "Adjustable Height": "Yes",
      "Lumbar Support": "Yes",
      "Warranty": "5 years"
    },
    slug: "ergonomic-office-chair",
    featured: false,
    newArrival: false,
    onSale: false,
  },
  {
    id: "prod-004",
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor activities and home entertainment.",
    shortDescription: "Portable waterproof Bluetooth speaker",
    price: 79.99,
    originalPrice: 99.99,
    currency: "USD",
    category: "electronics",
    subcategory: "audio",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800",
    ],
    thumbnail: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    inStock: true,
    stockQuantity: 30,
    sku: "BS-004",
    tags: ["bluetooth", "speaker", "portable", "waterproof"],
    specifications: {
      "Battery Life": "12 hours",
      "Connectivity": "Bluetooth 5.0",
      "Water Resistance": "IPX7",
      "Range": "30 feet",
      "Charging": "USB-C"
    },
    slug: "bluetooth-speaker",
    featured: false,
    newArrival: false,
    onSale: true,
  },
  {
    id: "prod-005",
    name: "LED Desk Lamp",
    description: "Modern LED desk lamp with adjustable brightness and color temperature. Features USB charging port and touch controls.",
    shortDescription: "Adjustable LED desk lamp with USB charging",
    price: 59.99,
    currency: "USD",
    category: "home-garden",
    subcategory: "lighting",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800",
    ],
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    inStock: true,
    stockQuantity: 22,
    sku: "DL-005",
    tags: ["led", "lamp", "desk", "adjustable"],
    specifications: {
      "Brightness": "5 levels",
      "Color Temperature": "3000K-6500K",
      "USB Port": "Yes",
      "Touch Control": "Yes",
      "Power": "USB-C"
    },
    slug: "led-desk-lamp",
    featured: false,
    newArrival: true,
    onSale: false,
  },
  {
    id: "prod-006",
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and non-slip surface.",
    shortDescription: "Fast wireless charging pad for Qi devices",
    price: 39.99,
    currency: "USD",
    category: "accessories",
    subcategory: "charging",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800",
      "https://images.unsplash.com/photo-1601972602288-d1c1b7b1b0b5?w=800",
    ],
    thumbnail: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    inStock: true,
    stockQuantity: 35,
    sku: "WCP-006",
    tags: ["wireless", "charging", "qi", "fast"],
    specifications: {
      "Power Output": "15W",
      "Compatibility": "Qi-enabled devices",
      "LED Indicator": "Yes",
      "Material": "Silicone",
      "Cable Length": "1.5m"
    },
    slug: "wireless-charging-pad",
    featured: false,
    newArrival: false,
    onSale: false,
  },
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(product => product.category === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getNewArrivals(): Product[] {
  return products.filter(product => product.newArrival);
}

export function getOnSaleProducts(): Product[] {
  return products.filter(product => product.onSale);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getRelatedProducts(productId: string, limit: number = 4): Product[] {
  const product = products.find(p => p.id === productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}
