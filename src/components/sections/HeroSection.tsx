import { ArrowDown } from 'lucide-react';
import mainImage from "@/assets/imgs/main_01.png"
import { Button } from "@/components/ui/button"

function HeroSection() {
    return (
        <section id="home" className="w-full flex justify-center py-24">
            <div className="w-full max-w-[1200px] min-h-[720px] px-8 flex justify-between items-center">
                <div className="flex-1 h-96 relative">
                    <div className="w-[568px] left-0 top-[-2.11px] absolute inline-flex flex-col justify-start items-start">
                        <div className="w-[529px] justify-center text-sky-950 text-6xl font-medium font-['Pretendard'] leading-[70.40px]">레거시를 <br />모던 아키텍처로 혁신하는 테크 리드</div>
                    </div>
                    <div className="w-[568px] max-w-[672px] left-0 top-[234.57px] absolute inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-zinc-700 text-lg font-normal font-['Pretendard'] leading-7">10년의 IT 교육 경험을 바탕으로, 소통과 리팩토링에 강점을 가진 올<br />라운더(All-rounder) 풀스택 개발자 강진석입니다.</div>
                    </div>
                    <div className="w-[568px] pt-3 left-0 top-[316.77px] absolute flex flex-col justify-start items-start">
                        <Button asChild className="px-8 py-6 bg-sky-700 text-white rounded-sm hover:bg-sky-800 transition-colors gap-2 text-sm font-normal font-['Pretendard'] tracking-wide">
                            <a href="#projects" className="flex items-center gap-2">
                                프로젝트 보기
                                <ArrowDown size={16} />
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start">
                    <div className="self-stretch bg-zinc-100 rounded-lg shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-center items-start overflow-hidden">
                        <img className="self-stretch h-[542px] relative" src={mainImage} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export { HeroSection }