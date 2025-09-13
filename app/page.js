export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>凱旋門</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        本格フレンチレストランへようこそ
      </p>
      <nav style={{ fontSize: "1.1rem" }}>
        <a href="/menu" style={{ margin: "0 1rem" }}>
          メニュー
        </a>
        <a href="/about" style={{ margin: "0 1rem" }}>
          店舗情報
        </a>
        <a href="/contact" style={{ margin: "0 1rem" }}>
          お問い合わせ
        </a>
      </nav>
    </main>
  );
}
