import { APP_FEATURES_1, APP_FEATURES_2 } from "@/lib/site-data";
import { Icon } from "@/components/ui/Icon";
import Container from "@/components/ui/Container";
import PhoneMockup from "./PhoneMockup";

export default function AppSection() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div className="order-2 flex justify-center lg:order-1">
            <PhoneMockup />
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
              <Icon name="Smartphone" className="size-3.5" />
              Prism Go App
            </span>
            <h2 className="text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px] lg:text-[38px]">
              Prism Go — Smart Investing in Your Pocket
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-body sm:text-[19px]">
              Securely and efficiently manage all your investments using the Prism Go app, built for NRIs who want control without complexity.
            </p>

            <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {[...APP_FEATURES_1, ...APP_FEATURES_2].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-dark">
                    <Icon name="Check" className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-body">{f}</span>
                </div>
              ))}
            </div>

            <p className="mt-7 text-[16px] leading-relaxed text-body">
              Prism Go makes it easy for NRIs to stay in charge of their investments in India — anytime, anywhere.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl bg-navy px-5 py-3 text-white transition-colors hover:bg-navy-light"
              >
                <Icon name="Smartphone" className="size-6" />
                <span className="text-left leading-tight">
                  <span className="block text-[12px] text-white/70">GET IT ON</span>
                  <span className="block text-[15px] font-semibold">Google Play</span>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl bg-navy px-5 py-3 text-white transition-colors hover:bg-navy-light"
              >
                <Icon name="Smartphone" className="size-6" />
                <span className="text-left leading-tight">
                  <span className="block text-[12px] text-white/70">DOWNLOAD ON THE</span>
                  <span className="block text-[15px] font-semibold">App Store</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
