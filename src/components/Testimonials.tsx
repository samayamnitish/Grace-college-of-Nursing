import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, MapPin } from "lucide-react";
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-college-green mb-4">
            Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our successful alumni who are making a difference in the healthcare industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="relative">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-college-green/20 absolute -top-2 -left-2" />
                
                {/* Testimonial Content */}
                <div className="relative z-10">
                  <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                    "{current.content}"
                  </blockquote>
                  
                  {/* Student Details */}
                  <div className="border-t pt-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-college-green mb-1">
                          {current.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          {current.parentage}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{current.location}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4 text-sm">
                          <span className="text-college-green font-medium">
                            Batch: {current.batch}
                          </span>
                          <span className="text-muted-foreground">
                            Currently: {current.currentPosition}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="hover:bg-college-green hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? "bg-college-green" 
                      : "bg-muted hover:bg-muted/80"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="hover:bg-college-green hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-12 border-t">
            <div className="text-center">
              <div className="text-3xl font-bold text-college-green mb-2">21+</div>
              <div className="text-muted-foreground text-sm">Batches Graduated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-college-green mb-2">1000+</div>
              <div className="text-muted-foreground text-sm">Alumni Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-college-green mb-2">95%</div>
              <div className="text-muted-foreground text-sm">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-college-green mb-2">35+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;