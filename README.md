# 🥑 MealFlow

> **프리미엄 주간 식단 플래너 & 실시간 영양 분석 웹 애플리케이션**
> 
> 다운로드 없이 브라우저에서 바로 주간 식단을 수립하고, 목표 식습관에 따른 탄단지 섭취 현황을 트래킹하며, 식단에서 식재료만 자동으로 추출해 장보기 리스트를 관리해 보세요.

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.1.0-emerald?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/Platform-Web%20%2F%20SPA-cyan?style=for-the-badge" alt="Platform">
  <img src="https://img.shields.io/badge/Build-GitHub%20Actions-darkgreen?style=for-the-badge" alt="Build">
</p>

---

## 🔗 Live Demo
👉 **[MealFlow 라이브 사이트 바로가기 (Click)](https://hounga13.github.io/MealFlow/)**

*(※ 최초 배포 시 GitHub Repository Settings -> Pages에서 Source를 'GitHub Actions'로 선택해야 라이브 링크가 정상 동작합니다.)*

---

## ✨ 핵심 기능 (Key Features)

### 1. 5대 식습관 테마별 목표 영양소 자동 계산
- **일반 균형식** (탄50% : 단20% : 지30%)
- **다이어트** (탄40% : 단40% : 지20%)
- **고단백 벌크업** (탄55% : 단25% : 지20%)
- **키토제닉 (저탄고지)** (탄5% : 단25% : 지70%)
- **식물성 비건** (탄60% : 단20% : 지20%)
- 목표 칼로리 변경 시 권장 영양소(g) 자동 계산 및 주간 평균 섭취량 대비 프로그레스 바 제공.

### 2. 스마트 식재료 합산 쇼핑 리스트
- 요일별 식단에 적힌 식재료 텍스트(예: `닭가슴살 120g`, `닭가슴살 150g`, `계란 2개`)를 자동으로 파싱.
- 단위를 판별하여 동일 재료를 하나의 합계(`닭가슴살 270g`, `계란 2개`)로 자동 병합하여 장보기 리스트 제공.

### 3. 무손실 로컬 백업 & 복원 (Data Portability)
- 브라우저 쿠키나 로컬 저장소 유실에 대비해 현재 세팅을 한 번에 JSON 파일로 다운로드 백업 가능.
- 백업 파일을 로드해 무결성 검증을 거친 뒤 원클릭 복원 지원.

### 4. A4 캘린더 규격 식단표 인쇄
- 냉장고나 식탁에 붙여놓고 볼 수 있도록 프린트 전용 CSS 스타일 적용.
- 불필요한 사이드바와 설정 요소를 생략하고 깔끔한 7일 식단 카드 캘린더만 A4 규격에 맞추어 출력.

---

## 🛠️ 기술 스택 (Tech Stack)

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white"/>
</p>

- **Core**: Vanilla HTML5, JavaScript (ES6+), Vanilla CSS (Glassmorphism Concept)
- **Icons**: Lucide Icons CDN
- **Typography**: Google Fonts (Outfit, Inter)

---

## 🚀 로컬 실행 방법 (How to Run)

```bash
# 1. 저장소 클론
git clone https://github.com/hounga13/MealFlow.git
cd MealFlow

# 2. 로컬 개발 서버 구동 (포트 3000)
npm install
npm start
```
브라우저에서 `http://localhost:3000`으로 접속합니다. (Node.js 미설치 시 `python3 -m http.server 3000`으로 구동 가능)

---

## 🚢 배포 및 인프라 운영 (CI/CD)

본 프로젝트는 `.github/workflows/deploy.yml` 파일이 기본 탑재되어 있어, GitHub 레포지토리에 푸시되는 즉시 GitHub Actions를 통해 무료 호스팅 배포가 자동 수행됩니다.
