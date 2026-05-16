import { useParams, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { portfolioData } from "@/data/portfolioData";

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // portfolioData.projects 배열에서 ID에 맞는 프로젝트를 찾습니다.
  const project = portfolioData.projects.find(p => p.id === id);

  const handleClose = () => navigate(-1);

  if (!project) {
    return (
      <Dialog open={true} onOpenChange={handleClose}>
        <DialogContent>
          <div className="py-20 text-center text-zinc-500">
            프로젝트 정보를 찾을 수 없습니다.
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const { details } = project;

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-none sm:border-solid">
        <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-zinc-100">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-sky-950">{project.title}</DialogTitle>
          </DialogHeader>
        </div>

        <div className="p-4 md:p-8 space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              {details.description}
            </p>

            <div className="pt-4 flex flex-col items-center gap-4">
              <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">TECHNOLOGIES USED</span>
              <div className="flex flex-wrap justify-center gap-3">
                {details.techStack.frontend?.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm font-medium border border-sky-100">{tech}</span>
                ))}
                {details.techStack.devops?.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm font-medium border border-sky-100">{tech}</span>
                ))}
                {details.techStack.backend?.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">{tech}</span>
                ))}
                {details.techStack.container?.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">{tech}</span>
                ))}
                {details.techStack.infra?.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-zinc-50 text-zinc-600 rounded-full text-sm font-medium border border-zinc-200">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 border-l-4 border-sky-700 pl-4">Architecture Overview</h3>
            <p className="text-zinc-700 text-lg leading-relaxed">
              {details.architectureOverview}
            </p>
            <div className="w-full aspect-video bg-zinc-100 rounded-xl flex items-center justify-center border border-zinc-200 overflow-hidden">
              <img src={project.details.image} className="w-full h-full object-cover" alt="Architecture" />
            </div>
          </div>

          {/* Performance & Deployment (Project 1 special) */}
          {(details.performance || details.deployment) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.performance && (
                <div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-2">
                    {details.icons && <img src={details.icons[0]} alt="icon" className="w-4 h-4" />}
                    <h4 className="text-xl font-bold text-gray-900">성능 최적화</h4>
                  </div>
                  <p className="text-zinc-700 leading-relaxed">{details.performance}</p>
                </div>
              )}
              {details.deployment && (
                <div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-2">
                    {details.icons && <img src={details.icons[1]} alt="icon" className="w-4 h-4" />}
                    <h4 className="text-xl font-bold text-gray-900">배포 안정성</h4>
                  </div>
                  <p className="text-zinc-700 leading-relaxed">{details.deployment}</p>
                </div>
              )}
            </div>
          )}

          {/* Achievements (Project 2 special) */}
          {details.achievements && (
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 border-l-4 border-sky-700 pl-4">Key Achievements</h3>
              <div className="grid grid-cols-1 gap-6">
                {details.achievements.map((a, i) => (
                  <div key={i} className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                    <h4 className="text-xl font-bold text-sky-900 mb-2">{a.title}</h4>
                    <p className="text-zinc-700 whitespace-pre-wrap">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Implementations (Project 3 special) */}
          {details.implementations && (
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 border-l-4 border-sky-700 pl-4">Key Implementations</h3>
              <div className="space-y-6">
                {details.implementations.map((imp, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="text-xl font-bold text-zinc-800">• {imp.title}</h4>
                    <p className="text-zinc-600 pl-4 leading-relaxed">{imp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Troubleshooting (Project 1 special) */}
          {details.troubleshooting && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 border-l-4 border-sky-700 pl-4">Troubleshooting</h3>
              {/* 왼쪽(설명들)과 오른쪽(코드 하나)으로 크게 나눕니다. */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* 왼쪽: 모든 트러블슈팅 설명 리스트 */}
                <div className="space-y-12">
                  {details.troubleshooting.map((t, i) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-2xl font-bold text-zinc-800">{t.title}</h4>
                      <div className="space-y-4 text-zinc-700 leading-relaxed">
                        <p><strong>[문제 상황]</strong> {t.problem}</p>
                        {t.cause && <p><strong>[원인 분석]</strong> {t.cause}</p>}
                        <p><strong>[해결 방안]</strong> {t.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* 오른쪽: 1번 항목에 대한 코드 블록 하나만 배치 */}
                <div className="sticky top-24 bg-zinc-900 rounded-xl p-6 font-mono text-sm text-sky-300 shadow-2xl overflow-hidden">
                  <div className="text-zinc-500 mb-4 border-b border-zinc-800 pb-2 flex justify-between">
                    <span>VideoPlayer.tsx</span>
                    <span className="text-zinc-700 text-xs text-right">Core Logic</span>
                  </div>
                  <pre className="overflow-x-auto">
                    <code>{
                      `const handleTimeUpdate = () => {
  if (videoRef.current) {
    const { currentTime, duration } = videoRef.current;
    // 소수점 오차 해결을 위해 Math.floor 사용
    const progress = Math.floor((currentTime / duration) * 100);
    // 99% 이상일 경우 사용자 편의를 위해 시각적 보정
    setCurrentProgress(progress >= 99 ? 100 : progress);
    
    // 서버 전송 로직 (Throttle 적용)
    sendProgressUpdate(progress);
  }
};
                      
const handleEnded = () => {
  // 비디오 종료 시 명시적으로 100% 처리
  setCurrentProgress(100);
  markAsCompleted();
};
                      
return (
  <video 
    ref={videoRef}
    onTimeUpdate={handleTimeUpdate}
    onEnded={handleEnded}
  />
);`
                    }</code>
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
