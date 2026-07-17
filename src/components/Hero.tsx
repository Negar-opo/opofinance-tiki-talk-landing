import Image from "next/image";

const heroStats = [
  { icon: "/images/hero-icon-free.png", label: "Free · No card" },
  { icon: "/images/hero-icon-duration.png", label: "60 min" },
  { icon: "/images/hero-icon-live.png", label: "Live · Jul 22" },
];

export default function Hero() {
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
          <div className="text-lg font-light leading-relaxed text-white sm:text-xl lg:text-[23px]">
            <p>Football pressure meets market pressure.</p>
            <p>Football and markets collide. Live charts. Real data.</p>
          </div>
          <a
            href="#reserve"
            className="notch-btn mt-2 flex items-center justify-center border border-accent-green bg-accent-green/20 px-8 py-4 text-lg font-bold text-white sm:text-xl"
          >
            Join The Live Desk&nbsp;→
          </a>

          <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-6 border border-white/12 bg-white/8 px-6 py-6 sm:justify-start sm:gap-10">
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

        <div className="relative aspect-[601/394] w-full max-w-[601px] shrink-0 overflow-hidden lg:mt-0">
          <Image
            src="/images/video-placeholder.png"
            alt="Webinar preview — your next trade starts here"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
