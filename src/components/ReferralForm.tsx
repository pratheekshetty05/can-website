"use client";

import { useState, type FormEvent } from "react";

const input = "mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2.5";

export function ReferralForm({ variant = "referral" }: { variant?: "referral" | "contact" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind: variant }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="mt-4 rounded-card bg-sage p-6">
        <p className="font-semibold text-ink">Thank you. We have received your message.</p>
        <p className="mt-2">We will be in touch within two working days. If it is urgent, email can@wadhwafoundation.com.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${variant}-name`} className="font-medium">Your name</label>
          <input id={`${variant}-name`} name="name" required autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor={`${variant}-role`} className="font-medium">{variant === "referral" ? "Your role" : "I am a"}</label>
          <select id={`${variant}-role`} name="role" required className={input} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {variant === "referral" ? (
              <>
                <option>Paediatrician</option>
                <option>Psychologist</option>
                <option>Counsellor</option>
                <option>Teacher</option>
                <option>Other professional</option>
              </>
            ) : (
              <>
                <option>Parent or guardian</option>
                <option>Teacher</option>
                <option>School leader</option>
                <option>Professional</option>
                <option>Other</option>
              </>
            )}
          </select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${variant}-email`} className="font-medium">Email</label>
          <input id={`${variant}-email`} name="email" type="email" required autoComplete="email" className={input} />
        </div>
        <div>
          <label htmlFor={`${variant}-phone`} className="font-medium">Phone</label>
          <input id={`${variant}-phone`} name="phone" type="tel" autoComplete="tel" className={input} />
        </div>
      </div>
      {variant === "referral" && (
        <div>
          <label htmlFor="referral-age" className="font-medium">Child’s age</label>
          <input id="referral-age" name="childAge" type="number" min={2} max={21} className={`${input} sm:w-40`} />
        </div>
      )}
      <div>
        <label htmlFor={`${variant}-message`} className="font-medium">{variant === "referral" ? "Your concern (optional)" : "How can we help?"}</label>
        <textarea id={`${variant}-message`} name="message" rows={4} className={input} placeholder={variant === "referral" ? "A line or two is enough. No clinical reports here, please." : ""} />
      </div>
      {variant === "referral" && (
        <label className="flex items-start gap-3">
          <input type="checkbox" name="consent" required className="mt-1 h-5 w-5" />
          <span className="text-sm">I confirm the family knows I am referring their child and has agreed to be contacted by C.A.N.</span>
        </label>
      )}
      <button type="submit" disabled={status === "sending"} className="rounded bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark disabled:opacity-60">
        {status === "sending" ? "Sending…" : variant === "referral" ? "Send referral" : "Send message"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-accent">
          Something went wrong. Please email can@wadhwafoundation.com instead.
        </p>
      )}
    </form>
  );
}
