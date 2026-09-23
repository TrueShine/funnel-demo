# funnel-demo — 퍼널 · 애널리틱스 시연용

⑥회차 「장부와 CCTV」 수업에서 **강사 화면으로 보여주기 위한** 작은 사이트입니다.
로그인도 DB도 없습니다. 페이지 넷과 계수기 둘이 전부입니다.

## 퍼널 네 칸

| 주소 | 무슨 뜻 | 어떻게 여기로 오나 |
|---|---|---|
| `/` | 들어왔다 | 링크를 눌러 첫 화면에 도착 |
| `/works` | 둘러봤다 | 「작업 보기」를 눌렀다 |
| `/contact` | 마음먹었다 | 「연락하기」를 눌렀다 |
| `/thanks` | **보냈다** | 폼을 채우고 「보내기」를 눌렀다 |

칸마다 한 번씩 사람이 빠지도록 만들어 뒀습니다. `/contact` 는 세 칸을 다 채워야 넘어가서, 여기서 실제로 이탈이 생깁니다. **퍼널 시연에 쓸 만한 숫자가 나오는 이유입니다.**

> 폼은 어디로도 전송되지 않습니다. 「보내기」를 누르면 `/thanks` 로 이동만 합니다.

---

## 1. 내 컴퓨터에서 돌려보기

```
npm install
npm run dev
```

http://localhost:3000 — 이때는 계수기가 **안 셉니다.** 배포해야 셉니다.

내용을 바꾸려면 **`content.ts` 한 파일만** 열면 됩니다.

## 2. GitHub 에 올리기

1. github.com → New repository → 이름은 영어로 (예: `funnel-demo`) → **Add a README 체크**
2. VS Code 에서 `Ctrl + Shift + P` → 「Git: Clone」
3. 이 폴더의 파일을 복사해 넣고 커밋 → 동기화

## 3. Vercel 배포 + 계수기 켜기

1. vercel.com → **Continue with GitHub**
2. Add New → Project → 이 저장소 Import → Deploy
3. 배포가 끝나면 프로젝트 → **Analytics** → **Enable**
   ★ 이걸 안 누르면 코드가 들어 있어도 안 셉니다.

## 4. CCTV(Clarity) 붙이기

1. clarity.microsoft.com → 로그인 → 새 프로젝트 (이름 + 배포된 주소)
2. 설정 → **Overview** 에서 **프로젝트 ID** 를 복사
3. Vercel → 프로젝트 → Settings → Environment Variables 에 추가

   | Key | Value | Type |
   |---|---|---|
   | `NEXT_PUBLIC_CLARITY_ID` | 복사한 ID | **Config** |

   `NEXT_PUBLIC_` 으로 시작하니 Secret 이 아니라 **Config** 로 넣어야 저장됩니다.
4. Deployments → 최신 배포 → **Redeploy** (환경변수는 다시 배포해야 반영됩니다)

내 컴퓨터에서 시험하려면 `.env.local` 에 같은 값을 넣으세요.

```
cp .env.example .env.local
```

> `app/layout.tsx` 의 Clarity 코드는 표준 스니펫입니다.
> Clarity 대시보드가 준 코드가 이것과 다르면 **대시보드 쪽을 쓰세요.**

---

## 5. 수업 전에 해둘 것 — ★ 제일 중요

**퍼널은 데이터가 쌓여야 단계 목록에 뜹니다.** 수업 당일에 만들면 빈 화면이 나옵니다.

**수업 2~3일 전에:**

1. 배포된 주소를 폰·노트북·다른 브라우저로 **10~20번** 열어봅니다
2. 그중 절반쯤만 `/works` 까지, 그중 또 절반만 `/contact` 까지,
   몇 번만 끝까지 `/thanks` 로 갑니다 — **일부러 도중에 나가는 게 핵심입니다**
3. 가족·동료에게 링크를 한 번 돌려도 좋습니다

**수업 전날:** Clarity → 설정 → 퍼널 → 새 퍼널

왼쪽 목록에서 `/` → `/works` → `/contact` → `/thanks` 를 순서대로 끌어다 놓고 저장합니다.
숫자가 보이면 26쪽 시연 준비 끝입니다.

## 6. 수업 중 체크

| 언제 | 무엇을 | 어디서 |
|---|---|---|
| 12쪽 | 코드가 어떻게 들어가는지 | `app/layout.tsx` 를 VS Code 로 열어 보여주기 |
| 25쪽 | **실시간 녹화** | Clarity → 세션 레코딩 → Live. 수강생이 들어오면 바로 뜹니다 |
| 26쪽 | **퍼널 숫자** | Clarity → 퍼널 → 미리 만들어둔 것 |
| 아무 때나 | 방문자 수 | Vercel → Analytics |

> 실시간 녹화는 지연이 없습니다. 퍼널·히트맵 숫자는 몇 시간 걸립니다.

---

## 파일 구조

```
funnel-demo/
├── content.ts              ★ 글은 전부 여기 한 파일에
├── app/
│   ├── layout.tsx          계수기(Analytics) + CCTV(Clarity)
│   ├── globals.css         색 다섯 · 글자 세 단계 · 여백
│   ├── page.tsx            /          들어왔다
│   ├── works/page.tsx      /works     둘러봤다
│   ├── contact/page.tsx    /contact   마음먹었다
│   └── thanks/page.tsx     /thanks    보냈다 ← 퍼널의 끝
├── .env.example
└── package.json
```

## 막히면

| 이런 일이 | 이렇게 |
|---|---|
| Analytics 에 0 이다 | Enable 을 눌렀는지 · 배포된 주소로 열었는지. localhost 는 안 셉니다 |
| Clarity 에 아무것도 없다 | 환경변수를 넣고 **Redeploy** 했는지. 그 다음 폰으로 한 번 여세요 |
| 둘 다 0 이다 | 광고 차단 확장이 막는 경우가 많습니다. 폰으로 열어보세요 |
| 퍼널 목록에 페이지가 안 뜬다 | 아직 그 페이지에 방문 기록이 없습니다. 5번을 먼저 하세요 |
