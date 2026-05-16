import project1_image from "@/assets/imgs/project1_image.png"
import project2_image from "@/assets/imgs/project2_image.png"
import project3_image from "@/assets/imgs/project3_image.png"

import project1_icon_01 from "@/assets/imgs/project1_icon_01.png"
import project1_icon_02 from "@/assets/imgs/project1_icon_02.png"

export const portfolioData = {
  hero: {
    title: "레거시를\n모던 아키텍처로 혁신하는 테크 리드",
    description: "16년의 IT 인프라 운영 및 기술 교육 경험을 바탕으로, 소통과 리팩토링에 강점을 가진 올라운더(All-rounder) 풀스택 개발자 강진석입니다."
  },
  skills: [
    {
      category: "Frontend",
      description: "Zustand를 활용한 전역 상태 관리 최적화",
      items: ["React", "Zustand", "Tailwind CSS", "Shadcn UI"]
    },
    {
      category: "Backend",
      description: "REST API 설계 및 비즈니스 로직 고도화",
      items: ["Python", "Django(DRF)", "FastAPI", "Node.js", "Java"]
    },
    {
      category: "Infra/DB",
      description: "Docker를 이용한 컨테이너 배포 및 클라우드 아키텍처 설계",
      items: ["AWS", "Docker", "Linux", "Oracle", "MariaDB"]
    }
  ],
  projects: [
    {
      id: "1",
      title: "(주)웰페어코리아 LMS 리팩토링",
      summary: "기존 PHP 환경을 최신 스택으로 전환 및 API 설계.",
      tags: ["React", "Django", "DRF", "리팩토링"],
      details: {
        description: "기존 레거시 시스템의 한계를 극복하고, 확장성과 유지보수성을 극대화하기 위한 전면적인 아키텍처 개편 및 코드 리팩토링 사례입니다. 성능 최적화와 사용자 경험 향상에 중점을 두었습니다.",
        techStack: {
          frontend: ["React", "Zustand", "React Query"],
          backend: ["Django DRF", "Python"],
          infra: ["MariaDB", "Docker", "AWS EC2"]
        },
        image: project1_image,
        icons: [project1_icon_01, project1_icon_02],
        architectureOverview: "모놀리식 구조에서 프론트엔드와 백엔드를 완벽히 분리하는 Headless 아키텍처로 전환했습니다. React 기반의 SPA 프론트엔드와 Django REST Framework(DRF)를 활용한 API 서버로 구성되어 독립적인 배포와 확장이 가능해졌습니다.",
        performance: "초기 로딩 속도 45% 개선. 쿼리 최적화를 통한 API 응답 시간 평균 200ms 이하로 단축.",
        deployment: "CI/CD 파이프라인 구축을 통해 무중단 배포 구현. 배포 실패율 0% 달성 및 롤백 자동화.",
        troubleshooting: [
          {
            title: "1. 비디오 플레이어 진도율 99.7% 멈춤 현상 (소수점 오차)",
            problem: "수강생들이 비디오 시청을 완료했음에도 불구하고, 진도율이 100%에 도달하지 못하고 99.7%에서 멈춰 수강 완료 처리가 되지 않는 문의가 다수 발생했습니다.",
            cause: "브라우저의 비디오 API에서 제공하는 currentTime 값이 부동 소수점 오차를 포함하고 있어, 단순 비교 시 정확히 duration과 일치하지 않는 경우가 발생함을 확인했습니다.",
            solution: "잔여 시간 임계값(Threshold)을 설정하거나, Math.floor를 통한 정수 단위 비교 방식을 도입했습니다. 또한 비디오의 ended 이벤트를 명시적으로 핸들링하여 100% 도달을 보장하도록 로직을 개선했습니다."
          },
          {
            title: "2. 프론트엔드 상태 관리 최적화",
            problem: "React 컴포넌트 간의 불필요한 리렌더링을 방지하기 위해 Context API와 Redux Toolkit을 혼합하여 사용하던 기존 구조를 개선하고자 했습니다.",
            solution: "React Query 기반의 서버 상태 관리로 단일화했습니다. 클라이언트 상태는 Zustand를 도입하여 가볍게 유지했습니다."
          }
        ]
      }
    },
    {
      id: "2",
      title: "AI 개발 인프라 & AWS 마이그레이션",
      summary: "배포 소요 시간 80% 단축 및 AI 환경 컨테이너화.",
      tags: ["AWS", "Docker", "CI/CD"],
      details: {
        description: "온프레미스 환경에서 운영되던 AI 모델 학습 및 추론 인프라를 AWS 클라우드로 전면 마이그레이션하고, CI/CD 파이프라인 자동화 및 Docker 컨테이너화를 통해 배포 시간을 80% 단축한 프로젝트입니다.",
        role: "Lead DevOps Engineer",
        duration: "4 Months",
        techStack: {
          infra: ["AWS (EKS, EC2, S3)", "Terraform", "Linux(Ubuntu)"],
          devops: ["GitHub", "AWS (CodeBuild, CodeDeploy, CodePipeline)"],
          container: ["Docker", "Kubernetes"]
        },
        image: project2_image,
        achievements: [
          {
            title: "CI/CD 자동화 구축",
            description: "GitHub와 AWS CodeBuild, CodeDeploy, CodePipeline을 연동하여 코드 커밋부터 빌드, 테스트, 배포까지의 전 과정을 자동화했습니다. 수동 개입을 최소화하여 휴먼 에러를 방지하고, 안정적인 릴리스 주기를 확보했습니다."
          },
          {
            title: "80% 배포 시간 단축",
            description: "기존 45분 소요되던 배포 프로세스를 9분으로 단축하여, 프로젝트의 생산성을 극대화하고 신속한 피드백 루프를 형성했습니다."
          },
          {
            title: "Docker 컨테이너화 전략",
            description: "복잡한 의존성을 가진 AI 모델과 애플리케이션을 Docker 이미지로 표준화했습니다. 로컬 개발 환경과 프로덕션 환경의 불일치 문제를 해결하고, Kubernetes(EKS) 위에서 유연한 스케일링이 가능하도록 마이크로서비스 아키텍처(MSA)를 도입했습니다.\n- 경량화된 베이스 이미지 (Alpine/Slim) 적용으로 이미지 크기 60% 최적화\n- 멀티 스테이지 빌드를 통한 보안 취약점 감소 및 빌드 속도 향상\n- Helm Chart를 활용한 환경별(Dev, Stg, Prod) 배포 템플릿 표준화"
          }
        ]
      }
    },
    {
      id: "3",
      title: "벨로타벨로타 커머스 플랫폼 구축",
      summary: "핵심 로직 관리 및 하이브리드 앱 전환 최적화.",
      tags: ["하이브리드앱", "커머스"],
      details: {
        description: "하이브리드 앱 전환, 안정적인 PG 결제 모듈 연동 및 핵심 커머스 비즈니스 로직(주문, 재고 관리) 최적화를 통한 고도화 프로젝트 상세 리뷰.",
        techStack: {
          frontend: ["HTML5", "CSS3 (Responsive)", "jQuery"],
          backend: ["PHP", "YoungCart"],
          infra: ["Cafe24", "MySQL"],
          app: ["WebView"]
        },
        image: project3_image,
        implementations: [
          {
            title: "WebView 기반 하이브리드 앱 전환",
            description: "YoungCart 기반으로 구축된 반응형 웹 사이트를 WebView로 래핑하여 하이브리드 앱 환경을 구축했습니다. 별도의 네이티브 개발 없이도 반응형 레이아웃을 그대로 활용하여 유지보수 효율성을 극대화했으며, 푸시 알림 연동 및 스토어 배포를 통해 사용자 접근성을 향상시켰습니다."
          },
          {
            title: "커스텀 테마 개발 및 결제 연동",
            description: "영카트의 기본 템플릿에서 벗어나 브랜드 아이덴티티를 반영한 커스텀 테마를 직접 설계하고 개발했습니다. Cafe24 호스팅 환경에 최적화된 배포 구조를 설계하고, 국내 주요 PG사 모듈을 안정적으로 연동하여 신용카드 및 간편결제 시스템을 구축했습니다."
          },
          {
            title: "핵심 커머스 로직 최적화 (주문/재고)",
            description: "PHP와 MySQL 기반의 영카트 코어를 분석하여 비효율적인 쿼리를 최적화하고, 대규모 상품 데이터 처리 시 성능 저하 문제를 해결했습니다. 커스텀 주문 상태 관리 로직을 도입하여 관리자 페이지에서의 운영 효율성을 대폭 개선했습니다. Cafe24의 MySQL DB 환경에서 데이터 정합성을 보장하기 위한 트랜잭션 관리를 강화했습니다. 또한 보안 강화를 위해 SSL 인증서 적용 및 개인정보 암호화 처리를 통해 안정적인 커머스 운영 환경을 구축했습니다."
          }
        ]
      }
    }
  ],
  experience: [
    {
      company: "아이티윌 부산 교육 센터",
      role: "IT 교육 / 인프라 엔지니어",
      period: "2014.12 ~ 2026.03",
      achievements: [
        "IT 교육 과정 기획 및 교육 / 클라우드 기반 인프라 구축 및 관리",
        "8년 연속 우수 훈련 기관 지정 공헌",
        "CCNA / CCNP 수강생 자격증 취득률 90% 이상 달성",
        "컨테이너 기반 배포 서버 구축 및 AWS 클라우드 도입 주도",
        "평균 취업률 70% 이상 향상 기여"
      ]
    },
    {
      company: "네오컴퓨터",
      role: "기술관리 / 영업팀 과장",
      period: "2008.09 ~ 2014.07",
      achievements: [
        "학내망 무선 네트워크 인프라 구축 및 기술 총괄 / 기술 관리 영업",
        "부산 지역 10개 이상 학교 무선 네트워크망 구축 성공",
        "스마트교실 무선 네트워크 최적화",
        "교육청 주관 PC 운영 체제 전환 프로젝트 완수",
        "기술 영업을 통한 유지보수 계약 20% 확대"
      ]
    }
  ],
  resume: {
    name: "강진석",
    title: "Senior Full-Stack Developer",
    contact: {
      email: "chienttao@google.com",
      phone: "010-9441-8323",
      github: "github.com/jinsim2",
      location: "부산광역시 연제구"
    },
    summary: "16년의 IT 인프라 운영 및 기술 교육 경험을 바탕으로, 탄탄한 DevOps 역량을 갖춘 풀스택 개발자입니다. AWS 클라우드 도입 및 컨테이너 기반(Docker) 배포 환경을 직접 구축하며 서버 최적화와 안정성에 기여해 왔습니다. 현재는 React와 Django(DRF)를 활용한 모던 웹 아키텍처 설계와 레거시 시스템 리팩토링에 주력하고 있으며, 인프라 단의 네트워크 설계부터 프론트엔드의 사용자 중심 UI/UX 구현까지 전체 시스템을 조망하고 문제를 해결하는 데 강점이 있습니다.",
    skillsSummary: {
      backend: "Python (Django DRF, FastAPI), PHP (영카트)",
      frontend: "React, Zustand, Tailwind CSS & Shadcn UI",
      devops: "AWS (EC2, S3, CodePipeline), Docker, Linux",
      database: "MariaDB / MySQL, Oracle 21c",
      network: "Network Protocol (CCNA/CCNP level)"
    },
    education: [
      {
        title: "CCNP (Cisco Certification Network Professional)",
        date: "2021.03 취득"
      },
      {
        title: "정보처리기사",
        date: "2013.12 취득"
      },
      {
        title: "부산외국어대학교",
        degree: "컴퓨터공학과 학사",
        period: "2008.03 - 2014.02"
      }
    ]
  }
};
