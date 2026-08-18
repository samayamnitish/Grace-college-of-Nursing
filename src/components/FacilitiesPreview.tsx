import { Link } from "react-router-dom";
import { Stethoscope, Building2, BookOpen, Home, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FacilitiesPreview() {
  const facilities = [
    {
      title: "Government Teaching Hospital Partnership",
      category: "Clinical Postings",
      image: "/images/hospital_training_1.jpg",
      description: "Extensive daily bedside training at the Government Teaching General Hospital, Machilipatnam, and primary health centers at Guduru & Pedana.",
      icon: Stethoscope,
    },
    {
      title: "Specialized Simulation Laboratories",
      category: "Practical Mastery",
      image: "/images/lab_training_1.jpg",
      description: "Dedicated Anatomy, Community Health, Nutrition & Dietetics, and Nursing Foundations demonstration labs with advanced procedural mannequins.",
      icon: Building2,
    },
    {
      title: "Central Academic Library & Internet",
      category: "Academic Resources",
      image: "/images/library_facility.png",
      description: "Extensive repository of nursing textbooks, national & international journals, periodicals, photocopy, and high-speed internet research terminals.",
      icon: BookOpen,
    },
    {
      title: "Campus Hostel & Hygienic Dining",
      category: "Student Living",
      image: "/images/hostel_dining.png",
      description: "Comfortable rooms, visitor lounge, 60-seat dining hall serving balanced meals, and an in-house RO mineral water purification plant.",
      icon: Home,
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-secondary/30 relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 mb-3 px-3.5 py-1 uppercase tracking-widest font-bold rounded-full text-xs">
              Infrastructure & Labs
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-nursing-navy font-heading tracking-tight">
              Campus Facilities & Laboratories
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-medium mt-2 max-w-2xl">
              World-class clinical hospital partnerships and fully equipped simulation labs built to foster healthcare excellence.
            </p>
          </div>

          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 text-sm font-bold text-nursing-green hover:text-college-gold transition-colors shrink-0"
          >
            Explore All 10+ Facilities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-3xl p-6 sm:p-7 shadow-md hover:shadow-xl hover:border-nursing-green/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-nursing-green/10 text-nursing-green flex items-center justify-center">
                    <fac.icon className="w-6 h-6" />
                  </div>
                  <Badge className="bg-secondary text-foreground font-bold text-[10px] px-2.5 py-1 border border-border">
                    {fac.category}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-nursing-navy font-heading leading-snug">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    {fac.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-border/60">
                <Link
                  to="/facilities"
                  className="text-xs font-bold text-nursing-green hover:underline inline-flex items-center gap-1.5"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
