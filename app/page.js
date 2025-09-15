"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans bg-black text-white">
      {/* ヒーロー */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/hero.png" // public/hero.png に写真を入れる
          alt="レストランの雰囲気"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-yellow-400 drop-shadow-lg">
            凱旋門
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200">
            本格フレンチを、特別なひとときに
          </p>
        </div>
      </section>

      {/* メニュー */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-yellow-400">
          おすすめメニュー
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* ビーフステーキ */}
          <div className="bg-neutral-900 border border-yellow-600 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <Image
              src="/steak.png"
              alt="ビーフステーキ"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-2xl mb-2 text-yellow-300">
                ビーフステーキ
              </h3>
              <p className="text-gray-300 text-lg">3,5000円</p>
            </div>
          </div>

          {/* オニオンスープ */}
          <div className="bg-neutral-900 border border-yellow-600 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <Image
              src="/soup.png"
              alt="オニオンスープ"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-2xl mb-2 text-yellow-300">
                オニオンスープ
              </h3>
              <p className="text-gray-300 text-lg">3,000円</p>
            </div>
          </div>

          {/* シーフードパスタ */}
          <div className="bg-neutral-900 border border-yellow-600 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <Image
              src="/pasta.png"
              alt="シーフードパスタ"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-2xl mb-2 text-yellow-300">
                シーフードパスタ
              </h3>
              <p className="text-gray-300 text-lg">2,2000円</p>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section className="bg-neutral-950 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-10 text-yellow-400">アクセス</h2>
          <p className="mb-3 text-gray-300">東京都〇〇区〇〇 1-2-3</p>
          <p className="mb-3 text-gray-300">営業時間: 11:00 - 22:00</p>

          {/* 電話番号 */}
          <p className="mb-8">
            <a
              href="tel:0312345678"
              className="inline-block bg-yellow-500 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition"
            >
              📞 070-3109-5081
            </a>
          </p>

          {/* Googleマップ */}
          <iframe
            src="https://www.google.com/maps/embed?...(お店の住所に差し替え)"
            className="w-full h-[350px] rounded-xl shadow-lg border border-yellow-600"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-black text-gray-400 text-center py-6 border-t border-yellow-700">
        <p>&copy; 2025 凱旋門. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
