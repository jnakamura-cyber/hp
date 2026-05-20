/*
 * Header Component — J-Craft
 * Design: Industrial Elegance
 * - Sticky header with blur backdrop
 * - Navy logo with serif font
 * - Red CTA button
 * - Mobile hamburger menu
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "機構について", href: "/about" },
  { label: "3つの取り組み", href: "/activities" },
  { label: "認定制度", href: "/certification" },
  { label: "情報公開", href: "/disclosure" },
  { label: "お問い合わせ", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleAnchorClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location === "/") {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-[#E5E3DD]"
          : "bg-white/95 backdrop-blur-sm border-b border-[#E5E3DD]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-[72px] gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline group">
            <div
              className="w-9 h-9 flex items-center justify-center text-white font-serif text-lg font-bold flex-shrink-0"
              style={{ background: "#0E1A30", letterSpacing: "-0.02em" }}
            >
              J
            </div>
            <div className="leading-tight">
              <div
                className="font-serif font-semibold text-[17px] text-[#0E1A30] leading-snug"
              >
                日本建設職人支援機構
              </div>
              <div className="text-[10px] font-medium text-[#6B6B6B] tracking-[0.06em] mt-0.5">
                JAPAN CRAFT WORKERS SUPPORT ORGANIZATION
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-5 list-none m-0 p-0">
              {navItems.map((item) => {
                const isAnchor = item.href.startsWith("/#");
                const isActive = !isAnchor && location === item.href;
                return (
                  <li key={item.href}>
                    {isAnchor ? (
                      <button
                        onClick={() => handleAnchorClick(item.href)}
                        className={`text-[13.5px] font-medium transition-colors duration-150 bg-transparent border-0 p-0 ${
                          isActive
                            ? "text-[#C8442A]"
                            : "text-[#1F1F1F] hover:text-[#C8442A]"
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-[13.5px] font-medium transition-colors duration-150 no-underline ${
                          isActive
                            ? "text-[#C8442A]"
                            : "text-[#1F1F1F] hover:text-[#C8442A]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-[#C8442A] text-white text-[13px] font-semibold px-4 py-2.5 tracking-wide no-underline transition-all duration-150 hover:bg-[#b03922] active:scale-[0.97]"
              style={{ borderRadius: "2px" }}
            >
              加盟申込
              <span className="font-normal">→</span>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#0E1A30]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E3DD] shadow-lg">
          <div className="container py-4">
            <ul className="list-none m-0 p-0 space-y-1">
              {navItems.map((item) => {
                const isAnchor = item.href.startsWith("/#");
                return (
                  <li key={item.href}>
                    {isAnchor ? (
                      <button
                        onClick={() => handleAnchorClick(item.href)}
                        className="w-full text-left py-3 px-2 text-[15px] font-medium text-[#1F1F1F] hover:text-[#C8442A] transition-colors border-b border-[#F0EDE8] bg-transparent"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3 px-2 text-[15px] font-medium text-[#1F1F1F] hover:text-[#C8442A] transition-colors border-b border-[#F0EDE8] no-underline"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="pt-4">
              <Link
                href="/apply"
                className="block w-full text-center bg-[#C8442A] text-white text-[14px] font-semibold py-3 no-underline hover:bg-[#b03922] transition-colors"
                style={{ borderRadius: "2px" }}
              >
                加盟申込 →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
