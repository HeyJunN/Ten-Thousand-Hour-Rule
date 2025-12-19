# 🕰️ 1만 시간의 법칙 (The 10,000 Hour Rule)

> **"연습은 어제의 당신보다 당신을 더 낫게 만든다."**

사용자가 전문가가 되고 싶은 분야와 매일 투자할 시간을 입력하면, 1만 시간을 채우기 위해 며칠이 걸리는지 분야 별 공부 방법을 계산해 주는 정적 웹 퍼블리싱 프로젝트입니다.
HTML5 시맨틱 마크업과 CSS3, 바닐라 JS를 활용하였으며, 웹 접근성을 준수하고 반응형 웹을 지원합니다.

---

## ✅ 주요 구현 포인트

### 1. 🏗️ 시맨틱 마크업 (Semantic Markup)과 구조 개선

무분별한 `<section>` 사용을 지양하고, **콘텐츠의 논리적 구조**에 집중하여 마크업을 구성했습니다.

- **올바른 태그 사용:** 제목이 필요한 논리적 구획(Intro, Calculator)에는 `<section>`을 사용하고, 단순 레이아웃 래퍼나 UI 그룹(Container, Action Buttons)에는 의미 없는 `<div>`를 사용하여 시맨틱 오류를 방지했습니다.
- **헤딩 계층 구조 준수:** 스크린 리더 사용자가 문서를 쉽게 탐색할 수 있도록 `h1` → `h2` 순서로 이어지는 헤딩의 위계질서를 명확히 했습니다.

```html
<div class="container">
  <header>...</header>
  <main>
    <section class="intro">
      <h2 class="a11y-hidden">법칙 소개</h2>
      ...
    </section>
    <div class="action-btn">...</div>
  </main>
</div>
```

### 2. ♿ 웹 접근성을 고려한 IR 기법 (Image Replacement)

디자인상 화면에는 보이지 않아야 하지만, 스크린 리더에게는 정보를 전달해야 하는 제목이나 설명에 `.a11y-hidden` 클래스를 적용했습니다.

```css
/* 접근성을 위한 숨김 클래스 */
.a11y-hidden {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
}
```

### 3. 🎨 CSS 변수(:root)를 활용한 디자인 시스템

유지 보수의 편의성과 일관된 색상 적용을 위해 CSS Custom Properties(변수)를 정의하여 사용했습니다.

```css
:root {
  --color-primary: #5b2386;
  --color-secondary: #f5df4d;
  --color-text: #fff;
  --color-bg: #5b2386;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
}
```

### 4. 📱 모바일 퍼스트 & 데스크톱 반응형 처리

모바일 환경을 기준으로 스타일을 먼저 작성하고, 미디어 쿼리(`@media min-width: 769px`)를 사용하여 데스크톱 환경에 대응했습니다.

- **레이아웃 겹침 방지:** 고정 높이(`height`) 대신 `auto`를 사용하여 콘텐츠 양에 따라 유동적으로 늘어나도록 처리했습니다.
- **버튼 텍스트 최적화:** 모바일에서는 두 줄로 표시되는 버튼 텍스트를, 데스크톱에서는 `<br>` 태그를 숨기고 `white-space: nowrap`을 적용하여 깔끔한 한 줄로 처리했습니다.

```css
/* 데스크톱 대응 예시 */
@media screen and (min-width: 769px) {
  .fighting-modal button br {
    display: none; /* 줄바꿈 태그 숨김 */
  }
  .fighting-modal button {
    white-space: nowrap; /* 텍스트 한 줄 처리 */
    width: 50.8rem;
  }
}
```

### 5. 🧩 표준 태그`<dialog>`를 활용한 모달

`div`로 흉내 낸 모달이 아닌, HTML5 표준 태그인 `<dialog>`를 사용하여 브라우저 호환성과 접근성을 확보했습니다.

- **키보드 접근성 확인:** 팝업 내부의 버튼 또는 ESC 키로 팝업 닫기, Tab 키를 통한 포커싱 전환
- **모달 닫기 시 외부 링크:** 버튼을 눌러 모달 창이 닫히면 분야 공부 방법 검색

```html
<dialog id="FightingDialog" class="fighting-modal">
  <h4 class="a11y-hidden">모달창</h4>
  <p>화이팅!!</p>
  <p>당신의 꿈을 응원합니다!</p>
  <img src="./img/licat.png" alt="라이캣이 응원하는 이미지" />
  <button id="closeBtn">종료하고 진짜 <br />훈련하러 가기 GO!GO!</button>
</dialog>
```

```javascript
closeBtn.addEventListener("click", () => {
  // 1. 모달 닫기
  dialog.close();

  // 2. 사용자가 입력한 '분야' 가져오기
  const fieldValue = document.getElementById("field").value;

  // 3. 해당 분야로 구글 검색, 혹은 유튜브 검색 새 탭 열기
  // 예: "프로그래밍 강의" 검색
  const searchUrl = `https://www.google.com/search?q=${fieldValue}+공부+방법`;
  // 유튜브를 원하시면: `https://www.youtube.com/results?search_query=${fieldValue}+강의`

  window.open(searchUrl, "_blank"); // 새 탭에서 열기
});
```

---

## 🛠️ 기술 요약

- **HTML5:** Semantic Markup, Accessibility
- **CSS3:** Flexbox, Media Queries, CSS Variables
- **JavaScript:** Vanilla JS (DOM Manipulation)
- **Version Control:** Git, GitHub Pages

---
