"use client";

import { useState } from "react";
import Image from "next/image";
import { submitReservation } from "@/lib/reserveSeat";

const heroStats = [
  { icon: "/images/hero-icon-free.png", label: "Free · No card" },
  { icon: "/images/hero-icon-duration.png", label: "60 min" },
  { icon: "/images/hero-icon-live.png", label: "Live · Jul 22" },
];

export default function Hero() {
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
    <section className="relative overflow-hidden bg-black pt-36 pb-16 sm:pt-44 lg:pt-[183px] lg:pb-[80px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-16 px-6 sm:px-10 lg:flex-row lg:items-start lg:gap-8 lg:px-[137px]">
        <div className="flex w-full max-w-[550px] flex-col items-start gap-6">
          <p className="text-lg font-light text-white sm:text-xl">
            Free Live Webinar · July 22
          </p>
          <h1 className="text-[42px] font-semibold leading-tight text-white sm:text-[52px] lg:text-[62px]">
            Same <span className="text-accent-green">Pitch.</span>
            <br />
            Real <span className="text-accent-green">Market.</span>
          </h1>
          <div className="text-lg font-light leading-relaxed text-white sm:text-xl lg:text-[22px]">
            <p>Football pressure meets market pressure.</p>
            <p>Football and markets collide. Live charts. Real data.</p>
          </div>
          <div className="mt-2 flex w-fit max-w-full flex-wrap items-center justify-center gap-3 border border-white/12 bg-white/8 px-6 py-5">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2.5"
              >
                <div className="relative h-[46px] w-[41px]">
                  <Image
                    src={stat.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="whitespace-nowrap text-sm text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="reserve-hero"
          className="flex w-full max-w-[518px] shrink-0 flex-col items-center gap-6 border-[0.75px] border-accent-green px-6 py-8 text-center sm:gap-[30px] sm:py-[34px]"
        >
          <h2 className="text-[32px] font-bold text-white sm:text-[45px]">
            Reserve your seat
          </h2>
          <p className="text-lg text-white sm:text-xl lg:text-[22px]">
            Drop your email and join the webinar free.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[437px] flex-col gap-3.5"
          >
            <input
              type="email"
              required
              disabled={status === "submitting" || status === "submitted"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="h-[63px] w-full border-[0.8px] border-white bg-white/12 px-4 text-lg text-white placeholder:text-white/70 focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "submitting" || status === "submitted"}
              className="flex h-[54px] w-full items-center justify-center gap-2.5 bg-accent-green text-lg font-bold capitalize text-black disabled:opacity-70"
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
      </div>
    </section>
  );
}
