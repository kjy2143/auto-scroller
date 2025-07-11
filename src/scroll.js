// 자동 스크롤 상태 변수
let isScrolling = false;
let scrollAnimationFrame = null;
let sentinel = null;
let observer = null;

// 스크롤 속도 (px/step)
const SCROLL_SPEED = 2;
// 스크롤 주기 (ms)
const SCROLL_INTERVAL = 16; // 약 60fps

// sentinel 요소 생성 및 observer 설정
function setupSentinel() {
  // 기존 sentinel 제거
  if (sentinel) {
    if (observer) {
      observer.unobserve(sentinel);
    }
    sentinel.remove();
  }

  // 새로운 sentinel 생성
  sentinel = document.createElement('div');
  document.body.appendChild(sentinel);

  // observer 설정
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
  if (isScrolling) return;
  setupSentinel();
  isScrolling = true;

  // UI 업데이트를 위한 이벤트 발생
  window.dispatchEvent(new CustomEvent('scrollStateChanged', {
    detail: { isScrolling: true }
  }));

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
  // observer 정리
  if (observer && sentinel) {
    observer.unobserve(sentinel);
  }

  // UI 업데이트를 위한 이벤트 발생
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

// 현재 스크롤 상태 반환
export function isScrollingActive() {
  return isScrolling;
}
