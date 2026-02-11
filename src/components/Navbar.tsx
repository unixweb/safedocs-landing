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
const FONT_STORAGE_KEY = "safedocs-font-size";
const DARK_STORAGE_KEY = "safedocs-dark-mode";

function SunIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M17.72 17.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M17.72 6.28l1.06-1.06" />
      <circle cx="12" cy="12" r="4" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);
  const [dark, setDark] = useState(false);

  // Load saved preferences
  useEffect(() => {
    try {
      const savedFont = localStorage.getItem(FONT_STORAGE_KEY);
      if (savedFont) {
        const idx = FONT_SIZES.indexOf(Number(savedFont) as (typeof FONT_SIZES)[number]);
        if (idx !== -1) {
          setFontIndex(idx);
          document.documentElement.style.fontSize = `${FONT_SIZES[idx]}%`;
        }
      }
      const savedDark = localStorage.getItem(DARK_STORAGE_KEY);
      if (savedDark === "true") {
        setDark(true);
        document.documentElement.classList.add("dark");
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
      try { localStorage.setItem(FONT_STORAGE_KEY, String(FONT_SIZES[next])); } catch {}
      return next;
    });
  }, []);

  const increaseFont = useCallback(() => {
    setFontIndex((prev) => {
      const next = Math.min(FONT_SIZES.length - 1, prev + 1);
      document.documentElement.style.fontSize = `${FONT_SIZES[next]}%`;
      try { localStorage.setItem(FONT_STORAGE_KEY, String(FONT_SIZES[next])); } catch {}
      return next;
    });
  }, []);

  const toggleDark = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      try { localStorage.setItem(DARK_STORAGE_KEY, String(next)); } catch {}
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
          <a href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <svg
              viewBox="0 0 36 36"
              className="h-8 w-8 shrink-0"
              aria-hidden="true"
            >
              {/* Document background */}
              <rect x="4" y="3" width="22" height="30" rx="3" fill="#e8f0fe" stroke="#245fa0" strokeWidth="1.5" />
              {/* Text lines */}
              <rect x="8" y="9" width="14" height="2" rx="1" fill="#245fa0" opacity="0.4" />
              <rect x="8" y="14" width="10" height="2" rx="1" fill="#245fa0" opacity="0.3" />
              <rect x="8" y="19" width="12" height="2" rx="1" fill="#245fa0" opacity="0.3" />
              {/* Shield overlay */}
              <g transform="translate(22, 18)">
                <path
                  d="M0-9 L9-5 L9 3 Q9 10 0 13 Q-9 10 -9 3 L-9-5 Z"
                  fill="#1e3a5f"
                />
                <path
                  d="M0-6.5 L6.5-3.5 L6.5 2 Q6.5 7.5 0 10 Q-6.5 7.5 -6.5 2 L-6.5-3.5 Z"
                  fill="#245fa0"
                />
                <polyline
                  points="-3.5,1.5 -1,4.5 4.5,-1.5"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
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

            {/* Accessibility controls */}
            <div className="flex items-center gap-2">
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

              {/* Dark mode toggle */}
              <button
                type="button"
                onClick={toggleDark}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-text-muted transition-colors hover:bg-bg-light hover:text-primary"
                aria-label={dark ? "Hellen Modus aktivieren" : "Dunklen Modus aktivieren"}
                title={dark ? "Hellen Modus aktivieren" : "Dunklen Modus aktivieren"}
              >
                {dark ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>

            <a
              href="#pricing"
              className="rounded-lg bg-primary-light px-5 py-2 text-base font-semibold text-white transition-colors hover:bg-primary"
            >
              Jetzt starten
            </a>
          </div>

          {/* Mobile: controls + hamburger */}
          <div className="flex items-center gap-1 md:hidden">
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

            {/* Dark mode toggle mobile */}
            <button
              type="button"
              onClick={toggleDark}
              className="flex h-10 w-10 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-bg-light hover:text-primary"
              aria-label={dark ? "Hellen Modus aktivieren" : "Dunklen Modus aktivieren"}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
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
              href="#pricing"
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
