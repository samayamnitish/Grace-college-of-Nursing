import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rinu Reji",
      parentage: "D/O Reji George",
      location: "Elanthoor, Pathanamthitta, Kerala",
      batch: "2016",
      currentPosition: "Working in Maharashtra",
      content: "Grace College of nursing has provided me with an unique learning environment where i have grown both as a nurse and an individual. The dedicated faculty has guided me through clinicals, enhancing my patient care skills and exposing me to diverse medical fields. Their guidance has prepared me to handle critical cases with confidence. My time in this campus has boosted my self-assurance and taught me the depth of my capabilities. Beyond academics Grace College Of Nursing encourages holistic growth inspiring me to excel in various fields. I am truly grateful for my enriching journey at Grace College of nursing."
    },
    {
      name: "Kshema Mathew",
      parentage: "D/o V.T. Mathukutty",
      location: "Mannarakulanji, Pathanamthitta, Kerala State",
      batch: "2016",
      currentPosition: "Working in Maharashtra State",
      content: "I am privileged and honored to be a part of Grace College of nursing. The entire department and faculty leave no stone unturned to shape ones future. I'm delighted that i got an opportunity to study my B.Sc nursing course in our Grace College Of Nursing and i am happy to express my happiness as an alumni member."
    },
    {
      name: "Batta Aruna",
      parentage: "D/o Batta Basava Kotauah",
      location: "Pedana, Syamala Nagar, Krishna District",
      batch: "Recent Graduate",
      currentPosition: "Government Hospital, AP",
      content: "I am speaking as a proud student of Grace College Of Nursing. Our teachers are the best. They teach not only their area of expertise but also many moral values. Every single day they make a great impression on us moulding us to be better individuals and citizens in the society. They have never disappointed us and encouraged us to do our best in examination. They make sure that our goals are set by voluntary means and not forcefully. Big Thank you to my college."
    },
    {
      name: "Panuganti Yamini Sarojini",
      parentage: "D/o Panuganti Krishna",
      location: "Kojjilpet, Machilipatnam, Krishna District",
      batch: "Alumni",
      currentPosition: "Government Hospital, Krishna District",
      content: "Proud To be an alumni of Grace College Of Nursing. Grace College Of Nursing delivers good quality of education and it is a well renowned college of nursing with great ethics and values. My time there was very enjoyable and i see it as a very relaxed, productive atmosphere."
    },
    {
      name: "Thota Sudha Jyothi",
      parentage: "D/o Thota Naga Raju",
      location: "Kruthivennu, Krishna District",
      batch: "Alumni",
      currentPosition: "Government Hospital, AP",
      content: "I thank this institution for nurturing me with so much love and care. Words are few but feelings are limitless to express my gratitude towards our teachers and this institution."
    },
    {
      name: "Yathirajula Rama Devi",
      parentage: "D/o Y.Anjaneyalu",
      location: "Pedana, Krishna District",
      batch: "Alumni",
      currentPosition: "Government Hospital",
      content: "I feel proud for studying in grace college of nursing. I had good and friendly faculty who helped us understand the subjects and enjoy the course. We had holistic learning and development in Grace College of nursing. Thanks to our college and happy to share to you all that as soon as I completed my course in this institution I got government job in government hospital."
    },
    {
      name: "Sunitha",
      parentage: "D/o P.Nainar",
      location: "Poothottam, Kazhuthurutty, Kollam, Kerala",
      batch: "Alumni",
      currentPosition: "Working in Tamil Nadu State",
      content: "I have had the best years of my life at Grace College Of Nursing. Words won't be enough to describe what i have learnt from this institution and this is the place which has shaped my life in a tremendous way."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-14 sm:py-16 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-college-green/10 blur-[130px] rounded-full -translate-y-1/2 -translate-x-1/2 mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-college-gold/10 blur-[130px] rounded-full -translate-y-1/2 translate-x-1/2 mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center space-x-1.5 text-college-gold mb-3">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-3 font-heading tracking-tight">
            Alumni <span className="text-transparent bg-clip-text bg-gradient-to-r from-college-green to-college-gold">Stories</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            Hear from our visionary alumni who are shaping the future of the healthcare industry, one life at a time.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-college-green to-college-gold rounded-3xl blur opacity-20 group-hover:opacity-35 transition-opacity duration-500"></div>
            <Card className="relative bg-card/75 backdrop-blur-xl border border-border/60 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-6 sm:p-10 relative">
                <Quote className="w-14 h-14 text-college-green/10 absolute top-5 left-5 pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <blockquote className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed font-medium">
                    "{current.content}"
                  </blockquote>

                  <div className="border-t border-border/60 pt-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-college-green to-college-gold mb-1">
                        {current.name}
                      </h4>
                      <p className="text-muted-foreground font-semibold text-xs mb-3 uppercase tracking-wider">
                        {current.parentage}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                        <div className="flex items-center gap-1.5 bg-secondary/80 px-3 py-1.5 rounded-full text-foreground/85 border border-border/50">
                          <MapPin className="w-3.5 h-3.5 text-college-green" />
                          <span>{current.location}</span>
                        </div>
                        <div className="bg-college-green/10 text-college-green px-3 py-1.5 rounded-full border border-college-green/20 font-semibold">
                          Batch: {current.batch}
                        </div>
                        <div className="bg-college-gold/10 text-college-gold dark:text-blue-400 px-3 py-1.5 rounded-full border border-college-gold/20 font-semibold">
                          {current.currentPosition}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Overlays */}
            <div className="absolute top-1/2 -left-3 sm:-left-5 -translate-y-1/2 z-20">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-background/90 hover:bg-college-green hover:text-white border-border/60 backdrop-blur-md shadow-lg transition-all hover:scale-105"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </div>
            <div className="absolute top-1/2 -right-3 sm:-right-5 -translate-y-1/2 z-20">
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-background/90 hover:bg-college-green hover:text-white border-border/60 backdrop-blur-md shadow-lg transition-all hover:scale-105"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`transition-all rounded-full ${index === currentTestimonial
                    ? "w-6 h-2 bg-college-green shadow-sm"
                    : "w-2 h-2 bg-border hover:bg-college-green/50"
                  }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-10 border-t border-border/50">
            {[
              { value: "21+", label: "Batches Graduated" },
              { value: "1000+", label: "Alumni Worldwide" },
              { value: "95%", label: "Placement Rate" },
              { value: "35+", label: "Years Excellence" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-college-green to-college-gold mb-1.5 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-semibold text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;