import Image from "next/image";
import Link from "next/link";

export default function SoupPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">
          オニオンスープ
        </h1>
        <Image
          src="/soup.png"
          alt="オニオンスープ"
          width={600}
          height={400}
          className="rounded-2xl mx-auto mb-6"
        />
        <p className="text-lg text-gray-300 mb-6">
          玉ねぎをじっくり炒め、旨味を凝縮させた自慢のスープ。
          心も体も温まる一品です。
        </p>
        <p className="text-2xl text-yellow-300 mb-10">800円</p>
        <Link
          href="/"
          className="inline-block bg-yellow-500 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
        >
          ← メニューに戻る
        </Link>
      </div>
    </main>
  );
}
