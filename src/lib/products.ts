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

// Updated categories based on actual products
export const categories: Category[] = [
  {
    id: "sauna-equipment",
    name: "Sauna Equipment",
    slug: "sauna-equipment",
    description: "Professional sauna equipment and accessories",
    productCount: 7,
  },
  {
    id: "wellness-products",
    name: "Wellness Products",
    slug: "wellness-products", 
    description: "Health and wellness products",
    productCount: 2,
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    description: "Various accessories and add-ons",
    productCount: 3,
  },
];

// Updated products with actual sauna and product images
export const products: Product[] = [
  {
    id: "sauna-001",
    name: "Premium Sauna Heater",
    description: "High-performance electric sauna heater with digital controls and safety features. Perfect for home and commercial saunas. Features quick heating, energy efficiency, and durable construction.",
    shortDescription: "High-performance electric sauna heater with digital controls",
    price: 899.99,
    originalPrice: 1099.99,
    currency: "USD",
    category: "sauna-equipment",
    subcategory: "heaters",
    images: [
      "/images/products/0/saunaop1_LL.jpg",
      "/images/products/0/saunaop1_L.jpg",
      "/images/products/0/saunaop1_M.jpg",
    ],
    thumbnail: "/images/products/0/saunaop1_L.jpg",
    inStock: true,
    stockQuantity: 15,
    sku: "SAUNA-HEAT-001",
    tags: ["sauna", "heater", "electric", "digital", "premium"],
    specifications: {
      "Power": "9kW",
      "Voltage": "240V",
      "Heating Time": "15-20 minutes",
      "Temperature Range": "40-100°C",
      "Warranty": "2 years",
      "Material": "Stainless Steel"
    },
    slug: "premium-sauna-heater",
    featured: true,
    newArrival: false,
    onSale: true,
  },
  {
    id: "sauna-002",
    name: "Cedar Sauna Bench Set",
    description: "Beautiful handcrafted cedar sauna benches with ergonomic design. Made from premium Western Red Cedar, naturally resistant to moisture and heat. Includes upper and lower bench configurations.",
    shortDescription: "Handcrafted cedar sauna benches with ergonomic design",
    price: 649.99,
    currency: "USD",
    category: "sauna-equipment",
    subcategory: "furniture",
    images: [
      "/images/products/0/saunaop2_LL.jpg",
      "/images/products/0/saunaop2_L.jpg",
      "/images/products/0/saunaop2_M.jpg",
    ],
    thumbnail: "/images/products/0/saunaop2_L.jpg",
    inStock: true,
    stockQuantity: 8,
    sku: "SAUNA-BENCH-002",
    tags: ["sauna", "cedar", "bench", "furniture", "handcrafted"],
    specifications: {
      "Material": "Western Red Cedar",
      "Finish": "Natural",
      "Dimensions": "72\" x 18\" x 16\"",
      "Weight Capacity": "300 lbs",
      "Assembly": "Required",
      "Warranty": "1 year"
    },
    slug: "cedar-sauna-bench-set",
    featured: true,
    newArrival: true,
    onSale: false,
  },
  {
    id: "sauna-003",
    name: "Sauna Door with Glass Panel",
    description: "Premium sauna door featuring tempered glass panel and cedar frame. Includes magnetic closure and heat-resistant seals. Available in multiple sizes to fit standard sauna openings.",
    shortDescription: "Premium sauna door with tempered glass panel",
    price: 449.99,
    currency: "USD",
    category: "sauna-equipment",
    subcategory: "doors",
    images: [
      "/images/products/0/saunaop3_LL.jpg",
      "/images/products/0/saunaop3_L.jpg",
      "/images/products/0/saunaop3_M.jpg",
    ],
    thumbnail: "/images/products/0/saunaop3_L.jpg",
    inStock: true,
    stockQuantity: 12,
    sku: "SAUNA-DOOR-003",
    tags: ["sauna", "door", "glass", "cedar", "premium"],
    specifications: {
      "Material": "Cedar Frame, Tempered Glass",
      "Standard Size": "24\" x 78\"",
      "Glass Thickness": "6mm",
      "Hardware": "Stainless Steel",
      "Installation": "Required",
      "Warranty": "1 year"
    },
    slug: "sauna-door-glass-panel",
    featured: false,
    newArrival: false,
    onSale: false,
  },
  {
    id: "sauna-004",
    name: "Sauna Lighting Kit",
    description: "LED lighting system designed specifically for saunas. Waterproof and heat-resistant with warm white light. Includes multiple fixtures and dimmer control for perfect ambiance.",
    shortDescription: "Waterproof LED lighting system for saunas",
    price: 199.99,
    currency: "USD",
    category: "sauna-equipment",
    subcategory: "lighting",
    images: [
      "/images/products/0/saunaop4_LL.jpg",
      "/images/products/0/saunaop4_L.jpg",
      "/images/products/0/saunaop4_M.jpg",
    ],
    thumbnail: "/images/products/0/saunaop4_L.jpg",
    inStock: true,
    stockQuantity: 20,
    sku: "SAUNA-LIGHT-004",
    tags: ["sauna", "lighting", "led", "waterproof", "dimmable"],
    specifications: {
      "Light Type": "LED",
      "Color Temperature": "3000K",
      "Waterproof Rating": "IP65",
      "Max Temperature": "60°C",
      "Power": "12V DC",
      "Included": "4 fixtures, dimmer, transformer"
    },
    slug: "sauna-lighting-kit",
    featured: false,
    newArrival: true,
    onSale: false,
  },
  {
    id: "sauna-005",
    name: "Sauna Stones Set",
    description: "Premium volcanic sauna stones for optimal heat retention and steam generation. Hand-selected for durability and heat distribution. Perfect for traditional sauna experiences.",
    shortDescription: "Premium volcanic sauna stones for heat retention",
    price: 89.99,
    currency: "USD",
    category: "sauna-equipment",
    subcategory: "accessories",
    images: [
      "/images/products/0/saunaop5_LL.jpg",
      "/images/products/0/saunaop5_L.jpg",
      "/images/products/0/saunaop5_M.jpg",
    ],
    thumbnail: "/images/products/0/saunaop5_L.jpg",
    inStock: true,
    stockQuantity: 25,
    sku: "SAUNA-STONES-005",
    tags: ["sauna", "stones", "volcanic", "heat", "steam"],
    specifications: {
      "Material": "Volcanic Rock",
      "Quantity": "50 stones",
      "Size Range": "2-4 inches",
      "Weight": "25 lbs",
      "Heat Retention": "Excellent",
      "Steam Generation": "High"
    },
    slug: "sauna-stones-set",
    featured: false,
    newArrival: false,
    onSale: false,
  },
  {
    id: "sauna-006",
    name: "Sauna Thermometer & Hygrometer",
    description: "Digital sauna thermometer and hygrometer combo with large, easy-to-read display. Waterproof design with magnetic mounting. Monitors both temperature and humidity levels.",
    shortDescription: "Digital thermometer and hygrometer for sauna monitoring",
    price: 79.99,
    currency: "USD",
    category: "sauna-equipment",
    subcategory: "accessories",
    images: [
      "/images/products/0/saunaop6_LL.jpg",
      "/images/products/0/saunaop6_L.jpg",
      "/images/products/0/saunaop6_M.jpg",
    ],
    thumbnail: "/images/products/0/saunaop6_L.jpg",
    inStock: true,
    stockQuantity: 18,
    sku: "SAUNA-THERM-006",
    tags: ["sauna", "thermometer", "hygrometer", "digital", "monitoring"],
    specifications: {
      "Display": "Digital LCD",
      "Temperature Range": "0-120°C",
      "Humidity Range": "0-100% RH",
      "Accuracy": "±1°C, ±3% RH",
      "Power": "Battery (included)",
      "Mounting": "Magnetic"
    },
    slug: "sauna-thermometer-hygrometer",
    featured: false,
    newArrival: false,
    onSale: false,
  },
  {
    id: "sauna-007",
    name: "Sauna Bucket & Ladle Set",
    description: "Traditional wooden sauna bucket and ladle set for water pouring. Made from premium cedar with natural finish. Essential for creating steam and maintaining sauna humidity.",
    shortDescription: "Traditional wooden sauna bucket and ladle set",
    price: 129.99,
    currency: "USD",
    category: "sauna-equipment",
    subcategory: "accessories",
    images: [
      "/images/products/0/saunaop7_LL.jpg",
      "/images/products/0/saunaop7_L.jpg",
      "/images/products/0/saunaop7_M.jpg",
    ],
    thumbnail: "/images/products/0/saunaop7_L.jpg",
    inStock: true,
    stockQuantity: 14,
    sku: "SAUNA-BUCKET-007",
    tags: ["sauna", "bucket", "ladle", "cedar", "traditional"],
    specifications: {
      "Material": "Cedar Wood",
      "Bucket Capacity": "2 gallons",
      "Ladle Length": "18 inches",
      "Finish": "Natural",
      "Assembly": "None required",
      "Warranty": "1 year"
    },
    slug: "sauna-bucket-ladle-set",
    featured: false,
    newArrival: false,
    onSale: false,
  },
  {
    id: "wellness-001",
    name: "Aromatherapy Essential Oils Set",
    description: "Premium collection of essential oils specifically selected for sauna and wellness use. Includes eucalyptus, lavender, peppermint, and tea tree oils. Natural and therapeutic grade.",
    shortDescription: "Premium essential oils set for sauna and wellness",
    price: 59.99,
    currency: "USD",
    category: "wellness-products",
    subcategory: "aromatherapy",
    images: [
      "/images/products/0/001_LL.jpg",
      "/images/products/0/001_L.jpg",
      "/images/products/0/001_M.jpg",
    ],
    thumbnail: "/images/products/0/001_L.jpg",
    inStock: true,
    stockQuantity: 30,
    sku: "WELLNESS-OILS-001",
    tags: ["wellness", "essential-oils", "aromatherapy", "natural", "therapeutic"],
    specifications: {
      "Oils Included": "Eucalyptus, Lavender, Peppermint, Tea Tree",
      "Volume": "10ml each",
      "Grade": "Therapeutic",
      "Origin": "Natural",
      "Packaging": "Glass bottles",
      "Shelf Life": "3 years"
    },
    slug: "aromatherapy-essential-oils-set",
    featured: true,
    newArrival: false,
    onSale: false,
  },
  {
    id: "wellness-002",
    name: "Sauna Towel Set",
    description: "Luxurious cotton sauna towel set including large body towel and head wrap. Ultra-absorbent and quick-drying. Perfect for sauna sessions and post-sauna relaxation.",
    shortDescription: "Luxurious cotton sauna towel set",
    price: 89.99,
    currency: "USD",
    category: "wellness-products",
    subcategory: "towels",
    images: [
      "/images/products/0/002_LL.jpg",
      "/images/products/0/002_L.jpg",
      "/images/products/0/002_M.jpg",
    ],
    thumbnail: "/images/products/0/002_L.jpg",
    inStock: true,
    stockQuantity: 22,
    sku: "WELLNESS-TOWEL-002",
    tags: ["wellness", "towels", "cotton", "sauna", "luxury"],
    specifications: {
      "Material": "100% Cotton",
      "Set Includes": "Body towel (72\"x36\"), Head wrap (24\"x24\")",
      "Weight": "400 GSM",
      "Care": "Machine washable",
      "Color": "White",
      "Packaging": "Gift box"
    },
    slug: "sauna-towel-set",
    featured: false,
    newArrival: true,
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