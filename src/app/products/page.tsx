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
  const { addItem } = useCartStore();

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
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
                <Link href="https://niiro.win-win.partners/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="https://niiro.win-win.partners/store">View Store</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h1>
          <p className="text-xl text-slate-600">
            Discover our carefully curated selection of premium products
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
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

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
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
            Featured ({getFeaturedProducts().length})
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedCategory("new")}
          >
            New Arrivals ({getNewArrivals().length})
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedCategory("sale")}
          >
            On Sale ({getOnSaleProducts().length})
          </Button>
        </div>

        {/* Products Grid/List */}
        <div className={viewMode === "grid" 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          : "space-y-4"
        }>
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.newArrival && (
                    <Badge variant="secondary" className="bg-green-500 text-white">
                      New
                    </Badge>
                  )}
                  {product.onSale && (
                    <Badge variant="destructive">
                      Sale
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge variant="outline" className="bg-gray-500 text-white">
                      Out of Stock
                    </Badge>
                  )}
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="mb-2">
                  <h3 className="font-semibold text-lg text-slate-900 group-hover:text-slate-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {product.shortDescription}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-slate-900">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-slate-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Badge variant="outline">
                    {categories.find(c => c.id === product.category)?.name}
                  </Badge>
                </div>
                
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
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              No products found
            </h3>
            <p className="text-slate-600 mb-4">
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
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Niiro</h3>
              <p className="text-slate-300">
                Your trusted partner for innovative solutions and exceptional service.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/marketing/about" className="text-slate-300 hover:text-white">About</Link></li>
                <li><Link href="/marketing/services" className="text-slate-300 hover:text-white">Services</Link></li>
                <li><Link href="/marketing/contact" className="text-slate-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-slate-300 hover:text-white">Products</Link></li>
                <li><Link href="https://niiro.win-win.partners/cart" className="text-slate-300 hover:text-white">Cart</Link></li>
                <li><Link href="https://niiro.win-win.partners/booking" className="text-slate-300 hover:text-white">Booking</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Account</h4>
              <ul className="space-y-2">
                <li><Link href="https://niiro.win-win.partners/login" className="text-slate-300 hover:text-white">Login</Link></li>
                <li><Link href="https://niiro.win-win.partners/register" className="text-slate-300 hover:text-white">Register</Link></li>
                <li><Link href="https://niiro.win-win.partners/members" className="text-slate-300 hover:text-white">Members</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>&copy; 2024 Niiro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
