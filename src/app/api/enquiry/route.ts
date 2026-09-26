import { NextResponse } from "next/server";

type Enquiry = {
  kind: "referral" | "contact";
  name: string;
  role: string;
  email: string;
  phone?: string;
  childAge?: string;
  message?: string;
  consent?: string;
};

const MAX = { name: 120, role: 60, email: 200, phone: 30, message: 2000 };

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Partial<Enquiry>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const enquiry: Enquiry = {
    kind: body.kind === "referral" ? "referral" : "contact",
    name: clean(body.name, MAX.name),
    role: clean(body.role, MAX.role),
    email: clean(body.email, MAX.email),
    phone: clean(body.phone, MAX.phone),
    childAge: clean(body.childAge, 3),
    message: clean(body.message, MAX.message),
    consent: body.consent === "on" ? "yes" : undefined,
  };

  if (!enquiry.name || !enquiry.email || !enquiry.role) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (enquiry.kind === "referral" && enquiry.consent !== "yes") {
    return NextResponse.json({ error: "Consent required" }, { status: 400 });
  }

  // Delivery target is an open decision with C.A.N (email notification vs dashboard).
  // Until then, log server-side only. Wire a provider (e.g. Resend) here once decided.
  console.info("[enquiry]", JSON.stringify({ ...enquiry, receivedAt: new Date().toISOString() }));

  return NextResponse.json({ ok: true });
}
