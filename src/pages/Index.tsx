import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import NewsEvents from "@/components/NewsEvents";
import Testimonials from "@/components/Testimonials";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Courses />
      <NewsEvents />
      <Testimonials />
      <Admissions />
      <Contact />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
