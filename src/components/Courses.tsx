import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, CheckCircle } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Bachelor of Science in Nursing (B.Sc Nursing)",
      duration: "4 Years",
      seats: "60 Students",
      eligibility: "12th with Physics, Chemistry, Biology",
      highlights: [
        "Comprehensive clinical training",
        "Research methodology",
        "Community health nursing",
        "Critical care specialization"
      ],
      fee: "₹85,000/year",
      popular: true
    },
    {
      title: "General Nursing & Midwifery (GNM)",
      duration: "3.5 Years",
      seats: "40 Students", 
      eligibility: "12th with any stream",
      highlights: [
        "Foundation in nursing care",
        "Midwifery training",
        "Community health programs",
        "Professional ethics"
      ],
      fee: "₹65,000/year",
      popular: false
    },
    {
      title: "Auxiliary Nurse Midwife (ANM)",
      duration: "2 Years",
      seats: "30 Students",
      eligibility: "10th Pass",
      highlights: [
        "Basic nursing skills",
        "Maternal care",
        "Child health",
        "First aid training"
      ],
      fee: "₹45,000/year", 
      popular: false
    },
    {
      title: "Post Basic B.Sc Nursing",
      duration: "2 Years",
      seats: "20 Students",
      eligibility: "GNM with Registration",
      highlights: [
        "Advanced nursing concepts",
        "Leadership development", 
        "Specialization options",
        "Research projects"
      ],
      fee: "₹75,000/year",
      popular: false
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-college-green mb-6">
            Our Nursing Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of nursing programs designed to meet industry 
            standards and prepare you for a successful healthcare career.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className={`relative overflow-hidden shadow-card hover:shadow-elegant transition-smooth ${
              course.popular ? 'border-college-green border-2' : 'border-border'
            }`}>
              {course.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-college-gold text-college-navy rounded-tl-none rounded-br-none px-4 py-2">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-college-navy mb-4">
                  {course.title}
                </CardTitle>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    {course.seats}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="w-4 h-4" />
                    {course.eligibility}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-college-navy mb-3">Course Highlights:</h4>
                  <ul className="space-y-2">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-college-green flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-college-green">{course.fee}</span>
                    <span className="text-gray-600 ml-1">+ One-time fees</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="college" className="flex-1">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Download Syllabus
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-college-green-light rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-college-navy mb-4">
            Need Help Choosing the Right Course?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our academic counselors are here to guide you through the admission process 
            and help you choose the program that best fits your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="college" size="lg">
              Schedule Counseling
            </Button>
            <Button variant="outline" size="lg">
              Download Admission Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;