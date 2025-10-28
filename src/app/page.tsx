import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/lib/cart";

export default function Home() {
  const { getTotalItems } = useCartStore();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-slate-900">Niiro</h1>
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
              <Button variant="outline" asChild className="relative">
                <Link href="/cart">
                  Cart ({getTotalItems()})
                </Link>
              </Button>
              <Button asChild>
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Welcome to Niiro
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Your trusted partner for innovative solutions and exceptional service. 
            Discover our range of products and services designed to meet your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="https://niiro.win-win.partners/store">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/marketing/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Quality Products</CardTitle>
              <CardDescription>
                Discover our carefully curated selection of premium products
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="https://niiro.win-win.partners/store">Browse Products</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expert Services</CardTitle>
              <CardDescription>
                Professional services tailored to your specific requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/marketing/services">View Services</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Easy Booking</CardTitle>
              <CardDescription>
                Schedule appointments and consultations with our team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="https://niiro.win-win.partners/booking">Book Now</Link>
              </Button>
            </CardContent>
          </Card>
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