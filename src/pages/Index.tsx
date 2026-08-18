import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import FacilitiesPreview from "@/components/FacilitiesPreview";
import NewsEvents from "@/components/NewsEvents";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Courses />
        <FacilitiesPreview />
        <NewsEvents />
        <Gallery />
        <Testimonials />
        <Admissions />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
