const reviews = [
  {
    name: "civil9136",
    date: "Oct 5, 2025",
    quote: "Smooth service, tight spreads, fast withdrawals, and strong support.",
  },
  {
    name: "tradetrader855",
    date: "Oct 4, 2025",
    quote: "Fair spreads, fast execution, stable platform, and quick withdrawals.",
  },
  {
    name: "shamskondori",
    date: "Jun 11, 2026",
    quote:
      "Stable ECN trading with instant withdrawals and TradingView integration",
  },
  {
    name: "telmatattoogorgan",
    date: "Oct 4, 2025",
    quote: "Professional service, useful tools, and reliable support",
  },
  {
    name: "donyapiruziii",
    date: "Oct 4, 2025",
    quote: "Low spreads and low commission",
  },
  {
    name: "Zeynabaa809",
    date: "Oct 4, 2025",
    quote: "Positive experience with low spreads, tools, and strong support.",
  },
  {
    name: "amirhosseinkazeminot13",
    date: "Oct 4, 2025",
    quote: "Good broker with okay spreads and smooth withdrawals",
  },
  {
    name: "AkhgarR",
    date: "Oct 3, 2025",
    quote: "Social Trading and TradingView help traders connect more easily",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent-green">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="size-4">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="flex w-[306px] shrink-0 flex-col gap-3 px-6">
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-semibold text-[#c2c4c8]">{review.name}</p>
        <Stars />
      </div>
      <p className="text-sm font-light text-[#c2c4c8]">{review.date}</p>
      <p className="text-sm text-white">{review.quote}</p>
    </div>
  );
}

export default function ReviewsMarquee() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/8 py-10">
      <div className="flex w-max animate-marquee">
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </section>
  );
}
