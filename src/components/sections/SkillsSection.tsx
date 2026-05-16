import SkillIcon1 from '@/assets/imgs/icon_skill_01.png'
import SkillIcon2 from '@/assets/imgs/icon_skill_02.png'
import SkillIcon3 from '@/assets/imgs/icon_skill_03.png'

function SkillsSection() {
    return (
        <section id="skills" className="w-full flex justify-center py-24">
            <div className="w-full max-w-7xl px-4 md:px-8 flex flex-col justify-start items-start gap-12">
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-sky-950 text-4xl font-semibold font-['Pretendard'] leading-[48px]">핵심 역량</div>
                </div>
                <div className="self-stretch flex flex-col lg:flex-row w-full justify-start items-stretch gap-8">
                    <div className="flex-1 px-10 py-12 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-3">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <img src={SkillIcon1} alt="Skill Icon 1" className="w-8 h-8" />
                        </div>
                        <div className="self-stretch pt-[0.70px] flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-900 text-2xl font-bold font-['Inter'] leading-8">Frontend</div>
                        </div>
                        <div className="self-stretch h-12 flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-700 text-base font-normal font-['Pretendard'] leading-6">Zustand를 활용한 전역 상태 관리 최적화</div>
                        </div>
                        <div className="self-stretch flex flex-wrap gap-2 pt-4">
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">React</div>
                            </div>
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">Zustand</div>
                            </div>
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">Tailwind CSS</div>
                            </div>
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">Shadcn UI</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 px-10 py-12 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-3">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <img src={SkillIcon2} alt="Skill Icon 2" className="w-8 h-8" />
                        </div>
                        <div className="self-stretch pt-[0.70px] flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-900 text-2xl font-semibold font-['Liberation_Sans'] leading-8">Backend</div>
                        </div>
                        <div className="self-stretch h-12 flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-700 text-base font-normal font-['Pretendard'] leading-6">REST API 설계 및 비즈니스 로직 고도화</div>
                        </div>
                        <div className="self-stretch flex flex-wrap gap-2 pt-4">
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">Python</div>
                            </div>
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">Django(DRF)</div>
                            </div>
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">FastAPI</div>
                            </div>
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">Node.js</div>
                            </div>
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">Java</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 px-10 py-12 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-3">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <img src={SkillIcon3} alt="Skill Icon 3" className="w-8 h-8" />
                        </div>
                        <div className="self-stretch pt-[0.70px] flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-900 text-2xl font-semibold font-['Liberation_Sans'] leading-8">Infra/DB</div>
                        </div>
                        <div className="self-stretch h-12 flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-700 text-base font-normal font-['Pretendard'] leading-6">Docker를 이용한 컨테이너 배포 및 클라우드 아키텍처 설계</div>
                        </div>
                        <div className="self-stretch flex flex-wrap gap-2 pt-4">
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">AWS</div>
                            </div>
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">Docker</div>
                            </div>
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">Linux</div>
                            </div>
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">Oracle</div>
                            </div>
                            <div className="px-3 py-1 bg-zinc-100 rounded-xl inline-flex justify-center items-center">
                                <div className="text-zinc-700 text-sm font-normal font-['Pretendard'] leading-4 tracking-wide">MariaDB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { SkillsSection }