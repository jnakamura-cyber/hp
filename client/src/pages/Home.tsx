/*
 * Home Page — J-Craft
 * Design: Industrial Elegance (産業的エレガンス)
 * Sections: Hero → Activities → CertBanner → PhotoStrip → Companies → Governance → News → Contact
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663577827755/J2JnCbV3s7CWzP3k2gDjsL/hero-bg-J5ji4GJDH6SgL244imHHvq.webp";
const CERT_BADGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663577827755/J2JnCbV3s7CWzP3k2gDjsL/cert-badge-J7BAnxbXibgMcxkWWqwVhC.png";
const ACTIVITIES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663577827755/J2JnCbV3s7CWzP3k2gDjsL/activities-bg-2JoKYwX9cERBPZVArpvfwE.webp";

// Scroll reveal hook
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

// Count-up hook
function useCountUp(target: number, suffix = "") {
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ran.current) {
          ran.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = Math.round(eased * target);
            if (el) el.textContent = val.toLocaleString("ja-JP") + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix]);
  return ref;
}

const newsItems = [
  { date: "2026.05.19", tag: "お知らせ", tagType: "default", title: "認定制度の論点整理（会員種別・審査フロー・費用体系）を更新しました" },
  { date: "2026.05.10", tag: "政策提言", tagType: "policy", title: "国土交通省 総合政策局を訪問し、認定制度の経審W点組み込みについて意見交換を行いました" },
  { date: "2026.04.30", tag: "政策提言", tagType: "policy", title: "建設業振興基金との非公式打診を開始しました" },
  { date: "2026.04.01", tag: "お知らせ", tagType: "default", title: "代表理事・松永昭吾との設立合意書を締結しました" },
];

const tagColors: Record<string, string> = {
  default: "#0E1A30",
  policy: "#C8442A",
  event: "#233258",
};

export default function Home() {
  // Hero text reveal
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const children = el.querySelectorAll(".hero-line");
    children.forEach((child, i) => {
      (child as HTMLElement).style.opacity = "0";
      (child as HTMLElement).style.transform = "translateY(20px)";
      (child as HTMLElement).style.transition = "opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1)";
      (child as HTMLElement).style.transitionDelay = `${i * 130}ms`;
      setTimeout(() => {
        (child as HTMLElement).style.opacity = "1";
        (child as HTMLElement).style.transform = "translateY(0)";
      }, 200 + i * 130);
    });
  }, []);

  const activitiesRef = useReveal();
  const certRef = useReveal();
  const statsRef = useReveal();
  const companiesRef = useReveal();
  const govRef = useReveal();
  const newsRef = useReveal();
  const contactRef = useReveal();

  const stat50 = useCountUp(50, "社");
  const stat1000 = useCountUp(1000, "万円/年");
  const stat0 = useCountUp(0, "円");

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Header />

      {/* ─── HERO ─── */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{
          minHeight: "100vh",
          paddingTop: "72px",
          background: "#0E1A30",
          backgroundImage: `linear-gradient(135deg, rgba(14,26,48,0.93) 0%, rgba(14,26,48,0.68) 55%, rgba(14,26,48,0.40) 100%), url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Accent line bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #C8442A, transparent)" }}
        />
        {/* Ghost text */}
        <div
          className="absolute right-0 bottom-0 font-serif font-bold select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(120px, 18vw, 260px)", color: "rgba(255,255,255,0.03)", letterSpacing: "-0.04em" }}
          aria-hidden
        >
          J-CRAFT
        </div>

        <div className="container relative z-10 py-20">
          <div ref={heroRef} className="max-w-3xl">
            <div
              className="hero-line inline-flex items-center gap-3 mb-8"
            >
              <span className="block w-8 h-px bg-[#E26A4F]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#E26A4F] uppercase">
                2026 SUMMER 設立
              </span>
            </div>

            <h1
              className="hero-line font-serif font-bold text-white mb-8 leading-tight"
              style={{
                fontSize: "clamp(36px, 5.5vw, 64px)",
                letterSpacing: "0.02em",
                textShadow: "0 2px 20px rgba(0,0,0,0.35)",
              }}
            >
              協力会社を支える<br />元請を、認定する。
            </h1>

            <p
              className="hero-line text-white/88 mb-10 leading-loose"
              style={{
                fontSize: "clamp(15px, 1.5vw, 17px)",
                maxWidth: "680px",
              }}
            >
              専門工事会社の採用・育成・DX・安全を支援する地域元請を、第三者確認型の審査体制で認定します。将来の経審W点接続を視野に入れた、民間主導の仕組みです。
            </p>

            <div
              className="hero-line flex flex-wrap gap-4"
            >
              <Link
                href="/certification#apply"
                className="inline-flex items-center gap-2 bg-[#C8442A] text-white font-semibold px-6 py-3.5 text-[14px] tracking-wide no-underline hover:bg-[#b03922] active:scale-[0.97] transition-all"
                style={{ borderRadius: "2px" }}
              >
                認定申請をする →
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/40 text-white font-medium px-6 py-3.5 text-[14px] no-underline hover:bg-white/10 transition-all"
                style={{ borderRadius: "2px" }}
              >
                機構について
              </Link>
            </div>
          </div>

          {/* Meta strip */}
          <div
            className="hero-line mt-16 pt-8 flex flex-wrap gap-8"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.15)",
              maxWidth: "680px",
            }}
          >
            {[
              { label: "代表理事", value: "松永 昭吾" },
              { label: "所管", value: "非営利 一般社団法人" },
              { label: "主な加盟対象", value: "地域元請建設会社" },
              { label: "会費", value: "無料" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-[11px] text-white/55 tracking-wide mb-1">{item.label}</div>
                <div className="text-[15px] font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3つの取り組み ─── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div ref={activitiesRef} className="reveal">
            <div className="mb-14">
              <p className="eyebrow mb-3">OUR ACTIVITIES</p>
              <h2 className="font-serif font-semibold text-[#0E1A30] mb-4" style={{ fontSize: "clamp(26px, 3vw, 34px)" }}>
                3つの取り組み
              </h2>
              <p className="text-[#6B6B6B] text-[15px] max-w-xl leading-relaxed">
                業界の「空気」と「標準」を作るため、認定制度・教育・政策提言の3軸で活動します。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-stagger visible">
              {[
                {
                  num: "01",
                  title: "協力会社パートナーシップ宣言 認定",
                  desc: "協力会社の採用・育成・DX・安全を支援する地域元請を、第三者確認型の審査体制で認定。将来の経審W点接続を視野に入れた設計です。",
                  href: "/activities#partnership",
                },
                {
                  num: "02",
                  title: "教育・研修・セミナー",
                  desc: "協力会社・職人会員の声を吸い上げる部会を運営。クラフトバンク総研の講演・研修を社団ブランドで提供し、認定基準の改定に現場の声を反映します。",
                  href: "/activities#education",
                },
                {
                  num: "03",
                  title: "政策提言",
                  desc: "国土交通省・建設業振興基金との連携を通じ、認定制度の経審W点組み込みを推進。建設ディレクターと同様のルートでの制度化を目指します。",
                  href: "/activities#policy",
                },
              ].map((card) => (
                <Link
                  key={card.num}
                  href={card.href}
                  className="group block border border-[#E5E3DD] bg-white p-9 no-underline hover:border-[#0E1A30] hover:-translate-y-1 transition-all duration-200"
                  style={{ borderRadius: "2px" }}
                >
                  <div className="font-serif text-[36px] text-[#C8442A] leading-none mb-6 font-semibold">
                    {card.num}
                  </div>
                  <h3 className="font-semibold text-[#0E1A30] text-[17px] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-[14px] leading-relaxed mb-6">
                    {card.desc}
                  </p>
                  <span className="text-[13px] font-semibold text-[#0E1A30] group-hover:text-[#C8442A] transition-colors">
                    詳しく見る →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 認定制度バナー ─── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: "#0E1A30",
          backgroundImage: `linear-gradient(135deg, rgba(14,26,48,0.97) 0%, rgba(14,26,48,0.85) 100%)`,
        }}
      >
        <div className="container">
          <div ref={certRef} className="reveal">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <p className="eyebrow mb-4 text-[#E26A4F]">CERTIFICATION</p>
                <h2 className="font-serif font-semibold text-white mb-5 leading-snug" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
                  協力会社パートナーシップ宣言<br />認定制度
                </h2>
                <p className="text-white/80 text-[15px] leading-loose mb-8 max-w-xl">
                  A（採用）・B（教育育成）・C（DX）・E（安全環境）の4カテゴリで協力会社を支援する地域元請を、第三者確認型の審査体制で認定。審査料：10万円（申請時）＋年間認証利用料：12万円。
                </p>
                <Link
                  href="/certification"
                  className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold px-6 py-3.5 text-[14px] no-underline hover:bg-white/10 transition-all"
                  style={{ borderRadius: "2px" }}
                >
                  認定制度を詳しく見る →
                </Link>
              </div>
              <div className="lg:col-span-2 flex justify-center">
                <img
                  src={CERT_BADGE}
                  alt="J-Craft 認定バッジ"
                  className="w-52 h-52 md:w-64 md:h-64 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 現場とつながる（Photo Strip） ─── */}
      <section
        className="py-28 relative"
        style={{
          background: "#0E1A30",
          backgroundImage: `linear-gradient(90deg, rgba(14,26,48,0.96) 0%, rgba(14,26,48,0.55) 55%, rgba(14,26,48,0.25) 100%), url(${ACTIVITIES_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div ref={statsRef} className="reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="eyebrow mb-4 text-[#E26A4F]">CONNECTED TO THE FIELD</p>
                <h2 className="font-serif font-semibold text-white mb-6 leading-snug" style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>
                  現場と、政策と、<br />金融をつなぐ。
                </h2>
                <p className="text-white/85 text-[15px] leading-loose mb-4">
                  担い手不足の解決は、現場・行政・金融の3点を同時に動かさなければ進みません。J-Craftは、地域元請企業の現場知見を集約し、政策と金融の言語に翻訳して制度につなげる「W点接続」の役割を担います。
                </p>
                <p className="text-white/85 text-[15px] leading-loose">
                  第三者確認型の認定制度を軸に、3年以内に宣言企業を発注者・自治体・金融機関が「当然参照する」状態を目指します。
                </p>
              </div>

              <div>
                <div
                  className="pt-10 mt-10 grid grid-cols-3 gap-8"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.18)" }}
                >
                  <div>
                    <div className="font-serif text-white font-semibold leading-none mb-2" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                      <span ref={stat50}>50社</span>
                    </div>
                    <div className="text-[12px] tracking-wide text-white/65 leading-snug">設立同時の<br />初期認定目標</div>
                  </div>
                  <div>
                    <div className="font-serif text-white font-semibold leading-none mb-2" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
                      <span ref={stat1000}>1,000万円/年</span>
                    </div>
                    <div className="text-[12px] tracking-wide text-white/65 leading-snug">CB拠出による<br />初期運営資金</div>
                  </div>
                  <div>
                    <div className="font-serif text-white font-semibold leading-none mb-2" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                      <span ref={stat0}>0円</span>
                    </div>
                    <div className="text-[12px] tracking-wide text-white/65 leading-snug">加盟会費</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 認定企業 ─── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div ref={companiesRef} className="reveal">
            <div className="mb-12">
              <p className="eyebrow mb-3">CERTIFIED COMPANIES</p>
              <h2 className="font-serif font-semibold text-[#0E1A30] mb-4" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
                認定企業
              </h2>
              <p className="text-[#6B6B6B] text-[15px] max-w-xl">
                設立後、認定申請を受け付け次第順次掲載します。認定企業は地域・カテゴリ別に公開予定です。
              </p>
            </div>

            <div
              className="grid grid-cols-3 md:grid-cols-6 border border-[#E5E3DD]"
              style={{ gap: "1px", background: "#E5E3DD" }}
            >
              {["company A", "company B", "company C", "company D", "company E", "company F",
                "company G", "company H", "company I", "company J", "company K", "+ more"].map((name) => (
                <div
                  key={name}
                  className="bg-white flex items-center justify-center text-[#9B9B9B] text-[13px] font-medium tracking-wide"
                  style={{ aspectRatio: "3/2" }}
                >
                  {name}
                </div>
              ))}
            </div>
            <p className="text-[12px] text-[#9B9B9B] mt-4 text-right">
              ※ ロゴは仮表示です。公開時に各社の正式ロゴを掲載します。
            </p>
          </div>
        </div>
      </section>

      {/* ─── 役員・組織体制 ─── */}
      <section className="py-24 bg-[#F7F6F2]">
        <div className="container">
          <div ref={govRef} className="reveal">
            <div className="mb-12">
              <p className="eyebrow mb-3">GOVERNANCE</p>
              <h2 className="font-serif font-semibold text-[#0E1A30] mb-4" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
                役員・組織体制
              </h2>
              <p className="text-[#6B6B6B] text-[15px] max-w-xl">
                大学・研究機関と民間が連携し、公益性と現場知見を両立する体制で運営します。
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal-stagger visible">
              {[
                { role: "代表理事", name: "松永 昭吾", aff: "横浜国立大学／\n政策研究大学院大学" },
                { role: "理事", name: "韓 英志", aff: "クラフトバンク株式会社" },
                { role: "事務局", name: "高木・金村", aff: "クラフトバンク総研" },
                { role: "顧問（予定）", name: "矢吹 先生", aff: "東京都市大学／\n国交省 BIM/CIM 推進委員長" },
              ].map((person) => (
                <div key={person.name}>
                  <div
                    className="bg-[#E8E6E0] border border-[#E5E3DD] mb-4 flex items-center justify-center text-[#9B9B9B] text-[12px]"
                    style={{ aspectRatio: "4/5" }}
                  >
                    portrait
                  </div>
                  <div className="text-[11px] font-semibold tracking-[0.12em] text-[#C8442A] mb-1">{person.role}</div>
                  <div className="font-semibold text-[#0E1A30] text-[16px] mb-1">{person.name}</div>
                  <div className="text-[12px] text-[#6B6B6B] leading-snug whitespace-pre-line">{person.aff}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ニュース ─── */}
      <section className="py-24 bg-white" id="news">
        <div className="container">
          <div ref={newsRef} className="reveal">
            <div className="mb-12">
              <p className="eyebrow mb-3">NEWS</p>
              <h2 className="font-serif font-semibold text-[#0E1A30]" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
                ニュース・お知らせ
              </h2>
            </div>

            <div className="border-t border-[#E5E3DD]">
              {newsItems.map((item) => (
                <article
                  key={item.title}
                  className="grid grid-cols-1 sm:grid-cols-[140px_100px_1fr] gap-3 sm:gap-6 py-6 border-b border-[#E5E3DD] items-baseline"
                >
                  <span className="text-[13px] text-[#6B6B6B] tracking-wide">{item.date}</span>
                  <span
                    className="inline-block text-[11px] text-white px-2.5 py-1 text-center tracking-wide self-start"
                    style={{ background: tagColors[item.tagType] }}
                  >
                    {item.tag}
                  </span>
                  <a href="#" className="text-[15px] text-[#1F1F1F] font-medium leading-relaxed hover:text-[#C8442A] transition-colors no-underline">
                    {item.title}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── お問い合わせ ─── */}
      <section className="py-24 bg-[#F7F6F2]" id="contact">
        <div className="container">
          <div ref={contactRef} className="reveal">
            <div className="mb-12">
              <p className="eyebrow mb-3">CONTACT</p>
              <h2 className="font-serif font-semibold text-[#0E1A30] mb-3" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
                お問い合わせ
              </h2>
              <p className="text-[#6B6B6B] text-[15px]">立場に応じた窓口をご用意しています。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#E5E3DD]">
              {[
                {
                  for: "FOR COMPANIES",
                  title: "企業の方へ",
                  desc: "認定制度への加盟、研修受講、自社の取り組みに関するご相談はこちらから。",
                  cta: "認定申請・加盟相談",
                },
                {
                  for: "FOR GOVERNMENT",
                  title: "行政・自治体の方へ",
                  desc: "政策提言・連携イベント・データ提供等に関するご相談を承ります。",
                  cta: "行政連携の相談",
                },
                {
                  for: "FOR MEDIA",
                  title: "メディアの方へ",
                  desc: "取材・寄稿・登壇のご依頼、プレスキットのダウンロードはこちらから。",
                  cta: "取材依頼・プレスキット",
                },
              ].map((cell, i) => (
                <a
                  key={cell.for}
                  href="#"
                  className="block p-10 bg-white hover:bg-[#F7F6F2] transition-colors no-underline group"
                  style={{
                    borderRight: i < 2 ? "1px solid #E5E3DD" : undefined,
                  }}
                >
                  <span className="block text-[11px] font-semibold tracking-[0.16em] text-[#C8442A] mb-3">{cell.for}</span>
                  <h3 className="font-serif font-semibold text-[#0E1A30] text-[22px] mb-3 leading-snug">{cell.title}</h3>
                  <p className="text-[14px] text-[#6B6B6B] leading-relaxed mb-6">{cell.desc}</p>
                  <span className="text-[13px] font-semibold text-[#0E1A30] group-hover:text-[#C8442A] transition-colors">
                    {cell.cta} <span className="text-[#C8442A]">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
