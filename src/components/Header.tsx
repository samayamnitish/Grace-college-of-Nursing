import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
const collegeLogo = "/lovable-uploads/a319d59b-3c74-41dd-9ef4-15565202d413.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Admissions", href: "#admissions" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-college-green text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
              <Phone size={14} />
              +1-234-567-8900
            </a>
            <a href="mailto:info@gracecollege.edu" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
              <Mail size={14} />
              info@gracecollege.edu
            </a>
          </div>
          <div className="hidden md:block">
            <span className="text-sm">Recognized by State Board & Affiliated to University</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Logo and College Info */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <img src={collegeLogo} alt="Grace College Logo" className="w-16 h-16" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-college-green">
                  Grace College of Nursing
                </h1>
                <p className="text-sm text-muted-foreground">
                  Excellence in Healthcare Education
                </p>
                <p className="text-xs text-college-navy font-medium">
                  Affiliated to State University of Health Sciences
                </p>
              </div>
            </div>
            
            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block border-t md:border-t-0 py-4 md:py-0`}>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 md:justify-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 px-4 text-foreground hover:text-college-green transition-smooth font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <Button variant="admissions" size="sm" className="w-full md:w-auto">
                  Apply Now
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;