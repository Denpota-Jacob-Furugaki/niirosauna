"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { products, categories, searchProducts, getFeaturedProducts, getNewArrivals, getOnSaleProducts } from "@/lib/products";
import { useCartStore } from "@/lib/cart";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { addItem, getTotalItems } = useCartStore();

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = searchProducts(searchQuery);
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        case "newest":
          return b.newArrival ? 1 : -1;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-slate-900">
                Niiro
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/marketing/about" className="text-slate-600 hover:text-slate-900">
                About
              </Link>
              <Link href="/marketing/services" className="text-slate-600 hover:text-slate-900">
                Services
              </Link>
              <Link href="/products" className="text-slate-900 font-medium">
                Products
              </Link>
              <Link href="/marketing/contact" className="text-slate-600 hover:text-slate-900">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="outline" asChild className="relative">
                <Link href="/cart">
                  🛒 Cart ({getTotalItems()})
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Sauna Equipment
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Discover our carefully curated selection of professional sauna equipment, 
              wellness products, and accessories designed for the ultimate sauna experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#products">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
                <Link href="#categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-slate-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Search Products
                </label>
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.productCount})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                >
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>

              {/* View Mode */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  View
                </label>
                <div className="flex space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    List
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
            >
              All Products ({products.length})
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedCategory("featured")}
            >
              ⭐ Featured ({getFeaturedProducts().length})
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedCategory("new")}
            >
              🆕 New Arrivals ({getNewArrivals().length})
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedCategory("sale")}
            >
              🔥 On Sale ({getOnSaleProducts().length})
            </Button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <main id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {selectedCategory === "all" ? "All Products" : 
             selectedCategory === "featured" ? "Featured Products" :
             selectedCategory === "new" ? "New Arrivals" :
             selectedCategory === "sale" ? "On Sale" :
             categories.find(c => c.id === selectedCategory)?.name || "Products"}
          </h2>
          <p className="text-slate-600">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <div className={viewMode === "grid" 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          : "space-y-6"
        }>
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="relative overflow-hidden">
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.newArrival && (
                    <Badge className="bg-green-500 text-white px-3 py-1">
                      🆕 New
                    </Badge>
                  )}
                  {product.onSale && (
                    <Badge className="bg-red-500 text-white px-3 py-1">
                      🔥 Sale
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge className="bg-gray-500 text-white px-3 py-1">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    {categories.find(c => c.id === product.category)?.name}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-xl text-slate-900 group-hover:text-slate-600 transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-slate-900">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-slate-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <Badge className="bg-green-100 text-green-800">
                      Save ${(product.originalPrice - product.price).toFixed(0)}
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <Button asChild className="flex-1">
                      <Link href={`/products/${product.slug}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.thumbnail,
                        slug: product.slug
                      })}
                      disabled={!product.inStock}
                      className="px-4"
                    >
                      🛒
                    </Button>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.thumbnail,
                      slug: product.slug
                    })}
                    disabled={!product.inStock}
                    className="w-full"
                  >
                    {product.inStock ? 'Add to Cart' : 'Notify When Available'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              No products found
            </h3>
            <p className="text-slate-600 mb-8">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Niiro</h3>
              <p className="text-slate-300 mb-4">
                Your trusted partner for premium sauna equipment and wellness solutions.
              </p>
              <div className="flex space-x-4">
                <span className="text-sm text-slate-400">🚚 Free Shipping</span>
                <span className="text-sm text-slate-400">🔒 Secure Payment</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-slate-300 hover:text-white">All Products</Link></li>
                <li><Link href="/products?category=sauna-equipment" className="text-slate-300 hover:text-white">Sauna Equipment</Link></li>
                <li><Link href="/products?category=wellness-products" className="text-slate-300 hover:text-white">Wellness Products</Link></li>
                <li><Link href="/cart" className="text-slate-300 hover:text-white">Shopping Cart</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/marketing/about" className="text-slate-300 hover:text-white">About Us</Link></li>
                <li><Link href="/marketing/contact" className="text-slate-300 hover:text-white">Contact</Link></li>
                <li><Link href="/marketing/services" className="text-slate-300 hover:text-white">Services</Link></li>
                <li><Link href="/shipping" className="text-slate-300 hover:text-white">Shipping Info</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Account</h4>
              <ul className="space-y-2">
                <li><Link href="/login" className="text-slate-300 hover:text-white">Login</Link></li>
                <li><Link href="/register" className="text-slate-300 hover:text-white">Register</Link></li>
                <li><Link href="/orders" className="text-slate-300 hover:text-white">Order History</Link></li>
                <li><Link href="/wishlist" className="text-slate-300 hover:text-white">Wishlist</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-300">
            <p>&copy; 2024 Niiro. All rights reserved. | Premium Sauna Equipment & Wellness Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}