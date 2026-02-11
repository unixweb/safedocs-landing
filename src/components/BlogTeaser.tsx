export default function BlogTeaser() {
  const articles = [
    {
      date: "5. Februar 2026",
      title: "5 Tipps für sichere Dokumentenverwaltung im Unternehmen",
      excerpt:
        "Erfahren Sie, wie Sie Ihre Unternehmensdokumente optimal schützen und gleichzeitig die Produktivität steigern.",
    },
    {
      date: "28. Januar 2026",
      title: "DSGVO-Compliance: Was Unternehmen 2026 wissen müssen",
      excerpt:
        "Die wichtigsten Änderungen und Anforderungen im Datenschutz für das aktuelle Jahr im Überblick.",
    },
    {
      date: "15. Januar 2026",
      title: "Digitale Transformation: Vom Papier zur Cloud",
      excerpt:
        "Wie der Umstieg auf digitale Dokumentenverwaltung Ihrem Unternehmen Zeit und Kosten spart.",
    },
  ];

  return (
    <section id="blog" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Aktuelles aus unserem Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-primary-light" />

              <div className="p-6">
                <p className="text-text-muted text-sm mb-2">{article.date}</p>
                <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                <p className="text-text-muted mb-4">{article.excerpt}</p>
                <a
                  href="#"
                  className="text-primary-light hover:underline font-medium"
                >
                  Weiterlesen &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
