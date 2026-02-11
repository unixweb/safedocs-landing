"use client";

import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Preise", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

const FONT_SIZES = [100, 112, 125, 137, 150] as const;
const FONT_LABELS = ["100%", "112%", "125%", "137%", "150%"];
const STORAGE_KEY = "safedocs-font-size";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);

  // Load saved font size preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const idx = FONT_SIZES.indexOf(Number(saved) as (typeof FONT_SIZES)[number]);
        if (idx !== -1) {
          setFontIndex(idx);
          document.documentElement.style.fontSize = `${FONT_SIZES[idx]}%`;
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const decreaseFont = useCallback(() => {
    setFontIndex((prev) => {
      const next = Math.max(0, prev - 1);
      document.documentElement.style.fontSize = `${FONT_SIZES[next]}%`;
      try { localStorage.setItem(STORAGE_KEY, String(FONT_SIZES[next])); } catch {}
      return next;
    });
  }, []);

  const increaseFont = useCallback(() => {
    setFontIndex((prev) => {
      const next = Math.min(FONT_SIZES.length - 1, prev + 1);
      document.documentElement.style.fontSize = `${FONT_SIZES[next]}%`;
      try { localStorage.setItem(STORAGE_KEY, String(FONT_SIZES[next])); } catch {}
      return next;
    });
  }, []);

  function handleLinkClick() {
    setMobileOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-primary">
            SafeDocs Portal
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}

            {/* Font size control */}
            <div
              className="flex items-center gap-1 rounded-lg border border-gray-200 px-1 py-1"
              role="group"
              aria-label="Schriftgröße anpassen"
            >
              <button
                type="button"
                onClick={decreaseFont}
                disabled={fontIndex === 0}
                className="flex h-8 w-8 items-center justify-center rounded text-text-muted transition-colors hover:bg-bg-light hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Schrift verkleinern"
                title="Schrift verkleinern"
              >
                <span className="text-base font-bold leading-none" aria-hidden="true">A&minus;</span>
              </button>
              <span
                className="min-w-[3rem] text-center text-base font-medium text-text-muted select-none"
                aria-live="polite"
              >
                {FONT_LABELS[fontIndex]}
              </span>
              <button
                type="button"
                onClick={increaseFont}
                disabled={fontIndex === FONT_SIZES.length - 1}
                className="flex h-8 w-8 items-center justify-center rounded text-text-muted transition-colors hover:bg-bg-light hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Schrift vergrößern"
                title="Schrift vergrößern"
              >
                <span className="text-base font-bold leading-none" aria-hidden="true">A+</span>
              </button>
            </div>

            <a
              href="#cta"
              className="rounded-lg bg-primary-light px-5 py-2 text-base font-semibold text-white transition-colors hover:bg-primary"
            >
              Jetzt starten
            </a>
          </div>

          {/* Mobile: font control + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={decreaseFont}
              disabled={fontIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-bg-light hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Schrift verkleinern"
            >
              <span className="text-base font-bold" aria-hidden="true">A&minus;</span>
            </button>
            <button
              type="button"
              onClick={increaseFont}
              disabled={fontIndex === FONT_SIZES.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-bg-light hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Schrift vergrößern"
            >
              <span className="text-base font-bold" aria-hidden="true">A+</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md p-2 text-text-muted transition-colors hover:bg-bg-light hover:text-primary"
              aria-expanded={mobileOpen}
              aria-label="Hauptnavigation umschalten"
            >
              {mobileOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block rounded-md px-3 py-2 text-base font-medium text-text-muted transition-colors hover:bg-bg-light hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={handleLinkClick}
              className="mt-2 block rounded-lg bg-primary-light px-3 py-2 text-center text-base font-semibold text-white transition-colors hover:bg-primary"
            >
              Jetzt starten
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
