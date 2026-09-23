import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { site } from "@/content";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${site.name} · ${site.role}`, template: `%s · ${site.name}` },
  description: site.tagline,
  openGraph: {
    title: `${site.name} · ${site.role}`,
    description: site.tagline,
    locale: "ko_KR",
    type: "website",
  },
};

// Clarity 프로젝트 ID 가 있을 때만 CCTV 를 답니다.
const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

// Cloudflare Web Analytics 토큰 — Cloudflare 대시보드 → Analytics → Web Analytics 에서 발급
const cfAnalyticsToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="head">
          <div className="wrap">
            <Link href="/" className="brand">{site.name}</Link>
            <nav className="nav">
              <Link href="/works">작업</Link>
              <Link href="/contact">연락하기</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="foot">
          <div className="wrap">
            <span className="muted">© 2026 {site.name}</span>
            <span className="muted">퍼널 · 애널리틱스 시연용 예제</span>
          </div>
        </footer>

        {/* ⑥회차 · 계수기 — Cloudflare Web Analytics. 배포 후 대시보드에서 토큰을 받아 환경변수로 넣으면 켜집니다 */}
        {cfAnalyticsToken && (
          <Script
            id="cf-web-analytics"
            strategy="afterInteractive"
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${cfAnalyticsToken}"}`}
          />
        )}

        {/* ⑥회차 · CCTV — Clarity. 대시보드에서 받은 코드가 이것과 다르면 그쪽을 쓰세요 */}
        {clarityId && (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");`}
          </Script>
        )}
      </body>
    </html>
  );
}
