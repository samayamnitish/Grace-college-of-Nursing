import { Award, Users, BookOpen, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import founderImage from "@/assets/founder.jpg";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Recognized Institution",
      description: "Recognized by Government of A.P, Andhra Pradesh Nursing Council, and Indian Nursing Council"
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Qualified and experienced faculty providing high quality career oriented educational programs"
    },
    {
      icon: BookOpen,
      title: "Career Guidance",
      description: "Dedicated career guidance cell to meet the needs of all students"
    },
    {
      icon: Heart,
      title: "Scholarships Available",
      description: "Scholarships for deserving candidates are provided to support their education"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-college-green mb-6">
              About Nursing Career
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                It is an important policy to provide good health care by all developing countries. 
                Thus, it has become more impediments to provide health care to the public in our country. 
                This may not be possible to the Government to provide health care to the all the people 
                because of funds, lack of trained workers and assistants in the field of medicine etc.
              </p>
              <p>
                So, private organizations have come forward for providing health care to the people of nation. 
                The Private sector has started Para Medical Courses, Multipurpose Health Worker training courses, 
                etc., in keeping the urgency and need of giving health care to the people in remote villages 
                and to help the poor and needy.
              </p>
            </div>
            <Button className="mt-6 bg-college-green hover:bg-college-green/90">
              Learn More About Our Programs
            </Button>
          </div>

          {/* Right Content - College Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-college-green mb-6">
              NURSING - The Noblest Profession
            </h3>
            <div className="text-gray-700 space-y-4">
              <p>
                Every one desires to attain optimum health. The level of development of country is 
                measured in terms of the health of the people. The achievement of the country in 
                preventing disease and promoting health depends upon the contribution of all members 
                of the health team, particularly that of Nurses.
              </p>
              <p>
                Life cannot be saved merely by Medicines and Surgery. Nursing is equally important 
                to save life and to relieve suffering. Nursing is also an art and nurses should be 
                capable of serving the sick with a compassionate and caring hand.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-college-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-college-green" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-college-green">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Founder Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-college-green mb-4">
                Founder's Desk
              </h3>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800">Rev. Dr. S.S. John</h4>
                <p className="text-gray-600">Bishop Apostolic Church</p>
              </div>
              <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
                <p>
                  The Apostolic Church (Pentecostal) under the able spiritual leadership of Rev. Dr. S.S. John, 
                  Bishop started Grace School of Nursing under the guidance of the Holy Spirit to impart training 
                  in General nursing and Midwifery course in 1988 to 2009 and since then 21 batches of students 
                  have gone out from our Institution on completion of training successfully.
                </p>
                <p className="font-semibold text-college-green">
                  Now Grace School of Nursing upgradation as a college of Nursing from the academic year 2010-2011.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={founderImage} 
                alt="Rev. Dr. S.S. John" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;