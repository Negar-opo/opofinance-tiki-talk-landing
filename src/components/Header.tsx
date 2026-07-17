import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-6 sm:px-10 lg:px-[138px] lg:py-[53px]">
        <div className="relative h-[54px] w-[100px]">
          <Image
            src="/images/opo-logo.svg"
            alt="Opofinance"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        <div className="hidden items-center gap-[21px] rounded-none border border-white/12 bg-white/8 px-6 py-3.5 md:flex">
          <span className="size-3.5 rounded-full bg-accent-green" />
          <span className="text-white">Live</span>
          <span className="text-white">July 22</span>
          <span className="text-white">Free</span>
        </div>

        <a
          href="#reserve"
          className="notch-btn shrink-0 border border-accent-green bg-accent-green/20 px-6 py-3.5 text-sm font-bold text-white sm:text-base"
        >
          Get My Seat
        </a>
      </div>
    </header>
  );
}
