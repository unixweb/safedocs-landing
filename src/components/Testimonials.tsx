export default function Testimonials() {
  const industries = [
    "Finanzdienstleistung",
    "Beratung",
    "IT & Technologie",
    "Gesundheitswesen",
  ];

  return (
    <section id="testimonials" className="bg-bg-light py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-8">
          Vertraut von Unternehmen aus
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-4">
          {industries.map((industry) => (
            <span
              key={industry}
              className="text-xl font-bold text-primary/60"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
