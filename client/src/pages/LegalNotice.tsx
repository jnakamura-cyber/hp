/**
 * Legal Notice (特定商取引法) Page — J-Craft
 * Design: Industrial Elegance — Navy #0E1A30, Rust #C8442A, Cream #F7F6F2
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const items = [
  { label: "法人名", value: "一般社団法人 日本建設職人支援機構（J-Craft）" },
  { label: "代表者", value: "代表理事 松永 昭吾" },
  {
    label: "所在地",
    value:
      "〒 ——（設立後に登記住所を掲載）\n※郵便による請求には書面にてお答えします",
  },
  {
    label: "電話番号",
    value: "設立後に掲載予定\n（お問い合わせはメールにてお願いします）",
  },
  {
    label: "メールアドレス",
    value: "info@j-craft.or.jp（設立後に開設予定）",
  },
  {
    label: "サービス内容",
    value:
      "（1）協力会社パートナーシップ宣言 認定制度への加盟・認定審査\n（2）建設業向けセミナー・研修プログラムの提供\n（3）政策提言活動に関連する資料・レポートの提供",
  },
  {
    label: "料金",
    value:
      "・加盟会費：無料\n・セミナー・研修：プログラムごとに別途案内（事前に明示）\n・資料・レポート：無料（一部有料コンテンツは事前に明示）",
  },
  {
    label: "料金以外の必要費用",
    value:
      "会場参加型セミナーの場合、交通費・宿泊費はご参加者の負担となります。",
  },
  {
    label: "申込方法",
    value:
      "本サイトの申込フォームまたはメールにてお申し込みください。受付完了後、事務局より確認メールをお送りします。",
  },
  {
    label: "支払方法",
    value: "銀行振込（有料サービスの場合）。詳細は申込確認メールにてご案内します。",
  },
  {
    label: "支払時期",
    value: "有料サービスの場合、サービス提供前月末日までにお支払いください。",
  },
  {
    label: "サービス提供時期",
    value:
      "認定審査：申込受付後、原則30日以内に結果をご連絡します。\nセミナー・研修：申込時に案内した日程のとおり。",
  },
  {
    label: "キャンセル・返金",
    value:
      "加盟申込：審査開始前であればキャンセル可能です。\nセミナー・研修：開催7日前までのキャンセルは全額返金。それ以降のキャンセルは返金不可となります（代理参加は可）。",
  },
  {
    label: "個人情報の取り扱い",
    value: "別途定めるプライバシーポリシーに従い適切に管理します。",
  },
];

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Header />

      {/* Page Header */}
      <div className="bg-[#0E1A30] py-16">
        <div className="container">
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
            特定商取引法に基づく表記
          </h1>
          <p className="text-white/60 text-[14px] mt-3">
            最終更新日：2026年夏（設立時）
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16 max-w-3xl mx-auto">
        <div className="bg-white border border-[#E8E4DC]" style={{ borderRadius: "2px" }}>
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col md:flex-row ${
                i < items.length - 1 ? "border-b border-[#E8E4DC]" : ""
              }`}
            >
              <div
                className="md:w-48 flex-shrink-0 px-6 py-5 bg-[#F7F6F2] border-b md:border-b-0 md:border-r border-[#E8E4DC]"
              >
                <span className="font-semibold text-[#0E1A30] text-[13px]">
                  {item.label}
                </span>
              </div>
              <div className="px-6 py-5 flex-1">
                <p className="text-[#444] text-[14px] leading-loose whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[#888] text-[13px] text-center mt-8">
          © 2026 一般社団法人 日本建設職人支援機構（J-Craft）
        </p>
      </div>

      <Footer />
    </div>
  );
}
