import Hero from "@/components/pages/main/Home/Hero";
import Gallery from "@/components/pages/main/Home/Gallery";
import Services from "@/components/pages/main/Home/Services";
import Testimonials from "@/components/pages/main/Home/Testimonials";
import Packages from "@/components/pages/main/Home/Packages";
import VideoShowcase from "@/components/pages/main/Home/VideoShowcase";
import FAQ from "@/components/pages/main/Home/FAQ";
import Contact from "@/components/pages/main/Home/Contact";

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
