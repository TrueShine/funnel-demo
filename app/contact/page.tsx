"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { site } from "@/content";

// 퍼널 3칸 — 「마음먹었다」
// 보내기를 누르면 /thanks 로 갑니다. 서버로 보내지는 않습니다(시연용).
export default function Contact() {
  const router = useRouter();
  const [sending, setSending] = useState(false);

  return (
    <main>
      <section>
        <div className="wrap">
          <h1>연락하기</h1>
          <p className="lead">한 줄만 적어주셔도 됩니다. 하루 안에 답드립니다.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              router.push("/thanks");
            }}
          >
            <label className="field">
              <span>이름</span>
              <input name="name" required autoComplete="name" />
            </label>

            <label className="field">
              <span>연락받을 곳 — 이메일이나 전화번호</span>
              <input name="contact" required />
            </label>

            <label className="field">
              <span>어떤 걸 만들고 싶으신가요</span>
              <textarea name="message" required />
            </label>

            <button type="submit" className="btn primary" disabled={sending}>
              {sending ? "보내는 중…" : "보내기"}
            </button>
          </form>

          <p className="muted" style={{ marginTop: 28 }}>
            폼이 불편하시면 <a href={`mailto:${site.email}`}>{site.email}</a> 로 보내주세요.
          </p>
        </div>
      </section>
    </main>
  );
}
