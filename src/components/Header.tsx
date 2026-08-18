import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  Menu,
  X,
  Award,
  GraduationCap,
  Search,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchModal from "./SearchModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Facilities", href: "/facilities" },
  { name: "Management", href: "/management" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const mobileNavLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academics & 8 Semesters", href: "/academics" },
  { name: "Admissions 2026", href: "/admissions" },
  { name: "Online Application Form", href: "/apply" },
  { name: "Campus & Lab Facilities", href: "/facilities" },
  { name: "Management Committee", href: "/management" },
  { name: "Campus Gallery", href: "/gallery" },
  { name: "Contact Headquarters", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinkClass = (href: string) =>
    `font-bold px-2.5 py-2 rounded-lg transition-colors text-[13px] whitespace-nowrap ${
      location.pathname === href
        ? "text-nursing-green bg-nursing-green/10"
        : "text-foreground/80 hover:text-nursing-green hover:bg-secondary/60"
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 no-print font-sans">
        {/* Top Info Bar */}
        <div
          className={`transition-all duration-300 overflow-hidden bg-nursing-navy text-white ${
            scrolled ? "h-0 opacity-0" : "h-10 opacity-100 border-b border-white/10"
          }`}
        >
          <div className="container mx-auto h-full flex justify-between items-center text-xs font-semibold px-4 sm:px-8">
            <div className="flex items-center gap-4">
              <span className="hidden md:inline-flex items-center gap-1.5 text-college-gold">
                <Award className="w-3.5 h-3.5" /> INC Recognized & AP Nursing Council Approved
              </span>
              <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-nursing-green" /> Affiliated to Dr. N.T.R. University of Health Sciences, Vijayawada
              </span>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <a href="tel:8500254345" className="flex items-center gap-1.5 hover:text-college-gold transition-colors">
                <Phone className="w-3.5 h-3.5 text-nursing-green" />
                <span>8500254345 / 9492644555</span>
              </a>
              <a href="mailto:info@gracecollegeofnursing.org" className="hidden sm:flex items-center gap-1.5 hover:text-college-gold transition-colors">
                <Mail className="w-3.5 h-3.5 text-nursing-green" />
                <span>info@gracecollegeofnursing.org</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-white/97 backdrop-blur-md shadow-lg py-2"
              : "bg-white/95 backdrop-blur-md py-3 border-b border-border/60"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-3">
              {/* Logo — Left */}
              <Link to="/" className="flex items-center gap-3 group shrink-0">
                <img
                  src="/lovable-uploads/5c067fa4-0b27-4771-884a-a041dfdd3aa0.png"
                  alt="Grace College of Nursing Logo"
                  className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform group-hover:scale-105"
                />
                <div className="text-left">
                  <div className="text-nursing-green font-extrabold text-[9px] md:text-[10px] tracking-[0.18em] uppercase leading-none mb-0.5">
                    Sara Grace Educational Society
                  </div>
                  <div className="text-nursing-navy font-black text-sm sm:text-base md:text-lg lg:text-xl font-heading tracking-tight leading-none">
                    Grace College of Nursing
                  </div>
                  <div className="text-[9px] font-semibold text-muted-foreground hidden sm:block mt-0.5">
                    Symbol of Service · Machilipatnam, AP
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation — All in one line */}
              <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
                {navLinks.map((link) => (
                  <Link key={link.href} to={link.href} className={navLinkClass(link.href)}>
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Right Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchOpen(true)}
                  className="rounded-full hover:bg-secondary text-foreground hover:text-nursing-green"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </Button>

                <Link
                  to="/apply"
                  className="hidden md:inline-flex items-center justify-center rounded-full bg-nursing-green hover:bg-nursing-green/90 text-white font-bold text-xs px-4 py-2.5 shadow-md hover:shadow-lg transition-all hover:scale-105 whitespace-nowrap"
                >
                  Apply 2026
                </Link>

                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rounded-full hover:bg-secondary text-foreground"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-b border-border shadow-2xl py-4 px-6 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-1.5">
              {mobileNavLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-bold py-2.5 px-3 rounded-xl text-sm flex items-center justify-between border-b border-border/40 ${
                    location.pathname === item.href
                      ? "bg-nursing-green/10 text-nursing-green"
                      : "text-foreground hover:bg-secondary hover:text-nursing-green"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                </Link>
              ))}

              <div className="pt-3">
                <Link
                  to="/apply"
                  className="w-full text-center rounded-xl bg-nursing-green text-white font-bold py-3 text-sm shadow-md flex items-center justify-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FileText className="w-4 h-4" /> Fill B.Sc. Nursing Application Form
                </Link>
              </div>

              <div className="pt-2 text-center text-xs text-muted-foreground">
                Helpline:{" "}
                <a href="tel:8500254345" className="font-bold text-nursing-green">8500254345</a>
                {" "}/{" "}
                <a href="tel:9492644555" className="font-bold text-nursing-green">9492644555</a>
              </div>
            </div>
          </div>
        )}
      </header>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}