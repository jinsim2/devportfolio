function ExprienceSection() {
    return (
        <section id="experience" className="w-full flex justify-center py-24">
            <div className="w-full max-w-7xl px-4 md:px-8 flex flex-col justify-start items-start gap-12">
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-sky-950 text-4xl font-normal font-['Pretendard'] leading-[48px]">실무 경력</div>
                </div>
                
                <div className="w-full flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-y-8 md:gap-y-0">
                    
                    {/* Item 1 */}
                    {/* Left: Title */}
                    <div className="flex flex-col md:text-right pt-2 md:pr-8">
                        <div className="text-zinc-900 text-2xl font-semibold font-['WenQuanYi_Zen_Hei'] leading-8">아이티윌 부산 교육 센터</div>
                        <div className="text-sky-950 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide mt-1">IT 교육 / 인프라 엔지니어</div>
                        <div className="text-zinc-700 text-base font-normal font-['Liberation_Mono'] leading-6 mt-2">2014.12 ~ 2026.03</div>
                    </div>
                    
                    {/* Center: Timeline Line */}
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-4 h-4 bg-blue-800 rounded-full border-4 border-white shadow-sm mt-3 relative z-10" />
                        <div className="w-0.5 h-full bg-sky-950/20 -mt-2" />
                    </div>

                    {/* Right: Content */}
                    <div className="md:pl-8 md:pb-24">
                        <div className="p-6 bg-zinc-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200">
                            <div className="pb-6 text-zinc-700 text-base font-normal font-['Pretendard'] leading-6">
                                IT 교육 과정 기획 및 교육 / 클라우드 기반 인프라 구축 및 관리
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-zinc-900 text-sm font-normal font-['Pretendard'] leading-5 marker:text-zinc-400">
                                <li>8년 연속 우수 훈련 기관 지정 공헌</li>
                                <li>CCNA/CCNP 수강생 자격증 취득률 90% 이상 달성</li>
                                <li>컨테이너 기반 배포 서버 구축 및 AWS 클라우드 도입 주도</li>
                                <li>평균 취업률 70% 이상 향상 기여</li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 2 */}
                    {/* Left: Title */}
                    <div className="flex flex-col md:text-right pt-2 md:pr-8">
                        <div className="text-zinc-900 text-2xl font-semibold font-['WenQuanYi_Zen_Hei'] leading-8">네오컴퓨터</div>
                        <div className="text-sky-950 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide mt-1">기술관리 / 영업팀 과장</div>
                        <div className="text-zinc-700 text-base font-normal font-['Liberation_Mono'] leading-6 mt-2">2008.09 ~ 2014.07</div>
                    </div>
                    
                    {/* Center: Timeline Line */}
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-4 h-4 bg-sky-950 rounded-full border-4 border-white shadow-sm mt-3 relative z-10" />
                        <div className="w-0.5 h-full bg-sky-950/20 -mt-2" />
                    </div>

                    {/* Right: Content */}
                    <div className="md:pl-8">
                        <div className="p-6 bg-zinc-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200">
                            <div className="pb-6 text-zinc-700 text-base font-normal font-['Pretendard'] leading-6">
                                학내망 무선 네트워크 인프라 구축 및 기술 총괄 / 기술관리 영업 
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-zinc-900 text-sm font-normal font-['Pretendard'] leading-5 marker:text-zinc-400">
                                <li>부산 지역 10개 이상 학교 무선 네트워크망 구축 성공</li>
                                <li>스마트 교실 무선 네트워크 최적화</li>
                                <li>교육청 주관 PC 운영 체제 전환 프로젝트 완수</li>
                                <li>기술 영업을 통한 유지보수 계약 20% 확대</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { ExprienceSection }