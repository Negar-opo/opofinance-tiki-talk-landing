import Image from "next/image";

const agendaItems = [
  {
    title: "The Kick-Off",
    description:
      "The match is on. The market is moving. Football energy meets trading pressure.",
  },
  {
    title: "First Half: Tactical Analysis Desk",
    description: "Global events. Currency movement. Expert insight.",
  },
  {
    title: "Extra Time 1: Psychological Pitfalls",
    description:
      "How FOMO and pressure turn trading plans into costly mistakes.",
  },
  {
    title: "World Cup Market Flashback",
    description:
      "Past matches, market moves, and the World Cup effect traders rarely see.",
  },
  {
    title: "Second Half: The Locker Room",
    description: "No slides. Real stories. Trading under pressure.",
  },
  {
    title: "Extra Time 2: Mid-Game Adjustments",
    description: "When the market tests your idea, clarity matters.",
  },
  {
    title: "Final Whistle",
    description:
      "Key lessons. Final takeaways. Where football pressure meets market pressure.",
  },
];

export default function Agenda() {
  return (
    <section className="relative bg-black px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center">
        <div className="flex w-full max-w-[430px] flex-col items-center gap-3 text-center">
          <p className="text-lg font-light text-white">WEBINAR AGENDA</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            The Game Plan
          </h2>
          <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-4 border border-white/12 bg-white/8 px-6 py-5 text-white sm:gap-5">
            <span>60 minutes</span>
            <span>7 segments</span>
            <span>Real market talk</span>
          </div>
        </div>

        <div className="glass-card relative mt-16 flex w-full max-w-[915px] flex-col gap-[34px] px-6 py-10 sm:px-11 sm:py-14">
          <div className="pointer-events-none absolute -right-8 -top-16 hidden size-32 sm:block lg:size-[134px]">
            <Image
              src="/images/ball-icon.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {agendaItems.map((item, i) => (
            <div
              key={item.title}
              className={
                i > 0
                  ? "flex flex-col gap-[7px] border-t border-white/15 pt-[34px]"
                  : "flex flex-col gap-[7px]"
              }
            >
              <p className="text-lg font-medium text-accent-green sm:text-[22px]">
                {item.title}
              </p>
              <p className="text-base font-light text-white sm:text-xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
