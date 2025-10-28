"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/lib/cart";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear cart and redirect to success page
    clearCart();
    router.push('/order-success');
  };

  const subtotal = getTotalPrice();
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + tax;

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
                  🛒 カート ({items.length})
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
            <Link href="/cart" className="text-slate-500 hover:text-slate-700">カート</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">レジ</span>
          </nav>
        </div>
      </div>

      {/* Checkout Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">レジ</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>お客様情報</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        姓 *
                      </label>
                      <Input required placeholder="山田" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        名 *
                      </label>
                      <Input required placeholder="太郎" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      メールアドレス *
                    </label>
                    <Input required type="email" placeholder="yamada@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      電話番号 *
                    </label>
                    <Input required type="tel" placeholder="090-1234-5678" />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle>配送先住所</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      郵便番号 *
                    </label>
                    <Input required placeholder="123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      都道府県 *
                    </label>
                    <select required className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500">
                      <option value="">選択してください</option>
                      <option value="tokyo">東京都</option>
                      <option value="osaka">大阪府</option>
                      <option value="kyoto">京都府</option>
                      <option value="kanagawa">神奈川県</option>
                      <option value="aichi">愛知県</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      市区町村 *
                    </label>
                    <Input required placeholder="渋谷区" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      番地・建物名 *
                    </label>
                    <Input required placeholder="1-2-3 サンプルマンション101" />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle>お支払い情報</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      カード番号 *
                    </label>
                    <Input required placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        有効期限 *
                      </label>
                      <Input required placeholder="MM/YY" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        CVV *
                      </label>
                      <Input required placeholder="123" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      カード名義人 *
                    </label>
                    <Input required placeholder="YAMADA TARO" />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex space-x-4">
                <Button variant="outline" asChild>
                  <Link href="/cart">カートに戻る</Link>
                </Button>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="flex-1"
                  disabled={isProcessing}
                >
                  {isProcessing ? "処理中..." : `¥${total.toLocaleString()}で注文する`}
                </Button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>注文内容</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-slate-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-sm text-slate-500">
                          数量: {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-slate-900">
                          ¥{(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>小計</span>
                      <span>¥{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>送料</span>
                      <span className="text-green-600">無料</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>消費税 (8%)</span>
                      <span>¥{tax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t pt-2">
                      <span>合計</span>
                      <span>¥{total.toLocaleString()}</span>
                    </div>
                  </div>
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