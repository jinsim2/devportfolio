import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"

function AppHeader() {
    const location = useLocation();

    return (
        <header className="w-full h-20 sticky top-0 z-50 bg-zinc-100/90 border-b border-neutral-300 backdrop-blur-[6px] flex justify-center items-center">
            <div className="w-full flex-1 max-w-[1200px] px-8 py-2 flex justify-between items-center">
                <div className="inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-gray-950 text-2xl font-bold font-['Liberation_Sans'] leading-8">DevPortfolio</div>
                </div>
                <div className="flex justify-end items-center gap-6">
                    <div className="hidden md:flex items-center gap-6">
                        <a href="#home" className="text-zinc-700 hover:text-sky-700 text-base font-normal font-['Pretendard'] leading-6 transition-colors">
                            홈
                        </a>
                        <a href="#skills" className="text-zinc-700 hover:text-sky-700 text-base font-normal font-['Pretendard'] leading-6 transition-colors">
                            핵심 역량
                        </a>
                        <a href="#projects" className="text-zinc-700 hover:text-sky-700 text-base font-normal font-['Pretendard'] leading-6 transition-colors">
                            주요 프로젝트
                        </a>
                        <a href="#experience" className="text-zinc-700 hover:text-sky-700 text-base font-normal font-['Pretendard'] leading-6 transition-colors">
                            실무 경력
                        </a>
                        <a href="#contact" className="text-zinc-700 hover:text-sky-700 text-base font-normal font-['Pretendard'] leading-6 transition-colors">
                            연락처
                        </a>
                    </div>
                    <div className="pl-0 md:pl-6">
                        <Button asChild className="px-6 py-5 bg-sky-700 text-white rounded-sm hover:bg-sky-800 transition-colors text-sm font-normal font-['Pretendard'] tracking-wide">
                            <Link to="/resume" state={{ backgroundLocation: location }}>
                                이력서
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export { AppHeader }