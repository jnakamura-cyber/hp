/*
 * Activities Page — J-Craft
 * Design: Industrial Elegance
 * Sections: PageHeader → Partnership → Education → Policy
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

const ACTIVITIES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663577827755/J2JnCbV3s7CWzP3k2gDjsL/activities-bg-2JoKYwX9cERBPZVArpvfwE.webp";

export default function Activities() {
  const partnerRef = useReveal();
  const educationRef = useReveal();
  const policyRef = useReveal();

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Header />

      {/* Page Header */}
      <section
        className="relative pt-[72px] pb-20 overflow-hidden"
        style={{
          background: "#0E1A30",
          backgroundImage: `linear-gradient(120deg, rgba(14,26,48,0.90) 0%, rgba(14,26,48,0.65) 100%), url(${ACTIVITIES_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container pt-16 relative z-10">
          <nav className="text-[12px] text-white/60 mb-5 tracking-wide">
            <Link href="/" className="text-white/60 hover:text-white no-underline transition-colors">HOME</Link>
            <span className="mx-2">／</span>
            <span>3つの取り組み</span>
          </nav>
          <h1 className="font-serif font-semibold text-white mb-5 leading-tight" style={{ fontSize: "clamp(30px, 4vw, 46px)" }}>
            3つの取り組み
          </h1>
          <p className="text-white/88 max-w-2xl leading-loose" style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}>
            業界の「空気」と「標準」を作るため、認定・教育・政策提言の3つを車輪として動かします。それぞれの活動は独立しながら相互に補完し、地域元請企業の経営判断と現場の生産性向上に接続します。
          </p>
        </div>
      </section>

      {/* Activity 01: Partnership */}
      <section className="py-20 bg-white border-b border-[#E5E3DD]" id="partnership">
        <div className="container">
          <div ref={partnerRef} className="reveal">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
              <div className="lg:pt-2">
                <div
                  className="font-serif font-bold text-[#F0EDE8] leading-none select-none mb-3"
                  style={{ fontSize: "clamp(72px, 10vw, 100px)" }}
                  aria-hidden
                >
                  01
                </div>
                <div className="text-[11px] font-semibold tracking-[0.15em] text-[#C8442A] uppercase">
                  PARTNERSHIP DECLARATION
                </div>
              </div>
              <div>
                <h2 className="font-serif font-semibold text-[#0E1A30] text-[28px] mb-6 pl-5 border-l-4 border-[#C8442A] leading-snug">
                  協力会社パートナーシップ宣言
                </h2>
                <p className="text-[15px] leading-loose text-[#1F1F1F] mb-5">
                  協力会社の採用・DX支援に取り組む地域元請企業を、社団が第三者として認証し、ロゴを付与する制度です。社団設立と同時に、クラフトバンクの既存取引50社を初期認証企業として登録します。
                </p>
                <p className="text-[15px] leading-loose text-[#1F1F1F] mb-8">
                  制度の本質は、宣言「した」企業を顕彰することではなく、宣言「していない」元請が目立つようになる社会的圧力で普及を促す設計にあります。地域・行政・発注者・銀行が、宣言の有無を当然のように見るようになる状態を3年以内に作ります。
                </p>

                <h3 className="font-semibold text-[#0E1A30] text-[17px] mb-4">制度の特徴</h3>
                <ul className="list-none m-0 p-0 space-y-2.5 mb-8">
                  {[
                    "第三者認証：社団の認証委員会が要件を審査し、年次更新",
                    "ロゴ：自社サイト・名刺・現場標識・営業資料での使用が可能",
                    "将来構想：経営事項審査（経審）のW点加点項目への組み込みを国交省と協議中",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-[#1F1F1F]">
                      <span className="text-[#C8442A] font-bold mt-0.5 flex-shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-[#0E1A30] text-[17px] mb-3">対象企業</h3>
                <p className="text-[15px] leading-loose text-[#1F1F1F] mb-8">
                  地域元請建設会社。中小規模からの加盟を主軸としつつ、地域シェア上位企業の参画を優先的に働きかけます。
                </p>

                <Link
                  href="/certification"
                  className="inline-flex items-center gap-2 bg-[#C8442A] text-white font-semibold px-6 py-3.5 text-[14px] no-underline hover:bg-[#b03922] active:scale-[0.97] transition-all"
                  style={{ borderRadius: "2px" }}
                >
                  認定制度の詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity 02: Education */}
      <section className="py-20 bg-[#F7F6F2] border-b border-[#E5E3DD]" id="education">
        <div className="container">
          <div ref={educationRef} className="reveal">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
              <div className="lg:pt-2">
                <div
                  className="font-serif font-bold text-[#E8E5DF] leading-none select-none mb-3"
                  style={{ fontSize: "clamp(72px, 10vw, 100px)" }}
                  aria-hidden
                >
                  02
                </div>
                <div className="text-[11px] font-semibold tracking-[0.15em] text-[#C8442A] uppercase">
                  EDUCATION & TRAINING
                </div>
              </div>
              <div>
                <h2 className="font-serif font-semibold text-[#0E1A30] text-[28px] mb-6 pl-5 border-l-4 border-[#C8442A] leading-snug">
                  教育・研修・セミナー
                </h2>
                <p className="text-[15px] leading-loose text-[#1F1F1F] mb-5">
                  クラフトバンク総研がこれまで提供してきた講演・研修プログラムを、J-Craftブランドに集約します。研修内容は経営層向け・現場管理層向け・実務担当者向けの3層構成で、地域元請が抱える人材・DX・若年層採用の課題に対応します。
                </p>
                <p className="text-[15px] leading-loose text-[#1F1F1F] mb-8">
                  各プログラムは土木学会等のCPD認定プログラムに登録し、受講が経営事項審査のW1〜⑧加点につながる設計にしています。「受講＝認定要件の充足」というシームレスな導線を作ることで、教育と認定を一体化させます。
                </p>

                <h3 className="font-semibold text-[#0E1A30] text-[17px] mb-4">プログラム例（準備中）</h3>
                <ul className="list-none m-0 p-0 space-y-2.5 mb-8">
                  {[
                    "協力会社の採用力を上げる経営講座（経営層向け／半日）",
                    "現場DXの実装ロードマップ（現場管理層向け／1日）",
                    "若年層の定着率を上げる現場づくり（実務担当者向け／半日）",
                    "地域元請のための広報・採用ブランディング（経営企画向け／半日）",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-[#1F1F1F]">
                      <span className="text-[#C8442A] font-bold mt-0.5 flex-shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-[#0E1A30] text-[17px] mb-4">連携先（予定）</h3>
                <ul className="list-none m-0 p-0 space-y-2.5">
                  {[
                    "土木学会（CPD認定プログラム登録）",
                    "建築学会・各種職能団体",
                    "地域経済連合会・商工会議所",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-[#1F1F1F]">
                      <span className="text-[#C8442A] font-bold mt-0.5 flex-shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity 03: Policy */}
      <section className="py-20 bg-white" id="policy">
        <div className="container">
          <div ref={policyRef} className="reveal">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
              <div className="lg:pt-2">
                <div
                  className="font-serif font-bold text-[#F0EDE8] leading-none select-none mb-3"
                  style={{ fontSize: "clamp(72px, 10vw, 100px)" }}
                  aria-hidden
                >
                  03
                </div>
                <div className="text-[11px] font-semibold tracking-[0.15em] text-[#C8442A] uppercase">
                  POLICY ADVOCACY
                </div>
              </div>
              <div>
                <h2 className="font-serif font-semibold text-[#0E1A30] text-[28px] mb-6 pl-5 border-l-4 border-[#C8442A] leading-snug">
                  政策提言
                </h2>
                <p className="text-[15px] leading-loose text-[#1F1F1F] mb-8">
                  国土交通省・総務省・建設業振興基金との連携を通じ、認証制度の経審W点組み込み、教育プログラムのCPD認定、地域元請の人材確保支援策の制度化を推進します。J-Craftは政治的な活動を行う団体ではなく、現場の事実に基づくデータ・実例を提示することで政策形成を支援する立場を取ります。
                </p>

                <h3 className="font-semibold text-[#0E1A30] text-[17px] mb-5">進行中の取り組み</h3>
                <div className="space-y-3 mb-8">
                  {[
                    { date: "2026年5月", desc: "国交省 総合政策局への訪問（松永代表理事・韓理事・高木・金村）" },
                    { date: "2026年5月", desc: "建設業振興基金へのアンバサダーラインでの非公式打診" },
                    { date: "2026年下期", desc: "認証制度の経審W点組み込みに向けた論点整理" },
                    { date: "2026年下期", desc: "「職人街コン」を社団主催で開催（行政共催の枠組みを設計）" },
                  ].map((item) => (
                    <div
                      key={item.desc}
                      className="flex gap-5 p-4 bg-[#F7F6F2] border-l-2 border-[#C8442A]"
                    >
                      <span className="text-[13px] font-semibold text-[#C8442A] flex-shrink-0 w-24">{item.date}</span>
                      <span className="text-[14px] text-[#1F1F1F] leading-relaxed">{item.desc}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold text-[#0E1A30] text-[17px] mb-4">提言の作法</h3>
                <p className="text-[15px] leading-loose text-[#1F1F1F]">
                  すべての提言は、加盟企業からの定量データ・現場ヒアリング・大学研究機関の知見を統合した形でレポート化し、社団サイト上で全文公開します。第三者の検証可能性を担保した提言のみを行います。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
