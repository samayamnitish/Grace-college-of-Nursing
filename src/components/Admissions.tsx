import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, CreditCard, UserCheck, Download, Phone } from "lucide-react";

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Application Submission",
      description: "Fill out the online application form with required documents",
      icon: FileText,
      status: "open"
    },
    {
      step: 2,
      title: "Entrance Test",
      description: "Appear for the nursing entrance examination",
      icon: UserCheck,
      status: "upcoming"
    },
    {
      step: 3,
      title: "Merit List & Counseling",
      description: "Check merit list and attend counseling session",
      icon: Calendar,
      status: "upcoming"
    },
    {
      step: 4,
      title: "Fee Payment & Admission",
      description: "Complete fee payment and secure your admission",
      icon: CreditCard,
      status: "upcoming"
    }
  ];

  const importantDates = [
    { event: "Application Start Date", date: "March 1, 2024", status: "completed" },
    { event: "Application Last Date", date: "May 31, 2024", status: "active" },
    { event: "Entrance Test", date: "June 15, 2024", status: "upcoming" },
    { event: "Merit List Declaration", date: "June 25, 2024", status: "upcoming" },
    { event: "Counseling Sessions", date: "July 1-10, 2024", status: "upcoming" },
    { event: "Classes Commence", date: "August 1, 2024", status: "upcoming" }
  ];

  const documents = [
    "10th & 12th Mark Sheets and Certificates",
    "Transfer Certificate from Previous Institution",
    "Character Certificate",
    "Caste Certificate (if applicable)",
    "Income Certificate (for scholarship)",
    "Medical Fitness Certificate",
    "Passport Size Photographs (6 copies)",
    "Aadhar Card Copy"
  ];

  return (
    <section id="admissions" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-college-gold text-college-navy mb-4 text-lg px-6 py-2">
            Admissions Open 2024
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-college-green mb-6">
            Admission Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the next generation of healthcare professionals. Our streamlined admission 
            process ensures a smooth journey from application to enrollment.
          </p>
        </div>

        {/* Admission Steps */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-college-navy mb-8 text-center">
            How to Apply
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    step.status === 'open' ? 'bg-college-green' : 
                    step.status === 'upcoming' ? 'bg-college-green-light' : 'bg-gray-200'
                  }`}>
                    <step.icon className={`w-8 h-8 ${
                      step.status === 'open' ? 'text-white' : 'text-college-green'
                    }`} />
                  </div>
                  <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold ${
                    step.status === 'open' ? 'bg-college-green' : 
                    step.status === 'upcoming' ? 'bg-college-navy' : 'bg-gray-400'
                  }`}>
                    {step.step}
                  </div>
                  <CardTitle className="text-lg text-college-navy">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Important Dates */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-college-navy flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {importantDates.map((date, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div>
                      <h4 className="font-medium text-college-navy">{date.event}</h4>
                      <p className="text-sm text-gray-600">{date.date}</p>
                    </div>
                    <Badge variant={
                      date.status === 'completed' ? 'secondary' :
                      date.status === 'active' ? 'default' : 'outline'
                    }>
                      {date.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Required Documents */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-college-navy flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-college-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Document Checklist
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-college-green rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Nursing Journey?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Don't miss out on the opportunity to join one of the finest nursing colleges. 
            Apply today and take the first step towards a rewarding healthcare career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-college-green hover:bg-gray-100">
              Apply Online Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-college-green">
              <Phone className="w-4 h-4 mr-2" />
              Call for Assistance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;