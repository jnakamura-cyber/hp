/**
 * Disclosure (情報公開) Page — J-Craft
 * Design: Industrial Elegance — Navy #0E1A30, Rust #C8442A, Cream #F7F6F2
 * Covers: 定款, 役員名簿, 事業報告, 決算公告
 */

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const articles = [
  { num: "第1条", title: "名称", body: "本法人は、一般社団法人 日本建設職人支援機構と称し、英語名を Japan Craft Workers Support Organization（略称：J-Craft）とする。" },
  { num: "第2条", title: "目的", body: "本法人は、建設業における専門工事会社（以下「協力会社」）の持続的な担い手確保を目的として、地域元請建設会社による協力会社支援の認定・普及、教育・研修プログラムの提供、および政策提言活動を行い、もって建設産業の健全な発展に寄与することを目的とする。" },
  { num: "第3条", title: "事業", body: "本法人は、前条の目的を達成するため、以下の事業を行う。\n一　協力会社パートナーシップ宣言 認定制度の運営\n二　建設業向けセミナー・研修プログラムの企画・提供\n三　建設行政に関する政策提言・調査研究\n四　前各号に附帯または関連する事業" },
  { num: "第4条", title: "主たる事務所の所在地", body: "本法人は、主たる事務所を東京都内に置く。（設立後に登記住所を掲載）" },
  { num: "第5条", title: "社員", body: "本法人の社員は、本法人の目的に賛同して入会した個人または法人とする。社員の入会・退会・除名については、別に定める社員規程による。" },
  { num: "第6条", title: "役員", body: "本法人に、次の役員を置く。\n一　理事　3名以上10名以内\n二　監事　1名以上2名以内\n役員の選任は社員総会の決議による。理事の任期は2年、監事の任期は2年とし、再任を妨げない。" },
  { num: "第7条", title: "代表理事", body: "理事会は、理事の中から代表理事1名を選定する。代表理事は本法人を代表し、その業務を執行する。" },
  { num: "第8条", title: "社員総会", body: "通常社員総会は毎事業年度終了後3ヶ月以内に開催する。臨時社員総会は、必要に応じて代表理事が招集する。" },
  { num: "第9条", title: "事業年度", body: "本法人の事業年度は、毎年4月1日に始まり翌年3月31日に終わる。" },
  { num: "第10条", title: "公告方法", body: "本法人の公告は、主たる事務所の公衆の見やすい場所への掲示および本法人公式ウェブサイトへの掲載によって行う。" },
];

const reports = [
  {
    year: "2026年度（第1期）",
    status: "準備中",
    items: [
      { label: "事業報告書", note: "2027年6月公開予定" },
      { label: "貸借対照表", note: "2027年6月公開予定" },
      { label: "損益計算書", note: "2027年6月公開予定" },
      { label: "監査報告書", note: "2027年6月公開予定" },
    ],
  },
];

export default function Disclosure() {
  const s0Ref = useReveal();
  const s1Ref = useReveal();
  const s2Ref = useReveal();
  const s3Ref = useReveal();

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Header />

      {/* Page Header */}
      <div className="bg-[#0E1A30] pt-[60px] sm:pt-[72px] pb-10 sm:pb-16">
        <div className="container pt-8 sm:pt-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[#C8442A]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8442A] uppercase">
              Governance
            </span>
          </div>
          <h1
            className="font-serif font-bold text-white"
            style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
          >
            情報公開
          </h1>
          <p className="text-white/70 text-[15px] mt-4 max-w-2xl leading-relaxed">
            一般社団法人として、定款・役員情報・事業報告・決算公告を公開します。透明性の確保は、当機構の運営における基本原則です。
          </p>
        </div>
      </div>

      {/* Nav Anchors */}
      <div className="bg-white border-b border-[#E8E4DC] sticky top-[64px] z-30">
        <div className="container">
          <div className="flex gap-6 overflow-x-auto py-3 text-[13px] font-medium">
            {["定款", "役員名簿", "事業報告・決算公告", "公益目的支出計画"].map((label, i) => (
              <a
                key={label}
                href={`#section-${i}`}
                className="whitespace-nowrap text-[#444] hover:text-[#C8442A] transition-colors pb-1 border-b-2 border-transparent hover:border-[#C8442A]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-16 max-w-4xl mx-auto space-y-20">

        {/* 定款 */}
        <section id="section-0">
          <div ref={s0Ref} className="reveal">
            <div className="flex items-center gap-3 mb-2">
              <span className="block w-6 h-px bg-[#C8442A]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8442A] uppercase">Articles of Incorporation</span>
            </div>
            <h2 className="font-serif font-bold text-[#0E1A30] text-[28px] mb-2">定款</h2>
            <p className="text-[#888] text-[13px] mb-8">制定：2026年夏（設立時）／最終改定：—</p>

            <div className="bg-white border border-[#E8E4DC] divide-y divide-[#E8E4DC]" style={{ borderRadius: "2px" }}>
              {articles.map((a) => (
                <div key={a.num} className="flex flex-col md:flex-row">
                  <div className="md:w-40 flex-shrink-0 px-6 py-5 bg-[#F7F6F2] border-b md:border-b-0 md:border-r border-[#E8E4DC]">
                    <span className="block text-[11px] text-[#888] mb-1">{a.num}</span>
                    <span className="font-semibold text-[#0E1A30] text-[13px]">{a.title}</span>
                  </div>
                  <div className="px-6 py-5 flex-1">
                    <p className="text-[#444] text-[14px] leading-loose whitespace-pre-line">{a.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#888] text-[12px] mt-4">
              ※ 上記は主要条文の抜粋です。完全版定款は設立登記後にPDFにて公開します。
            </p>
          </div>
        </section>

        {/* 役員名簿 */}
        <section id="section-1">
          <div ref={s1Ref} className="reveal">
            <div className="flex items-center gap-3 mb-2">
              <span className="block w-6 h-px bg-[#C8442A]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8442A] uppercase">Board Members</span>
            </div>
            <h2 className="font-serif font-bold text-[#0E1A30] text-[28px] mb-8">役員名簿</h2>

            <div className="bg-white border border-[#E8E4DC]" style={{ borderRadius: "2px" }}>
              {[
                { role: "代表理事", name: "松永 昭吾", affil: "横浜国立大学 / 政策研究大学院大学", note: "" },
                { role: "理事", name: "韓 英志", affil: "クラフトバンク株式会社", note: "" },
                { role: "事務局長（理事）", name: "高木・金村", affil: "クラフトバンク総研", note: "" },
                { role: "顧問（予定）", name: "矢吹 先生", affil: "東京都市大学 / 国交省 BIM/CIM 推進委員長", note: "就任予定" },
                { role: "監事", name: "—", affil: "（設立時に選任予定）", note: "" },
              ].map((m, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row ${i < 4 ? "border-b border-[#E8E4DC]" : ""}`}
                >
                  <div className="md:w-48 flex-shrink-0 px-6 py-4 bg-[#F7F6F2] border-b md:border-b-0 md:border-r border-[#E8E4DC]">
                    <span className="font-semibold text-[#0E1A30] text-[13px]">{m.role}</span>
                  </div>
                  <div className="px-6 py-4 flex-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
                    <span className="font-semibold text-[#0E1A30] text-[15px] min-w-[120px]">{m.name}</span>
                    <span className="text-[#666] text-[13px]">{m.affil}</span>
                    {m.note && (
                      <span className="text-[11px] text-[#C8442A] font-semibold border border-[#C8442A]/30 px-2 py-0.5 ml-auto" style={{ borderRadius: "2px" }}>
                        {m.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#888] text-[12px] mt-4">
              ※ 役員の任期・報酬等の詳細は設立後に公開します。
            </p>
          </div>
        </section>

        {/* 事業報告・決算公告 */}
        <section id="section-2">
          <div ref={s2Ref} className="reveal">
            <div className="flex items-center gap-3 mb-2">
              <span className="block w-6 h-px bg-[#C8442A]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8442A] uppercase">Annual Reports</span>
            </div>
            <h2 className="font-serif font-bold text-[#0E1A30] text-[28px] mb-8">事業報告・決算公告</h2>

            {reports.map((r) => (
              <div key={r.year} className="bg-white border border-[#E8E4DC]" style={{ borderRadius: "2px" }}>
                <div className="px-6 py-4 border-b border-[#E8E4DC] flex items-center justify-between">
                  <span className="font-serif font-semibold text-[#0E1A30] text-[16px]">{r.year}</span>
                  <span className="text-[11px] font-semibold text-[#888] border border-[#DDD] px-3 py-1" style={{ borderRadius: "2px" }}>
                    {r.status}
                  </span>
                </div>
                {r.items.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-6 py-4 ${i < r.items.length - 1 ? "border-b border-[#E8E4DC]" : ""}`}
                  >
                    <span className="text-[#444] text-[14px]">{item.label}</span>
                    <span className="text-[#888] text-[13px]">{item.note}</span>
                  </div>
                ))}
              </div>
            ))}

            <div className="mt-6 bg-[#0E1A30]/5 border border-[#0E1A30]/10 px-6 py-5" style={{ borderRadius: "2px" }}>
              <p className="text-[#444] text-[14px] leading-loose">
                一般社団法人は、毎事業年度終了後に貸借対照表を公告することが法令上義務付けられています（一般社団法人及び一般財団法人に関する法律 第128条）。当機構は設立後の第1期決算（2027年3月期）より、本ページにて決算公告を行います。
              </p>
            </div>
          </div>
        </section>

        {/* 公益目的支出計画 */}
        <section id="section-3">
          <div ref={s3Ref} className="reveal">
            <div className="flex items-center gap-3 mb-2">
              <span className="block w-6 h-px bg-[#C8442A]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8442A] uppercase">Public Benefit Plan</span>
            </div>
            <h2 className="font-serif font-bold text-[#0E1A30] text-[28px] mb-8">公益目的支出計画</h2>

            <div className="bg-white border border-[#E8E4DC] px-8 py-8" style={{ borderRadius: "2px" }}>
              <p className="text-[#444] text-[14px] leading-loose mb-6">
                当機構は非営利型の一般社団法人として、収益を社員への分配に充てず、すべて定款に定める目的事業（認定制度の運営・教育研修・政策提言）に充当します。
              </p>
              <div className="space-y-4">
                {[
                  { label: "認定制度の運営・審査費用", pct: "40%" },
                  { label: "教育・研修プログラムの開発・提供", pct: "30%" },
                  { label: "政策提言・調査研究", pct: "20%" },
                  { label: "管理・広報費用", pct: "10%" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-[13px] text-[#444]">{item.label}</span>
                        <span className="text-[13px] font-semibold text-[#0E1A30]">{item.pct}</span>
                      </div>
                      <div className="h-1.5 bg-[#E8E4DC]" style={{ borderRadius: "1px" }}>
                        <div
                          className="h-full bg-[#C8442A]"
                          style={{ width: item.pct, borderRadius: "1px" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#888] text-[12px] mt-6">
                ※ 上記は設立時の計画値です。実績は事業報告書にて公開します。
              </p>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
