"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = "" }: HeaderProps) {
  const { getTotalItems } = useCartStore();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">Niiro</div>
                <div className="text-sm text-slate-600">SAUNA</div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/marketing/about" 
              className={`hover:text-slate-900 transition-colors ${
                currentPage === 'about' ? 'text-slate-900 font-medium' : 'text-slate-600'
              }`}
            >
              About
            </Link>
            <Link 
              href="/marketing/services" 
              className={`hover:text-slate-900 transition-colors ${
                currentPage === 'services' ? 'text-slate-900 font-medium' : 'text-slate-600'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/products" 
              className={`hover:text-slate-900 transition-colors ${
                currentPage === 'products' ? 'text-slate-900 font-medium' : 'text-slate-600'
              }`}
            >
              Products
            </Link>
            <Link 
              href="/marketing/contact" 
              className={`hover:text-slate-900 transition-colors ${
                currentPage === 'contact' ? 'text-slate-900 font-medium' : 'text-slate-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full px-4 py-2 pl-10 pr-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
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
  );
}
