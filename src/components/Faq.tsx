"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Is Tiki-Talk really free?",
    answer: "Yes. Tiki-Talk is a free live webinar. No card required.",
  },
  {
    question: "Do I need trading experience to attend?",
    answer:
      "No. The session is built for all levels — we walk through the market angle in plain language before going deeper.",
  },
  {
    question: "When do I get the join link?",
    answer:
      "As soon as you reserve your seat, the join link is sent straight to your email, plus a reminder before we go live.",
  },
  {
    question: "What will we cover?",
    answer:
      "Live market moves during the match, expert commentary, psychological pitfalls, and a World Cup market flashback — the full game plan is above.",
  },
  {
    question: "What makes Tiki-Talk different?",
    answer:
      "It pairs live football with live markets — real charts, real reactions, no recycled slides.",
  },
  {
    question: "Will there be a replay?",
    answer:
      "The session is best experienced live, but registered attendees receive a replay link afterward.",
  },
  {
    question: "Can I ask questions during the webinar?",
    answer:
      "Yes. There's a live Q&A window during the Second Half segment where the desk takes questions directly.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-black px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-lg font-light text-white">GOT QUESTIONS?</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            FAQ
          </h2>
        </div>

        <div className="mt-16 flex w-full max-w-[801px] flex-col gap-6">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className="glass-card border-l-[6px]! border-l-accent-green!"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-2.5 p-8 text-left"
                  aria-expanded={isOpen}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`size-5 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M5 7.5l5 5 5-5"
                      stroke={isOpen ? "#54e152" : "#436b43"}
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className={`flex-1 text-lg font-semibold sm:text-xl ${
                      isOpen ? "text-accent-green" : "text-[#436b43]"
                    }`}
                  >
                    {item.question}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-8 pb-8 pl-[76px] text-base leading-relaxed text-white">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
