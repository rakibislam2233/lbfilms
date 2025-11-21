import Hero from "@/components/pages/main/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Packages from "@/components/Packages";
import VideoShowcase from "@/components/VideoShowcase";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Services />
      <Gallery />
      <Packages />
      <VideoShowcase />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
