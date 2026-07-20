import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address" }, { status: 400 });
  }

  const webhookUrl = process.env.SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("SHEETS_WEBHOOK_URL is not configured");
    return NextResponse.json(
      { ok: false, error: "Registration is temporarily unavailable" },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
      redirect: "follow",
    });

    if (!res.ok) {
      console.error("Sheets webhook responded with", res.status, await res.text());
      return NextResponse.json(
        { ok: false, error: "Could not save your registration" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to reach Sheets webhook", err);
    return NextResponse.json(
      { ok: false, error: "Could not save your registration" },
      { status: 502 },
    );
  }
}
