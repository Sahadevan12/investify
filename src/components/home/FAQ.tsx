import { FAQS } from "@/lib/site-data";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
  return (
    <section className="section-pad bg-surface">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Find answers to common questions about investing, wealth management, portfolio solutions and working with Investify Prism."
        />
        <div className="mt-12">
          <Accordion items={FAQS.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </Container>
    </section>
  );
}
