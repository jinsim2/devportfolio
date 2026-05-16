import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import icon_resume_01 from "@/assets/imgs/icon_resume_01.png"
import icon_resume_02 from "@/assets/imgs/icon_resume_02.png"
import icon_resume_03 from "@/assets/imgs/icon_resume_03.png"
import icon_resume_04 from "@/assets/imgs/icon_resume_04.png"
import icon_resume_05 from "@/assets/imgs/icon_resume_05.png"
import icon_resume_06 from "@/assets/imgs/icon_resume_06.png"
import icon_resume_07 from "@/assets/imgs/icon_resume_07.png"
import photo_id from "@/assets/imgs/photo_id.png"

export function ResumeDetail() {
  const navigate = useNavigate();

  const handleClose = () => navigate(-1);

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent className="w-[95vw] max-w-5xl max-h-[90vh] overflow-y-auto p-0 border-none bg-transparent shadow-none">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">이력서</DialogTitle>
        </DialogHeader>
        <div className="w-full p-6 md:p-12 bg-white rounded-lg shadow-sm outline outline-1 outline-offset-[-1px] outline-neutral-300/30 flex flex-col justify-start items-start gap-12 mt-8">
          <div className="self-stretch pb-12 border-b border-neutral-300/30 flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex-1 flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-gray-950 text-4xl md:text-6xl font-extrabold font-['Pretendard'] leading-tight">강진석</div>
                <div className="text-zinc-700 text-xl md:text-2xl font-semibold font-['Inter'] leading-8">Senior Full-Stack Developer</div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-3">
                {/* 이메일 */}
                <div className="flex items-center gap-2">
                  <img src={icon_resume_01} alt="email" className="w-4 h-4 object-contain" />
                  <div className="text-zinc-700 text-sm md:text-base font-normal font-['Inter'] leading-6">chienttao@google.com</div>
                </div>
                {/* 전화번호 */}
                <div className="flex items-center gap-2">
                  <img src={icon_resume_02} alt="phone" className="w-4 h-4 object-contain" />
                  <div className="text-zinc-700 text-sm md:text-base font-normal font-['Inter'] leading-6">010-9441-8323</div>
                </div>
                {/* 깃허브 */}
                <div className="flex items-center gap-2">
                  <img src={icon_resume_04} alt="github" className="w-4 h-4 object-contain" />
                  <div className="text-zinc-700 text-sm md:text-base font-normal font-['Inter'] leading-6">github.com/jinsim2</div>
                </div>
                {/* 주소 */}
                <div className="flex items-center gap-2">
                  <img src={icon_resume_03} alt="location" className="w-4 h-4 object-contain" />
                  <div className="text-zinc-700 text-sm md:text-base font-normal font-['Pretendard'] leading-6">부산광역시 연제구</div>
                </div>
              </div>
            </div>
            <div className="w-32 h-36 bg-zinc-200 rounded-xl flex flex-col justify-center items-start overflow-hidden shrink-0">
              <img className="w-full h-full object-cover" src={photo_id} alt="Profile" />
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <img src={icon_resume_05} alt="icon_resume_05" className="w-5 h-5" />
              <div className="justify-center text-gray-950 text-2xl font-normal font-['Pretendard'] leading-8">핵심 역량 요약</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center">
                <span className="text-zinc-900 text-base md:text-lg font-normal font-['Pretendard'] leading-relaxed">
                  16년의 IT 인프라 운영 및 기술 교육 경험을 바탕으로, 
                </span>
                <span className="text-zinc-900 text-base md:text-lg font-semibold font-['Pretendard'] leading-relaxed">
                  탄탄한 DevOps 역량을 갖춘 풀스택 개발자
                </span>
                <span className="text-zinc-900 text-base md:text-lg font-normal font-['Pretendard'] leading-relaxed">
                  입니다. AWS 클라우드 도입 및 컨테이너 기반(Docker) 배포 환경을 직접 구축하며 서버 최적화와 안정성에 기여해 왔습니다. 현재는 React와 Django(DRF)를 활용한 모던 웹 아키텍처 설계와 레거시 시스템 리팩토링에 주력하고 있으며, 인프라 단의 네트워크 설계부터 프론트엔드의 사용자 중심 UI/UX 구현까지 전체 시스템을 조망하고 문제를 해결하는 데 강점이 있습니다.
                </span>
              </div>
            </div>
            {/* 역량 항목 그리드 컨테이너 */}
            <div className="self-stretch p-6 md:p-8 bg-zinc-50 rounded-xl border border-zinc-200 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

              {/* 1. Backend */}
              <div className="space-y-1.5">
                <div className="text-gray-950 text-sm font-bold uppercase tracking-wider">Backend & API Architecture</div>
                <div className="text-zinc-600 text-base font-normal leading-relaxed">Python (Django DRF, FastAPI), PHP (영카트)</div>
              </div>

              {/* 2. Frontend */}
              <div className="space-y-1.5">
                <div className="text-gray-950 text-sm font-bold uppercase tracking-wider">Frontend Development</div>
                <div className="text-zinc-600 text-base font-normal leading-relaxed">React, Zustand, Tailwind CSS & Shadcn UI</div>
              </div>

              {/* 3. DevOps */}
              <div className="space-y-1.5">
                <div className="text-gray-950 text-sm font-bold uppercase tracking-wider">DevOps & Cloud Infrastructure</div>
                <div className="text-zinc-600 text-base font-normal leading-relaxed">AWS (EC2, S3, CodePipeline), Docker, Linux</div>
              </div>

              {/* 4. Database */}
              <div className="space-y-1.5">
                <div className="text-gray-950 text-sm font-bold uppercase tracking-wider">Database</div>
                <div className="text-zinc-600 text-base font-normal leading-relaxed">MariaDB / MySQL, Oracle 21c</div>
              </div>

              {/* 5. Network */}
              <div className="space-y-1.5">
                <div className="text-gray-950 text-sm font-bold uppercase tracking-wider">Network & Core IT</div>
                <div className="text-zinc-600 text-base font-normal leading-relaxed">Network Protocol (CCNA/CCNP level)</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div className="inline-flex flex-col justify-start items-start">
                <img src={icon_resume_06} alt="icon_resume_06" className="w-5 h-5" />
              </div>
              <div className="justify-center text-gray-950 text-2xl font-normal font-['Pretendard'] leading-8">근무 경력</div>
            </div>
            <div className="self-stretch pl-8 border-l-2 border-sky-950/20 flex flex-col justify-start items-start gap-12">
              <div className="self-stretch relative flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch inline-flex justify-between items-start">
                  <div className="inline-flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <div className="justify-center text-gray-950 text-2xl font-normal font-['Pretendard'] leading-8">아이티윌 부산 교육 센터</div>
                    </div>
                    <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
                      <div className="justify-center text-zinc-700 text-base font-normal font-['Pretendard'] leading-6">사내 클라우드 및 배포 인프라 테크 리드</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-zinc-100 rounded-sm inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-zinc-500 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">2014.12 - 2026.03</div>
                  </div>
                </div>
                <div className="self-stretch pl-5 flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-zinc-900 text-base font-normal font-['Pretendard'] leading-6">Docker 가상화를 통한 사내 실습 및 개발 환경 통합 구축.</div>
                    <div className="justify-center text-zinc-900 text-base font-normal font-['Inter'] leading-6"> </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-zinc-900 text-base font-normal font-['Pretendard'] leading-6">AWS 아키텍처 기반의 확장성 있는 클라우드 인프라 설계 및 운영.</div>
                    <div className="justify-center text-zinc-900 text-base font-normal font-['Inter'] leading-6"> </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-zinc-900 text-base font-normal font-['Pretendard'] leading-6">수강생 대상 네트워크, 서버 인프라 및 프로그래밍 실무 교육 담당.</div>
                    <div className="justify-center text-zinc-900 text-base font-normal font-['Inter'] leading-6"> </div>
                  </div>
                </div>
                <div className="w-4 h-4 left-[-41px] top-[4px] absolute bg-blue-800 rounded-xl" />
              </div>
              <div className="self-stretch relative flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch inline-flex justify-between items-start">
                  <div className="inline-flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <div className="justify-center text-gray-950 text-2xl font-normal font-['Pretendard'] leading-8">네오컴퓨터</div>
                    </div>
                    <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
                      <div className="justify-center text-zinc-700 text-base font-normal font-['Pretendard'] leading-6">네트워크 인프라 구축 및 유지보수 총괄</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-zinc-100 rounded-sm inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-zinc-500 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">2008.09 - 2014.07</div>
                  </div>
                </div>
                <div className="self-stretch pl-5 flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-zinc-900 text-base font-normal font-['Pretendard'] leading-6">다수의 학교 및 공공기관 네트워크 인프라 설계 및 구축 프로젝트 수행.</div>
                    <div className="justify-center text-zinc-900 text-base font-normal font-['Inter'] leading-6"> </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-zinc-900 text-base font-normal font-['Pretendard'] leading-6">트래픽 병목 현상 분석 및 라우팅 최적화를 통한 네트워크 효율 개선.</div>
                    <div className="justify-center text-zinc-900 text-base font-normal font-['Inter'] leading-6"> </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-zinc-900 text-base font-normal font-['Pretendard'] leading-6">안정적인 사내망 운영 및 보안 정책 수립.</div>
                    <div className="justify-center text-zinc-900 text-base font-normal font-['Inter'] leading-6"> </div>
                  </div>
                </div>
                <div className="w-4 h-4 left-[-41px] top-[4px] absolute bg-neutral-300 rounded-xl" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <img src={icon_resume_06} alt="icon_resume_06" className="w-5 h-5" />
              <div className="justify-center text-gray-950 text-2xl font-normal font-['Pretendard'] leading-8">실무 프로젝트</div>
            </div>

            {/* 프로젝트 그리드 컨테이너 (2열 설정) */}
            <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* 1. LMS 리팩토링 */}
              <div className="px-6 py-8 bg-zinc-100 rounded-xl border border-zinc-200 space-y-2">
                <div className="text-gray-950 text-xl font-bold">[LMS 리팩토링] (주)웰페어코리아</div>
                <div className="text-zinc-500 text-sm italic">2026.03 ~ 현재</div>
                <p className="text-zinc-700 text-base">레거시 온라인 교육 시스템의 아키텍처 개선 및 프론트엔드/백엔드 최적화 작업 진행 중.</p>
              </div>

              {/* 2. 커머스 플랫폼 */}
              <div className="px-6 py-8 bg-zinc-100 rounded-xl border border-zinc-200 space-y-2">
                <div className="text-gray-950 text-xl font-bold">[커머스 플랫폼] 벨로타벨로타</div>
                <div className="text-zinc-500 text-sm italic">2025.12 ~ 2026.02</div>
                <p className="text-zinc-700 text-base">반응형 웹 기반의 하이브리드 앱 커머스 플랫폼 프론트엔드 및 API 연동 개발.</p>
              </div>

              {/* 3. 웹사이트 리뉴얼 */}
              <div className="px-6 py-8 bg-zinc-100 rounded-xl border border-zinc-200 space-y-2">
                <div className="text-gray-950 text-xl font-bold">[웹사이트 리뉴얼] (주)미래솔루션</div>
                <div className="text-zinc-500 text-sm italic">2025.08 ~ 2025.11</div>
                <p className="text-zinc-700 text-base">기업 홍보용 반응형 웹사이트 풀스택 개발 및 성능 개선.</p>
              </div>

              {/* 4. 백엔드 고도화 */}
              <div className="px-6 py-8 bg-zinc-100 rounded-xl border border-zinc-200 space-y-2">
                <div className="text-gray-950 text-xl font-bold">[백엔드 고도화] 법무법인 AK</div>
                <div className="text-zinc-500 text-sm italic">2024.01 ~ 2024.04</div>
                <p className="text-zinc-700 text-base">법무법인 고객 상담 및 사례 관리 시스템 백엔드 아키텍처 고도화.</p>
              </div>

              {/* 5. 인프라/DevOps (2칸 차지) */}
              <div className="col-span-1 md:col-span-2 px-6 py-8 bg-zinc-100 rounded-xl border border-zinc-200 space-y-2">
                <div className="text-gray-950 text-xl font-bold">[인프라/DevOps] AI 개발 인프라 및 AWS 마이그레이션</div>
                <div className="text-zinc-500 text-sm italic">2023.03 ~ 2023.05</div>
                <p className="text-zinc-700 text-base">AI 개발을 위한 GPU 서버 인프라 구축 및 기존 서비스의 AWS 환경으로의 마이그레이션 주도.</p>
              </div>
            </div>
          </div>

          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div className="inline-flex flex-col justify-start items-start">
                <img src={icon_resume_07} alt="icon_resume_07" className="w-5 h-5" />
              </div>
              <div className="justify-center text-gray-950 text-2xl font-normal font-['Pretendard'] leading-8">교육 및 자격증</div>
            </div>
            <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
              <div className="self-stretch pb-16 inline-flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-gray-950 text-2xl font-semibold font-['Pretendard'] leading-8">부산 외국어대학교</div>
                </div>
                <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-zinc-900 text-base font-normal font-['Pretendard'] leading-6">컴퓨터공학과 학사</div>
                </div>
                <div className="self-stretch pt-[5px] flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">2008.03 - 2014.02</div>
                </div>
              </div>
              <div className="w-full inline-flex flex-col justify-start items-start gap-4">
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch pb-[0.69px] flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-gray-950 text-lg font-semibold font-['Inter'] leading-7">CCNP(Cisco Certification Network<br />Professional)</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-zinc-500 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">2021.03 취득</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch pb-[0.80px] flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-gray-950 text-lg font-semibold font-['Pretendard'] leading-7">정보처리기사</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-zinc-500 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">2013.12 취득</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
