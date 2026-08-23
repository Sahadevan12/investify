import PageHero from "./PageHero";
import Container from "./Container";

export default function LegalPage({
  title,
  updated,
  crumbLabel,
  children,
}: {
  title: string;
  updated: string;
  crumbLabel: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        title={title}
        description={`Last updated: ${updated}`}
        crumbs={[{ label: "Home", href: "/" }, { label: crumbLabel }]}
      />
      <section className="section-pad bg-white">
        <Container className="max-w-3xl">
          <div className="prose-legal flex flex-col gap-6 text-[15px] leading-relaxed text-body [&_h2]:mt-4 [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:text-navy [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
