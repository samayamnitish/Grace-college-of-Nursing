import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import {
  Award,
  ShieldCheck,
  GraduationCap,
  Heart,
  Compass,
  History,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Building2,
  Users,
  Stethoscope
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import founderImage from "@/assets/founder.jpg";

export default function AboutPage() {
  const recognitions = [
    {
      title: "Government of Andhra Pradesh",
      desc: "Recognised and permitted by the Government of Andhra Pradesh for collegiate nursing degree education.",
      icon: ShieldCheck,
      logo: "/images/logos/government_of_andhra_pradesh.png",
    },
    {
      title: "Indian Nursing Council (INC), New Delhi",
      desc: "Recognised by the apex national regulatory authority, Indian Nursing Council (INC), New Delhi.",
      icon: Award,
      logo: "/images/logos/indian_nursing_council.jpg",
    },
    {
      title: "Andhra Pradesh Nursing Council",
      desc: "Approved and regulated by the A.P. Nurses, Midwives and Health Visitors Council, Vijayawada.",
      icon: CheckCircle,
      logo: "/images/logos/andhra_pradesh_nursing_council.png",
    },
    {
      title: "Dr. N.T.R. University of Health Sciences, A.P.",
      desc: "Affiliated to the prestigious Dr. N.T.R. University of Health Sciences for award of the B.Sc. Nursing Degree.",
      icon: GraduationCap,
      logo: "/images/logos/dr_ntr_university_of_health_sciences.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <BreadcrumbNav
          badge="Sara Grace Educational Society"
          title="About Grace College of Nursing"
          subtitle="Discover our 35+ years legacy, founding mission, institutional philosophy, and commitment to healthcare education."
          items={[{ label: "About Us" }]}
        />

        <div className="container mx-auto px-4 sm:px-8 py-12 space-y-16">
          {/* Subsection 1: About the Institution & Promoters */}
          <section id="institution" className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full">
                Institutional Profile
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-nursing-navy font-heading tracking-tight leading-tight">
                Sara Grace Educational Society <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-nursing-green to-college-gold">
                  Symbol of Service
                </span>
              </h2>
              <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4 font-medium">
                <p>
                  <strong>Sara Grace Educational Society (SGES)</strong> is dedicated to providing quality education in Nursing and Para-Medical fields while promoting service, compassion, professional excellence, and social responsibility.
                </p>
                <p>
                  With a long-standing commitment to nursing education since 1987, the institution has focused on preparing students with the knowledge, practical skills, and values required to serve individuals, families, and communities.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-card border border-border p-3.5 rounded-2xl text-center shadow-sm">
                  <div className="text-2xl font-black text-nursing-green font-heading">1987</div>
                  <div className="text-[11px] font-semibold text-muted-foreground mt-0.5">MPHW Founded</div>
                </div>
                <div className="bg-card border border-border p-3.5 rounded-2xl text-center shadow-sm">
                  <div className="text-2xl font-black text-college-gold font-heading">1988</div>
                  <div className="text-[11px] font-semibold text-muted-foreground mt-0.5">Nursing School</div>
                </div>
                <div className="bg-card border border-border p-3.5 rounded-2xl text-center shadow-sm">
                  <div className="text-2xl font-black text-nursing-navy font-heading">1999</div>
                  <div className="text-[11px] font-semibold text-muted-foreground mt-0.5">Minority Status</div>
                </div>
                <div className="bg-card border border-border p-3.5 rounded-2xl text-center shadow-sm">
                  <div className="text-2xl font-black text-nursing-green font-heading">2009-10</div>
                  <div className="text-[11px] font-semibold text-muted-foreground mt-0.5">Collegiate Status</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden space-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nursing-green/10 rounded-bl-full pointer-events-none"></div>
              <div className="inline-flex items-center gap-2 text-nursing-green font-bold text-xs uppercase tracking-widest">
                <Building2 className="w-4 h-4" /> Institutional Promoters
              </div>
              <h3 className="text-2xl font-bold text-nursing-navy font-heading">
                Our Promoters
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-medium">
                The School/College of Nursing is a unit of <strong>Sara Grace Educational Society</strong>, an organization committed to developing educational institutions that promote quality healthcare education and continuing education with strong ethical values.
              </p>
              <div className="space-y-2 pt-1 text-xs font-semibold text-foreground">
                <div className="p-3 rounded-xl bg-secondary/60 border-l-4 border-nursing-green">
                  <strong>Spiritual Leadership:</strong> Bishop Rev. Dr. S.S. John
                </div>
                <div className="p-3 rounded-xl bg-secondary/60 border-l-4 border-college-gold">
                  <strong>Dedicated Leadership:</strong>, Secretary &amp; Correspondent
                </div>
              </div>
              <div className="text-[11px] text-muted-foreground pt-1">
                Door No: 3/39, Pothepalle, Machilipatnam - 521 002, Krishna District, Andhra Pradesh.
              </div>
            </div>
          </section>

          {/* Subsection 2: Nursing — The Noblest Profession & Mission / Vision */}
          <section id="philosophy-mission" className="space-y-8">
            {/* Nursing — The Noblest Profession */}
            <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-lg space-y-6">
              <div className="max-w-3xl">
                <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
                  Healthcare Calling
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-black text-nursing-navy font-heading tracking-tight">
                  Nursing — The Noblest Profession
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                <div className="space-y-4">
                  <p>
                    Everyone desires to attain optimum health. The development of a country is closely connected with the health and well-being of its people. Nurses play a vital role in preventing disease, promoting health, caring for patients, and supporting recovery.
                  </p>
                  <p>
                    Nursing is both a profession and an art. It requires knowledge, technical skills, compassion, dedication, and a caring approach toward patients.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    A career in nursing provides opportunities to work in hospitals, clinics, community health services, educational institutions, and other healthcare settings. It also provides opportunities for higher education and specialization in clinical practice, administration, education, and community health.
                  </p>
                  <p className="p-4 rounded-xl bg-secondary/70 border border-nursing-green/20 text-foreground font-semibold text-xs sm:text-sm">
                    "For career-minded students, nursing offers a unique combination of professional growth and service to humanity."
                  </p>
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-lg space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-nursing-green/10 text-nursing-green flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-nursing-navy font-heading">
                    Our Mission
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    Our mission is to provide high standards of healthcare education and training, particularly supporting students from socially and financially disadvantaged sections of society. We are committed to developing healthcare professionals with the ideals of:
                  </p>
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    {[
                      "Compassion",
                      "Concern",
                      "Dedication",
                      "Service",
                      "Professional Excellence",
                      "Social Responsibility"
                    ].map((ideal, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold text-foreground">
                        <CheckCircle className="w-4 h-4 text-nursing-green shrink-0" />
                        <span>{ideal}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic border-t border-border pt-4">
                  Training nurses who have the knowledge, skills, and values necessary to provide quality nursing care to individuals, families, and communities.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-lg space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-college-gold/20 text-college-navy flex items-center justify-center">
                    <Target className="w-6 h-6 text-college-gold" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-nursing-navy font-heading">
                    Our Vision
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    To be a leading and outstanding educational institution in Nursing and Para-Medical education by providing affordable, quality education and creating opportunities for students from all sections of society.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    Our vision is to contribute to the upliftment of society through professional education, practical training, ethical values, and service.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-r from-nursing-green/10 to-college-gold/10 border border-nursing-green/20 text-center font-black text-sm text-nursing-navy">
                  Serving in nursing education since 1987.
                </div>
              </div>
            </div>
          </section>

          {/* Subsection 3: Founder's Message & Leadership */}
          <section id="founder" className="bg-gradient-to-br from-nursing-navy via-[#0d3156] to-nursing-green text-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-5">
                <Badge className="bg-college-gold text-black font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
                  Founder's Message &amp; Vision
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight">
                  Bishop Rev. Dr. S.S. John
                </h2>
                <div className="text-college-gold text-sm font-bold uppercase tracking-wider">
                  Founder &amp; Spiritual Leader • The Apostolic Church (Pentecostal)
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-slate-100 text-xs sm:text-sm leading-relaxed font-medium italic">
                  "Nursing is both a profession and an art. It requires knowledge, technical skills, compassion, dedication, and a caring approach toward patients. For career-minded students, nursing offers a unique combination of professional growth and service to humanity."
                </div>

                <div className="text-slate-200 text-xs sm:text-sm leading-relaxed space-y-3 font-medium">
                  <p>
                    The Apostolic Church (Pentecostal), under the spiritual leadership of <strong>Bishop Rev. Dr. S.S. John</strong>, established Grace School &amp; College of Nursing to provide exceptional collegiate training in nursing and health sciences.
                  </p>
                  <p>
                    Since our founding, students from across India—including <strong>Kerala, Andaman &amp; Nicobar Islands, Madhya Pradesh, Tamil Nadu, Maharashtra, Delhi, Rajasthan</strong>, and Andhra Pradesh—have graduated to become compassionate leaders in hospitals worldwide.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-96 lg:h-full min-h-[400px] bg-slate-900 overflow-hidden flex items-center justify-center">
                <img
                  src={founderImage}
                  alt="Bishop Rev. Dr. S.S. John"
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/20 text-center">
                  <div className="text-xs font-bold text-white">Bishop Rev. Dr. S.S. John</div>
                  <div className="text-[10px] text-college-gold font-semibold">Founder, Sara Grace Educational Society</div>
                </div>
              </div>
            </div>
          </section>

          {/* Subsection 4: Our Secretary & Correspondent Message */}
          <section id="secretary" className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
              <div>
                <Badge className="bg-college-gold/20 text-college-gold border-college-gold/30 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-2">
                  Leadership Address
                </Badge>
                <h2 className="text-3xl font-black text-nursing-navy font-heading">

                </h2>
                <div className="text-xs font-bold text-nursing-green uppercase tracking-wider">
                  Secretary &amp; Correspondent, Sara Grace Educational Society
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground text-xs sm:text-sm leading-relaxed font-medium">
              <div className="space-y-4">
                <p>
                  Sara Grace Educational Society represents a commitment to Nursing and Para-Medical education and aims to help students build a bright and meaningful future.
                </p>
                <p>
                  SGES strives to develop students into responsible individuals with integrity, confidence, and a commitment to contributing positively to society.
                </p>
                <p>
                  The institution's journey in Nursing and Para-Medical education has been built through continuous effort, dedication, and a focus on student development.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  We understand the aspirations and concerns of parents regarding their children's education and future. Through training, interaction, and academic guidance, the institution aims to support students throughout their educational journey.
                </p>
                <p>
                  Nursing provides opportunities in healthcare settings including government institutions, hospitals, clinics, schools, offices, factories, community services, orphanages, and old-age homes.
                </p>
                <p className="font-semibold text-foreground">
                  The institution aims to support students from different backgrounds by providing opportunities to develop professional skills and become financially independent.
                </p>
              </div>
            </div>
          </section>

          {/* Subsection 5: Our History Timeline */}
          <section id="history" className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-lg space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-nursing-green font-bold text-xs uppercase tracking-widest mb-2">
                <History className="w-4 h-4" /> Institutional Milestones
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-nursing-navy font-heading tracking-tight">
                Our History
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-2">
                <div className="text-3xl font-black text-nursing-green font-heading">1987</div>
                <h3 className="text-sm font-bold text-foreground">MPHW-F Established</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  Sara Grace Educational Society began its involvement in healthcare education with the establishment of Grace Multipurpose Health Workers Female Training Institute.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-2">
                <div className="text-3xl font-black text-nursing-navy font-heading">2009–10</div>
                <h3 className="text-sm font-bold text-foreground">Upgraded to College</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  Grace School of Nursing was upgraded to Grace College of Nursing offering the 4-Year B.Sc. Nursing Degree.
                </p>
              </div>
            </div>
          </section>

          {/* Subsection 6: Why Choose Sara Grace? */}
          <section id="why-choose" className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
                Core Strengths
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-nursing-navy font-heading tracking-tight">
                Why Choose Sara Grace?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  title: "Experience",
                  desc: "A long-standing presence in Nursing and Para-Medical education serving since 1987.",
                  icon: History,
                },
                {
                  title: "Practical Learning",
                  desc: "Dedicated laboratories and hospital facilities for hands-on clinical learning.",
                  icon: Stethoscope,
                },
                {
                  title: "Experienced Faculty",
                  desc: "Qualified, experienced, and dedicated faculty focused on student development.",
                  icon: Users,
                },
                {
                  title: "Career-Oriented Education",
                  desc: "Education and training designed to prepare students for rewarding healthcare careers.",
                  icon: Award,
                },
                {
                  title: "Student Safety",
                  desc: "Ragging-free campus with 24x7 CCTV security measures and anti-ragging squad.",
                  icon: ShieldCheck,
                },
                {
                  title: "Learning Resources",
                  desc: "Comprehensive library, computer facilities, high-speed internet, and academic resources.",
                  icon: Building2,
                },
                {
                  title: "Service-Oriented Values",
                  desc: "Education built around compassion, concern, dedication, and service to society.",
                  icon: Heart,
                },
                {
                  title: "State & National Accreditations",
                  desc: "Recognized by Govt. of A.P., INC New Delhi, APNC, and affiliated to Dr. NTR UHS.",
                  icon: GraduationCap,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border p-6 rounded-2xl shadow-md hover:border-nursing-green/40 hover:shadow-lg transition-all space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-nursing-green/10 text-nursing-green flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Subsection 7: Recognition & Affiliations */}
          <section id="recognitions" className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
                Accreditations
              </Badge>
              <h2 className="text-3xl font-black text-nursing-navy font-heading tracking-tight">
                Statutory Recognition & Affiliations
              </h2>
              <p className="text-muted-foreground text-sm font-medium mt-2">
                All programs and credentials at Grace College of Nursing adhere strictly to state and national statutory benchmarks.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recognitions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border p-6 rounded-2xl shadow-md hover:border-nursing-green/40 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-white border border-border/80 p-2 flex items-center justify-center mb-4 shadow-sm shrink-0 overflow-hidden">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.title}
                          className="w-full h-full object-contain aspect-square"
                        />
                      ) : (
                        <item.icon className="w-8 h-8 text-nursing-green" />
                      )}
                    </div>
                    <h3 className="font-bold text-base text-foreground font-heading mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to action */}
          <div className="bg-secondary/70 border border-border rounded-3xl p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-nursing-navy font-heading">
                Ready to Join Grace College of Nursing?
              </h3>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                Explore admissions details or submit your online application form for 2026-27 batch.
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
                to="/admissions"
                className="bg-card hover:bg-secondary text-foreground font-bold px-6 py-3 rounded-xl text-sm border border-border transition-all"
              >
                Admissions Guide
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
