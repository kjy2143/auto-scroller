import { BUTTON_POSITION } from './config.js';

let scrollBtn = null;

// SVG 아이콘 정의
const PLAY_ICON = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86a1 1 0 00-1.5.86z" fill="currentColor"/>
</svg>`;

const PAUSE_ICON = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/>
  <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>
</svg>`;

// 토글 버튼 생성
export function createToggleButton() {
  scrollBtn = document.createElement('button');
  scrollBtn.id = 'scroll-toggle-btn';
  scrollBtn.type = 'button';
  scrollBtn.innerHTML = PLAY_ICON;
  scrollBtn.setAttribute('aria-label', '자동 스크롤 시작');

  // 글래스모피즘 스타일 지정
  scrollBtn.style.position = 'fixed';
  scrollBtn.style.right = BUTTON_POSITION.right;
  scrollBtn.style.bottom = BUTTON_POSITION.bottom;
  scrollBtn.style.zIndex = '9999';
  scrollBtn.style.width = '56px';
  scrollBtn.style.height = '56px';
  scrollBtn.style.padding = '0';
  scrollBtn.style.display = 'flex';
  scrollBtn.style.alignItems = 'center';
  scrollBtn.style.justifyContent = 'center';
  scrollBtn.style.borderRadius = '16px';
  scrollBtn.style.background = 'rgba(255, 255, 255, 0.15)';
  scrollBtn.style.backdropFilter = 'blur(12px)';
  scrollBtn.style.webkitBackdropFilter = 'blur(12px)';
  scrollBtn.style.color = '#fff';
  scrollBtn.style.border = '1px solid rgba(255, 255, 255, 0.2)';
  scrollBtn.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
  scrollBtn.style.cursor = 'pointer';
  scrollBtn.style.touchAction = 'manipulation';
  scrollBtn.style.userSelect = 'none';
  scrollBtn.style.outline = 'none';

  document.body.appendChild(scrollBtn);
  return scrollBtn;
}

// 버튼 UI 상태 갱신
export function updateButtonState(isScrolling) {
  if (!scrollBtn) return;

  if (isScrolling) {
    scrollBtn.innerHTML = PAUSE_ICON;
    scrollBtn.setAttribute('aria-label', '자동 스크롤 정지');
    scrollBtn.classList.add('scrolling');
  } else {
    scrollBtn.innerHTML = PLAY_ICON;
    scrollBtn.setAttribute('aria-label', '자동 스크롤 시작');
    scrollBtn.classList.remove('scrolling');
  }
}

// 버튼 요소 반환
export function getToggleButton() {
  return scrollBtn;
}
