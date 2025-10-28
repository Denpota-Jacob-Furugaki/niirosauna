"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/lib/cart";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Redirect to checkout page
    window.location.href = '/checkout';
  };

  if (items.length === 0) {
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
                <Link href="/products" className="text-slate-600 hover:text-slate-900">
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
                <Button asChild>
                  <Link href="/products">View Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Empty Cart */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Your Cart is Empty</h1>
            <p className="text-xl text-slate-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button size="lg" asChild>
              <Link href="/products">Start Shopping</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

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
              <Link href="/products" className="text-slate-600 hover:text-slate-900">
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
              <Button asChild>
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        ${item.price.toFixed(2)} each
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                            className="w-16 text-center"
                            min="1"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-slate-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({items.reduce((total, item) => total + item.quantity, 0)} items)</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                  >
                    {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    asChild
                  >
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
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
                <li><Link href="/cart" className="text-slate-300 hover:text-white">Cart</Link></li>
                <li><Link href="/marketing/contact" className="text-slate-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Account</h4>
              <ul className="space-y-2">
                <li><Link href="/login" className="text-slate-300 hover:text-white">Login</Link></li>
                <li><Link href="/register" className="text-slate-300 hover:text-white">Register</Link></li>
                <li><Link href="/orders" className="text-slate-300 hover:text-white">Orders</Link></li>
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
