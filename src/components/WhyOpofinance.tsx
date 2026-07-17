import Image from "next/image";

const cards = [
  {
    icon: "/images/icon-regulation.png",
    eyebrow: "REGULATION",
    title: "Multi-Regulated & Trusted",
  },
  {
    icon: "/images/icon-traders.png",
    eyebrow: null,
    title: "200,000+ Active Traders Worldwide",
  },
  {
    icon: "/images/icon-platforms.png",
    eyebrow: "PLATFORMS",
    title: "MT4 · MT5 cTrader · TradingView OpoTrade",
  },
  {
    icon: "/images/icon-spreads.png",
    eyebrow: "SPREADS",
    title: "From 0.0 Pips",
  },
];

export default function WhyOpofinance() {
  return (
    <section className="bg-black px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center">
        <div className="flex max-w-[790px] flex-col items-center gap-3 text-center">
          <p className="text-lg font-light text-white">WHY OPOFINANCE</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Built for serious market moments
          </h2>
        </div>

        <div className="mt-16 grid w-full max-w-[865px] grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="glass-card flex aspect-square flex-col justify-between p-8 sm:p-10"
            >
              <div className="relative h-[68px] w-16">
                <Image
                  src={card.icon}
                  alt=""
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="flex flex-col gap-2.5 text-white">
                {card.eyebrow && (
                  <p className="text-sm font-light">{card.eyebrow}</p>
                )}
                <p className="text-xl font-semibold sm:text-[22px]">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
