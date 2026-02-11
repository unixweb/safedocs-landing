"use client";

import { useState, useEffect, useRef } from "react";

export default function ArchitectureDiagram() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Architektur auf einen Blick
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Ein vollständiger Docker-Stack — sicher, performant und 100% unter Ihrer Kontrolle
          </p>
        </div>

        {/* SVG Diagram */}
        <div className="mx-auto max-w-4xl">
          <svg
            viewBox="0 0 800 500"
            className="w-full"
            role="img"
            aria-labelledby="arch-title arch-desc"
          >
            <title id="arch-title">SafeDocs Docker-Architektur</title>
            <desc id="arch-desc">
              Hub-and-Spoke-Diagramm: Node.js App im Zentrum, verbunden mit Frontend (HTTPS), PostgreSQL (SQL), Redis (Cache) und ClamAV (Virenscan). Alle Komponenten laufen als Docker-Container on-premise.
            </desc>

            {/* CSS animations inline */}
            <defs>
              <style>{`
                @keyframes dashFlow {
                  to { stroke-dashoffset: -20; }
                }
                .dash-flow {
                  animation: dashFlow 1.5s linear infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                  .dash-flow {
                    animation: none;
                  }
                }
              `}</style>
              <marker id="arrow" viewBox="0 0 10 8" refX="10" refY="4" markerWidth="8" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 4 L 0 8 z" fill="#94a3b8" />
              </marker>
            </defs>

            {/* 100% On-Premise Badge */}
            <g className={`transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <rect x="610" y="15" width="170" height="34" rx="17" fill="#22c55e" fillOpacity="0.12" stroke="#22c55e" strokeWidth="1.5" />
              <text x="695" y="37" textAnchor="middle" fontSize="13" fontWeight="600" fill="#22c55e" fontFamily="system-ui, sans-serif">
                100% On-Premise
              </text>
              {/* Lock icon */}
              <rect x="626" y="27" width="10" height="8" rx="2" fill="#22c55e" />
              <path d="M628 27 L628 24 C628 21.5 634 21.5 634 24 L634 27" stroke="#22c55e" strokeWidth="1.5" fill="none" />
            </g>

            {/* --- Connection lines (drawn first, behind nodes) --- */}
            <g className={`transition-opacity duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>

              {/* Nginx → Node.js (top to center) */}
              <line x1="400" y1="130" x2="400" y2="210" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" className={isVisible ? "dash-flow" : ""} markerEnd="url(#arrow)" />
              <rect x="370" y="160" width="60" height="20" rx="4" fill="white" className="arch-label-bg" />
              <text x="400" y="174" textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="system-ui, sans-serif">HTTPS</text>

              {/* Node.js → PostgreSQL (center to bottom) */}
              <line x1="400" y1="290" x2="400" y2="370" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" className={isVisible ? "dash-flow" : ""} markerEnd="url(#arrow)" />
              <rect x="380" y="320" width="40" height="20" rx="4" fill="white" className="arch-label-bg" />
              <text x="400" y="334" textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="system-ui, sans-serif">SQL</text>

              {/* Node.js → Redis (center to right) */}
              <line x1="490" y1="250" x2="580" y2="250" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" className={isVisible ? "dash-flow" : ""} markerEnd="url(#arrow)" />
              <rect x="518" y="232" width="48" height="20" rx="4" fill="white" className="arch-label-bg" />
              <text x="542" y="246" textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="system-ui, sans-serif">Cache</text>

              {/* Node.js → ClamAV (center to left) */}
              <line x1="310" y1="250" x2="220" y2="250" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" className={isVisible ? "dash-flow" : ""} markerEnd="url(#arrow)" />
              <rect x="240" y="232" width="46" height="20" rx="4" fill="white" className="arch-label-bg" />
              <text x="263" y="246" textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="system-ui, sans-serif">Scan</text>
            </g>

            {/* --- Nodes --- */}

            {/* Nginx - Top (Blue) */}
            <g className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`} style={{ transitionDelay: "200ms" }}>
              <rect x="330" y="65" width="140" height="65" rx="12" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="2" />
              <text x="400" y="95" textAnchor="middle" fontSize="15" fontWeight="700" fill="#3b82f6" fontFamily="system-ui, sans-serif">Frontend</text>
              <text x="400" y="115" textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="system-ui, sans-serif">Nginx &amp; SSL</text>
            </g>

            {/* Node.js - Center (Green) */}
            <g className={`transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`} style={{ transitionDelay: "400ms", transformOrigin: "400px 250px" }}>
              <rect x="320" y="210" width="160" height="80" rx="14" fill="#22c55e" fillOpacity="0.12" stroke="#22c55e" strokeWidth="2.5" />
              <text x="400" y="245" textAnchor="middle" fontSize="17" fontWeight="700" fill="#16a34a" fontFamily="system-ui, sans-serif">Backend</text>
              <text x="400" y="268" textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="system-ui, sans-serif">Node.js App Server</text>
            </g>

            {/* PostgreSQL - Bottom (Dark Blue) */}
            <g className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "300ms" }}>
              <rect x="330" y="370" width="140" height="65" rx="12" fill="#1e3a5f" fillOpacity="0.1" stroke="#1e3a5f" strokeWidth="2" />
              <text x="400" y="400" textAnchor="middle" fontSize="15" fontWeight="700" fill="#1e3a5f" fontFamily="system-ui, sans-serif">Datenbank</text>
              <text x="400" y="420" textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="system-ui, sans-serif">PostgreSQL</text>
            </g>

            {/* Redis - Right (Red) */}
            <g className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`} style={{ transitionDelay: "350ms" }}>
              <rect x="580" y="215" width="140" height="65" rx="12" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="2" />
              <text x="650" y="245" textAnchor="middle" fontSize="15" fontWeight="700" fill="#ef4444" fontFamily="system-ui, sans-serif">Cache</text>
              <text x="650" y="265" textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="system-ui, sans-serif">Redis</text>
            </g>

            {/* ClamAV - Left (Amber) */}
            <g className={`transition-all duration-700 ${isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-4"}`} style={{ transitionDelay: "350ms" }}>
              <rect x="80" y="215" width="140" height="65" rx="12" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="2" />
              <text x="150" y="245" textAnchor="middle" fontSize="15" fontWeight="700" fill="#d97706" fontFamily="system-ui, sans-serif">ClamAV</text>
              <text x="150" y="265" textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="system-ui, sans-serif">Virenscan</text>
            </g>

          </svg>
        </div>
      </div>
    </section>
  );
}
