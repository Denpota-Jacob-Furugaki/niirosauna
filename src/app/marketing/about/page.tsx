import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
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
              <Link href="/marketing/about" className="text-slate-900 font-medium">
                About
              </Link>
              <Link href="/marketing/services" className="text-slate-600 hover:text-slate-900">
                Services
              </Link>
              <Link href="/marketing/products" className="text-slate-600 hover:text-slate-900">
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
                <Link href="https://niiro.win-win.partners/store">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            About Niiro
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">
              Niiro is your trusted partner for innovative solutions and exceptional service. 
              We are committed to delivering quality products and services that meet the 
              diverse needs of our customers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <Card>
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    To provide innovative solutions and exceptional service that help our 
                    customers achieve their goals and exceed their expectations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    To be the leading provider of quality products and services, 
                    recognized for our commitment to excellence and customer satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">
              What We Offer
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛍️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
                <p className="text-slate-600">
                  Carefully curated selection of premium products
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Services</h3>
                <p className="text-slate-600">
                  Professional services tailored to your needs
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
                <p className="text-slate-600">
                  Convenient appointment scheduling system
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-slate-600 mb-6">
                Explore our products and services, or get in touch with our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="https://niiro.win-win.partners/store">Browse Products</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/marketing/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
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
                <li><Link href="https://niiro.win-win.partners/store" className="text-slate-300 hover:text-white">Products</Link></li>
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
