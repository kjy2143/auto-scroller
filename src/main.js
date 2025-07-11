import './style.css'
import { toggleScroll, isScrollingActive } from './scroll.js'

const scrollBtn = document.createElement('button');
scrollBtn.id = 'scroll-toggle-btn';
scrollBtn.type = 'button';
scrollBtn.innerText = '▶️';
scrollBtn.setAttribute('aria-label', '자동 스크롤 시작');
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

function updateBtnUI() {
  if (isScrollingActive()) {
    scrollBtn.innerText = '⏸️';
    scrollBtn.setAttribute('aria-label', '자동 스크롤 정지');
    scrollBtn.classList.add('scrolling');
  } else {
    scrollBtn.innerText = '▶️';
    scrollBtn.setAttribute('aria-label', '자동 스크롤 시작');
    scrollBtn.classList.remove('scrolling');
  }
}

function handleBtnEvent(e) {
  e.preventDefault();
  toggleScroll();
  updateBtnUI();
}

scrollBtn.addEventListener('click', handleBtnEvent);
scrollBtn.addEventListener('touchstart', handleBtnEvent, { passive: false });

// 이벤트 리스너 추가
window.addEventListener('scrollStateChanged', (e) => {
  updateBtnUI();
});

document.body.appendChild(scrollBtn);
updateBtnUI();
