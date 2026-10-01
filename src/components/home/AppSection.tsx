import { DIGITAL_FEATURES, SITE } from "@/lib/site-data";
import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
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
              Digital Investing Experience
            </span>
            <h2 className="text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px] lg:text-[38px]">
              Your Investments, Connected in One Place
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-body sm:text-[19px]">
              Access and manage your investments through the digital investment platforms available through the IIFL Capital ecosystem, while receiving relationship-led support from Investify Prism.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {DIGITAL_FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-green/10 text-green-dark">
                    <Icon name={f.icon} className="size-4" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-navy">{f.title}</p>
                    <p className="mt-0.5 text-[14px] leading-relaxed text-body">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-7 text-[16px] leading-relaxed text-body">
              Investify Prism combines digital access with personalised relationship support — giving you the convenience of online investing while keeping your wealth journey connected to a dedicated point of contact.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button href={SITE.loginUrl} external size="lg">
                Open Your Investment Account
              </Button>
              <Button href={SITE.bookingUrl} external variant="outline" size="lg">
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
