import Image from "next/image";
import Link from "next/link";

export default function PastaPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">
          シーフードパスタ
        </h1>
        <Image
          src="/pasta.png"
          alt="シーフードパスタ"
          width={600}
          height={400}
          className="rounded-2xl mx-auto mb-6"
        />
        <p className="text-lg text-gray-300 mb-6">
          新鮮な魚介をたっぷり使ったパスタ。海の幸の旨味を存分に味わえます。
        </p>
        <p className="text-2xl text-yellow-300 mb-10">2,200円</p>
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
