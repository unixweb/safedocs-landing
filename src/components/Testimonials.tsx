"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "SafeDocs hat unsere Dokumentenverwaltung komplett transformiert. Die Sicherheit und Benutzerfreundlichkeit sind herausragend.",
    name: "Dr. Maria Weber",
    position: "CTO",
    company: "TechVision GmbH",
  },
  {
    quote:
      "Endlich eine Lösung, der wir unsere sensiblen Daten bedenkenlos anvertrauen können. DSGVO-Konformität war für uns entscheidend.",
    name: "Thomas Müller",
    position: "Geschäftsführer",
    company: "Müller & Partner",
  },
  {
    quote:
      "Die API-Integration in unsere bestehenden Systeme war in wenigen Stunden erledigt. Erstklassiger Support!",
    name: "Lisa Schmidt",
    position: "IT-Leiterin",
    company: "Digital Solutions AG",
  },
  {
    quote:
      "Seit wir SafeDocs nutzen, hat sich die Zusammenarbeit in unserem Team deutlich verbessert.",
    name: "Markus Klein",
    position: "Projektmanager",
    company: "InnoTech",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Was unsere Kunden sagen
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Vorheriges Testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-3 text-primary shadow-sm transition hover:bg-bg-light hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-light md:left-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Testimonial card */}
          <div className="mx-auto max-w-2xl text-center px-12 md:px-16">
            {/* Decorative quote mark */}
            <div className="mb-6 select-none text-7xl leading-none font-serif text-primary-light/20">
              &ldquo;
            </div>

            <blockquote className="mb-8 text-lg italic text-text-dark">
              {testimonial.quote}
            </blockquote>

            <div>
              <p className="font-bold text-text-dark">{testimonial.name}</p>
              <p className="text-text-muted">
                {testimonial.position}, {testimonial.company}
              </p>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Nächstes Testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-3 text-primary shadow-sm transition hover:bg-bg-light hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-light md:right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Testimonial ${index + 1}`}
              className={`h-3 w-3 rounded-full transition ${
                index === current
                  ? "bg-primary"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
