"use client";

import { useState } from "react";
import Image from "next/image";
import { submitReservation } from "@/lib/reserveSeat";

export default function ReserveSeat() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "submitting") return;
    setStatus("submitting");
    setError(null);
    const result = await submitReservation(email);
    if (result.ok) {
      setStatus("submitted");
    } else {
      setStatus("error");
      setError(result.error ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="reserve"
      className="relative overflow-hidden bg-black px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Image
          src="/images/agenda-bg-texture.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto flex max-w-[840px] flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-4">
          <div className="border border-white/20 bg-white/12 px-6 py-4 text-lg font-semibold text-white sm:text-xl">
            Free
          </div>
          <div className="flex items-center gap-1.5 border border-white/20 bg-white/12 px-6 py-4 text-lg font-semibold text-white sm:text-xl">
            <span className="size-2.5 rounded-full bg-accent-green" />
            Live
          </div>
          <div className="border border-white/20 bg-white/12 px-6 py-4 text-lg font-semibold text-white sm:text-xl">
            July 22
          </div>
        </div>

        <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-[55px]">
          Reserve your seat
        </h2>
        <p className="text-lg font-medium text-white sm:text-2xl">
          Drop your email and join the webinar free.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[624px] flex-col gap-4 sm:flex-row"
        >
          <input
            type="email"
            required
            disabled={status === "submitting" || status === "submitted"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="h-[63px] w-full border-[0.8px] border-white bg-white/12 px-4 text-lg text-white placeholder:text-white/70 focus:outline-none disabled:opacity-60 sm:flex-1"
          />
          <button
            type="submit"
            disabled={status === "submitting" || status === "submitted"}
            className="flex h-[63px] shrink-0 items-center justify-center gap-2.5 border-[0.8px] border-accent-green bg-accent-green/20 px-6 text-lg font-bold text-white capitalize disabled:opacity-70"
          >
            {status === "submitted"
              ? "You're in! →"
              : status === "submitting"
                ? "Joining…"
                : "join tiki-talk →"}
          </button>
        </form>
        {error && <p className="text-sm text-red-400">{error}</p>}

        <div className="flex h-[47px] items-center justify-center rounded-[15px] bg-[#1d79fd]/80 px-5 text-lg font-medium capitalize text-white">
          3 Seats Left Today
        </div>
      </div>
    </section>
  );
}
