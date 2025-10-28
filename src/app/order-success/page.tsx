import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrderSuccessPage() {
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-8">
            <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Order Successful!
          </h1>
          
          <p className="text-xl text-slate-600 mb-8">
            Thank you for your purchase. Your order has been confirmed and will be processed shortly.
          </p>

          <Card className="max-w-md mx-auto mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span>Order Number:</span>
                  <span className="font-mono">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Order Date:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-green-600 font-medium">Confirmed</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery:</span>
                  <span>3-5 business days</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <p className="text-slate-600">
              You will receive an email confirmation with your order details and tracking information.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/orders">View Orders</Link>
              </Button>
            </div>
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
