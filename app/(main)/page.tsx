import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Packages from "@/components/Packages";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <section className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Packages />
      <Team />
      <FAQ />
      <BookingForm />
      <Contact />
    </section>
  );
}
