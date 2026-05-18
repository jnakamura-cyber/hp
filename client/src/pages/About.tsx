/*
 * About Page — J-Craft
 * Design: Industrial Elegance
 * Sections: PageHeader → Overview → Message → Role Split → Governance → Disclosure
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const ABOUT_BG = "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2400&q=80";

export default function About() {
  const overviewRef = useReveal();
  const messageRef = useReveal();
  const roleRef = useReveal();
  const govRef = useReveal();
  const disclosureRef = useReveal();

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Header />

      {/* Page Header */}
      <section
        className="relative pt-[72px] pb-20 overflow-hidden"
        style={{
          background: "#0E1A30",
          backgroundImage: `linear-gradient(120deg, rgba(14,26,48,0.92) 0%, rgba(14,26,48,0.72) 100%), url(${ABOUT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container pt-16 relative z-10">
          <nav className="text-[12px] text-white/60 mb-5 tracking-wide">
            <Link href="/" className="text-white/60 hover:text-white no-underline transition-colors">HOME</Link>
            <span className="mx-2">／</span>
            <span>機構について</span>
          </nav>
          <h1 className="font-serif font-semibold text-white mb-5 leading-tight" style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
            機構について
          </h1>
          <p className="text-white/88 max-w-2xl leading-loose" style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}>
            建設産業の担い手不足は、現場単体では解決できません。J-Craftは、地域元請を中心とした民間主導の支援機構として、認証・教育・政策提言の3軸で業界の標準を作っていきます。
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">

            {/* 法人概要 */}
            <div ref={overviewRef} className="reveal mb-16" id="overview">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-6 pl-5 border-l-4 border-[#C8442A]">
                法人概要
              </h2>
              <div className="border border-[#E5E3DD] overflow-hidden">
                {[
                  { th: "法人名", td: "一般社団法人 日本建設職人支援機構\n（英文表記：Japan Craft Workers Support Organization｜J-Craft）" },
                  { th: "代表理事", td: "松永 昭吾（横浜国立大学／政策研究大学院大学）" },
                  { th: "理事", td: "韓 英志（クラフトバンク株式会社）" },
                  { th: "事務局", td: "クラフトバンク総研（高木・金村）" },
                  { th: "主な加盟対象", td: "地域元請建設会社" },
                  { th: "設立年月日", td: "2026年夏（予定）" },
                  { th: "運営資金", td: "クラフトバンクが主体として拠出（年間1,000万円規模）／会費は無料" },
                  { th: "所在地", td: "設立登記後に公開" },
                ].map((row, i) => (
                  <div
                    key={row.th}
                    className="grid grid-cols-1 sm:grid-cols-[180px_1fr] border-b border-[#E5E3DD] last:border-b-0"
                    style={{ background: i % 2 === 0 ? "#FAFAF8" : "white" }}
                  >
                    <div className="px-5 py-4 text-[14px] font-semibold text-[#0E1A30] bg-[#F7F6F2] border-b sm:border-b-0 sm:border-r border-[#E5E3DD]">
                      {row.th}
                    </div>
                    <div className="px-5 py-4 text-[14px] text-[#1F1F1F] leading-relaxed whitespace-pre-line">
                      {row.td}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* なぜ設立したか */}
            <div ref={messageRef} className="reveal mb-16" id="message">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-6 pl-5 border-l-4 border-[#C8442A]">
                なぜ設立したか
              </h2>
              <p className="text-[15px] leading-loose text-[#1F1F1F] mb-5">
                建設産業の担い手不足は、専門工事会社（協力会社）単体では解決できません。地域元請が協力会社を支援する仕組みを、民間主導で作ることが必要です。一方で、クラフトバンク単体では「行政との連携が難しい」「政策提言ができない」「CB色が強い」という3つの限界がありました。
              </p>
              <p className="text-[15px] leading-loose text-[#1F1F1F]">
                J-Craftは、こうした課題を突破するための「公益的な器」として設立されます。社団という非営利の枠組みで、業界全体の標準を作り、行政・金融機関・教育機関と連携できる中立的なプラットフォームを目指します。
              </p>
            </div>

            {/* 役割分担 */}
            <div ref={roleRef} className="reveal mb-16" id="role">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-6 pl-5 border-l-4 border-[#C8442A]">
                クラフトバンクとの役割分担
              </h2>
              <p className="text-[15px] leading-loose text-[#1F1F1F] mb-6">
                J-Craftとクラフトバンク株式会社は、明確に役割を分けて活動します。社団は業界の「標準」を作る側、クラフトバンクはその標準に対応する「実務」を提供する側です。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    org: "J-CRAFT",
                    label: "業界の空気・標準を作る",
                    desc: "政策提言、認定制度の運営、教育・研修を通じた普及啓発。第三者性・公益性を担保し、行政・関係省庁との連携窓口を担います。",
                    accent: "#C8442A",
                  },
                  {
                    org: "CRAFTBANK",
                    label: "標準に対応する実務を提供",
                    desc: "認定要件に対応するDXツール、業務支援サービス、人材プラットフォームを、民間企業として提供。社団の標準と相互補完の関係になります。",
                    accent: "#0E1A30",
                  },
                ].map((card) => (
                  <div
                    key={card.org}
                    className="border border-[#E5E3DD] p-7 bg-white"
                    style={{ borderRadius: "2px" }}
                  >
                    <div className="text-[11px] font-semibold tracking-[0.15em] mb-3" style={{ color: card.accent }}>
                      {card.org}
                    </div>
                    <div className="font-serif font-semibold text-[#0E1A30] text-[20px] mb-4 leading-snug">
                      {card.label}
                    </div>
                    <p className="text-[14px] text-[#6B6B6B] leading-relaxed m-0">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 役員 */}
            <div ref={govRef} className="reveal mb-16" id="governance">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-4 pl-5 border-l-4 border-[#C8442A]">
                役員・組織体制
              </h2>
              <p className="text-[15px] text-[#6B6B6B] mb-8">
                大学・研究機関の有識者と、現場知見を持つ民間メンバーで構成しています。女性理事および事務局長は選定中です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { role: "代表理事", name: "松永 昭吾", aff: "横浜国立大学／\n政策研究大学院大学" },
                  { role: "理事", name: "韓 英志", aff: "クラフトバンク株式会社" },
                  { role: "事務局長", name: "（選定中）", aff: "2026年夏 着任予定" },
                  { role: "顧問（予定）", name: "矢吹 先生", aff: "東京都市大学／\n国交省 BIM/CIM 推進委員長" },
                ].map((person) => (
                  <div key={person.name}>
                    <div
                      className="bg-[#F0EDE8] border border-[#E5E3DD] mb-3 flex items-center justify-center text-[#9B9B9B] text-[12px]"
                      style={{ aspectRatio: "4/5" }}
                    >
                      portrait
                    </div>
                    <div className="text-[11px] font-semibold tracking-[0.12em] text-[#C8442A] mb-1">{person.role}</div>
                    <div className="font-semibold text-[#0E1A30] text-[15px] mb-1">{person.name}</div>
                    <div className="text-[12px] text-[#6B6B6B] leading-snug whitespace-pre-line">{person.aff}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 情報公開 */}
            <div ref={disclosureRef} className="reveal" id="disclosure">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-4 pl-5 border-l-4 border-[#C8442A]">
                情報公開
              </h2>
              <p className="text-[15px] leading-loose text-[#1F1F1F] mb-5">
                非営利法人として、組織運営の透明性を重視します。設立後、以下の情報を公開していきます。
              </p>
              <ul className="list-none m-0 p-0 space-y-2 mb-6">
                {[
                  "定款（PDF）",
                  "役員名簿・略歴",
                  "事業報告書（毎年度更新）",
                  "役員報酬規程",
                  "運営資金の出所（クラフトバンク拠出 年間1,000万円規模）",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-[#1F1F1F]">
                    <span className="text-[#C8442A] font-bold mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="bg-[#F7F6F2] border-l-4 border-[#0E1A30] px-5 py-4 text-[13px] text-[#6B6B6B] leading-relaxed"
              >
                本ページの情報は2026年5月時点のものです。設立登記完了後、正式な法人情報・所在地・連絡先を更新します。
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
