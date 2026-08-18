import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Award, GraduationCap, FileText, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nursing-navy text-slate-200 pt-16 pb-8 border-t border-white/10 relative overflow-hidden font-sans no-print">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-college-green/10 blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Column 1: Society & College Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/college_logo.png"
                alt="Grace College of Nursing"
                className="w-14 h-14 object-contain bg-white rounded-xl p-1 shadow-md"
              />
              <div>
                <div className="text-college-gold font-extrabold text-[11px] uppercase tracking-widest">
                  Sara Grace Educational Society
                </div>
                <div className="text-white font-black text-xl sm:text-2xl font-heading tracking-tight leading-none">
                  Grace College of Nursing
                </div>
                <div className="text-xs text-slate-300 font-semibold mt-1">
                  Symbol of Service • Est. 1987
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              A premier collegiate institution preparing dynamic nursing leaders through rigorous clinical mastery, evidence-based health science, and compassionate patient advocacy.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2 text-college-gold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Recognised by Govt. of A.P. & Indian Nursing Council (INC)</span>
              </div>
              <div className="flex items-center gap-2 text-college-green-light">
                <GraduationCap className="w-4 h-4 shrink-0" />
                <span>Affiliated to Dr. N.T.R. University of Health Sciences, A.P.</span>
              </div>
            </div>
          </div>

          {/* Column 2: Academic & Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base font-heading uppercase tracking-wider border-b border-white/10 pb-2">
              Academic & Admissions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/academics" className="hover:text-college-gold transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3.5 h-3.5 text-college-green-light" />
                  B.Sc. Nursing (4-Year Degree)
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-college-gold transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3.5 h-3.5 text-college-green-light" />
                  8-Semester Syllabus & Scheme
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-college-gold transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3.5 h-3.5 text-college-green-light" />
                  Examination Regulations & Grading
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-college-gold transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3.5 h-3.5 text-college-green-light" />
                  Convener & Management Quotas
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-college-gold font-bold hover:underline transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-college-gold" />
                  Online B.Sc. Application Form
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-college-gold transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3.5 h-3.5 text-college-green-light" />
                  Fee Structure & Scholarships
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Institution & Campus (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-base font-heading uppercase tracking-wider border-b border-white/10 pb-2">
              Institution
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-college-gold transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3.5 h-3.5 text-college-green-light" />
                  About Society & Founder
                </Link>
              </li>
              <li>
                <Link to="/management" className="hover:text-college-gold transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3.5 h-3.5 text-college-green-light" />
                  Executive Committee
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-college-gold transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3.5 h-3.5 text-college-green-light" />
                  Nursing Laboratories
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-college-gold transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3.5 h-3.5 text-college-green-light" />
                  Clinical Hospital Training
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-college-gold transition-colors flex items-center gap-1.5 text-slate-300">
                  <ChevronRight className="w-3.5 h-3.5 text-college-green-light" />
                  Campus Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Headquarters & Affiliation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base font-heading uppercase tracking-wider border-b border-white/10 pb-2">
              Contact Desk
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-college-gold shrink-0 mt-1" />
                <span>
                  Door No: 3/39, Pothepalle, Machilipatnam - 521 002, Krishna Dist., Andhra Pradesh
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-college-green-light shrink-0 mt-1" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:8500254345" className="hover:text-college-gold transition-colors">8500254345</a>
                  <a href="tel:9492644555" className="hover:text-college-gold transition-colors">9492644555</a>
                  <a href="tel:7989766058" className="hover:text-college-gold transition-colors">7989766058</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-college-gold shrink-0 mt-1" />
                <div className="flex flex-col gap-0.5 break-all">
                  <a href="mailto:info@gracecollegeofnursing.org" className="hover:text-college-gold transition-colors">info@gracecollegeofnursing.org</a>
                  <a href="mailto:sges112@gmail.com" className="hover:text-college-gold transition-colors">sges112@gmail.com</a>
                  <a href="mailto:gracecollegeofnursing@gmail.com" className="hover:text-college-gold transition-colors">gracecollegeofnursing@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="pt-2 border-t border-white/10">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                Official Portals
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-slate-300">
                <a
                  href="https://hmis.ap.nic.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-college-gold transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-college-green-light" />
                  Andhra Pradesh Nurses Council
                </a>
                <a
                  href="https://drntr.uhsap.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-college-gold transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-college-green-light" />
                  Dr. N.T.R. University of Health Sciences
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} Sara Grace Educational Society • Grace College of Nursing. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-college-gold transition-colors">About Us</Link>
            <span>•</span>
            <Link to="/admissions" className="hover:text-college-gold transition-colors">Admissions</Link>
            <span>•</span>
            <Link to="/apply" className="hover:text-college-gold transition-colors">Apply Online</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-college-gold transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}