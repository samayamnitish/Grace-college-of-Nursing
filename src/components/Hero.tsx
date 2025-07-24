import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import collegeLogo from "@/assets/college-logo.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [hero1, hero2, hero3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Carousel Background */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg mb-4 transform -rotate-3">
              <span className="font-bold">ADMISSION OPEN</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Best College for <span className="text-college-gold">Nursing</span>
            </h1>
            
            <p className="text-lg mb-8 leading-relaxed">
              Grace College Of Nursing is Establishment In 2010, Grace College Of Nursing, 
              Machilipatnam Is Affiliated To Dr. N.T.R. University Of Health Sciences. 
              Scholarships for deserving candidates are provided.
            </p>
          </div>

          {/* Right Content - College Info Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="bg-white/95 backdrop-blur-sm max-w-md w-full">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img 
                    src={collegeLogo} 
                    alt="Grace College Logo" 
                    className="w-20 h-20 mx-auto mb-3"
                  />
                  <h3 className="text-2xl font-bold text-college-green mb-2">
                    GRACE COLLEGE OF NURSING
                  </h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-college-green mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Recognised by Govt. of A.P, A.P Nursing Council and I.N.C, New Delhi.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-college-green mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Location :</div>
                      <div>Door No: 3/39, Pothepalle, Machilipatnam, Krishna Dist., Andhra Pradesh - 521 002</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-college-green hover:bg-college-green/90">
                  Get Campus Tour
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;