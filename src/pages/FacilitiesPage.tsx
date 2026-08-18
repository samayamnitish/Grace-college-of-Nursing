import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { CheckCircle, ArrowRight, ShieldCheck, Camera, BookOpen, Monitor, Baby, Heart, Stethoscope, Users, Building2, Utensils } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FacilitiesPage() {
  const labFacilities = [
    {
      title: "Fundamental Nursing Laboratory",
      icon: Stethoscope,
      badge: "Clinical Simulation",
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      description: "Provides opportunities for students to learn and practice essential nursing procedures, patient hygiene, bed making, sterile technique, and clinical vital sign monitoring before entering active clinical hospital postings.",
      features: [
        "Clinical simulation patient care stations",
        "Sterile dressing, injection & catheterization practice",
        "Demonstration beds with patient monitoring units",
        "CPR & basic life support training mannequins",
      ],
    },
    {
      title: "Midwifery & Child Health Laboratory",
      icon: Baby,
      badge: "Maternal & Pediatric Care",
      color: "bg-pink-500/10 text-pink-600 border-pink-500/20",
      description: "Supports practical learning related to midwifery, maternal care, labor delivery simulations, neonatal resuscitation, and child health nursing.",
      features: [
        "Maternal delivery & birthing simulation models",
        "Neonatal resuscitation and infant incubators",
        "Pediatric assessment instruments & milestones charts",
        "Antenatal & postnatal care practice kits",
      ],
    },
    {
      title: "Community Health Nursing Laboratory",
      icon: Users,
      badge: "Public Health",
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      description: "Supports community-health activities, field health projects, rural health camps, public health exhibitions, and mass-awareness disease prevention campaigns.",
      features: [
        "Fully equipped Community Health Nursing bags",
        "Family health record registers and assessment tools",
        "Immunization schedules & cold chain mockups",
        "Health education audio-visual demonstration kits",
      ],
    },
    {
      title: "Anatomy & Physiology Laboratory",
      icon: Heart,
      badge: "Biological Sciences",
      color: "bg-rose-500/10 text-rose-600 border-rose-500/20",
      description: "Provides specimens, articulated human skeletal models, and 3D organ displays to support hands-on learning of human anatomy and physiological bodily systems.",
      features: [
        "Full-size human skeletal & organ models",
        "Microscopes with histological tissue slides",
        "Detailed physiological systems display charts",
        "Interactive organ cross-section models",
      ],
    },
    {
      title: "Nutrition Laboratory",
      icon: Utensils,
      badge: "Therapeutic Diets",
      color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      description: "Supports practical learning related to nutrition, dietary calculations, and its vital importance in clinical healthcare and recovery.",
      features: [
        "Modular food preparation and cooking stations",
        "Nutritional calculation charts and calorific scales",
        "Dietary therapy simulation for clinical disorders",
        "Hygiene and food preservation equipment",
      ],
    },
    {
      title: "Computer Laboratory",
      icon: Monitor,
      badge: "Digital Resources",
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
      description: "Provides students with access to high-speed computers, internet connectivity, and digital health informatics learning resources.",
      features: [
        "High-speed networked computer terminals",
        "High-speed broadband internet connectivity",
        "Healthcare informatics & research tools",
        "Dedicated printing and scanning facilities",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <BreadcrumbNav
          badge="Campus Infrastructure"
          title="World-Class Campus & Lab Facilities"
          subtitle="Explore our specialized nursing simulation laboratories, learning resources, clinical hospital partnerships, and secure campus environment."
          items={[{ label: "Facilities" }]}
        />

        <div className="container mx-auto px-4 sm:px-8 py-12 space-y-16">
          {/* Clinical Hospital Partnership Banner */}
          <section id="hospital-partnership" className="bg-gradient-to-r from-nursing-navy via-[#0d3156] to-nursing-green text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <Badge className="bg-college-gold text-black font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
                  Hospital Partnership
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight">
                  Clinical Training at Government Teaching General Hospital
                </h2>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                  Grace College of Nursing maintains an active clinical affiliation with the <strong className="text-white">Government Teaching General Hospital, Machilipatnam</strong>. Students gain daily hands-on clinical exposure across Medicine, Surgery, Pediatrics, Obstetrics &amp; Gynecology, Orthopedics, Intensive Care (ICU), and Emergency Casualty departments.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-college-gold">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Multi-specialty inpatient and outpatient clinical rotations</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                    <CheckCircle className="w-4 h-4 shrink-0 text-college-green-light" />
                    <span>Primary Health Center (PHC) field postings at Guduru &amp; Pedana</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/20">
                  <img
                    src="/images/hospital_training_1.jpg"
                    alt="Hospital Clinical Training"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/20">
                  <img
                    src="/images/hospital_training_2.jpg"
                    alt="Clinical Practical Procedures"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/20">
                  <img
                    src="/images/clinical_post_1.jpg"
                    alt="Clinical Hospital Cadets"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/20">
                  <img
                    src="/images/clinical_post_2.jpg"
                    alt="Medical Rotation Postings"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Nursing Laboratories */}
          <section id="laboratories" className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
                Practical Learning Facilities
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-nursing-navy font-heading tracking-tight">
                Nursing Laboratories
              </h2>
              <p className="text-muted-foreground text-sm font-medium mt-2">
                Our nursing students have access to practical learning facilities designed to develop essential clinical and professional skills.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {labFacilities.map((lab, idx) => {
                const IconComponent = lab.icon;
                return (
                  <div
                    key={idx}
                    className="bg-card border border-border rounded-3xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className={`w-13 h-13 rounded-2xl flex items-center justify-center p-3 border ${lab.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <Badge className="bg-secondary text-foreground font-bold text-[11px] px-3 py-1 border border-border/60">
                          {lab.badge}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-nursing-navy dark:text-foreground font-heading">
                          {lab.title}
                        </h3>
                        <p className="text-muted-foreground text-xs leading-relaxed font-medium">
                          {lab.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-5 mt-5 border-t border-border">
                      <div className="text-[10px] font-extrabold text-foreground uppercase tracking-widest">
                        Key Highlights:
                      </div>
                      {lab.features.map((ft, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-foreground/85">
                          <CheckCircle className="w-3.5 h-3.5 text-nursing-green shrink-0" />
                          <span>{ft}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: Learning Resources */}
          <section id="learning-resources" className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge className="bg-college-gold/20 text-college-gold border-college-gold/30 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
                Academic Infrastructure
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-nursing-navy font-heading tracking-tight">
                Learning Resources
              </h2>
              <p className="text-muted-foreground text-sm font-medium mt-2">
                State-of-the-art intellectual and technological resources to support students in academic study, reference work, and professional development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Computer Lab */}
              <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-lg space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-nursing-green/10 text-nursing-green flex items-center justify-center">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-nursing-navy font-heading">
                    Computer Lab
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    The institution provides computer facilities with high-speed internet access and printer facilities to support students' academic, e-learning, research, and project requirements.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <CheckCircle className="w-4 h-4 text-nursing-green shrink-0" />
                    <span>High-Speed Internet</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <CheckCircle className="w-4 h-4 text-nursing-green shrink-0" />
                    <span>Printing Facilities</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <CheckCircle className="w-4 h-4 text-nursing-green shrink-0" />
                    <span>Digital Portals</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <CheckCircle className="w-4 h-4 text-nursing-green shrink-0" />
                    <span>Student Workstations</span>
                  </div>
                </div>
              </div>

              {/* Library */}
              <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-lg space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-college-gold/20 text-college-navy flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-college-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-nursing-navy font-heading">
                    Library
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    The institution provides a well-equipped library containing comprehensive academic and reference literature to support students in clinical study, research, and professional development.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-border">
                  {[
                    "Textbooks",
                    "Reference Books",
                    "National Journals",
                    "International Journals",
                    "Periodicals & Magazines",
                    "Photocopying & Internet"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-foreground">
                      <CheckCircle className="w-4 h-4 text-college-gold shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section: Student Safety & Campus Environment */}
          <section id="student-safety" className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
                Zero-Tolerance Discipline & Security
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-nursing-navy font-heading tracking-tight">
                Student Safety &amp; Campus Environment
              </h2>
              <p className="text-muted-foreground text-sm font-medium mt-2">
                Providing a safe, secure, nurturing, and friendly campus ecosystem for all students.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Ragging-Free Campus */}
              <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-lg space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-nursing-green/10 text-nursing-green flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-nursing-navy font-heading mb-2">
                    Ragging-Free Campus
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    We maintain a strict zero-tolerance approach toward ragging and aim to provide students with a welcoming, inclusive, and friendly campus environment.
                  </p>
                </div>
                <div className="space-y-2.5 pt-2 border-t border-border">
                  <div className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    Our Safety Measures:
                  </div>
                  {[
                    "Anti-Ragging Squad & Faculty Mentorship",
                    "Inclusive & Friendly Student Environment",
                    "Strict Disciplinary Action Standards"
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-foreground/85">
                      <CheckCircle className="w-4 h-4 text-nursing-green shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CCTV-Enabled Secure Campus */}
              <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-lg space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-college-gold/20 text-college-navy flex items-center justify-center">
                  <Camera className="w-6 h-6 text-college-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-nursing-navy font-heading mb-2">
                    CCTV-Enabled Secure Campus
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    Student and staff safety is an important part of our campus environment. The campus is actively supported by 24×7 CCTV surveillance and security measures.
                  </p>
                </div>
                <div className="space-y-2.5 pt-2 border-t border-border">
                  <div className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    Security Features:
                  </div>
                  {[
                    "24×7 Campus CCTV Surveillance",
                    "Secure Entry & Exit Gate Access Control",
                    "Dedicated On-Premises Security Personnel"
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-foreground/85">
                      <CheckCircle className="w-4 h-4 text-college-gold shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <div className="bg-secondary/70 border border-border rounded-3xl p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-nursing-navy font-heading">
                Build Your Career. Serve Humanity.
              </h3>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                Take the first step toward a meaningful career in Nursing and Para-Medical education with Sara Grace Educational Society.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                to="/apply"
                className="bg-nursing-green hover:bg-nursing-green/90 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
              >
                Apply Online <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="bg-card hover:bg-secondary text-foreground font-bold px-6 py-3 rounded-xl text-sm border border-border transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
