import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, MapPin } from "lucide-react";
import heroImage from "@/assets/college-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-college-navy/90 via-college-green/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white">
            <div className="inline-block bg-college-gold text-college-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🎓 Admissions Open 2024
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building Tomorrow's
              <span className="block text-college-gold">Healthcare Heroes</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-lg">
              Join Grace College of Nursing and embark on a rewarding career in healthcare. 
              Excellence in education, compassion in care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Apply for Admission
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-college-navy">
                Download Brochure
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <GraduationCap className="w-8 h-8 text-college-gold mx-auto" />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <Users className="w-8 h-8 text-college-gold mx-auto" />
                </div>
                <div className="text-2xl font-bold">2000+</div>
                <div className="text-sm text-gray-300">Alumni</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <Award className="w-8 h-8 text-college-gold mx-auto" />
                </div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-gray-300">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <MapPin className="w-8 h-8 text-college-gold mx-auto" />
                </div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-300">Hospital Partners</div>
              </div>
            </div>
          </div>

          {/* Right Column - College Info Card */}
          <div className="lg:ml-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-elegant max-w-md">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-college-green mb-2">
                  Grace College of Nursing
                </h3>
                <p className="text-college-navy font-medium">
                  Sara Grace Educational Society
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-college-navy mb-1">Recognition:</h4>
                  <p className="text-gray-600">
                    Recognized by State Nursing Council and Indian Nursing Council, New Delhi
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-college-navy mb-1">Affiliation:</h4>
                  <p className="text-gray-600">
                    Affiliated to State University of Health Sciences
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-college-navy mb-1">Location:</h4>
                  <p className="text-gray-600">
                    123 Education Street, Medical District<br />
                    Healthcare City, State - 123456
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button variant="college" className="w-full">
                  Get Campus Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;