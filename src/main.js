import './style.css';
import { toggleScroll, isScrollingActive } from './scroll.js';
import { createToggleButton, updateButtonState } from './ui.js';

// 버튼 생성
const scrollBtn = createToggleButton();

// 버튼 클릭/터치 이벤트 핸들러
function handleBtnEvent(e) {
  e.preventDefault();
  toggleScroll();
  updateButtonState(isScrollingActive());
}

scrollBtn.addEventListener('click', handleBtnEvent);
scrollBtn.addEventListener('touchstart', handleBtnEvent, { passive: false });

// 스크롤 상태 변경 시 버튼 UI 갱신
window.addEventListener('scrollStateChanged', () => {
  updateButtonState(isScrollingActive());
});

// 초기 상태 반영
updateButtonState(isScrollingActive());
