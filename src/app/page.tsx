import Hero from "@/components/home/Hero";
import ProductCards from "@/components/home/ProductCards";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AppSection from "@/components/home/AppSection";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import LeadForm from "@/components/home/LeadForm";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCards />
      <Services />
      <Process />
      <WhyChooseUs />
      <AppSection />
      <Testimonials />
      <Newsletter />
      <LeadForm />
      <FAQ />
    </>
  );
}
