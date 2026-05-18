import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="font-serif font-bold text-[#F0EDE8] select-none" style={{ fontSize: "120px", lineHeight: 1 }}>
          404
        </div>
        <h1 className="font-serif font-semibold text-[#0E1A30] text-[28px] mb-4 -mt-4">
          ページが見つかりません
        </h1>
        <p className="text-[#6B6B6B] text-[15px] mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#C8442A] text-white font-semibold px-6 py-3 text-[14px] no-underline hover:bg-[#b03922] transition-colors"
          style={{ borderRadius: "2px" }}
        >
          トップページへ →
        </Link>
      </div>
      <Footer />
    </div>
  );
}
