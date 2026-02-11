"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Step {
  command: string;
  output: string[];
  delay: number;
}

const steps: Step[] = [
  {
    command: "git clone https://github.com/safedocs/portal.git",
    output: [
      "Cloning into 'portal'...",
      "remote: Enumerating objects: 1247, done.",
      "remote: Counting objects: 100% (1247/1247), done.",
      "Receiving objects: 100% (1247/1247), 2.84 MiB | 12.3 MiB/s, done.",
    ],
    delay: 600,
  },
  {
    command: "cd portal",
    output: [],
    delay: 200,
  },
  {
    command: "docker compose up -d",
    output: [
      "[+] Running 5/5",
      " ✓ Container portal-nginx-1      Started    0.8s",
      " ✓ Container portal-postgres-1    Started    1.2s",
      " ✓ Container portal-redis-1       Started    0.6s",
      " ✓ Container portal-clamav-1      Started    1.5s",
      " ✓ Container portal-app-1         Started    2.1s",
    ],
    delay: 800,
  },
];

const TOTAL_SECONDS = 272; // 4:32
const CHAR_DELAY = 50;

export default function SetupAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [typedChars, setTypedChars] = useState(0);
  const [showOutput, setShowOutput] = useState<number[]>([]);
  const [timerValue, setTimerValue] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasStarted = useRef(false);
  const intervalRefs = useRef<ReturnType<typeof setInterval>[]>([]);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // IntersectionObserver
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          setIsVisible(true);
          hasStarted.current = true;
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clearAllIntervals = useCallback(() => {
    intervalRefs.current.forEach(clearInterval);
    intervalRefs.current = [];
  }, []);

  const showInstant = useCallback(() => {
    setCurrentStep(steps.length - 1);
    setTypedChars(steps[steps.length - 1].command.length);
    setShowOutput(steps.map((_, i) => i));
    setTimerValue(TOTAL_SECONDS);
    setHasFinished(true);
    setIsRunning(false);
  }, []);

  const runAnimation = useCallback(() => {
    clearAllIntervals();
    setIsRunning(true);
    setHasFinished(false);
    setCurrentStep(-1);
    setTypedChars(0);
    setShowOutput([]);
    setTimerValue(0);

    // Timer ticks fast (4:32 in ~8 seconds)
    const timerInterval = setInterval(() => {
      setTimerValue((v) => {
        if (v >= TOTAL_SECONDS) {
          clearInterval(timerInterval);
          return TOTAL_SECONDS;
        }
        return v + 4;
      });
    }, 100);
    intervalRefs.current.push(timerInterval);

    let stepIdx = 0;
    let charIdx = 0;
    let phase: "typing" | "output" | "done" = "typing";

    const advance = () => {
      if (phase === "done") return;

      if (phase === "typing") {
        if (charIdx === 0) {
          setCurrentStep(stepIdx);
          setTypedChars(0);
        }
        if (charIdx < steps[stepIdx].command.length) {
          charIdx++;
          setTypedChars(charIdx);
          const id = setTimeout(advance, CHAR_DELAY);
          intervalRefs.current.push(id as unknown as ReturnType<typeof setInterval>);
        } else {
          phase = "output";
          const id = setTimeout(advance, 300);
          intervalRefs.current.push(id as unknown as ReturnType<typeof setInterval>);
        }
      } else if (phase === "output") {
        setShowOutput((prev) => [...prev, stepIdx]);
        stepIdx++;
        if (stepIdx < steps.length) {
          charIdx = 0;
          phase = "typing";
          const id = setTimeout(advance, steps[stepIdx - 1].delay);
          intervalRefs.current.push(id as unknown as ReturnType<typeof setInterval>);
        } else {
          phase = "done";
          clearInterval(timerInterval);
          setTimerValue(TOTAL_SECONDS);
          setHasFinished(true);
          setIsRunning(false);
        }
      }
    };

    const id = setTimeout(advance, 500);
    intervalRefs.current.push(id as unknown as ReturnType<typeof setInterval>);
  }, [clearAllIntervals]);

  // Start on visible
  useEffect(() => {
    if (!isVisible) return;
    if (prefersReducedMotion) {
      showInstant();
    } else {
      runAnimation();
    }
    return () => clearAllIntervals();
  }, [isVisible, prefersReducedMotion, runAnimation, showInstant, clearAllIntervals]);

  const restart = () => {
    if (prefersReducedMotion) {
      showInstant();
    } else {
      runAnimation();
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section
      ref={sectionRef}
      id="setup"
      className="bg-bg-light py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            In unter 5 Minuten einsatzbereit
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Drei Befehle — das ist alles, was Sie brauchen
          </p>
        </div>

        {/* Terminal Window */}
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl overflow-hidden shadow-lg">
            {/* Title bar */}
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-3 text-sm text-gray-400 font-mono">
                Terminal — safedocs-setup
              </span>
              {isRunning && (
                <span className="ml-auto text-xs text-gray-500 font-mono tabular-nums">
                  {formatTime(timerValue)}
                </span>
              )}
            </div>

            {/* Terminal body */}
            <div
              className="bg-gray-900 p-6 font-mono text-sm leading-relaxed min-h-[320px]"
              aria-live="polite"
            >
              {steps.map((step, idx) => {
                if (idx > currentStep) return null;
                const isCurrentlyTyping = idx === currentStep;
                const displayedCommand = isCurrentlyTyping
                  ? step.command.slice(0, typedChars)
                  : step.command;
                const outputVisible = showOutput.includes(idx);

                return (
                  <div key={idx} className="mb-3">
                    {/* Prompt + command */}
                    <div className="flex">
                      <span className="text-green-400 select-none">$&nbsp;</span>
                      <span className="text-gray-100">
                        {displayedCommand}
                        {isCurrentlyTyping && !outputVisible && (
                          <span className="inline-block w-2 h-4 bg-gray-100 ml-0.5 align-middle animate-pulse" />
                        )}
                      </span>
                    </div>

                    {/* Output */}
                    {outputVisible && step.output.length > 0 && (
                      <div className="mt-1 text-gray-400">
                        {step.output.map((line, lineIdx) => (
                          <div key={lineIdx}>
                            {line.includes("✓") ? (
                              <span className="text-green-400">{line}</span>
                            ) : (
                              line
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Idle cursor when done and before finish message */}
              {hasFinished && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400 select-none">$&nbsp;</span>
                    <span className="inline-block w-2 h-4 bg-gray-100 animate-pulse" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Success message + timer */}
          {hasFinished && (
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Green checkmark */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold text-text-dark">
                  SafeDocs Portal ist bereit!
                </span>
                <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  Unter 5 Minuten!
                </span>
              </div>

              <button
                onClick={restart}
                className="text-sm text-primary-light hover:text-primary transition flex items-center gap-1.5 cursor-pointer"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Animation wiederholen
              </button>
            </div>
          )}

          {/* Timer display */}
          {hasFinished && (
            <div className="mt-3 text-center text-sm text-text-muted">
              Setup-Zeit: {formatTime(TOTAL_SECONDS)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
