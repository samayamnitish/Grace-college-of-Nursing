import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, Star } from "lucide-react";
import nursingStudents from "@/assets/nursing-students.jpg";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Training students to provide healthcare with empathy and dedication."
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Comprehensive curriculum designed by industry experts and academics."
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Learn from qualified professors with years of clinical experience."
    },
    {
      icon: Star,
      title: "Career Success",
      description: "95% placement rate with opportunities in top healthcare institutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-college-green mb-6">
            About Grace College
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Established in 2010, Grace College of Nursing has been a pioneer in nursing education, 
            shaping healthcare professionals who make a difference in people's lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Image */}
          <div className="relative">
            <img 
              src={nursingStudents} 
              alt="Nursing students in training" 
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-college-gold text-college-navy p-6 rounded-2xl shadow-card">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h3 className="text-3xl font-bold text-college-navy mb-6">
              Nurturing Future Healthcare Leaders
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Grace College of Nursing is committed to providing high-quality nursing education 
              that combines theoretical knowledge with practical clinical experience. Our mission 
              is to develop competent, caring, and confident nursing professionals.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe in holistic education that not only focuses on clinical skills but also 
              emphasizes ethics, leadership, and continuous learning. Our graduates are well-prepared 
              to meet the challenges of modern healthcare.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-college-green rounded-full"></div>
                <span className="text-gray-700">State-of-the-art simulation labs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-college-green rounded-full"></div>
                <span className="text-gray-700">Clinical partnerships with leading hospitals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-college-green rounded-full"></div>
                <span className="text-gray-700">Industry-aligned curriculum</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-college-green rounded-full"></div>
                <span className="text-gray-700">Scholarship programs for deserving students</span>
              </div>
            </div>

            <Button variant="college" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-smooth bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-college-green-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-college-green" />
                </div>
                <h4 className="text-xl font-semibold text-college-navy mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;