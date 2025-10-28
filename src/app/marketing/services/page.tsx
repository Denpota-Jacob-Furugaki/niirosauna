import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
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
              <Link href="/marketing/services" className="text-slate-900 font-medium">
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
            Our Services
          </h1>
          
          <p className="text-xl text-slate-600 mb-12">
            We offer a comprehensive range of professional services designed to meet your specific needs 
            and help you achieve your goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Consultation Services</CardTitle>
                <CardDescription>
                  Expert guidance and strategic advice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Our experienced consultants provide personalized guidance to help you make 
                  informed decisions and optimize your operations.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Strategic planning and analysis</li>
                  <li>• Process optimization</li>
                  <li>• Risk assessment</li>
                  <li>• Performance evaluation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Implementation Support</CardTitle>
                <CardDescription>
                  Hands-on assistance with your projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  We provide comprehensive support throughout the implementation process, 
                  ensuring smooth execution and successful outcomes.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Project management</li>
                  <li>• Technical implementation</li>
                  <li>• Training and support</li>
                  <li>• Quality assurance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Maintenance & Support</CardTitle>
                <CardDescription>
                  Ongoing assistance and maintenance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Keep your systems running smoothly with our comprehensive maintenance 
                  and support services.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Regular maintenance</li>
                  <li>• 24/7 technical support</li>
                  <li>• Updates and upgrades</li>
                  <li>• Performance monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Solutions</CardTitle>
                <CardDescription>
                  Tailored solutions for unique requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  We develop custom solutions specifically designed to address your 
                  unique challenges and requirements.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Custom development</li>
                  <li>• Integration services</li>
                  <li>• Scalable solutions</li>
                  <li>• Future-proof design</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-600 mb-6">
              Contact us to discuss your specific needs and learn how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://niiro.win-win.partners/booking">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/marketing/contact">Contact Us</Link>
              </Button>
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
