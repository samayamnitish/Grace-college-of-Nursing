import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Award, GraduationCap, ShieldCheck, ArrowRight, Sparkles, Building2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    src: "/lovable-uploads/admissions-2026-poster.jpg",
    title: "Admissions Open — 2026-27 Batch",
    caption: "4-Year B.Sc. Nursing Degree Program affiliated to Dr. N.T.R. UHS",
  },
  {
    src: "/images/hospital_training_1.jpg",
    title: "Clinical Hospital Rotations",
    caption: "Government Teaching General Hospital & Primary Health Centers",
  },
  {
    src: "/images/lab_training_1.jpg",
    title: "Advanced Simulation Laboratories",
    caption: "Anatomy, Nutrition, Community Health & Nursing Foundations Labs",
  },
  {
    src: "/lovable-uploads/certificate-event.jpg",
    title: "Academic Convocation & Honors",
    caption: "Distinguished certificate distribution by Society Leadership",
  },
  {
    src: "/lovable-uploads/relieving-ceremony.jpg",
    title: "Relieving Ceremonies & Celebrations",
    caption: "Celebrating batches of empowered healthcare leaders",
  },
  {
    src: "/images/campus_life_1.jpg",
    title: "Vibrant Campus Life & Camaraderie",
    caption: "Holistic student cadet formation in a disciplined ecosystem",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative pt-28 pb-14 bg-gradient-to-b from-[#f0f4f9] via-background to-secondary/30 overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nursing-green/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-14">
          {/* Left Column: Hero Headline & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-nursing-green/10 text-nursing-green border border-nursing-green/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Admissions Open 2026–27
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-nursing-navy font-heading tracking-tight leading-[1.1]">
              Advancing Care. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nursing-green to-college-gold">
                Transforming Healthcare.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed max-w-xl">
              Grace College of Nursing (Est. 1987 under Sara Grace Educational Society) prepares dynamic nursing officers with evidence-based medical science, hospital clinical mastery, and profound human compassion.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                to="/apply"
                className="bg-nursing-green hover:bg-nursing-green/90 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Apply for 2026 Batch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/academics"
                className="bg-card hover:bg-secondary text-nursing-navy font-bold px-6 py-3.5 rounded-xl border border-border transition-all text-center text-sm sm:text-base"
              >
                Explore 8-Semester Syllabus
              </Link>
            </div>

            {/* Quick Statutory Accreditation Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-bold text-muted-foreground border-t border-border/70">
              <div className="flex items-center gap-1.5 text-foreground">
                <ShieldCheck className="w-4 h-4 text-nursing-green" /> Govt. of A.P. Recognized
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-1.5 text-foreground">
                <Award className="w-4 h-4 text-college-gold" /> INC & AP Council Approved
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-1.5 text-foreground">
                <GraduationCap className="w-4 h-4 text-nursing-green" /> Dr. NTR UHS Affiliated
              </div>
            </div>
          </div>

          {/* Right Column: Hero Slideshow Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[620px] aspect-[16/10] rounded-3xl p-2.5 bg-card border border-border shadow-2xl overflow-hidden">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-12 left-5 right-5 text-white z-20">
                      <h3 className="text-lg sm:text-xl font-bold font-heading">{slide.title}</h3>
                      <p className="text-xs text-slate-300 font-medium">{slide.caption}</p>
                    </div>
                  </div>
                ))}

                {/* Carousel Controls */}
                <div className="absolute bottom-3 left-4 right-4 z-30 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-6 bg-nursing-green" : "w-2 bg-white/70 hover:bg-white"
                          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-1.5">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevSlide}
                      className="w-7 h-7 rounded-full bg-white/90 hover:bg-white text-nursing-navy shadow-sm"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextSlide}
                      className="w-7 h-7 rounded-full bg-white/90 hover:bg-white text-nursing-navy shadow-sm"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Penn Nursing Inspired "At a Glance" Stats Bar */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="border-r border-border/60 last:border-0 pr-4">
            <h3 className="text-3xl sm:text-4xl font-black text-nursing-green font-heading">1987</h3>
            <p className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-wider mt-1">Established Legacy</p>
          </div>

          <div className="border-r border-border/60 last:border-0 pr-4">
            <h3 className="text-3xl sm:text-4xl font-black text-college-gold font-heading">4-Year</h3>
            <p className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-wider mt-1">B.Sc. Nursing Degree</p>
          </div>

          <div className="border-r border-border/60 last:border-0 pr-4">
            <h3 className="text-3xl sm:text-4xl font-black text-nursing-green font-heading">8</h3>
            <p className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-wider mt-1">Semesters</p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-college-gold font-heading">INC & AP</h3>
            <p className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-wider mt-1">Council Approved</p>
          </div>
        </div>
      </div>
    </section>
  );
}