"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrderSuccessPage() {
  const orderNumber = `NIIRO-${Date.now().toString().slice(-8)}`;

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
                  🛒 カート (0)
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Success Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="text-6xl mb-8">✅</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            ご注文ありがとうございます！
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            お客様のご注文が正常に処理されました
          </p>
        </div>

        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle>注文確認</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">注文番号:</span>
              <span className="font-mono text-slate-600">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">注文日時:</span>
              <span className="text-slate-600">
                {new Date().toLocaleString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">配送予定日:</span>
              <span className="text-slate-600">
                {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">配送方法:</span>
              <span className="text-slate-600">宅配便（送料無料）</span>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>次のステップ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">注文確認メール</h4>
                  <p className="text-sm text-slate-600">
                    ご注文内容の確認メールを送信いたしました。メールボックスをご確認ください。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">商品の準備</h4>
                  <p className="text-sm text-slate-600">
                    商品を梱包し、配送準備をいたします。通常1-2営業日で発送いたします。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">配送開始</h4>
                  <p className="text-sm text-slate-600">
                    配送が開始されましたら、追跡番号をお知らせいたします。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>お客様サポート</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                ご質問やご不明な点がございましたら、お気軽にお問い合わせください。
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">メール:</span> support@niiro.com
                </p>
                <p className="text-sm">
                  <span className="font-medium">電話:</span> 03-1234-5678（平日 9:00-18:00）
                </p>
                <p className="text-sm">
                  <span className="font-medium">注文番号:</span> {orderNumber}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/products">他の商品を見る</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/marketing/contact">お問い合わせ</Link>
            </Button>
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