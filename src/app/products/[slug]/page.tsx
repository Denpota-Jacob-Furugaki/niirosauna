import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getProductBySlug, getRelatedProducts, categories } from "@/lib/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, 4);
  const category = categories.find(c => c.id === product.category);

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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-slate-500 hover:text-slate-700">Home</Link>
            <span className="text-slate-400">/</span>
            <Link href="/products" className="text-slate-500 hover:text-slate-700">Products</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-white">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square relative overflow-hidden rounded-lg bg-white">
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.newArrival && (
                  <Badge variant="secondary" className="bg-green-500 text-white">
                    New Arrival
                  </Badge>
                )}
                {product.onSale && (
                  <Badge variant="destructive">
                    On Sale
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge variant="outline" className="bg-gray-500 text-white">
                    Out of Stock
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg text-slate-600 mb-6">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-slate-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-slate-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <Badge variant="destructive" className="text-sm">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-sm text-slate-600">
                {product.inStock 
                  ? `In Stock (${product.stockQuantity} available)`
                  : 'Out of Stock'
                }
              </span>
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <Button 
                size="lg" 
                asChild
                disabled={!product.inStock}
                className="flex-1"
              >
                <Link href={`https://niiro.win-win.partners/store/product/${product.slug}`}>
                  {product.inStock ? 'Add to Cart' : 'Notify When Available'}
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <Link href={`https://niiro.win-win.partners/store/product/${product.slug}`}>
                  Buy Now
                </Link>
              </Button>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">SKU</h3>
                <p className="text-slate-600">{product.sku}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Category</h3>
                <Badge variant="outline">
                  {category?.name}
                </Badge>
              </div>

              {product.tags.length > 0 && (
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Specifications */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Specifications</h2>
            <Card>
              <CardContent className="p-6">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-slate-200 last:border-b-0">
                      <dt className="font-medium text-slate-900">{key}</dt>
                      <dd className="text-slate-600">{value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={relatedProduct.thumbnail}
                      alt={relatedProduct.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {relatedProduct.newArrival && (
                        <Badge variant="secondary" className="bg-green-500 text-white text-xs">
                          New
                        </Badge>
                      )}
                      {relatedProduct.onSale && (
                        <Badge variant="destructive" className="text-xs">
                          Sale
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 group-hover:text-slate-600 transition-colors mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3">
                      {relatedProduct.shortDescription}
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-slate-900">
                        ${relatedProduct.price}
                      </span>
                      {relatedProduct.originalPrice && (
                        <span className="text-sm text-slate-500 line-through">
                          ${relatedProduct.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/products/${relatedProduct.slug}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
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
