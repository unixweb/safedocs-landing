import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Alle Felder sind erforderlich." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "E-Mail-Service nicht konfiguriert." },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "SafeDocs Portal", email: "info@businesshelpdesk.biz" },
        to: [{ email: "info@businesshelpdesk.biz", name: "SafeDocs Portal" }],
        replyTo: { email, name },
        subject: `Enterprise Anfrage von ${name}`,
        htmlContent: `
          <h2>Enterprise Anfrage</h2>
          <p><strong>Name / Firma:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Brevo API error:", err);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}
