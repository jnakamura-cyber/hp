/**
 * Privacy Policy Page — J-Craft
 * Design: Industrial Elegance — Navy #0E1A30, Rust #C8442A, Cream #F7F6F2
 * Typography: Noto Serif JP (headings) + Noto Sans JP (body)
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. 個人情報の定義",
    content: `本ポリシーにおける「個人情報」とは、個人情報の保護に関する法律（以下「個人情報保護法」）に定める個人情報を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別できるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができるものを含む）をいいます。`,
  },
  {
    title: "2. 個人情報の収集方法",
    content: `当機構は、以下の方法により個人情報を収集することがあります。\n\n（1）お問い合わせフォームへの入力\n（2）認定申請・加盟申込フォームへの入力\n（3）セミナー・研修への申込\n（4）メールによるご連絡\n（5）名刺交換その他対面での情報提供`,
  },
  {
    title: "3. 個人情報の利用目的",
    content: `当機構は、収集した個人情報を以下の目的のために利用します。\n\n（1）認定制度・加盟に関する審査・手続きの実施\n（2）セミナー・研修・イベントの運営および案内\n（3）お問い合わせへの回答\n（4）機構の活動報告・ニュースレターの送付\n（5）政策提言活動における統計的分析（個人を識別しない形式）\n（6）法令に基づく対応`,
  },
  {
    title: "4. 個人情報の第三者提供",
    content: `当機構は、以下の場合を除き、ご本人の同意なく個人情報を第三者に提供しません。\n\n（1）法令に基づく場合\n（2）人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき\n（3）国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合\n（4）ご本人から事前に同意をいただいた場合`,
  },
  {
    title: "5. 個人情報の安全管理",
    content: `当機構は、個人情報の紛失、破壊、改ざん、漏洩等を防止するため、適切な安全管理措置を講じます。個人情報を取り扱う役員・スタッフに対しては、個人情報の適正な取り扱いに関する教育・指導を行います。`,
  },
  {
    title: "6. 個人情報の開示・訂正・削除",
    content: `ご本人は、当機構が保有する自己の個人情報について、開示・訂正・削除・利用停止を請求することができます。請求を希望される場合は、下記の問い合わせ窓口までご連絡ください。ご本人確認の上、合理的な期間内に対応いたします。`,
  },
  {
    title: "7. Cookieおよびアクセス解析",
    content: `当サイトでは、アクセス状況の把握を目的として、Cookieおよびアクセス解析ツール（Umami Analytics）を使用しています。これらのツールは個人を特定する情報を収集せず、IPアドレスを匿名化した上で集計データのみを処理します。ブラウザの設定によりCookieを無効にすることができますが、一部機能が制限される場合があります。`,
  },
  {
    title: "8. プライバシーポリシーの改定",
    content: `当機構は、法令の改正や業務内容の変更に伴い、本ポリシーを予告なく改定することがあります。改定後のポリシーは、本ページへの掲載をもって効力を生じるものとします。`,
  },
  {
    title: "9. お問い合わせ窓口",
    content: `個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。\n\n一般社団法人 日本建設職人支援機構（J-Craft）\n事務局（クラフトバンク総研内）\nメール：info@j-craft.or.jp（設立後に開設予定）`,
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Header />

      {/* Page Header */}
      <div className="bg-[#0E1A30] pt-[60px] sm:pt-[72px] pb-10 sm:pb-16">
        <div className="container pt-8 sm:pt-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[#C8442A]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8442A] uppercase">
              Legal
            </span>
          </div>
          <h1
            className="font-serif font-bold text-white"
            style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
          >
            プライバシーポリシー
          </h1>
          <p className="text-white/60 text-[14px] mt-3">
            最終更新日：2026年夏（設立時）
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16 max-w-3xl mx-auto">
        <div className="bg-white border border-[#E8E4DC] p-8 md:p-12 mb-8" style={{ borderRadius: "2px" }}>
          <p className="text-[#444] text-[15px] leading-loose mb-10 pb-8 border-b border-[#E8E4DC]">
            一般社団法人 日本建設職人支援機構（以下「当機構」）は、個人情報の保護を重要な責務と認識し、個人情報保護法その他関連法令を遵守した上で、以下のとおりプライバシーポリシーを定めます。
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2
                  className="font-serif font-semibold text-[#0E1A30] mb-4"
                  style={{ fontSize: "17px" }}
                >
                  {section.title}
                </h2>
                <p className="text-[#444] text-[14px] leading-loose whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#888] text-[13px] text-center">
          © 2026 一般社団法人 日本建設職人支援機構（J-Craft）
        </p>
      </div>

      <Footer />
    </div>
  );
}
