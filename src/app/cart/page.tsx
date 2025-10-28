"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/lib/cart";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCartStore();

  if (items.length === 0) {
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
                <Link href="/products" className="text-slate-600 hover:text-slate-900">
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

        {/* Empty Cart */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="text-6xl mb-8">🛒</div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">カートが空です</h1>
            <p className="text-xl text-slate-600 mb-8">
              お気に入りのサウナ商品をカートに追加してください
            </p>
            <Button size="lg" asChild>
              <Link href="/products">商品を見る</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
              <Link href="/products" className="text-slate-600 hover:text-slate-900">
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
            <span className="text-slate-900 font-medium">ショッピングカート</span>
          </nav>
        </div>
      </div>

      {/* Cart Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-slate-900">ショッピングカート</h1>
              <Button variant="outline" onClick={clearCart} className="text-red-600 hover:text-red-700">
                カートを空にする
              </Button>
            </div>

            <div className="space-y-6">
              {items.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex items-center space-x-6">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4">
                        {item.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </Button>
                            <span className="w-12 text-center font-medium">
                              {item.quantity}
                            </span>
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
                            削除
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-slate-900">
                            ¥{(item.price * item.quantity).toLocaleString()}
                          </div>
                          {item.quantity > 1 && (
                            <div className="text-sm text-slate-500">
                              ¥{item.price.toLocaleString()} × {item.quantity}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>注文内容</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>小計 ({getTotalItems()}点)</span>
                  <span>¥{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>送料</span>
                  <span className="text-green-600">無料</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>消費税 (8%)</span>
                  <span>¥{Math.round(getTotalPrice() * 0.08).toLocaleString()}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>合計</span>
                    <span>¥{(getTotalPrice() * 1.08).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="space-y-3 pt-4">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/checkout">レジに進む</Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/products">買い物を続ける</Link>
                  </Button>
                </div>

                <div className="text-xs text-slate-500 space-y-1 pt-4">
                  <p>• 送料は10,000円以上のご注文で無料</p>
                  <p>• 安全な決済システムを使用</p>
                  <p>• 30日間の返品保証</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 mt-16">
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