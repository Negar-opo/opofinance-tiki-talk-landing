import Image from "next/image";

export default function LiveDesk() {
  return (
    <section className="relative bg-black px-6 pb-24 pt-8 sm:px-10 lg:pb-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-lg font-light text-white">LIVE DESK</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            At the Desk
          </h2>
        </div>

        <div className="mt-16 flex w-full max-w-[750px] flex-col items-center gap-10 sm:flex-row sm:justify-center">
          <div className="relative aspect-[336/470] w-full max-w-[336px] overflow-hidden">
            <Image
              src="/images/host-card-1.png"
              alt="Yasi Pazooki, COO of Opofinance — webinar host"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[336/470] w-full max-w-[336px] overflow-hidden">
            <Image
              src="/images/host-card-2.png"
              alt="Michael Makdah, CMO of Opofinance — webinar guest"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
