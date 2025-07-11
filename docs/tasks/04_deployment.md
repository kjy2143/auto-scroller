# GitHub Pages 배포 태스크

## 목표
- GitHub Pages를 통해 북마클릿을 배포하여 사용자가 쉽게 접근할 수 있도록 함
- 자동화된 배포 파이프라인 구축
- 사용자 가이드 및 설치 방법 제공

## 1. GitHub Pages 설정

### 1.1 저장소 설정
- [ ] GitHub 저장소에서 Settings > Pages 메뉴로 이동
- [ ] Source를 "GitHub Actions"로 설정
- [ ] 브랜치를 `main`으로 설정

### 1.2 GitHub Actions 워크플로우 생성
- [ ] `.github/workflows/deploy.yml` 파일 생성
- [ ] Node.js 환경 설정
- [ ] 빌드 및 배포 자동화 스크립트 작성
- [ ] **main 브랜치에 merge되면 자동 배포됨**
- [ ] **package.json에 별도의 배포 스크립트 추가는 필요 없음**

## 2. 배포 파일 준비

### 2.1 빌드 최적화
- [ ] Vite 빌드 설정 확인 (압축, 난독화, 단일 파일)

### 2.2 배포용 HTML 페이지 생성
- [ ] `public/index.html` 생성 (GitHub Pages 루트용)
- [ ] 북마클릿 설치 가이드 포함
- [ ] 데모 페이지 기능 추가
- [ ] 반응형 디자인 적용

### 2.3 북마클릿 코드 제공
- [ ] 빌드된 북마클릿 코드를 페이지에 표시
- [ ] 복사 가능한 형태로 제공
- [ ] 드래그 앤 드롭 설치 가이드

## 3. GitHub Actions 워크플로우

### 3.1 `.github/workflows/deploy.yml` 생성
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build project
      run: npm run build
    
    - name: Generate bookmarklet
      run: npm run postbuild
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 4. 배포용 페이지 구성

### 4.1 메인 페이지 (`public/index.html`)
- [ ] 프로젝트 소개 및 기능 설명
- [ ] 북마클릿 설치 방법 가이드
- [ ] 사용법 및 주의사항
- [ ] 데모 기능 (스크롤 가능한 콘텐츠)
- [ ] 반응형 모바일 최적화

### 4.2 북마클릿 코드 제공
- [ ] 빌드된 북마클릿 코드를 텍스트 영역에 표시
- [ ] "복사하기" 버튼 기능
- [ ] 드래그 앤 드롭 설치 영역
- [ ] 설치 확인 방법 안내

### 4.3 사용자 가이드
- [ ] 단계별 설치 가이드
- [ ] 사용법 설명
- [ ] 문제 해결 가이드
- [ ] FAQ 섹션

## 5. 배포 후 확인사항

### 5.1 기능 테스트
- [ ] GitHub Pages에서 페이지 로드 확인
- [ ] 북마클릿 코드 복사 기능 테스트
- [ ] 데모 페이지에서 스크롤 기능 테스트
- [ ] 모바일 환경에서 반응형 확인

### 5.2 SEO 및 접근성
- [ ] 메타 태그 최적화
- [ ] Open Graph 태그 추가
- [ ] 접근성 검사 (ARIA 라벨, 키보드 네비게이션)
- [ ] 페이지 로딩 속도 최적화

### 5.3 사용자 경험
- [ ] 직관적인 UI/UX 확인
- [ ] 모바일 터치 인터페이스 최적화
- [ ] 다양한 브라우저 호환성 테스트
- [ ] 사용자 피드백 수집 방법 제공

## 6. 지속적 배포 설정

### 6.1 자동화
- [ ] main 브랜치 푸시 시 자동 배포
- [ ] 빌드 실패 시 알림 설정
- [ ] 배포 성공 시 알림 설정

### 6.2 모니터링
- [ ] GitHub Pages 상태 모니터링
- [ ] 사용자 접근 통계 확인
- [ ] 오류 로그 모니터링

## 7. 문서화

### 7.1 README.md 업데이트
- [ ] 프로젝트 소개 및 기능 설명
- [ ] 설치 및 사용 방법
- [ ] 배포 링크 제공
- [ ] 기여 가이드라인

### 7.2 사용자 가이드
- [ ] 상세한 설치 가이드
- [ ] 사용법 및 팁
- [ ] 문제 해결 방법
- [ ] FAQ 업데이트

## 8. 배포 체크리스트

### 8.1 사전 배포 확인
- [ ] 모든 기능이 정상 작동하는지 확인
- [ ] 빌드가 성공적으로 완료되는지 확인
- [ ] 북마클릿 코드가 올바르게 생성되는지 확인
- [ ] GitHub Actions 워크플로우가 정상 작동하는지 확인

### 8.2 배포 후 확인
- [ ] GitHub Pages에서 페이지가 정상 로드되는지 확인
- [ ] 북마클릿 설치 및 사용이 가능한지 확인
- [ ] 모바일 환경에서 정상 작동하는지 확인
- [ ] 사용자 피드백 수집 준비

## 9. 예상 결과물

### 9.1 배포된 페이지
- `https://[username].github.io/auto-scroller/`
- 북마클릿 설치 가이드 페이지
- 데모 기능이 포함된 페이지
- 반응형 모바일 최적화

### 9.2 제공되는 기능
- 원클릭 북마클릿 설치
- 실시간 데모 기능
- 상세한 사용자 가이드
- 문제 해결 지원

## 10. 후속 작업

### 10.1 사용자 피드백 수집
- [ ] GitHub Issues를 통한 피드백 수집
- [ ] 사용자 사용 패턴 분석
- [ ] 개선 사항 도출

### 10.2 지속적 개선
- [ ] 정기적인 기능 업데이트
- [ ] 성능 최적화
- [ ] 사용자 요청 반영
- [ ] 새로운 기능 추가 검토 
