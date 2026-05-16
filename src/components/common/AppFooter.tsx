import { portfolioData } from "@/data/portfolioData"; // 데이터 임포트
import icon_footer_01 from "@/assets/imgs/icon_footer_01.png";
import icon_footer_02 from "@/assets/imgs/icon_footer_02.png";
import icon_footer_03 from "@/assets/imgs/icon_footer_03.png";

function AppFooter() {
    const { contact } = portfolioData.resume;

    return (
        <footer id="contact" className="w-full pt-28 flex flex-col justify-start items-center">
            <div className="w-full py-12 bg-zinc-100 border-t border-neutral-300 flex justify-center items-center">
                <div className="w-full max-w-[1200px] px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                    <div className="inline-flex flex-col justify-start items-center md:items-start gap-2 text-center md:text-left">
                        <div className="justify-center text-gray-950 text-2xl font-semibold font-['Liberation_Sans'] leading-8">DevPortfolio</div>
                        <div className="justify-center text-zinc-700 text-base font-normal font-['Pretendard'] leading-6">© 2026 Precision Engineering. Crafted for high-performance scale.</div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-start items-center gap-6">
                        {/* 이메일 링크 */}
                        <a
                            href={`mailto:${contact.email}`}
                            className="self-stretch pb-[0.59px] opacity-80 flex justify-start items-center gap-2 hover:opacity-100 hover:text-sky-700 transition-all"
                        >
                            <img className="w-5 h-4 object-contain" src={icon_footer_01} alt="email" />
                            <div className="justify-center text-zinc-700 text-base font-normal font-['Pretendard'] leading-6">{contact.email}</div>
                        </a>

                        {/* 깃허브 링크 */}
                        <a
                            href={`https://${contact.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="self-stretch pb-[0.59px] opacity-80 flex justify-start items-center gap-2 hover:opacity-100 hover:text-sky-700 transition-all"
                        >
                            <img className="w-5 h-4 object-contain" src={icon_footer_02} alt="github" />
                            <div className="justify-center text-zinc-700 text-base font-normal font-['Pretendard'] leading-6">GitHub</div>
                        </a>

                        {/* 전화번호 링크 */}
                        <a
                            href={`tel:${contact.phone}`}
                            className="self-stretch pb-[0.59px] opacity-80 flex justify-start items-center gap-2 hover:opacity-100 hover:text-sky-700 transition-all"
                        >
                            <img className="w-5 h-4 object-contain" src={icon_footer_03} alt="phone" />
                            <div className="justify-center text-zinc-700 text-base font-normal font-['Pretendard'] leading-6">{contact.phone}</div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { AppFooter }
