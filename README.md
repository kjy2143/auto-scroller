# iOS Safari 자동 스크롤 북마클릿

아이폰 모바일 사파리에서 웹페이지를 자동으로 부드럽게 스크롤해주는 북마클릿(Bookmarklet)입니다.
Vanilla JavaScript 기반으로, 별도의 앱 설치 없이 북마크 추가만으로 간편하게 사용할 수 있습니다.

---

## 설치 페이지

**[https://kjy2143.github.io/auto-scroller/install.html](https://kjy2143.github.io/auto-scroller/install.html)**

위 링크에서 북마클릿을 바로 설치할 수 있습니다.

---

## 주요 기능

- **자동 스크롤**: 북마클릿 클릭 시 자동으로 세로 스크롤 시작/정지
- **고정 속도**: 코드 상단에서 쉽게 수정 가능한 고정 스크롤 속도
- **동적 UI**: 우측 하단에 토글 버튼 자동 생성 (터치 최적화)
- **페이지 하단 자동 정지**: 끝까지 스크롤 시 자동 멈춤
- **접근성**: aria-label, 키보드 포커스 표시 등 지원

---

## 설치 및 사용법

### 방법 1: 설치 페이지 이용 (권장)

1. [설치 페이지](https://kjy2143.github.io/auto-scroller/install.html) 접속
2. **Auto Scroller** 버튼을 드래그하여 북마크 바에 추가
3. 또는 코드를 복사하여 북마크 URL에 붙여넣기

### 방법 2: 직접 설치

1. `dist/bookmarklet.txt` 파일의 코드를 복사
2. 브라우저 북마크 추가 > URL 입력란에 붙여넣기
3. 저장 후 원하는 웹페이지에서 북마크 클릭

---

## 개발 및 빌드

### 개발 환경 준비

- Node.js 18 이상 권장
- 의존성 설치:
  ```bash
  npm install
  ```

### 개발 서버 실행

```bash
npm run dev
```
- http://localhost:5173 에서 개발 서버 확인

### 빌드 및 북마클릿 변환

```bash
npm run build
```
- 빌드 결과: `dist/auto-scroller.min.js`
- 북마클릿 코드: `dist/bookmarklet.txt`에 자동 생성

---

## 프로젝트 구조

```
auto-scroller/
├── src/
│   ├── main.js          # 엔트리 포인트: 이벤트 바인딩 및 초기화
│   ├── ui.js            # UI 모듈: 버튼 생성 및 상태 업데이트
│   ├── scroll.js        # 스크롤 로직: requestAnimationFrame 기반
│   ├── config.js        # 설정: SCROLL_SPEED, BUTTON_POSITION 상수
│   └── style.css        # 스타일 (main.js에서 import)
├── public/
│   ├── install.html     # 북마클릿 설치 페이지
│   └── index.html       # 리다이렉트 (install.html로)
├── index.html           # 개발용 HTML
├── bookmarklet.js       # postbuild 스크립트
├── vite.config.js       # Vite 빌드 설정
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Pages 자동 배포
```

---

## 주요 설정

- **스크롤 속도**: `src/config.js`의 `SCROLL_SPEED` 상수로 조절 (기본값: 2 픽셀/프레임)
- **버튼 위치**: `src/config.js`의 `BUTTON_POSITION` 상수로 조절

---

## 배포

GitHub Pages로 자동 배포됩니다.

- `main` 브랜치에 push 시 자동 빌드 및 배포
- 배포 URL: https://kjy2143.github.io/auto-scroller/

---

## 라이선스

MIT License
