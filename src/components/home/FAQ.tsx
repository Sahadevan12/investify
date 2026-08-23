import { FAQS } from "@/lib/site-data";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
  return (
    <section className="section-pad bg-surface">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
        <div className="mt-12">
          <Accordion items={FAQS.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </Container>
    </section>
  );
}
