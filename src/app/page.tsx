"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/lib/cart";
import { getFeaturedProducts, getNewArrivals, getOnSaleProducts } from "@/lib/products";

export default function Home() {
  const { getTotalItems, addItem } = useCartStore();
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const onSaleProducts = getOnSaleProducts();

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

      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                自宅で極上の
                <span className="text-red-500"> サウナ体験</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                プロ仕様のサウナ機器で、最高のリラクゼーションを体験してください。
                Niiroのプレミアムコレクションで、完璧なホームサウナを作りましょう。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
                  商品を見る →
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4">
                  商品一覧
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/0/saunaop1_LL.jpg"
                alt="プレミアムサウナ機器"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg">
                #1 ベストセラー
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Shipping Banner */}
            <div className="bg-green-600 text-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="text-xl font-bold mb-2">送料無料</h3>
              <p className="text-green-100">10,000円以上のご注文で送料無料</p>
            </div>
            
            {/* Premium Quality Banner */}
            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="text-xl font-bold mb-2">プレミアム品質</h3>
              <p className="text-blue-100">プロ仕様の機器</p>
            </div>
            
            {/* Easy Setup Banner */}
            <div className="bg-purple-600 text-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-xl font-bold mb-2">簡単セットアップ</h3>
              <p className="text-purple-100">分かりやすい取扱説明書付き</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">おすすめ商品</h2>
            <p className="text-xl text-slate-600">人気のサウナ機器とアクセサリー</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 6).map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
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
                        🆕 新商品
                      </Badge>
                    )}
                    {product.onSale && (
                      <Badge className="bg-red-500 text-white px-3 py-1">
                        🔥 セール
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-slate-900 group-hover:text-slate-600 transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-slate-900">
                        ¥{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-slate-500 line-through">
                          ¥{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <Badge className="bg-green-100 text-green-800">
                        節約 ¥{(product.originalPrice - product.price).toLocaleString()}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex space-x-2">
                      <Button asChild className="flex-1">
                        <Link href={`/products/${product.slug}`}>
                          詳細を見る
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
                      className="w-full"
                    >
                      カートに追加
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/products">すべての商品を見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">新商品</h2>
            <p className="text-xl text-slate-600">サウナコレクションの最新商品</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.slice(0, 4).map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.thumbnail}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-green-500 text-white">
                      🆕 新商品
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-900 group-hover:text-slate-600 transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-slate-900">
                      ¥{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-slate-500 line-through">
                        ¥{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/products/${product.slug}`}>
                      詳細を見る
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* On Sale Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">セール商品</h2>
            <p className="text-xl text-slate-600">プレミアムサウナ機器の期間限定オファー</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {onSaleProducts.slice(0, 3).map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-2 border-red-200">
                <div className="relative overflow-hidden">
            <Image
                    src={product.thumbnail}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white px-4 py-2 text-lg">
                      🔥 セール
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-100 text-green-800 px-3 py-1">
                      節約 ¥{(product.originalPrice! - product.price).toLocaleString()}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-slate-900 group-hover:text-slate-600 transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-red-600">
                        ¥{product.price.toLocaleString()}
                      </span>
                      <span className="text-2xl text-slate-500 line-through">
                        ¥{product.originalPrice!.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.thumbnail,
                      slug: product.slug
                    })}
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    カートに追加
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">N</span>
                </div>
                <div>
                  <div className="text-xl font-bold">Niiro</div>
                  <div className="text-sm text-slate-400">サウナ</div>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                プレミアムサウナ機器とウェルネスソリューションの信頼できるパートナー。
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/revitalizesauna/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98z"/>
                  </svg>
                </a>
                <a href="https://x.com/RivitalizeSauna" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@revitalizesauna" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
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