/*
 * About Page — J-Craft
 * Design: Industrial Elegance
 * Tone: 実務・行政用語調（「現場の声を吸い上げる」「W点接続」「第三者確認型」）
 * Sections: PageHeader → Overview → Message → Role Split → Membership（3種別）→ Governance → Disclosure
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
  const membershipRef = useReveal();
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

      {/* Sticky Sub Nav */}
      <div className="bg-white border-b border-[#E8E4DC] sticky top-[64px] z-30">
        <div className="container">
          <div className="flex gap-6 overflow-x-auto py-3 text-[13px] font-medium">
            {[
              { label: "法人概要", href: "#overview" },
              { label: "代表メッセージ", href: "#message" },
              { label: "会員制度", href: "#membership" },
              { label: "役員・組織", href: "#governance" },
              { label: "情報公開", href: "#disclosure" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[#444] hover:text-[#C8442A] transition-colors pb-1 border-b-2 border-transparent hover:border-[#C8442A]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">

            {/* 法人概要 */}
            <div ref={overviewRef} className="reveal mb-20" id="overview">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-6 pl-5 border-l-4 border-[#C8442A]">
                法人概要
              </h2>
              <div className="border border-[#E5E3DD] overflow-hidden">
                {[
                  { th: "法人名", td: "一般社団法人 日本建設職人支援機構\n（英文表記：Japan Craft Workers Support Organization｜J-Craft）" },
                  { th: "代表理事", td: "松永 昭吾（横浜国立大学／政策研究大学院大学）" },
                  { th: "理事", td: "韓 英志（クラフトバンク株式会社）" },
                  { th: "事務局", td: "クラフトバンク総研（高木・金村）" },
                  { th: "正会員の対象", td: "土木一式または建築一式の建設業許可を有する法人（地域元請建設会社）" },
                  { th: "設立年月日", td: "2026年夏（予定）" },
                  { th: "運営資金", td: "クラフトバンク株式会社が主体として拠出（年間1,000万円規模）" },
                  { th: "正会員・職人会員の年会費", td: "無料" },
                  { th: "所在地", td: "設立登記後に公開" },
                ].map((row, i) => (
                  <div
                    key={row.th}
                    className="grid grid-cols-1 sm:grid-cols-[200px_1fr] border-b border-[#E5E3DD] last:border-b-0"
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

            {/* 代表メッセージ */}
            <div ref={messageRef} className="reveal mb-20" id="message">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-8 pl-5 border-l-4 border-[#C8442A]">
                代表メッセージ
              </h2>

              <div className="bg-[#F7F6F2] border border-[#E5E3DD] p-8 md:p-10" style={{ borderRadius: "2px" }}>
                <div className="flex flex-col sm:flex-row gap-6 mb-8 pb-8 border-b border-[#E5E3DD]">
                  <div
                    className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-[#E0DDD8] border border-[#D5D1C8] flex items-center justify-center text-[#9B9B9B] text-[11px]"
                    style={{ borderRadius: "2px" }}
                  >
                    写真
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.15em] text-[#C8442A] mb-1">代表理事</div>
                    <div className="font-serif font-bold text-[#0E1A30] text-[22px] mb-1">松永 昭吾</div>
                    <div className="text-[13px] text-[#666] leading-relaxed">
                      横浜国立大学 / 政策研究大学院大学<br />
                      建設産業政策・公共調達制度を専門とする研究者。国土交通省の各種委員会委員を歴任。
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <p className="text-[15px] leading-loose text-[#1F1F1F]">
                    建設産業の担い手不足は、今や「現場の問題」ではなく「社会インフラの問題」です。専門工事会社が人材を確保できなければ、道路も橋も学校も、誰も維持できなくなります。
                  </p>
                  <p className="text-[15px] leading-loose text-[#1F1F1F]">
                    しかし、協力会社単体でこの問題を解決することは困難です。採用力も、DX投資も、処遇改善も、すべて「元請との関係性」の中で決まります。元請が協力会社を支援する仕組みを、産業全体の「標準」として定着させることが、唯一の根本解だと私は考えています。
                  </p>
                  <p className="text-[15px] leading-loose text-[#1F1F1F]">
                    J-Craftは、その「標準」を作るための器です。民間主導でありながら、行政・金融・教育機関と連携できる非営利の枠組みとして、認定制度・研修・政策提言の3軸で動いていきます。現場の声を吸い上げる職人会員制度を設け、認定基準の改定・政策提言の根拠として活用します。
                  </p>
                  <p className="text-[15px] leading-loose text-[#1F1F1F]">
                    3年以内に、認定企業が発注者・自治体・金融機関から「当然見られる」状態を作る。将来的には経審W点への接続も視野に入れ、第三者確認型の審査体制を整備していきます。地域の建設産業を守りたいと考える元請企業の皆さんに、ぜひ加盟いただきたいと思います。
                  </p>
                  <div className="pt-4 text-right">
                    <span className="font-serif font-semibold text-[#0E1A30] text-[16px]">
                      代表理事　松永 昭吾
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 役割分担 */}
            <div ref={roleRef} className="reveal mb-20" id="role">
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

            {/* 会員制度（3種別） */}
            <div ref={membershipRef} className="reveal mb-20" id="membership">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-4 pl-5 border-l-4 border-[#C8442A]">
                会員制度
              </h2>
              <p className="text-[15px] leading-loose text-[#1F1F1F] mb-8">
                J-Craftは正会員・職人会員の年会費を無料とします。運営資金はクラフトバンク株式会社の拠出を主財源とし、産業全体で機構を支える体制を構築します。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {[
                  {
                    type: "正会員",
                    target: "土木一式または建築一式の建設業許可を有する法人",
                    fee: "無料",
                    note: "議決権なし",
                    benefits: [
                      "協力会社パートナーシップ宣言 認定の申請資格",
                      "認定ロゴ・認証番号の使用権",
                      "セミナー・研修への優先参加",
                      "政策提言への意見反映機会",
                    ],
                    highlight: true,
                    badge: "MAIN",
                  },
                  {
                    type: "職人会員",
                    target: "建設職人・専門工事会社（協力会社）",
                    fee: "無料",
                    note: "議決権なし",
                    benefits: [
                      "部会への参加資格",
                      "アンケート・意見提出の窓口",
                      "認定基準改定への意見反映",
                      "研修・勉強会への参加",
                    ],
                    highlight: false,
                    badge: "CRAFTSMEN",
                  },
                  {
                    type: "サポーター会員",
                    target: "応援団（企業・個人）",
                    fee: "有料（規程別途）",
                    note: "議決権なし",
                    benefits: [
                      "機構活動報告書の提供",
                      "イベント・セミナーへの招待",
                      "機構ウェブサイトへのロゴ掲載",
                      "政策提言活動への参画機会",
                    ],
                    highlight: false,
                    badge: "SUPPORTER",
                  },
                ].map((plan) => (
                  <div
                    key={plan.type}
                    className={`border p-6 ${plan.highlight ? "border-[#C8442A] bg-white" : "border-[#E5E3DD] bg-white"}`}
                    style={{ borderRadius: "2px" }}
                  >
                    <div className={`text-[10px] font-semibold tracking-[0.15em] text-white px-2 py-1 inline-block mb-3 ${plan.highlight ? "bg-[#C8442A]" : "bg-[#0E1A30]"}`}>
                      {plan.badge}
                    </div>
                    <div className="font-serif font-semibold text-[#0E1A30] text-[18px] mb-1">{plan.type}</div>
                    <div className="text-[12px] text-[#888] mb-3 leading-snug">{plan.target}</div>
                    <div className="mb-1">
                      <span className="font-semibold text-[#C8442A] text-[15px]">{plan.fee}</span>
                    </div>
                    <div className="text-[11px] text-[#999] mb-4 pb-4 border-b border-[#E5E3DD]">{plan.note}</div>
                    <ul className="space-y-2">
                      {plan.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-[13px] text-[#444]">
                          <span className="text-[#C8442A] font-bold flex-shrink-0 mt-0.5">✓</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* 職人会員の設計意図 */}
              <div className="bg-[#F7F6F2] border border-[#E5E3DD] px-6 py-5 mb-5" style={{ borderRadius: "2px" }}>
                <div className="text-[11px] font-semibold tracking-[0.12em] text-[#C8442A] mb-2">職人会員制度の設計意図</div>
                <p className="text-[#444] text-[14px] leading-loose m-0">
                  職人会員は、個人（職人）および専門工事会社（法人）の両方を対象とします。無料で参加しやすくし、草の根の参加を促進。部会での意見は認定基準の改定・政策提言の根拠として活用し、「現場の声を吸い上げている社団」としての正当性を担保します。将来の経審W点申請時に「協力会社・職人からのフィードバックを反映した認証制度」として提示できる設計です。
                </p>
              </div>

              <div className="bg-[#0E1A30]/5 border border-[#0E1A30]/10 px-6 py-5" style={{ borderRadius: "2px" }}>
                <p className="text-[#444] text-[14px] leading-loose m-0">
                  <strong className="text-[#0E1A30]">収益モデルについて：</strong>
                  当機構の主財源はクラフトバンク株式会社からの拠出金（年間1,000万円規模）です。正会員・職人会員の年会費は無料とし、サポーター会員の会費・認定審査料・年間認証利用料により財務的自立を目指します。収支は毎年度の事業報告書にて公開します。
                </p>
              </div>
            </div>

            {/* 役員 */}
            <div ref={govRef} className="reveal mb-20" id="governance">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-4 pl-5 border-l-4 border-[#C8442A]">
                役員・組織体制
              </h2>
              <p className="text-[15px] text-[#6B6B6B] mb-8">
                大学・研究機関の有識者と、現場知見を持つ民間メンバーで構成しています。認定審査委員会には学識経験者・国交省OBを加え、第三者確認型の審査体制を整備します。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { role: "代表理事", name: "松永 昭吾", aff: "横浜国立大学／\n政策研究大学院大学" },
                  { role: "理事", name: "韓 英志", aff: "クラフトバンク株式会社" },
                  { role: "事務局長", name: "（選定中）", aff: "2026年夏 着任予定" },
                  { role: "顧問（予定）", name: "矢吹 先生", aff: "東京都市大学／\n国交省 BIM/CIM 推進委員長" },
                ].map((person) => (
                  <div key={person.name} className="text-center">
                    <div
                      className="w-full aspect-square bg-[#E0DDD8] border border-[#D5D1C8] flex items-center justify-center text-[#9B9B9B] text-[11px] mb-3"
                      style={{ borderRadius: "2px" }}
                    >
                      portrait
                    </div>
                    <div className="text-[11px] font-semibold tracking-[0.12em] text-[#C8442A] mb-1">{person.role}</div>
                    <div className="font-serif font-semibold text-[#0E1A30] text-[15px] mb-1">{person.name}</div>
                    <div className="text-[12px] text-[#888] leading-snug whitespace-pre-line">{person.aff}</div>
                  </div>
                ))}
              </div>

              {/* 認定審査委員会 */}
              <div className="mt-10 border border-[#E5E3DD] p-6 bg-[#FAFAF8]" style={{ borderRadius: "2px" }}>
                <div className="text-[11px] font-semibold tracking-[0.12em] text-[#C8442A] mb-3">認定審査委員会（設立後に設置）</div>
                <p className="text-[14px] text-[#444] leading-relaxed mb-4">
                  認定審査委員会は、理事2名に加え、学識経験者（大学教授・研究者）1〜2名および国交省OB 1名を加えた計3〜5名で構成します。第三者が関与する審査体制により、認証の客観性・中立性を担保し、将来の経審W点組み込み申請時に「第三者審査機関による認証」として提示できる設計です。
                </p>
                <div className="border border-[#E5E3DD] overflow-hidden">
                  {[
                    { role: "理事", count: "2名", candidate: "松永先生・韓（または矢吹先生）" },
                    { role: "学識経験者", count: "1〜2名", candidate: "大学教授・研究者（建設経営・労働政策等）" },
                    { role: "国交省OB", count: "1名", candidate: "総合政策局・建設業政策ラインのOB" },
                  ].map((row, i) => (
                    <div
                      key={row.role}
                      className="grid grid-cols-[100px_60px_1fr] border-b border-[#E5E3DD] last:border-b-0 text-[13px]"
                      style={{ background: i % 2 === 0 ? "white" : "#FAFAF8" }}
                    >
                      <div className="px-4 py-3 font-semibold text-[#0E1A30] border-r border-[#E5E3DD]">{row.role}</div>
                      <div className="px-4 py-3 text-[#666] border-r border-[#E5E3DD]">{row.count}</div>
                      <div className="px-4 py-3 text-[#444]">{row.candidate}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 情報公開 */}
            <div ref={disclosureRef} className="reveal mb-10" id="disclosure">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-4 pl-5 border-l-4 border-[#C8442A]">
                情報公開
              </h2>
              <p className="text-[15px] text-[#6B6B6B] mb-6">
                非営利法人として、組織運営の透明性を重視します。設立後、以下の情報を公開していきます。
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "定款（PDF）",
                  "役員名簿・略歴",
                  "事業報告書（毎年度更新）",
                  "役員報酬規程",
                  "運営資金の出所（クラフトバンク拠出 年間1,000万円規模）",
                  "貸借対照表・損益計算書（決算公告）",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] text-[#444]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8442A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/disclosure"
                className="inline-flex items-center gap-2 text-[#C8442A] text-[14px] font-semibold hover:underline"
              >
                情報公開ページを見る →
              </Link>
            </div>

          </div>
        </div>
      </section>

      <div className="bg-[#F7F6F2] border-t border-[#E5E3DD] py-4 text-center text-[12px] text-[#999]">
        本ページの情報は2026年5月時点のものです。設立登記完了後、正式な法人情報・所在地・連絡先を更新します。
      </div>

      <Footer />
    </div>
  );
}
