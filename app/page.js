"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans bg-black text-white">
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/hero.png"
          alt="レストランの雰囲気"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-yellow-400 text-outline-red">
            凱旋門
          </h1>

          <p className="text-2xl md:text-3xl text-gray-200 text-outline-black">
            本格フレンチを、特別なひとときに
          </p>
        </div>
      </section>

      {/* メニューセクション */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-yellow-400">
          おすすめメニュー
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* ビーフステーキ */}
          <Link href="/steak" className="block">
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
                <p className="text-gray-300 text-lg">3,500円</p>
              </div>
            </div>
          </Link>

          {/* オニオンスープ */}
          <Link href="/soup" className="block">
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
                <p className="text-gray-300 text-lg">800円</p>
              </div>
            </div>
          </Link>

          {/* シーフードパスタ */}
          <Link href="/pasta" className="block">
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
                <p className="text-gray-300 text-lg">2,200円</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
