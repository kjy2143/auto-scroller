import { SCROLL_SPEED } from './config.js';

// 자동 스크롤 상태 변수
let isScrolling = false; // 스크롤 동작 여부
let scrollAnimationFrame = null; // requestAnimationFrame ID
let sentinel = null; // 페이지 하단 감지용 sentinel 요소
let observer = null; // IntersectionObserver 인스턴스

// sentinel 요소 생성 및 observer 설정
function setupSentinel() {
  // 기존 sentinel 제거
  if (sentinel) {
    if (observer) {
      observer.unobserve(sentinel);
    }
    sentinel.remove();
    sentinel = null;
  }

  // 새로운 sentinel 생성 및 스타일 지정 (하단에 투명하게 위치)
  sentinel = document.createElement('div');
  sentinel.style.width = '1px';
  sentinel.style.height = '1px';
  sentinel.style.opacity = '0';
  sentinel.style.pointerEvents = 'none';
  document.body.appendChild(sentinel);

  // IntersectionObserver로 sentinel이 화면에 보이면 스크롤 정지
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && isScrolling) {
      stopScroll();
      alert('페이지 하단에 도달하여 자동 스크롤이 정지되었습니다.');
    }
  }, {
    root: null,
    threshold: 0.1,
  });

  observer.observe(sentinel);
}

// 자동 스크롤 시작 함수
export function startScroll() {
  if (isScrolling) return; // 이미 동작 중이면 무시
  setupSentinel(); // sentinel 및 observer 설정
  isScrolling = true;

  // UI 업데이트를 위한 커스텀 이벤트 발생
  window.dispatchEvent(new CustomEvent('scrollStateChanged', {
    detail: { isScrolling: true }
  }));

  // 스크롤을 부드럽게 진행하는 step 함수
  function step() {
    if (!isScrolling) return;
    window.scrollBy(0, SCROLL_SPEED);
    scrollAnimationFrame = requestAnimationFrame(step);
  }
  step();
}

// 자동 스크롤 정지 함수
export function stopScroll() {
  isScrolling = false;
  if (scrollAnimationFrame) {
    cancelAnimationFrame(scrollAnimationFrame);
    scrollAnimationFrame = null;
  }
  // observer 정리 및 sentinel 완전 제거
  if (observer && sentinel) {
    observer.unobserve(sentinel);
    observer.disconnect();
    observer = null;
  }
  if (sentinel) {
    sentinel.remove();
    sentinel = null;
  }
  // UI 업데이트를 위한 커스텀 이벤트 발생
  window.dispatchEvent(new CustomEvent('scrollStateChanged', {
    detail: { isScrolling: false }
  }));
}

// 스크롤 상태 토글 함수
export function toggleScroll() {
  if (isScrolling) {
    stopScroll();
  } else {
    startScroll();
  }
}

// 현재 스크롤 상태 반환 함수
export function isScrollingActive() {
  return isScrolling;
}
