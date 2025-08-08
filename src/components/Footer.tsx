import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import collegeLogo from "@/assets/college-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Admissions", href: "#admissions" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const courses = [
    { name: "B.Sc Nursing", href: "#courses" },
    { name: "GNM", href: "#courses" },
    { name: "ANM", href: "#courses" },
    { name: "Post Basic B.Sc", href: "#courses" }
  ];

  const resources = [
    { name: "Admission Guide", href: "#" },
    { name: "Fee Structure", href: "#" },
    { name: "Scholarship Info", href: "#" },
    { name: "Academic Calendar", href: "#" },
    { name: "Student Portal", href: "#" }
  ];

  return (
    <footer className="bg-college-navy text-white">
      {/* Newsletter Section */}
      <div className="bg-college-green py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on admissions, 
            courses, and college events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500"
            />
            <Button variant="hero" className="bg-white text-college-green hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* College Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <img src="/lovable-uploads/5c067fa4-0b27-4771-884a-a041dfdd3aa0.png" alt="Grace College Logo" className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-bold">Grace College</h3>
                  <p className="text-sm text-gray-300">of Nursing</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Building tomorrow's healthcare heroes through excellence in nursing education, 
                compassionate care, and professional development.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-smooth">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-smooth">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-smooth">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-smooth">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-smooth">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-college-gold transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li key={index}>
                    <a 
                      href={course.href}
                      className="text-gray-300 hover:text-college-gold transition-smooth"
                    >
                      {course.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-lg font-semibold mt-8 mb-4">Resources</h4>
              <ul className="space-y-3">
                {resources.slice(0, 3).map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.href}
                      className="text-gray-300 hover:text-college-gold transition-smooth"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-college-gold mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>Door No: 3/39, Pothepalle</p>
                    <p>Machilipatnam, Krishna Dist.</p>
                    <p>Andhra Pradesh - 521 002</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-college-gold flex-shrink-0" />
                  <div className="text-gray-300">
                    <a href="tel:+918500254345" className="hover:text-college-gold transition-smooth">
                      +91-8500254345
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-college-gold flex-shrink-0" />
                  <div className="text-gray-300">
                    <a href="mailto:info@gracecollegenursing.com" className="hover:text-college-gold transition-smooth">
                      info@gracecollegenursing.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h5 className="font-medium mb-3">Office Hours</h5>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              © {currentYear} Grace College of Nursing. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-college-gold transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-college-gold transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-college-gold transition-smooth">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;