import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-college-green mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our programs or admission process? We're here to help you 
            make the right choice for your nursing career.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-college-navy mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-college-green-light rounded-lg p-3">
                      <MapPin className="w-6 h-6 text-college-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-college-navy mb-2">Address</h4>
                      <p className="text-muted-foreground">
                        Door No: 3/39, Pothepalle<br />
                        Machilipatnam, Krishna Dist.<br />
                        Andhra Pradesh - 521 002
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-college-green-light rounded-lg p-3">
                      <Phone className="w-6 h-6 text-college-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-college-navy mb-2">Phone</h4>
                      <p className="text-muted-foreground">
                        <a href="tel:+918500254345" className="hover:text-college-green transition-smooth">
                          +91-8500254345
                        </a><br />
                        <a href="tel:+919492644555" className="hover:text-college-green transition-smooth">
                          +91-9492644555
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-college-green-light rounded-lg p-3">
                      <Mail className="w-6 h-6 text-college-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-college-navy mb-2">Email</h4>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@gracecollegenursing.com" className="hover:text-college-green transition-smooth">
                          info@gracecollegenursing.com
                        </a><br />
                        <a href="mailto:sges112@gmail.com" className="hover:text-college-green transition-smooth">
                          sges112@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-college-green-light rounded-lg p-3">
                      <Clock className="w-6 h-6 text-college-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-college-navy mb-2">Office Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-college-navy">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-college-navy mb-2">
                        First Name *
                      </label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-college-navy mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-college-navy mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-college-navy mb-2">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-college-navy mb-2">
                      Course Interest
                    </label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option value="">Select a course</option>
                      <option value="bsc-nursing">B.Sc Nursing</option>
                      <option value="gnm">General Nursing & Midwifery</option>
                      <option value="anm">Auxiliary Nurse Midwife</option>
                      <option value="post-basic">Post Basic B.Sc Nursing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-college-navy mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your questions or interest in our programs..." 
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button 
                    variant="college" 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      const message = `Hello! I'm interested in your nursing programs. Please contact me.`;
                      window.open(`https://wa.me/918500254345?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="shadow-card overflow-hidden">
            <div className="bg-muted h-64 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Campus location and directions</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;