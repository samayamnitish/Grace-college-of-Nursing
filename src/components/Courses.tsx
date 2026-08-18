import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, CheckCircle, ArrowRight, BookOpen, Stethoscope, ShieldCheck, Phone, FileText } from "lucide-react";

export default function Courses() {
  const courseDetails = {
    title: "Bachelor of Science in Nursing (B.Sc. Nursing)",
    degree: "4-Year Full-Time Undergraduate Professional Degree Program",
    duration: "4 Years (8 Semesters)",
    seats: "60 Seats",
    affiliation: "Affiliated to Dr. N.T.R. University of Health Sciences, Vijayawada",
    eligibility: "Intermediate (10+2) with Physics, Chemistry, Biology (min 45% aggregate) & NEET-UG for Convener Quota.",
    pillars: [
      {
        icon: Stethoscope,
        title: "Clinical Hospital Simulation",
        desc: "Rigorous clinical rotation across Government Teaching General Hospital wards.",
      },
      {
        icon: BookOpen,
        title: "8-Semester Curricula",
        desc: "Anatomy, pharmacology, adult health, child health & midwifery syllabus.",
      },
      {
        icon: ShieldCheck,
        title: "Statutory Accreditations",
        desc: "Recognised by Govt. of A.P., A.P. Nursing Council & INC New Delhi.",
      },
    ],
  };

  return (
    <section id="courses" className="py-20 bg-background relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nursing-green/5 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 mb-3 px-4 py-1.5 uppercase tracking-widest font-bold rounded-full text-xs">
            Academic Programs
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-nursing-navy font-heading tracking-tight">
            Flagship Degree <span className="text-transparent bg-clip-text bg-gradient-to-r from-nursing-green to-college-gold">Program</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-medium mt-2 leading-relaxed">
            Our 4-Year B.Sc. Nursing program is designed to develop highly skilled clinical leaders prepared to transform patient care and community wellness.
          </p>
        </div>

        {/* Academic Degree Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border border-border rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10 md:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <Badge className="bg-college-gold text-black font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
                  Top Flagship Program
                </Badge>
                <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-nursing-green" /> {courseDetails.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4 text-nursing-green" /> {courseDetails.seats}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-nursing-navy font-heading mb-2 tracking-tight">
                {courseDetails.title}
              </h3>
              <p className="text-nursing-green font-bold text-sm mb-6">
                {courseDetails.affiliation}
              </p>

              {/* Requirement Box */}
              <div className="bg-secondary/60 p-5 rounded-2xl border border-border mb-8 text-sm">
                <span className="font-bold text-nursing-navy block mb-1">Eligibility Criteria:</span>
                <p className="text-muted-foreground font-medium text-xs sm:text-sm">{courseDetails.eligibility}</p>
              </div>

              {/* Pillars Grid */}
              <div className="grid sm:grid-cols-3 gap-5 mb-8">
                {courseDetails.pillars.map((pillar, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-secondary/30 border border-border hover:border-nursing-green/40 transition-colors">
                    <pillar.icon className="w-7 h-7 text-nursing-green mb-3" />
                    <h4 className="font-bold text-foreground text-sm mb-1 font-heading">{pillar.title}</h4>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 pt-6 border-t border-border">
                <Link
                  to="/apply"
                  className="flex-1 bg-nursing-green hover:bg-nursing-green/90 text-white font-bold py-3.5 rounded-xl shadow-md text-center text-sm transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" /> Apply for 2026 Batch
                </Link>
                <Link
                  to="/academics"
                  className="flex-1 bg-card hover:bg-secondary text-nursing-navy font-bold py-3.5 rounded-xl border border-border text-center text-sm transition-all flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-college-gold" /> View 8-Semester Syllabus
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}