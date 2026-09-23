import Link from "next/link";

export const metadata = { title: "보냈습니다" };

// 퍼널 4칸 — 「보냈다」. 여기가 퍼널의 끝입니다.
// 이 페이지 조회수가 곧 「끝까지 간 사람 수」입니다.
export default function Thanks() {
  return (
    <main>
      <section className="center">
        <div className="wrap">
          <p className="big">✓</p>
          <h1>보냈습니다</h1>
          <p className="lead">하루 안에 답드리겠습니다. 감사합니다.</p>
          <Link href="/" className="btn">처음으로</Link>
        </div>
      </section>
    </main>
  );
}
