import { ArrowDown } from 'lucide-react';
import mainImage from "@/assets/imgs/main_01.png"
import { Button } from "@/components/ui/button"

function HeroSection() {
    return (
        <section id="home" className="w-full flex justify-center py-24">
            <div className="w-full max-w-7xl px-4 md:px-8 flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
                <div className="flex-1 flex flex-col justify-center items-start gap-8">
                    <div className="w-full">
                        <h1 className="text-sky-950 text-4xl md:text-5xl lg:text-6xl font-medium font-['Pretendard'] leading-tight break-keep">
                            레거시를 <br className="hidden md:block" />모던 아키텍처로 혁신하는 테크 리드
                        </h1>
                    </div>
                    <div className="w-full max-w-2xl">
                        <p className="text-zinc-700 text-base md:text-lg font-normal font-['Pretendard'] leading-relaxed break-keep">
                            10년의 IT 교육 경험을 바탕으로, 소통과 리팩토링에 강점을 가진 올라운더(All-rounder) 풀스택 개발자 강진석입니다.
                        </p>
                    </div>
                    <div className="w-full flex">
                        <Button asChild className="px-8 py-6 bg-sky-700 text-white rounded-sm hover:bg-sky-800 transition-colors gap-2 text-sm font-normal font-['Pretendard'] tracking-wide">
                            <a href="#projects" className="flex items-center gap-2">
                                프로젝트 보기
                                <ArrowDown size={16} />
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="flex-1 w-full flex justify-center items-center">
                    <div className="w-full max-w-md lg:max-w-full bg-zinc-100 rounded-lg shadow-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 overflow-hidden">
                        <img className="w-full h-auto object-cover aspect-[4/5] md:aspect-auto md:h-[542px]" src={mainImage} alt="Profile" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export { HeroSection }