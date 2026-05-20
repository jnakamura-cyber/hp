/**
 * Apply (加盟申込フォーム) Page — J-Craft
 * Design: Industrial Elegance — Navy #0E1A30, Rust #C8442A, Cream #F7F6F2
 * 実動フォーム（Formspree経由でメール送信）
 */

import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type FormData = {
  type: string;
  company: string;
  department: string;
  name: string;
  email: string;
  phone: string;
  prefecture: string;
  employees: string;
  interest: string[];
  message: string;
  agree: boolean;
};

const INITIAL: FormData = {
  type: "certification",
  company: "",
  department: "",
  name: "",
  email: "",
  phone: "",
  prefecture: "",
  employees: "",
  interest: [],
  message: "",
  agree: false,
};

const PREFECTURES = [
  "北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県",
  "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
  "新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県",
  "静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県",
  "奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県",
  "徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県",
  "熊本県","大分県","宮崎県","鹿児島県","沖縄県",
];

const INTEREST_OPTIONS = [
  "協力会社パートナーシップ宣言 認定の申請",
  "セミナー・研修への参加",
  "政策提言活動への参画",
  "賛助会員（法人）への加入",
  "その他・情報収集",
];

export default function Apply() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.company.trim()) e.company = "会社名を入力してください";
    if (!form.name.trim()) e.name = "担当者名を入力してください";
    if (!form.email.trim()) e.email = "メールアドレスを入力してください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "正しいメールアドレスを入力してください";
    if (!form.prefecture) e.prefecture = "都道府県を選択してください";
    if (form.interest.length === 0) e.interest = "1つ以上選択してください";
    if (!form.agree) e.agree = "プライバシーポリシーへの同意が必要です";
    return e;
  };

  const handleInterest = (val: string) => {
    setForm((f) => ({
      ...f,
      interest: f.interest.includes(val)
        ? f.interest.filter((v) => v !== val)
        : [...f.interest, val],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");

    // Formspree endpoint — replace with actual endpoint after setup
    try {
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          申込種別: form.type === "certification" ? "認定申請" : form.type === "seminar" ? "セミナー参加" : "賛助会員",
          会社名: form.company,
          部署名: form.department,
          担当者名: form.name,
          メールアドレス: form.email,
          電話番号: form.phone,
          都道府県: form.prefecture,
          従業員数: form.employees,
          関心事項: form.interest.join("、"),
          メッセージ: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full border px-4 py-3 text-[14px] text-[#1F1F1F] bg-white outline-none focus:border-[#0E1A30] transition-colors ${
      errors[field] ? "border-[#C8442A]" : "border-[#D5D1C8]"
    }`;

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Header />

      {/* Page Header */}
      <div className="bg-[#0E1A30] py-16">
        <div className="container">
          <nav className="text-[12px] text-white/60 mb-5 tracking-wide">
            <Link href="/" className="text-white/60 hover:text-white no-underline transition-colors">HOME</Link>
            <span className="mx-2">／</span>
            <span>加盟申込・お問い合わせ</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[#C8442A]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8442A] uppercase">Apply / Contact</span>
          </div>
          <h1 className="font-serif font-bold text-white mb-4" style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}>
            加盟申込・お問い合わせ
          </h1>
          <p className="text-white/70 text-[15px] max-w-2xl leading-relaxed">
            認定申請・セミナー参加・賛助会員加入・その他のご相談を受け付けています。内容を確認の上、事務局より3営業日以内にご連絡します。
          </p>
        </div>
      </div>

      <div className="container py-16 max-w-3xl mx-auto">

        {status === "success" ? (
          <div className="bg-white border border-[#E8E4DC] px-8 py-12 text-center" style={{ borderRadius: "2px" }}>
            <div className="w-12 h-12 bg-[#0E1A30] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="font-serif font-bold text-[#0E1A30] text-[24px] mb-3">送信が完了しました</h2>
            <p className="text-[#666] text-[15px] leading-loose mb-8">
              お申し込みありがとうございます。<br />
              3営業日以内に事務局よりご連絡いたします。
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#C8442A] text-white font-semibold px-6 py-3 text-[14px] no-underline hover:bg-[#b03922] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              トップページへ →
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>

            {/* 申込種別 */}
            <div className="bg-white border border-[#E8E4DC] p-8 mb-6" style={{ borderRadius: "2px" }}>
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[18px] mb-6 pb-4 border-b border-[#E8E4DC]">
                お申し込みの種別
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: "certification", label: "認定申請", desc: "協力会社パートナーシップ宣言の認定を申請する" },
                  { value: "seminar", label: "セミナー・研修", desc: "教育プログラムへの参加を希望する" },
                  { value: "associate", label: "賛助会員", desc: "賛助会員（法人・個人）への加入を希望する" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`border p-4 cursor-pointer transition-all ${
                      form.type === opt.value
                        ? "border-[#C8442A] bg-[#C8442A]/5"
                        : "border-[#D5D1C8] hover:border-[#0E1A30]"
                    }`}
                    style={{ borderRadius: "2px" }}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={opt.value}
                      checked={form.type === opt.value}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="sr-only"
                    />
                    <div className={`font-semibold text-[14px] mb-1 ${form.type === opt.value ? "text-[#C8442A]" : "text-[#0E1A30]"}`}>
                      {opt.label}
                    </div>
                    <div className="text-[12px] text-[#888] leading-relaxed">{opt.desc}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* 会社・担当者情報 */}
            <div className="bg-white border border-[#E8E4DC] p-8 mb-6" style={{ borderRadius: "2px" }}>
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[18px] mb-6 pb-4 border-b border-[#E8E4DC]">
                会社・担当者情報
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                    会社名 <span className="text-[#C8442A]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="株式会社〇〇建設"
                    className={inputClass("company")}
                    style={{ borderRadius: "2px" }}
                  />
                  {errors.company && <p className="text-[#C8442A] text-[12px] mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">部署名</label>
                  <input
                    type="text"
                    value={form.department}
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                    placeholder="総務部・経営企画室 など"
                    className={inputClass("department")}
                    style={{ borderRadius: "2px" }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                      担当者名 <span className="text-[#C8442A]">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="山田 太郎"
                      className={inputClass("name")}
                      style={{ borderRadius: "2px" }}
                    />
                    {errors.name && <p className="text-[#C8442A] text-[12px] mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">電話番号</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="03-0000-0000"
                      className={inputClass("phone")}
                      style={{ borderRadius: "2px" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                    メールアドレス <span className="text-[#C8442A]">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="info@example.co.jp"
                    className={inputClass("email")}
                    style={{ borderRadius: "2px" }}
                  />
                  {errors.email && <p className="text-[#C8442A] text-[12px] mt-1">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                      都道府県 <span className="text-[#C8442A]">*</span>
                    </label>
                    <select
                      value={form.prefecture}
                      onChange={(e) => setForm({ ...form, prefecture: e.target.value })}
                      className={`${inputClass("prefecture")} appearance-none`}
                      style={{ borderRadius: "2px" }}
                    >
                      <option value="">選択してください</option>
                      {PREFECTURES.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    {errors.prefecture && <p className="text-[#C8442A] text-[12px] mt-1">{errors.prefecture}</p>}
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">従業員数</label>
                    <select
                      value={form.employees}
                      onChange={(e) => setForm({ ...form, employees: e.target.value })}
                      className={`${inputClass("employees")} appearance-none`}
                      style={{ borderRadius: "2px" }}
                    >
                      <option value="">選択してください</option>
                      {["1〜9名", "10〜29名", "30〜99名", "100〜299名", "300名以上"].map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 関心事項 */}
            <div className="bg-white border border-[#E8E4DC] p-8 mb-6" style={{ borderRadius: "2px" }}>
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[18px] mb-6 pb-4 border-b border-[#E8E4DC]">
                ご関心の内容 <span className="text-[#C8442A]">*</span>
              </h2>
              <div className="space-y-3">
                {INTEREST_OPTIONS.map((opt) => (
                  <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                    <div
                      className={`w-5 h-5 flex-shrink-0 border flex items-center justify-center mt-0.5 transition-colors ${
                        form.interest.includes(opt)
                          ? "bg-[#C8442A] border-[#C8442A]"
                          : "border-[#D5D1C8] group-hover:border-[#0E1A30]"
                      }`}
                      style={{ borderRadius: "2px" }}
                    >
                      {form.interest.includes(opt) && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={form.interest.includes(opt)}
                      onChange={() => handleInterest(opt)}
                    />
                    <span className="text-[14px] text-[#444]">{opt}</span>
                  </label>
                ))}
              </div>
              {errors.interest && <p className="text-[#C8442A] text-[12px] mt-3">{errors.interest}</p>}
            </div>

            {/* メッセージ */}
            <div className="bg-white border border-[#E8E4DC] p-8 mb-6" style={{ borderRadius: "2px" }}>
              <h2 className="font-serif font-semibold text-[#0E1A30] text-[18px] mb-6 pb-4 border-b border-[#E8E4DC]">
                ご質問・ご要望（任意）
              </h2>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                placeholder="ご質問、ご要望、現在の状況などをご自由にお書きください。"
                className="w-full border border-[#D5D1C8] px-4 py-3 text-[14px] text-[#1F1F1F] bg-white outline-none focus:border-[#0E1A30] transition-colors resize-none"
                style={{ borderRadius: "2px" }}
              />
            </div>

            {/* 同意・送信 */}
            <div className="bg-white border border-[#E8E4DC] p-8" style={{ borderRadius: "2px" }}>
              <label className="flex items-start gap-3 cursor-pointer mb-6">
                <div
                  className={`w-5 h-5 flex-shrink-0 border flex items-center justify-center mt-0.5 transition-colors ${
                    form.agree ? "bg-[#0E1A30] border-[#0E1A30]" : "border-[#D5D1C8]"
                  }`}
                  style={{ borderRadius: "2px" }}
                >
                  {form.agree && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={form.agree}
                  onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                />
                <span className="text-[14px] text-[#444] leading-relaxed">
                  <Link href="/privacy" className="text-[#C8442A] underline hover:no-underline" target="_blank">
                    プライバシーポリシー
                  </Link>
                  に同意の上、送信します。
                </span>
              </label>
              {errors.agree && <p className="text-[#C8442A] text-[12px] mb-4">{errors.agree}</p>}

              {status === "error" && (
                <div className="bg-[#C8442A]/10 border border-[#C8442A]/30 px-4 py-3 text-[13px] text-[#C8442A] mb-4" style={{ borderRadius: "2px" }}>
                  送信に失敗しました。しばらく時間をおいてから再度お試しください。
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#C8442A] text-white font-semibold py-4 text-[15px] hover:bg-[#b03922] active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ borderRadius: "2px" }}
              >
                {status === "sending" ? "送信中..." : "送信する →"}
              </button>

              <p className="text-[12px] text-[#888] text-center mt-4">
                送信後、3営業日以内に事務局よりご連絡します。
              </p>
            </div>

          </form>
        )}
      </div>

      <Footer />
    </div>
  );
}
