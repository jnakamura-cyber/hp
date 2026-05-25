/*
 * Apply Page — J-Craft
 * Design: Industrial Elegance
 * Tone: 実務・行政用語調
 * Sections: PageHeader → 会員種別選択 → フォーム → 送信確認
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

type MemberType = "regular" | "craftsmen" | "";

export default function Apply() {
  const formRef = useReveal();
  const [memberType, setMemberType] = useState<MemberType>("");
  const [submitted, setSubmitted] = useState(false);
  const [agree, setAgree] = useState(false);

  const [form, setForm] = useState({
    companyName: "",
    repName: "",
    email: "",
    phone: "",
    prefecture: "",
    license: "",
    employees: "",
    interest: [] as string[],
    message: "",
    // 職人会員用
    craftType: "",
    individualOrCompany: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (value: string) => {
    setForm((prev) => ({
      ...prev,
      interest: prev.interest.includes(value)
        ? prev.interest.filter((v) => v !== value)
        : [...prev.interest, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const inputClass = "w-full border border-[#D5D1C8] bg-white px-4 py-3 text-[14px] text-[#1F1F1F] focus:outline-none focus:border-[#0E1A30] transition-colors";

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Header />

      <section className="relative pt-[60px] sm:pt-[72px] pb-12 sm:pb-16 bg-[#0E1A30]">
        <div className="container pt-10 sm:pt-16 relative z-10">
          <nav className="text-[12px] text-white/60 mb-5 tracking-wide">
            <Link href="/" className="text-white/60 hover:text-white no-underline transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <span>加盟申込</span>
          </nav>
          <h1 className="font-serif font-semibold text-white mb-4 leading-tight" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
            加盟申込フォーム
          </h1>
          <p className="text-white/80 max-w-2xl leading-loose text-[15px]">
            正会員・職人会員の年会費は無料です。お気軽にお申し込みください。
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">

            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-[#0E1A30] flex items-center justify-center mx-auto mb-6" style={{ borderRadius: "2px" }}>
                  <span className="text-white text-[28px]">✓</span>
                </div>
                <h2 className="font-serif font-semibold text-[#0E1A30] text-[26px] mb-4">お申し込みを受け付けました</h2>
                <p className="text-[15px] text-[#444] leading-loose mb-8">
                  ご入力いただいたメールアドレスに確認メールをお送りします。<br />
                  事務局（CB総研）より5営業日以内にご連絡いたします。
                </p>
                <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-[14px] text-white no-underline" style={{ background: "#0E1A30", borderRadius: "2px" }}>
                  トップページへ戻る
                </Link>
              </div>
            ) : (
              <div ref={formRef} className="reveal">

                {/* 会員種別選択 */}
                <div className="mb-10">
                  <h2 className="font-serif font-semibold text-[#0E1A30] text-[20px] mb-2 pl-5 border-l-4 border-[#C8442A]">
                    会員種別を選択してください
                  </h2>
                  <p className="text-[13px] text-[#888] mb-5 pl-5">正会員・職人会員ともに年会費は無料です。</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        value: "regular" as MemberType,
                        label: "正会員",
                        sub: "土木一式または建築一式の建設業許可を有する法人（地域元請建設会社）",
                        badge: "認定申請資格あり",
                        badgeColor: "#C8442A",
                      },
                      {
                        value: "craftsmen" as MemberType,
                        label: "職人会員",
                        sub: "建設職人・専門工事会社（協力会社）",
                        badge: "部会参加・意見提出",
                        badgeColor: "#0E1A30",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setMemberType(opt.value)}
                        className="text-left p-5 border-2 transition-all"
                        style={{
                          borderColor: memberType === opt.value ? "#0E1A30" : "#E5E3DD",
                          background: memberType === opt.value ? "#F7F6F2" : "white",
                          borderRadius: "2px",
                        }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="font-serif font-semibold text-[#0E1A30] text-[17px]">{opt.label}</span>
                          <span className="text-[10px] font-semibold tracking-[0.1em] text-white px-2 py-0.5" style={{ background: opt.badgeColor, borderRadius: "2px" }}>
                            {opt.badge}
                          </span>
                        </div>
                        <p className="text-[12px] text-[#666] leading-relaxed m-0">{opt.sub}</p>
                        <div className="mt-3 text-[13px] font-semibold text-[#C8442A]">年会費：無料</div>
                      </button>
                    ))}
                  </div>
                </div>

                {memberType && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-[#F7F6F2] border border-[#E5E3DD] px-5 py-4 text-[13px] text-[#444]" style={{ borderRadius: "2px" }}>
                      <strong className="text-[#0E1A30]">
                        {memberType === "regular" ? "正会員" : "職人会員"}
                      </strong>
                      としてお申し込みいただきます。
                      {memberType === "regular" && "加盟後、認定申請（審査料10万円）が可能になります。"}
                      {memberType === "craftsmen" && "部会への参加・アンケート・意見提出の窓口として活動いただけます。"}
                    </div>

                    {/* 職人会員：個人 or 法人 */}
                    {memberType === "craftsmen" && (
                      <div>
                        <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                          個人・法人の区別 <span className="text-[#C8442A]">*</span>
                        </label>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                          {["個人（職人）", "法人（専門工事会社）"].map((opt) => (
                            <label key={opt} className="flex items-center gap-2 text-[14px] text-[#444] cursor-pointer">
                              <input
                                type="radio"
                                name="individualOrCompany"
                                value={opt}
                                checked={form.individualOrCompany === opt}
                                onChange={handleChange}
                                className="accent-[#0E1A30]"
                                required
                              />
                              {opt}
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 会社名 / 氏名 */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                        {memberType === "craftsmen" && form.individualOrCompany === "個人（職人）" ? "氏名" : "会社名・法人名"}
                        <span className="text-[#C8442A] ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        required
                        placeholder={memberType === "craftsmen" && form.individualOrCompany === "個人（職人）" ? "山田 太郎" : "株式会社○○建設"}
                        className={inputClass}
                        style={{ borderRadius: "2px" }}
                      />
                    </div>

                    {/* 担当者名（法人の場合） */}
                    {!(memberType === "craftsmen" && form.individualOrCompany === "個人（職人）") && (
                      <div>
                        <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                          担当者名 <span className="text-[#C8442A]">*</span>
                        </label>
                        <input
                          type="text"
                          name="repName"
                          value={form.repName}
                          onChange={handleChange}
                          required
                          placeholder="山田 太郎"
                          className={inputClass}
                          style={{ borderRadius: "2px" }}
                        />
                      </div>
                    )}

                    {/* メールアドレス */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                        メールアドレス <span className="text-[#C8442A]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="info@example.co.jp"
                        className={inputClass}
                        style={{ borderRadius: "2px" }}
                      />
                    </div>

                    {/* 電話番号 */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="03-0000-0000"
                        className={inputClass}
                        style={{ borderRadius: "2px" }}
                      />
                    </div>

                    {/* 都道府県 */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                        所在都道府県 <span className="text-[#C8442A]">*</span>
                      </label>
                      <select
                        name="prefecture"
                        value={form.prefecture}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        style={{ borderRadius: "2px" }}
                      >
                        <option value="">選択してください</option>
                        {["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"].map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    {/* 正会員：建設業許可番号 */}
                    {memberType === "regular" && (
                      <div>
                        <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                          建設業許可番号 <span className="text-[#C8442A]">*</span>
                        </label>
                        <input
                          type="text"
                          name="license"
                          value={form.license}
                          onChange={handleChange}
                          required
                          placeholder="国土交通大臣許可（般-○○）第○○○○○号"
                          className={inputClass}
                          style={{ borderRadius: "2px" }}
                        />
                        <p className="text-[12px] text-[#888] mt-1">土木一式または建築一式の許可番号をご記入ください。</p>
                      </div>
                    )}

                    {/* 職人会員：職種 */}
                    {memberType === "craftsmen" && (
                      <div>
                        <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                          職種・専門工事の種別
                        </label>
                        <input
                          type="text"
                          name="craftType"
                          value={form.craftType}
                          onChange={handleChange}
                          placeholder="例：型枠大工、電気工事、管工事 など"
                          className={inputClass}
                          style={{ borderRadius: "2px" }}
                        />
                      </div>
                    )}

                    {/* 従業員数（法人のみ） */}
                    {!(memberType === "craftsmen" && form.individualOrCompany === "個人（職人）") && (
                      <div>
                        <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                          従業員数
                        </label>
                        <select
                          name="employees"
                          value={form.employees}
                          onChange={handleChange}
                          className={inputClass}
                          style={{ borderRadius: "2px" }}
                        >
                          <option value="">選択してください</option>
                          <option value="1-9">1〜9名</option>
                          <option value="10-29">10〜29名</option>
                          <option value="30-99">30〜99名</option>
                          <option value="100-299">100〜299名</option>
                          <option value="300+">300名以上</option>
                        </select>
                      </div>
                    )}

                    {/* 関心のある取り組み */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#0E1A30] mb-3">
                        関心のある取り組み（複数選択可）
                      </label>
                      <div className="space-y-2">
                        {(memberType === "regular"
                          ? [
                              "協力会社パートナーシップ宣言 認定の取得",
                              "A：採用支援（合同採用・求人票作成）",
                              "B：教育・育成支援（研修・資格取得補助）",
                              "C：DX支援（ツール導入・BIM/CIM）",
                              "E：安全・環境支援（安全衛生・保険）",
                              "政策提言・業界標準化への参画",
                            ]
                          : [
                              "部会への参加",
                              "認定基準改定への意見提出",
                              "研修・勉強会への参加",
                              "アンケートへの協力",
                            ]
                        ).map((item) => (
                          <label key={item} className="flex items-center gap-3 text-[14px] text-[#444] cursor-pointer">
                            <input
                              type="checkbox"
                              checked={form.interest.includes(item)}
                              onChange={() => handleCheckbox(item)}
                              className="accent-[#0E1A30] w-4 h-4 flex-shrink-0"
                            />
                            {item}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* 備考 */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#0E1A30] mb-2">
                        ご質問・備考
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="ご質問・ご要望があればご記入ください"
                        className={inputClass}
                        style={{ borderRadius: "2px", resize: "vertical" }}
                      />
                    </div>

                    {/* 同意 */}
                    <div className="bg-[#F7F6F2] border border-[#E5E3DD] px-5 py-5" style={{ borderRadius: "2px" }}>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={agree}
                          onChange={(e) => setAgree(e.target.checked)}
                          className="accent-[#0E1A30] w-4 h-4 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-[13px] text-[#444] leading-relaxed">
                          <Link href="/privacy" className="text-[#C8442A] underline">プライバシーポリシー</Link>に同意の上、申し込みます。入力いただいた個人情報は、加盟審査・事務局からのご連絡にのみ使用します。
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={!agree}
                      className="w-full py-4 font-semibold text-[15px] text-white transition-all"
                      style={{
                        background: agree ? "#0E1A30" : "#B0ADA6",
                        borderRadius: "2px",
                        cursor: agree ? "pointer" : "not-allowed",
                      }}
                    >
                      申し込みを送信する
                    </button>

                    <p className="text-[12px] text-[#888] text-center">
                      送信後、事務局（CB総研）より5営業日以内にご連絡します。
                    </p>
                  </form>
                )}

              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
