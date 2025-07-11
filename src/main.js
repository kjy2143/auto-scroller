import './style.css'
import { toggleScroll, isScrollingActive } from './scroll.js'

// 자동 스크롤 토글 버튼 생성
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scroll-toggle-btn';
scrollBtn.type = 'button';
scrollBtn.innerText = '\u25b6\ufe0f'; // ▶️
scrollBtn.setAttribute('aria-label', '자동 스크롤 시작');
// 버튼 스타일 지정(고정 위치, 원형, 강조)
scrollBtn.style.position = 'fixed';
scrollBtn.style.right = '20px';
scrollBtn.style.bottom = '20px';
scrollBtn.style.zIndex = '9999';
scrollBtn.style.padding = '18px 22px';
scrollBtn.style.fontSize = '28px';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.background = '#333';
scrollBtn.style.color = '#fff';
scrollBtn.style.border = 'none';
scrollBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.touchAction = 'manipulation';
scrollBtn.style.userSelect = 'none';
scrollBtn.style.outline = 'none';

// 버튼 UI 상태 갱신 함수
function updateBtnUI() {
  if (isScrollingActive()) {
    scrollBtn.innerText = '\u23f8\ufe0f'; // ⏸️
    scrollBtn.setAttribute('aria-label', '자동 스크롤 정지');
    scrollBtn.classList.add('scrolling');
  } else {
    scrollBtn.innerText = '\u25b6\ufe0f'; // ▶️
    scrollBtn.setAttribute('aria-label', '자동 스크롤 시작');
    scrollBtn.classList.remove('scrolling');
  }
}

// 버튼 클릭/터치 이벤트 핸들러
function handleBtnEvent(e) {
  e.preventDefault();
  toggleScroll();
  updateBtnUI();
}

scrollBtn.addEventListener('click', handleBtnEvent);
scrollBtn.addEventListener('touchstart', handleBtnEvent, { passive: false });

// 스크롤 상태 변경 시 버튼 UI 갱신
window.addEventListener('scrollStateChanged', (e) => {
  updateBtnUI();
});

document.body.appendChild(scrollBtn);
updateBtnUI();
