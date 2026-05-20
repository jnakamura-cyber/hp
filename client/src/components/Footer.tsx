/*
 * Footer Component — J-Craft
 * Design: Industrial Elegance
 * - Dark navy background
 * - 4-column grid layout
 * - Brand info + navigation links + legal links
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ background: "#0E1A30" }} className="text-white/70 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 flex items-center justify-center text-white font-serif text-base font-bold flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.15)", borderRadius: "2px" }}
              >
                J
              </div>
              <span className="font-serif text-white font-semibold text-[17px]">J-Craft</span>
            </div>
            <div className="text-[12px] leading-relaxed text-white/60 space-y-1">
              <p>一般社団法人 日本建設職人支援機構</p>
              <p>〒 — （設立後に登記住所を掲載）</p>
              <p>代表理事：松永 昭吾</p>
              <p>設立：2026年夏（予定）</p>
            </div>
          </div>

          {/* 機構について */}
          <div>
            <h4 className="text-[11px] tracking-[0.14em] text-white font-semibold mb-4 uppercase">機構について</h4>
            <ul className="list-none m-0 p-0 space-y-2.5">
              {[
                { label: "概要", href: "/about" },
                { label: "代表メッセージ", href: "/about#message" },
                { label: "会員・賛助制度", href: "/about#membership" },
                { label: "役員・組織", href: "/about#governance" },
                { label: "情報公開", href: "/disclosure" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[13px] text-white/65 hover:text-white transition-colors no-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 活動 */}
          <div>
            <h4 className="text-[11px] tracking-[0.14em] text-white font-semibold mb-4 uppercase">活動</h4>
            <ul className="list-none m-0 p-0 space-y-2.5">
              {[
                { label: "パートナーシップ宣言", href: "/activities#partnership" },
                { label: "教育・研修", href: "/activities#education" },
                { label: "政策提言", href: "/activities#policy" },
                { label: "認定制度", href: "/certification" },
                { label: "加盟申込", href: "/apply" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[13px] text-white/65 hover:text-white transition-colors no-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="text-[11px] tracking-[0.14em] text-white font-semibold mb-4 uppercase">お問い合わせ</h4>
            <ul className="list-none m-0 p-0 space-y-2.5">
              {[
                { label: "加盟申込フォーム", href: "/apply" },
                { label: "企業の方", href: "/#contact" },
                { label: "行政・自治体", href: "/#contact" },
                { label: "メディア", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[13px] text-white/65 hover:text-white transition-colors no-underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-[12px] text-white/50 m-0">
            © 2026 一般社団法人 日本建設職人支援機構（J-Craft）
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/privacy" className="text-[11px] text-white/40 hover:text-white/70 transition-colors no-underline">
              プライバシーポリシー
            </Link>
            <span className="text-white/20 text-[11px]">|</span>
            <Link href="/legal-notice" className="text-[11px] text-white/40 hover:text-white/70 transition-colors no-underline">
              特定商取引法に基づく表記
            </Link>
            <span className="text-white/20 text-[11px]">|</span>
            <Link href="/disclosure" className="text-[11px] text-white/40 hover:text-white/70 transition-colors no-underline">
              情報公開
            </Link>
            <span className="text-white/20 text-[11px]">|</span>
            <span className="text-[11px] text-white/40">
              Secretariat: クラフトバンク総研
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
