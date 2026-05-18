/*
 * Certification Page — J-Craft
 * Design: Industrial Elegance
 * Sections: PageHeader → Why → Benefits → Pricing → Requirements → Flow → FAQ
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
const CERT_BADGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663577827755/J2JnCbV3s7CWzP3k2gDjsL/cert-badge-J7BAnxbXibgMcxkWWqwVhC.png";

const faqItems = [
  {
    q: "クラフトバンクと取引がなくても認定を申請できますか？",
    a: "はい、申請できます。J-Craftはクラフトバンクとは独立した一般社団法人であり、認定はクラフトバンクとの取引有無を問いません。地域元請建設会社であれば、どなたでもご申請いただけます。",
  },
  {
    q: "「会費なし」と「ライセンス料5万円／年」の関係は？",
    a: "社員（社団の正会員）になるための会費は徴収していません。ライセンス料は、認定ロゴの使用権を維持するための実費です。認定を取得しない企業には、いかなる費用も発生しません。",
  },
  {
    q: "認定の有効期間はどのくらいですか？",
    a: "1年間です。年次更新時に要件への継続的な適合状況を確認し、ライセンス料のお支払いを確認した上で認定を更新します。",
  },
  {
    q: "認定要件を満たせない場合、再申請は可能ですか？",
    a: "はい、可能です。要件を満たせなかった項目について、6ヶ月以上の改善期間を置いた上で再申請いただけます。改善計画の策定について、社団事務局がご相談に応じます。",
  },
  {
    q: "経審W点への加点は、いつから反映されますか？",
    a: "現時点では国交省・建設業振興基金との協議中であり、組み込み時期は未定です。協議の進捗は本サイト「政策提言」ページにて随時お知らせします。認定取得そのものは経審W点への加点を保証するものではありません。",
  },
  {
    q: "認定企業として、社団に提供する義務はありますか？",
    a: "年次更新時に、協力会社との取引状況・採用実績・研修受講記録の簡易報告をお願いします。報告内容は、社団が政策提言を行う際の集計データとして匿名化したうえで活用させていただきます（個社情報は公開しません）。",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E5E3DD]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 bg-transparent border-0"
      >
        <span className="text-[15px] font-semibold text-[#0E1A30] leading-relaxed flex gap-3">
          <span className="text-[#C8442A] font-serif flex-shrink-0">Q.</span>
          {q}
        </span>
        <span
          className="text-[#C8442A] font-bold text-[18px] flex-shrink-0 mt-0.5 transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-5 pl-7 pr-4">
          <p className="text-[14px] text-[#6B6B6B] leading-loose m-0 flex gap-3">
            <span className="text-[#0E1A30] font-serif font-semibold flex-shrink-0">A.</span>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Certification() {
  const whyRef = useReveal();
  const benefitsRef = useReveal();
  const pricingRef = useReveal();
  const flowRef = useReveal();
  const faqRef = useReveal();

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Header />

      {/* Page Header */}
      <section
        className="relative pt-[72px] pb-20 overflow-hidden"
        style={{
          background: "#0E1A30",
          backgroundImage: `linear-gradient(120deg, rgba(14,26,48,0.92) 0%, rgba(14,26,48,0.72) 100%), url(${CERT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container pt-16 relative z-10">
          <nav className="text-[12px] text-white/60 mb-5 tracking-wide">
            <Link href="/" className="text-white/60 hover:text-white no-underline transition-colors">HOME</Link>
            <span className="mx-2">／</span>
            <span>認定制度</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <h1 className="font-serif font-semibold text-white mb-5 leading-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                協力会社パートナーシップ宣言<br />認定制度
              </h1>
              <p className="text-white/88 max-w-2xl leading-loose" style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}>
                協力会社の採用・DX支援に取り組む地域元請を、J-Craftが第三者として認証します。自社の人材方針を発注者・行政・採用市場に客観的に示す、新しい公的指標です。
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src={CERT_BADGE}
                alt="J-Craft 認定バッジ"
                className="w-40 h-40 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 bg-white">
        <div className="container">
          <div ref={whyRef} className="reveal max-w-3xl mx-auto">
            <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-6 pl-5 border-l-4 border-[#C8442A]">
              なぜこの認定が必要か
            </h2>
            <p className="text-[15px] leading-loose text-[#1F1F1F] mb-5">
              建設産業の担い手不足は構造的な課題であり、協力会社（専門工事会社）単体の努力では解決できません。協力会社の採用・育成・DX投資の最大の障害は、元請企業との関係構造そのものにあるからです。
            </p>
            <p className="text-[15px] leading-loose text-[#1F1F1F]">
              パートナーシップ宣言は、この関係構造を変える元請の意思を第三者として認証し、社会的に可視化する仕組みです。「宣言した元請」を選ぶ動機を発注者・銀行・若手人材に与えることで、業界全体の採用環境の更新を促します。
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="container">
          <div ref={benefitsRef} className="reveal">
            <div className="mb-12">
              <p className="eyebrow mb-3">BENEFITS</p>
              <h2 className="font-serif font-semibold text-[#0E1A30]" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
                認定取得の4つのメリット
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
              {[
                {
                  n: "01",
                  title: "認定ロゴの使用",
                  desc: "自社サイト・名刺・現場標識・営業資料・採用パンフレットなどに、J-Craft認証マークを使用できます。発注者・採用候補者への信頼提示に活用できます。",
                },
                {
                  n: "02",
                  title: "社団からの広報",
                  desc: "認定企業として社団サイトの一覧ページに掲載。プレスリリース・メディア対応時にも認定企業として紹介します。",
                },
                {
                  n: "03",
                  title: "経審W点 加点への接続",
                  desc: "認定制度の経営事項審査W点組み込みを国交省と協議中。将来的に公共工事の入札評価で優位性を得る設計を目指します。",
                },
                {
                  n: "04",
                  title: "研修プログラム受講",
                  desc: "J-Craftが提供するCPD認定研修プログラムを優先的に受講可能。受講記録は経審W1〜⑧の加点要件として活用できます。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="bg-[#F7F6F2] border-l-4 border-[#C8442A] p-7"
                  style={{ borderRadius: "0 2px 2px 0" }}
                >
                  <span className="font-serif text-[26px] text-[#C8442A] font-semibold block mb-2">{item.n}</span>
                  <h4 className="font-semibold text-[#0E1A30] text-[16px] mb-3">{item.title}</h4>
                  <p className="text-[13px] text-[#1F1F1F] leading-relaxed m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Requirements */}
      <section className="py-20 bg-white">
        <div className="container">
          <div ref={pricingRef} className="reveal max-w-3xl mx-auto">
            <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-5 pl-5 border-l-4 border-[#C8442A]">
              料金体系
            </h2>
            <p className="text-[15px] text-[#1F1F1F] mb-6 leading-loose">
              非営利の活動として、運営に必要な実費のみを徴収します。会費はありません。
            </p>
            <div className="border border-[#E5E3DD] overflow-hidden mb-4">
              <div className="grid grid-cols-3 bg-[#0E1A30] text-white text-[13px] font-medium tracking-wide">
                <div className="px-5 py-3.5">項目</div>
                <div className="px-5 py-3.5">金額</div>
                <div className="px-5 py-3.5">支払いタイミング</div>
              </div>
              {[
                { item: "認定審査料", amount: "10万円／社", timing: "認定申請時" },
                { item: "認定ライセンス料", amount: "5万円／社・年", timing: "年次更新時" },
              ].map((row, i) => (
                <div
                  key={row.item}
                  className="grid grid-cols-3 border-t border-[#E5E3DD]"
                  style={{ background: i % 2 === 0 ? "#FAFAF8" : "white" }}
                >
                  <div className="px-5 py-4 text-[14px] text-[#1F1F1F]">{row.item}</div>
                  <div className="px-5 py-4 font-serif font-semibold text-[#0E1A30] text-[18px]">{row.amount}</div>
                  <div className="px-5 py-4 text-[14px] text-[#6B6B6B]">{row.timing}</div>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-[#6B6B6B] mb-14">
              ※ 金額はすべて税抜です。社団設立同時の初期認定企業（クラフトバンクの既存取引50社）には、別途経過措置を設定します。
            </p>

            <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-5 pl-5 border-l-4 border-[#C8442A]">
              認定要件
            </h2>
            <p className="text-[15px] text-[#1F1F1F] mb-6 leading-loose">
              認定の取得には、以下の項目を満たすことが必要です。設立準備期は要件の運用を柔軟に行い、年次で見直していきます。
            </p>

            <h3 className="font-semibold text-[#0E1A30] text-[17px] mb-4">必須要件</h3>
            <ul className="list-none m-0 p-0 space-y-2.5 mb-8">
              {[
                "地域元請建設会社であること（建設業許可を保有）",
                "協力会社との取引方針・支払条件を公開していること",
                "協力会社向けの研修・採用支援プログラムを年1回以上実施していること",
                "反社会的勢力との関係を持たないこと（誓約書提出）",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#1F1F1F]">
                  <span className="text-[#C8442A] font-bold mt-0.5 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-[#0E1A30] text-[17px] mb-4">推奨要件（加点項目）</h3>
            <ul className="list-none m-0 p-0 space-y-2.5">
              {[
                "協力会社の処遇改善に資する独自の取り組み",
                "DX・施工管理ツールの導入支援",
                "地域の建設人材育成への参画",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#1F1F1F]">
                  <span className="text-[#6B6B6B] font-bold mt-0.5 flex-shrink-0">◦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Application Flow */}
      <section className="py-20 bg-[#F7F6F2]" id="apply">
        <div className="container">
          <div ref={flowRef} className="reveal">
            <div className="mb-12">
              <p className="eyebrow mb-3">APPLICATION FLOW</p>
              <h2 className="font-serif font-semibold text-[#0E1A30] mb-4" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
                申請フロー
              </h2>
              <p className="text-[#6B6B6B] text-[15px]">
                お問い合わせから認定書発行まで、おおよそ8〜12週間を目安としています。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 border border-[#E5E3DD] bg-white overflow-hidden">
              {[
                { step: "STEP 01", title: "問い合わせ", sub: "フォームから事務局にご連絡。担当者から制度概要をご案内します。" },
                { step: "STEP 02", title: "申請書提出", sub: "所定の様式と添付書類を提出。審査料のお支払いを確認します。" },
                { step: "STEP 03", title: "書面審査", sub: "必須要件・推奨要件への適合を社団内で確認。必要に応じ追加資料を依頼します。" },
                { step: "STEP 04", title: "認証委員会", sub: "社外有識者を交えた認証委員会で最終承認を行います。" },
                { step: "STEP 05", title: "認定・ロゴ付与", sub: "認定書とロゴ使用ガイドラインを発行。社団サイトの認定企業一覧に掲載します。" },
              ].map((step, i) => (
                <div
                  key={step.step}
                  className="p-6 border-r border-[#E5E3DD] last:border-r-0 border-b sm:border-b-0"
                >
                  <span className="block text-[11px] font-semibold tracking-[0.15em] text-[#C8442A] mb-3">{step.step}</span>
                  <div className="font-semibold text-[#0E1A30] text-[14px] mb-2 leading-snug">{step.title}</div>
                  <div className="text-[12px] text-[#6B6B6B] leading-relaxed">{step.sub}</div>
                  {i < 4 && (
                    <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 text-[#C8442A] font-bold">
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[#C8442A] text-white font-semibold px-8 py-4 text-[15px] no-underline hover:bg-[#b03922] active:scale-[0.97] transition-all"
                style={{ borderRadius: "2px" }}
              >
                認定の問い合わせをする →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div ref={faqRef} className="reveal max-w-3xl mx-auto">
            <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-8 pl-5 border-l-4 border-[#C8442A]">
              よくあるご質問
            </h2>
            <div className="border-t border-[#E5E3DD]">
              {faqItems.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
