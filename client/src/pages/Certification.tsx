/*
 * Certification Page — J-Craft
 * Design: Industrial Elegance
 * Tone: 実務・行政用語調（第三者確認型、W点接続、エビデンス）
 */

import { useEffect, useRef, useState } from "react";
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

const CERT_BG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80";

const CATEGORIES = [
  {
    id: "A",
    label: "採用支援",
    color: "#1B4F8A",
    desc: "協力会社の採用活動を元請が主体的に支援していること",
    examples: ["合同採用サイトの運営・求人票作成支援", "採用費用の補助（広告費・エージェント費等）", "合同インターンシップの開催"],
    evidence: ["合同採用サイトのURL・求人票の写し", "費用補助の支払い記録", "インターン実施報告書"],
  },
  {
    id: "B",
    label: "教育・育成支援",
    color: "#2E7D32",
    desc: "協力会社の人材育成・資格取得を元請が支援していること",
    examples: ["協力会社向け研修・勉強会の提供", "資格取得費用の補助", "技術指導・OJT支援"],
    evidence: ["研修案内・受講者名簿", "費用補助の領収書", "研修実施報告書"],
  },
  {
    id: "C",
    label: "DX支援",
    color: "#6A1B9A",
    desc: "協力会社のデジタル化・DX推進を元請が支援していること",
    examples: ["DXツール導入支援・費用補助", "BIM/CIM習得支援", "施工管理アプリ等の共同導入"],
    evidence: ["ツール導入契約書の写し", "費用補助の支払い記録", "BIM/CIM研修の受講証明"],
  },
  {
    id: "E",
    label: "安全・環境支援",
    color: "#E65100",
    desc: "協力会社の安全衛生・福利厚生を元請が支援していること",
    examples: ["労働安全衛生の向上支援", "福利厚生・保険加入支援", "安全勉強会・KY活動の共同実施"],
    evidence: ["安全協定書", "保険加入証明", "勉強会案内・参加記録"],
  },
];

const FAQ_ITEMS = [
  {
    q: "認定の対象となる企業はどのような会社ですか？",
    a: "土木一式または建築一式の建設業許可を有する法人（地域元請建設会社）で、J-Craftの正会員として加盟いただいた企業が対象です。協力会社（専門工事会社）への支援実績を証跡とともに申請いただきます。",
  },
  {
    q: "認定基準の「カテゴリD（経営・財務支援）」はなぜないのですか？",
    a: "2026年5月の論点整理において、カテゴリD（経営・財務支援）は認定基準から削除することが確定しました。現在はA（採用）・B（教育育成）・C（DX）・E（安全環境）の4カテゴリで構成しています。",
  },
  {
    q: "審査料・ライセンス料の支払い方法は？",
    a: "審査料（10万円）は申請時に、年間認証利用料（12万円）は認証付与後・毎年更新時に請求します。振込による支払いを予定しています。詳細は認証規程（Annex）に定めます。",
  },
  {
    q: "第三者確認とはどのような手続きですか？",
    a: "申請書・証跡書類の提出後、事務局が協力会社（受益者）へのヒアリングまたは確認書の取得を行います。自己申告だけでは完結しない設計とし、認証の客観性・中立性を担保します。将来の経審W点組み込み申請時に「第三者審査機関による認証」として提示できる体制です。",
  },
  {
    q: "認定は何カテゴリ以上で取得できますか？",
    a: "認証要件数（何カテゴリ以上で認定とするか）は現在検討中です。確定次第、認証規程（Annex）に明記し、本ページを更新します。",
  },
  {
    q: "認定の有効期間と更新手続きは？",
    a: "認定は1年間有効で、毎年更新が必要です。更新時には年間認証利用料（12万円）の納入と、継続審査（支援実績の確認）が必要です。",
  },
  {
    q: "認定を取り消される場合はありますか？",
    a: "支援実績の虚偽申告が判明した場合、認定基準を満たさなくなった場合、または年間認証利用料の未納が続く場合は、認定を取り消すことがあります。取消条件の詳細は認証規程（Annex）に定めます。",
  },
];

export default function Certification() {
  const overviewRef = useReveal();
  const targetRef = useReveal();
  const categoriesRef = useReveal();
  const feeRef = useReveal();
  const flowRef = useReveal();
  const committeeRef = useReveal();
  const faqRef = useReveal();
  const ctaRef = useReveal();

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Header />

      <section
        className="relative pt-[72px] pb-20 overflow-hidden"
        style={{
          background: "#0E1A30",
          backgroundImage: `linear-gradient(120deg, rgba(14,26,48,0.90) 0%, rgba(14,26,48,0.70) 100%), url(${CERT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container pt-16 relative z-10">
          <nav className="text-[12px] text-white/60 mb-5 tracking-wide">
            <Link href="/" className="text-white/60 hover:text-white no-underline transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <span>認定制度</span>
          </nav>
          <h1 className="font-serif font-semibold text-white mb-5 leading-tight" style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
            認定制度
          </h1>
          <p className="text-white/80 max-w-2xl leading-loose" style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}>
            「協力会社パートナーシップ宣言」認定は、地域元請建設会社が協力会社を支援していることを、第三者確認型の審査体制で証明する制度です。将来の経審W点接続を視野に入れた設計です。
          </p>
        </div>
      </section>

      <div className="bg-white border-b border-[#E8E4DC] sticky top-[64px] z-30">
        <div className="container">
          <div className="flex gap-6 overflow-x-auto py-3 text-[13px] font-medium">
            {[
              { label: "認定の概要", href: "#overview" },
              { label: "認証の対象", href: "#target" },
              { label: "認定基準", href: "#categories" },
              { label: "費用", href: "#fee" },
              { label: "審査フロー", href: "#flow" },
              { label: "審査委員会", href: "#committee" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="whitespace-nowrap text-[#444] hover:text-[#C8442A] transition-colors pb-1 border-b-2 border-transparent hover:border-[#C8442A]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">

            <div ref={overviewRef} className="reveal mb-20" id="overview">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-6 pl-5 border-l-4 border-[#C8442A]">
                認定の概要
              </h2>
              <p className="text-[15px] leading-loose text-[#1F1F1F] mb-6">
                「協力会社パートナーシップ宣言」認定は、地域元請建設会社が協力会社（専門工事会社）を主体的に支援していることを、証跡と第三者確認によって認証する制度です。
              </p>
              <p className="text-[15px] leading-loose text-[#1F1F1F] mb-6">
                認定を受けた企業は、認定ロゴ・認証番号を使用する権利を取得し、J-Craftの公式ウェブサイトに掲載されます。発注者・自治体・金融機関に対して、協力会社支援への取り組みを客観的に示すことができます。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: "第三者", label: "認証の客観性", desc: "第三者確認型の審査体制。自己申告だけでは完結しない設計。" },
                  { icon: "W点", label: "W点接続を視野に", desc: "将来の経審W点組み込み申請時に「第三者審査機関による認証」として提示できる。" },
                  { icon: "現場", label: "現場の声を反映", desc: "職人会員・協力会社からのフィードバックを認定基準の改定に活用。" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#F7F6F2] border border-[#E5E3DD] p-5" style={{ borderRadius: "2px" }}>
                    <div className="text-[11px] font-semibold tracking-[0.15em] text-[#C8442A] mb-2">{item.icon}</div>
                    <div className="font-semibold text-[#0E1A30] text-[14px] mb-1">{item.label}</div>
                    <p className="text-[13px] text-[#666] leading-relaxed m-0">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div ref={targetRef} className="reveal mb-20" id="target">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-6 pl-5 border-l-4 border-[#C8442A]">
                認証の対象
              </h2>
              <div className="bg-[#0E1A30] text-white px-7 py-6 mb-6" style={{ borderRadius: "2px" }}>
                <div className="text-[11px] font-semibold tracking-[0.15em] text-white/60 mb-2">認証対象の定義</div>
                <p className="text-[17px] font-serif font-semibold leading-relaxed m-0">
                  全建加盟の地域元請建設会社が、協力会社（専門工事会社）を支援していること
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "申請者は、J-Craftの正会員（土木一式または建築一式の建設業許可を有する法人）であること",
                  "申請時点で、A・B・C・Eのいずれかのカテゴリにおける支援実績があること",
                  "支援の受益者（協力会社）が実在し、第三者確認に応じられること",
                  "認定審査料（10万円）を申請時に納入できること",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-[#444]">
                    <span className="text-[#C8442A] font-bold flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div ref={categoriesRef} className="reveal mb-20" id="categories">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-4 pl-5 border-l-4 border-[#C8442A]">
                認定基準カテゴリ
              </h2>
              <p className="text-[15px] leading-loose text-[#1F1F1F] mb-8">
                認定基準は「支援」の定義を4カテゴリで構成します（カテゴリDは削除）。各カテゴリの支援実績を証跡とともに申請します。
              </p>
              <div className="space-y-5">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="border border-[#E5E3DD] overflow-hidden" style={{ borderRadius: "2px" }}>
                    <div className="px-6 py-4 flex items-center gap-4" style={{ background: cat.color, color: "white" }}>
                      <span className="font-serif font-bold text-[22px] opacity-80">{cat.id}</span>
                      <div>
                        <div className="font-semibold text-[16px]">{cat.label}</div>
                        <div className="text-[12px] opacity-80">{cat.desc}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E3DD]">
                      <div className="px-6 py-5">
                        <div className="text-[11px] font-semibold tracking-[0.12em] text-[#888] mb-3">支援内容例</div>
                        <ul className="space-y-2">
                          {cat.examples.map((ex) => (
                            <li key={ex} className="flex items-start gap-2 text-[13px] text-[#444]">
                              <span className="text-[#C8442A] font-bold flex-shrink-0 mt-0.5">·</span>
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="px-6 py-5 bg-[#FAFAF8]">
                        <div className="text-[11px] font-semibold tracking-[0.12em] text-[#888] mb-3">エビデンス例</div>
                        <ul className="space-y-2">
                          {cat.evidence.map((ev) => (
                            <li key={ev} className="flex items-start gap-2 text-[13px] text-[#444]">
                              <span className="text-[#0E1A30] font-bold flex-shrink-0 mt-0.5">·</span>
                              {ev}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-[#FFF8F6] border border-[#F5C6BB] px-5 py-4 text-[13px] text-[#8B3A2A]" style={{ borderRadius: "2px" }}>
                認証要件数（何カテゴリ以上で認定とするか）は現在検討中です。確定次第、認証規程（Annex）に明記し、本ページを更新します。
              </div>
            </div>

            <div ref={feeRef} className="reveal mb-20" id="fee">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-6 pl-5 border-l-4 border-[#C8442A]">
                費用
              </h2>
              <div className="border border-[#E5E3DD] overflow-hidden mb-5" style={{ borderRadius: "2px" }}>
                <div className="grid grid-cols-3 bg-[#0E1A30] text-white text-[12px] font-semibold tracking-[0.1em]">
                  <div className="px-5 py-3">項目</div>
                  <div className="px-5 py-3 border-l border-white/10">金額</div>
                  <div className="px-5 py-3 border-l border-white/10">タイミング</div>
                </div>
                {[
                  { item: "認定審査料", amount: "10万円（ショット）", timing: "申請時" },
                  { item: "年間認証利用料", amount: "12万円／年", timing: "認証付与後・毎年更新時" },
                ].map((row, i) => (
                  <div key={row.item} className="grid grid-cols-3 border-t border-[#E5E3DD] text-[14px]" style={{ background: i % 2 === 0 ? "white" : "#FAFAF8" }}>
                    <div className="px-5 py-4 font-semibold text-[#0E1A30]">{row.item}</div>
                    <div className="px-5 py-4 text-[#C8442A] font-semibold border-l border-[#E5E3DD]">{row.amount}</div>
                    <div className="px-5 py-4 text-[#666] border-l border-[#E5E3DD]">{row.timing}</div>
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-[#888] leading-relaxed">
                正会員の年会費は無料です。認定を取得しようとする会員のみ、上記の審査料・ライセンス料が発生します。費用の詳細は認証規程（Annex）に定めます。
              </p>
            </div>

            <div ref={flowRef} className="reveal mb-20" id="flow">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-4 pl-5 border-l-4 border-[#C8442A]">
                審査フロー
              </h2>
              <p className="text-[15px] leading-loose text-[#1F1F1F] mb-8">
                申請書・証跡の提出から認証付与まで、第三者確認型の審査体制で進めます。自己申告だけでは完結しない設計です。
              </p>
              <div className="space-y-0">
                {[
                  { step: "01", title: "申請", desc: "正会員が認証規程に基づき、申請書・支援実績の証跡を提出します。", sub: "認定審査料（10万円）を同時に納入" },
                  { step: "02", title: "書類審査", desc: "事務局（CB総研）が申請書類を受付・確認します。", sub: "書類不備の場合は差し戻し" },
                  { step: "03", title: "第三者確認", desc: "協力会社（受益者）へのヒアリングまたは確認書の取得を行います。", sub: "受益者証言が審査材料となります" },
                  { step: "04", title: "認定審査委員会による審議", desc: "理事2名＋学識経験者＋国交省OBで構成する委員会が審議します。", sub: "3〜5名の委員による合議制" },
                  { step: "05", title: "認証付与 or 差し戻し", desc: "認証付与の場合、認定ロゴ・認証番号を発行し、社団HPに掲載します。", sub: "差し戻しの場合は理由を書面で通知" },
                  { step: "06", title: "年次更新", desc: "毎年、継続審査と年間認証利用料（12万円）の納入が必要です。", sub: "更新しない場合は認定が失効" },
                ].map((s, i) => (
                  <div key={s.step} className="flex gap-0">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center justify-center text-white font-semibold text-[13px] flex-shrink-0" style={{ background: "#0E1A30", borderRadius: "2px" }}>
                        {s.step}
                      </div>
                      {i < 5 && <div className="w-[2px] flex-1 bg-[#E5E3DD] my-1" style={{ minHeight: "32px" }} />}
                    </div>
                    <div className="pl-5 pb-8">
                      <div className="font-semibold text-[#0E1A30] text-[16px] mb-1">{s.title}</div>
                      <p className="text-[14px] text-[#444] leading-relaxed mb-1">{s.desc}</p>
                      <div className="text-[12px] text-[#888]">{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={committeeRef} className="reveal mb-20" id="committee">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-4 pl-5 border-l-4 border-[#C8442A]">
                認定審査委員会
              </h2>
              <p className="text-[15px] leading-loose text-[#1F1F1F] mb-6">
                認定審査委員会は、理事2名に加え、学識経験者（大学教授・研究者）1〜2名および国交省OB 1名を加えた計3〜5名で構成します。第三者が関与する審査体制により、認証の客観性・中立性を担保します。
              </p>
              <div className="border border-[#E5E3DD] overflow-hidden mb-6" style={{ borderRadius: "2px" }}>
                <div className="grid grid-cols-3 bg-[#0E1A30] text-white text-[12px] font-semibold tracking-[0.1em]">
                  <div className="px-5 py-3">役割</div>
                  <div className="px-5 py-3 border-l border-white/10">人数</div>
                  <div className="px-5 py-3 border-l border-white/10">候補</div>
                </div>
                {[
                  { role: "理事", count: "2名", candidate: "松永先生・韓（または矢吹先生）" },
                  { role: "学識経験者", count: "1〜2名", candidate: "大学教授・研究者（建設経営・労働政策等）" },
                  { role: "国交省OB", count: "1名", candidate: "総合政策局・建設業政策ラインのOB" },
                  { role: "合計", count: "3〜5名", candidate: "—" },
                ].map((row, i) => (
                  <div key={row.role} className="grid grid-cols-3 border-t border-[#E5E3DD] text-[14px]" style={{ background: i === 3 ? "#F7F6F2" : i % 2 === 0 ? "white" : "#FAFAF8", fontWeight: i === 3 ? "600" : "400" }}>
                    <div className="px-5 py-4 text-[#0E1A30]">{row.role}</div>
                    <div className="px-5 py-4 text-[#444] border-l border-[#E5E3DD]">{row.count}</div>
                    <div className="px-5 py-4 text-[#666] border-l border-[#E5E3DD]">{row.candidate}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[#F7F6F2] border border-[#E5E3DD] px-6 py-5" style={{ borderRadius: "2px" }}>
                <div className="text-[11px] font-semibold tracking-[0.12em] text-[#C8442A] mb-2">W点接続に向けた設計意図</div>
                <ul className="space-y-2">
                  {[
                    "第三者（学識経験者・国交省OB）が審査委員に入ることで、認証の客観性・中立性を担保",
                    "将来の経審W点組み込み申請時に「第三者審査機関による認証」として提示できる",
                    "建設ディレクターが都道府県主観点に採用されたルートと同様のアプローチ",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[14px] text-[#444]">
                      <span className="text-[#C8442A] font-bold flex-shrink-0 mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div ref={faqRef} className="reveal mb-20" id="faq">
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-8 pl-5 border-l-4 border-[#C8442A]">
                よくある質問
              </h2>
              <div className="space-y-2">
                {FAQ_ITEMS.map((item, i) => (
                  <div key={i} className="border border-[#E5E3DD] overflow-hidden" style={{ borderRadius: "2px" }}>
                    <button className="w-full text-left px-6 py-4 flex items-start justify-between gap-4 bg-white hover:bg-[#FAFAF8] transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span className="font-semibold text-[#0E1A30] text-[14px] leading-relaxed">{item.q}</span>
                      <span className="text-[#C8442A] font-bold text-[18px] flex-shrink-0 mt-0.5">{openFaq === i ? "−" : "+"}</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 pt-1 bg-[#FAFAF8] border-t border-[#E5E3DD]">
                        <p className="text-[14px] text-[#444] leading-loose m-0">{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div ref={ctaRef} className="reveal">
              <div className="bg-[#0E1A30] text-white px-8 py-10 text-center" style={{ borderRadius: "2px" }}>
                <div className="text-[11px] font-semibold tracking-[0.2em] text-white/60 mb-3">APPLY NOW</div>
                <h3 className="font-serif font-semibold text-[24px] mb-4">認定申請・加盟のお申し込み</h3>
                <p className="text-white/80 text-[14px] leading-loose mb-8 max-w-xl mx-auto">
                  正会員への加盟・認定申請は、申込フォームよりお申し込みください。加盟年会費は無料です。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-[14px] no-underline transition-all" style={{ background: "#C8442A", color: "white", borderRadius: "2px" }}>
                    加盟申込フォームへ →
                  </Link>
                  <a href="mailto:info@j-craft.or.jp" className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-[14px] no-underline border border-white/30 text-white hover:bg-white/10 transition-all" style={{ borderRadius: "2px" }}>
                    メールで問い合わせる
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="bg-[#F7F6F2] border-t border-[#E5E3DD] py-4 text-center text-[12px] text-[#999]">
        本ページの情報は2026年5月時点のものです。認証規程（Annex）の確定後、詳細を更新します。
      </div>

      <Footer />
    </div>
  );
}
