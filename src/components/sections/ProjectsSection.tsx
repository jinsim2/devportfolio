import { Link, useLocation } from "react-router-dom"
import { portfolioData } from "@/data/portfolioData"
import picture_project_01 from '@/assets/imgs/picture_project_01.png'
import picture_project_02 from '@/assets/imgs/picture_project_02.png'
import picture_project_03 from '@/assets/imgs/picture_project_03.png'

// 이미지 매핑 객체 (데이터의 ID에 맞춰 이미지 할당)
const projectImages: Record<string, string> = {
    "1": picture_project_01,
    "2": picture_project_02,
    "3": picture_project_03,
};

function ProjectsSection() {
    const location = useLocation();

    return (
        <section id="projects" className="w-full flex justify-center py-24 bg-zinc-100 scroll-mt-20">
            <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-12">
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-sky-950 text-4xl font-bold font-['Pretendard'] leading-[48px]">주요 프로젝트</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                    {portfolioData.projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col bg-white rounded-2xl shadow-sm outline outline-1 outline-zinc-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Project Image */}
                            <div className="w-full h-56 bg-zinc-200 overflow-hidden relative">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    src={projectImages[project.id] || "https://placehold.co/400x300"}
                                    alt={project.title}
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                            </div>

                            {/* Project Content */}
                            <div className="p-8 flex flex-col flex-1 space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-zinc-900 text-2xl font-bold font-['Pretendard'] leading-tight h-16 flex items-center">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-600 text-base font-normal font-['Pretendard'] leading-relaxed line-clamp-2 h-12">
                                        {project.summary}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-semibold rounded-md border border-sky-100"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-6">
                                    <Link
                                        to={`/project/${project.id}`}
                                        state={{ backgroundLocation: location }}
                                        className="block"
                                    >
                                        <button className="w-full py-3 rounded-xl outline outline-1 outline-sky-700 text-sky-700 text-sm font-bold tracking-wide hover:bg-sky-700 hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
                                            자세히 보기
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export { ProjectsSection }