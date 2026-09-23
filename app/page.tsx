import Link from "next/link";
import { site, services } from "@/content";

// 퍼널 1칸 — 「들어왔다」
export default function Home() {
  return (
    <main>
      <section>
        <div className="wrap">
          <h1>{site.name}<br />{site.role}입니다</h1>
          <p className="lead">{site.tagline}</p>
          <div className="row">
            <Link href="/works" className="btn primary">작업 보기</Link>
            <Link href="/contact" className="btn">연락하기</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>하는 일</h2>
          <div className="grid">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p className="muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
