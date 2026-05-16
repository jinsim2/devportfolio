# 🚀 DevPortfolio - Senior Full-Stack Developer

> "레거시를 모던 아키텍처로 혁신하는 테크 리드, 강진석의 개발자 포트폴리오입니다."

본 프로젝트는 React와 TypeScript를 기반으로 제작된 **반응형 싱글 페이지 어플리케이션(SPA)** 포트폴리오입니다. 단순한 정적 웹사이트를 넘어, 최신 프론트엔드 라우팅 기법과 데이터 주도형(Data-Driven) UI 설계를 적용하여 확장성과 사용자 경험(UX)을 극대화했습니다.

<br/>

## ✨ Key Features (핵심 구현 기능)

### 1. 팝업이 아닌 진짜 라우팅, `Background Location Modal`
* `react-router-dom`의 `location.state`를 활용하여 모달창을 구현했습니다.
* 일반적인 팝업 창과 달리, 모달이 열릴 때 고유의 URL(`/project/:id`)을 가집니다.
* 사용자가 모달에서 새로고침을 하거나 지인에게 URL을 공유해도 해당 상세 페이지가 정확히 유지되며, 뒤로 가기 버튼을 눌렀을 때 자연스럽게 배경 페이지로 돌아갑니다.

### 2. 유지보수를 고려한 `Data-Driven UI` 아키텍처
* UI 컴포넌트(`ProjectDetail.tsx`, `ProjectsSection.tsx`)와 하드코딩된 텍스트를 분리했습니다.
* `src/data/portfolioData.ts`라는 단일 진실 공급원(Single Source of Truth)을 구축하여, 새로운 프로젝트가 추가되더라도 컴포넌트 수정 없이 데이터 배열에 항목만 추가하면 화면이 자동으로 렌더링되도록 설계했습니다.

### 3. 일관된 디자인 시스템
* **Tailwind CSS**를 활용하여 유틸리티 퍼스트 스타일링을 적용했습니다.
* **shadcn/ui**의 Dialog 컴포넌트 등을 커스터마이징하여, 일관되고 세련된 모던 UI를 신속하게 구축했습니다.

<br/>

## 🛠 Tech Stack

* **Core**: React 19, TypeScript, Vite
* **Routing**: React Router DOM (v6+)
* **Styling**: Tailwind CSS, Lucide Icons
* **UI Components**: shadcn/ui (Radix UI 기반)
* **Deployment**: Vercel

<br/>

## 📂 Project Structure

```text
src/
├── assets/         # 이미지 및 정적 리소스 (Icons, Photos)
├── components/     # 재사용 가능한 UI 컴포넌트
│   ├── common/     # AppHeader, AppFooter 등 공통 레이아웃
│   ├── sections/   # HeroSection, ProjectsSection 등 메인 페이지 섹션
│   └── ui/         # shadcn/ui 기반의 코어 UI 컴포넌트 (Dialog 등)
├── data/           # 포트폴리오 콘텐츠 데이터 (portfolioData.ts)
├── pages/          # 라우팅되는 페이지 컴포넌트 (ProjectDetail, ResumeDetail 등)
├── AppRoutes.tsx   # Background Location을 처리하는 커스텀 라우팅 컴포넌트
└── main.tsx        # 앱 진입점 및 전역 설정
```

<br/>

## 🚀 Getting Started

### Prerequisites
* Node.js (v18 이상 권장)
* npm 또는 yarn

### Installation & Run
```bash
# 1. 저장소 클론
git clone https://github.com/jinsim2/devportfolio.git

# 2. 디렉토리 이동
cd devportfolio

# 3. 의존성 설치
npm install

# 4. 로컬 개발 서버 실행
npm run dev
```

<br/>

## ☁️ Deployment (Vercel)

이 프로젝트는 Vercel을 통해 지속적 배포(CD) 파이프라인이 구축되어 있습니다.
GitHub의 `main` 브랜치에 Push 되면 자동으로 빌드 및 배포가 진행됩니다.

1. Vercel 대시보드에서 `Import Project` 클릭
2. 본 GitHub Repository (`devportfolio`) 연결
3. Framework Preset은 `Vite`로 자동 설정되며, Deploy 클릭

<br/>

## 📬 Contact

* **Email**: chienttao@google.com
* **Phone**: 010-9441-8323
* **GitHub**: [github.com/jinsim2](https://github.com/jinsim2)

---
*© 2026 Jinseok Kang. All rights reserved.*
