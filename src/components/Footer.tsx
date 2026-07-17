import Image from "next/image";

const socials = [
  { name: "LinkedIn", icon: "/images/social-linkedin.png" },
  { name: "X", icon: "/images/social-x.png" },
  { name: "Telegram", icon: "/images/social-telegram.svg" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-6 pt-16 pb-10 sm:px-10 lg:px-[122px]">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <Image
          src="/images/footer-bg-texture.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-12">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start">
          <div className="flex items-center gap-4">
            <div className="relative h-[46px] w-[107px]">
              <Image
                src="/images/opo-logo-footer.svg"
                alt="Opofinance"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="relative h-[57px] w-[75px]">
              <Image
                src="/images/tiki-talk-logo.svg"
                alt="Tiki-Talk"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-white">Get the App</p>
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-2.5">
                <div className="relative h-[50px] w-[171px]">
                  <Image
                    src="/images/badge-appstore.svg"
                    alt="Download on the App Store"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-[50px] w-[171px]">
                  <Image
                    src="/images/badge-googleplay.svg"
                    alt="Get it on Google Play"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="relative size-[111px] shrink-0">
                <Image src="/images/qr-code.png" alt="QR code" fill />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative h-[55px] w-[195px] overflow-hidden rounded-[11px]">
              <Image src="/images/badge-tradingview.svg" alt="" fill />
              <div className="absolute left-[6.29%] top-[27.5%] h-[45%] w-[24.83%]">
                <Image
                  src="/images/tradingview-vector.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute left-[36.37%] top-[24.56%] h-[57.49%] w-[52.86%]">
                <Image
                  src="/images/tradingview-wordmark.svg"
                  alt="TradingView"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex gap-3">
              {socials.map((social) => (
                <div
                  key={social.name}
                  className="flex size-[56px] items-center justify-center rounded-[7px] border border-[#2e2e2e] bg-[#363a45]"
                >
                  <div className="relative size-[21px]">
                    <Image
                      src={social.icon}
                      alt={social.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm font-normal leading-relaxed text-white/80 lg:text-right">
          Disclaimer: Trading CFDs and forex involves significant risk. This
          webinar is for educational purposes only and does not constitute
          financial or investment advice.
        </p>

        <p className="text-center text-sm font-light text-white">
          © 2026 Opofinance. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
