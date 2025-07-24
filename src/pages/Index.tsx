import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import NewsEvents from "@/components/NewsEvents";
import Testimonials from "@/components/Testimonials";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
    </div>
  );
};

export default Index;
