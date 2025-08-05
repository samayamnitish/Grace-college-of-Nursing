import { useState } from "react";
import { Phone, Mail, Menu, X, Facebook, Instagram, Linkedin, MessageSquare, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import collegeLogo from "@/assets/college-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Top Contact Bar */}
      <div className="bg-college-green text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+91-8672254348</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>info@gracecollegenursing.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <Facebook className="w-4 h-4 hover:text-college-gold cursor-pointer" />
            <Instagram className="w-4 h-4 hover:text-college-gold cursor-pointer" />
            <Linkedin className="w-4 h-4 hover:text-college-gold cursor-pointer" />
            <MessageSquare className="w-4 h-4 hover:text-college-gold cursor-pointer" />
            <Youtube className="w-4 h-4 hover:text-college-gold cursor-pointer" />
            <Send className="w-4 h-4 hover:text-college-gold cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background shadow-md border-b">{" "}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and College Info */}
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/69a68ed6-ebea-433f-94ba-281d03dced1a.png" 
                alt="Grace College Logo" 
                className="w-16 h-16 object-contain"
              />
              <div className="text-left">
                <div className="text-primary font-bold text-lg sm:text-xl">
                  SARA GRACE EDUCATIONAL SOCIETY
                </div>
                <div className="text-college-green font-bold text-xl sm:text-3xl">
                  GRACE COLLEGE OF NURSING
                </div>
                <div className="text-sm text-muted-foreground max-w-lg">
                  Recognised by the Govt. of A.P, Andhra Pradesh Nursing Council and I.N.C, New Delhi.
                </div>
                <div className="text-sm text-muted-foreground font-semibold">
                  AFFILIATED TO: DR. N.T.R. UNIVERSITY OF HEALTH SCIENCES, A.P.
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-college-green">
          <div className="container mx-auto px-4">
            <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:flex-1">
                {["Home", "About", "Courses", "Admissions", "Gallery", "News", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:bg-college-green-light px-4 py-3 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;