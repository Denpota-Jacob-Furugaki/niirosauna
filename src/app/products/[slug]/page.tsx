"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getProductBySlug, getRelatedProducts, categories } from "@/lib/products";
import { useCartStore } from "@/lib/cart";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  const { addItem, getTotalItems } = useCartStore();
  
  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, 4);
  const category = categories.find(c => c.id === product.category);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">Niiro</div>
                  <div className="text-sm text-slate-600">サウナ</div>
                </div>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/marketing/about" className="text-slate-600 hover:text-slate-900">
                会社概要
              </Link>
              <Link href="/marketing/services" className="text-slate-600 hover:text-slate-900">
                サービス
              </Link>
              <Link href="/products" className="text-slate-900 font-medium">
                商品一覧
              </Link>
              <Link href="/marketing/contact" className="text-slate-600 hover:text-slate-900">
                お問い合わせ
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link href="/login">ログイン</Link>
              </Button>
              <Button variant="outline" asChild className="relative">
                <Link href="/cart">
                  🛒 カート ({getTotalItems()})
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-slate-500 hover:text-slate-700">ホーム</Link>
            <span className="text-slate-400">/</span>
            <Link href="/products" className="text-slate-500 hover:text-slate-700">商品一覧</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-slate-100">
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
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square relative overflow-hidden rounded-lg bg-slate-100">
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {product.newArrival && (
                  <Badge className="bg-green-500 text-white px-3 py-1">
                    🆕 新商品
                  </Badge>
                )}
                {product.onSale && (
                  <Badge className="bg-red-500 text-white px-3 py-1">
                    🔥 セール
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge className="bg-gray-500 text-white px-3 py-1">
                    在庫切れ
                  </Badge>
                )}
                <Badge variant="outline" className="bg-slate-100">
                  {category?.name}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-slate-900 mb-6">
                {product.name}
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-5xl font-bold text-slate-900">
                  ¥{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-3xl text-slate-500 line-through">
                    ¥{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                    節約 ¥{(product.originalPrice - product.price).toLocaleString()}
                  </Badge>
                )}
              </div>
              
              {/* Stock Status */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-4 h-4 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-lg text-slate-600">
                  {product.inStock 
                    ? `✅ 在庫あり (${product.stockQuantity}個)`
                    : '❌ 在庫切れ'
                  }
                </span>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Button 
                    size="lg" 
                    onClick={() => addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.thumbnail,
                      slug: product.slug
                    })}
                    disabled={!product.inStock}
                    className="flex-1 text-lg py-6"
                  >
                    {product.inStock ? '🛒 カートに追加' : '入荷通知'}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    asChild
                    className="px-8 text-lg py-6"
                  >
                    <Link href="/checkout">
                      今すぐ購入
                    </Link>
                  </Button>
                </div>
                
                <div className="flex items-center justify-center space-x-8 text-sm text-slate-600">
                  <span>🚚 送料無料</span>
                  <span>🔒 安全な決済</span>
                  <span>↩️ 簡単返品</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">商品コード</h3>
                <p className="text-slate-600 font-mono">{product.sku}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">カテゴリ</h3>
                <Badge variant="outline" className="bg-slate-100">
                  {category?.name}
                </Badge>
              </div>
            </div>

            {product.tags.length > 0 && (
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">タグ</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-700">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Specifications */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">仕様</h2>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-4 border-b border-slate-200 last:border-b-0">
                      <dt className="font-semibold text-slate-900">{key}</dt>
                      <dd className="text-slate-600 font-medium">{value}</dd>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">関連商品</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={relatedProduct.thumbnail}
                      alt={relatedProduct.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {relatedProduct.newArrival && (
                        <Badge className="bg-green-500 text-white text-xs">
                          新商品
                        </Badge>
                      )}
                      {relatedProduct.onSale && (
                        <Badge className="bg-red-500 text-white text-xs">
                          セール
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
                      <span className="text-xl font-bold text-slate-900">
                        ¥{relatedProduct.price.toLocaleString()}
                      </span>
                      {relatedProduct.originalPrice && (
                        <span className="text-sm text-slate-500 line-through">
                          ¥{relatedProduct.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/products/${relatedProduct.slug}`}>
                        詳細を見る
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
      <footer className="bg-slate-900 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Niiro</h3>
              <p className="text-slate-300 mb-4">
                プレミアムサウナ機器とウェルネスソリューションの信頼できるパートナー。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">ショップ</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-slate-300 hover:text-white">すべての商品</Link></li>
                <li><Link href="/products?category=sauna-equipment" className="text-slate-300 hover:text-white">サウナ機器</Link></li>
                <li><Link href="/products?category=wellness-products" className="text-slate-300 hover:text-white">ウェルネス商品</Link></li>
                <li><Link href="/cart" className="text-slate-300 hover:text-white">ショッピングカート</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サポート</h4>
              <ul className="space-y-2">
                <li><Link href="/marketing/about" className="text-slate-300 hover:text-white">会社概要</Link></li>
                <li><Link href="/marketing/contact" className="text-slate-300 hover:text-white">お問い合わせ</Link></li>
                <li><Link href="/marketing/services" className="text-slate-300 hover:text-white">サービス</Link></li>
                <li><Link href="/shipping" className="text-slate-300 hover:text-white">配送情報</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">アカウント</h4>
              <ul className="space-y-2">
                <li><Link href="/login" className="text-slate-300 hover:text-white">ログイン</Link></li>
                <li><Link href="/register" className="text-slate-300 hover:text-white">新規登録</Link></li>
                <li><Link href="/orders" className="text-slate-300 hover:text-white">注文履歴</Link></li>
                <li><Link href="/wishlist" className="text-slate-300 hover:text-white">お気に入り</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-300">
            <p>&copy; 2024 Niiro. All rights reserved. | プレミアムサウナ機器 & ウェルネスソリューション</p>
          </div>
        </div>
      </footer>
    </div>
  );
}