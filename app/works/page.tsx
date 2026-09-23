import Link from "next/link";
import { works } from "@/content";

export const metadata = { title: "작업" };

// 퍼널 2칸 — 「둘러봤다」
export default function Works() {
  return (
    <main>
      <section>
        <div className="wrap">
          <h1>작업</h1>
          <p className="lead">최근에 만든 것 세 가지입니다.</p>
          <div className="grid">
            {works.map((w) => (
              <a className="card link" key={w.title} href={w.link}
                 target="_blank" rel="noopener noreferrer">
                <span className="tag">{w.tag}</span>
                <h3>{w.title}</h3>
                <p className="muted">{w.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>다음</h2>
          <p className="lead">비슷한 작업이 필요하시면 한 줄만 남겨주세요.</p>
          <Link href="/contact" className="btn primary">연락하기</Link>
        </div>
      </section>
    </main>
  );
}
