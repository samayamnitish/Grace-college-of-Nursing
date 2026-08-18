import { Link } from "react-router-dom";
import { Award, ShieldCheck, Stethoscope, Compass, Sparkles, ArrowRight, Heart, Users, Building2, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import founderImage from "@/assets/founder.jpg";

export default function About() {
  const whyChooseUs = [
    {
      title: "Clinical Hospital Partnership",
      desc: "Daily hands-on bedside practical training at the Government Teaching General Hospital, Machilipatnam.",
      icon: Stethoscope,
    },
    {
      title: "State-of-the-Art Laboratories",
      desc: "Dedicated Anatomy, Community Health, Nutrition & Dietetics, and Nursing Foundations simulation labs.",
      icon: Building2,
    },
    {
      title: "Premier Statutory Recognition",
      desc: "Approved by INC New Delhi, A.P. Nursing Council, Govt. of A.P., and affiliated to Dr. N.T.R. UHS.",
      icon: ShieldCheck,
    },
    {
      title: "Comfortable Residential Hostel",
      desc: "Secure campus hostel with a 60-seat hygienic dining hall and an in-house RO mineral water plant.",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 sm:px-8 relative z-10 space-y-16">
        {/* Main About Intro Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 bg-nursing-green/10 text-nursing-green border border-nursing-green/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> About the Institution
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-nursing-navy font-heading tracking-tight leading-[1.15]">
              Nurturing Passion Into <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nursing-green to-college-gold">
                Distinguished Healthcare Leadership
              </span>
            </h2>

            <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4 font-medium">
              <p>
                Established under the benevolent aegis of <strong className="text-foreground">Sara Grace Educational Society</strong>, Grace College of Nursing has been a beacon of exemplary paramedical and nursing education in Machilipatnam, Krishna District.
              </p>
              <p>
                Since our founding in 1987, we have graduated thousands of disciplined healthcare officers equipped with clinical precision, ethical integrity, and unwavering empathy for human life.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-nursing-green hover:bg-nursing-green/90 text-white font-bold px-6 py-3 rounded-xl shadow-md text-xs sm:text-sm transition-all"
              >
                Read Institutional History <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/management"
                className="inline-flex items-center gap-2 bg-card hover:bg-secondary text-foreground font-bold px-6 py-3 rounded-xl border border-border text-xs sm:text-sm transition-all"
              >
                Executive Committee
              </Link>
            </div>
          </div>

          {/* Right Highlights & Founder Message Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-nursing-navy via-[#0d3156] to-nursing-green text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden space-y-5">
            <div className="flex items-center gap-4 border-b border-white/15 pb-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-college-gold shrink-0 shadow-lg bg-slate-800">
                <img
                  src={founderImage}
                  alt="Bishop Rev. Dr. S.S. John"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <Badge className="bg-college-gold text-black font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  Founder's Message
                </Badge>
                <h3 className="text-xl font-black text-white font-heading">
                  Rev. Dr. S.S. John
                </h3>
                <p className="text-xs text-college-gold font-semibold">
                  Founder &amp; Spiritual Leader
                </p>
              </div>
            </div>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium italic">
              "Nursing is a sacred calling that blends healthcare science with unconditional human compassion. Our mission is to prepare nurses who serve communities with clinical excellence and moral courage."
            </p>

            <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs font-bold text-college-gold">
              <span>Dr. N.T.R. UHS Affiliated</span>
              <span>INC New Delhi Approved</span>
            </div>
          </div>
        </div>

        {/* Why Choose Grace College of Nursing Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-2">
              Distinctive Advantages
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-nursing-navy font-heading tracking-tight">
              Why Choose Grace College of Nursing?
            </h2>
            <p className="text-muted-foreground text-sm font-medium mt-1">
              Engineered to transform ambitious students into globally competent nursing professionals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <Card key={idx} className="bg-card border-border/80 rounded-2xl shadow-md hover:shadow-xl hover:border-nursing-green/40 transition-all">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-nursing-green/10 text-nursing-green flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Founder Message Card */}
        <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-0 items-center">
            <div className="md:col-span-7 p-8 sm:p-10 space-y-4">
              <span className="inline-block bg-nursing-green/10 text-nursing-green px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-nursing-green/20">
                Founder Message
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-nursing-navy font-heading tracking-tight">
                Rev. Dr. S.S. John
              </h3>
              <p className="text-xs font-bold text-college-gold uppercase tracking-wider -mt-2">
                Bishop Apostolic Church • Founder, Sara Grace Educational Society
              </p>
              <div className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-medium space-y-3">
                <p>
                  "Grace School of Nursing was started in 1987 with the vision to impart elite General Nursing training to youth from socially and economically deprived backgrounds. Upgraded to collegiate status in 2010, our institution stands firm on the principles of compassion, integrity, and clinical excellence."
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="text-xs font-bold text-nursing-green hover:underline inline-flex items-center gap-1.5"
                >
                  Learn more about our Founder & Leadership <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 relative h-72 md:h-full min-h-[300px] bg-slate-900">
              <img
                src={founderImage}
                alt="Rev. Dr. S.S. John"
                className="w-full h-full object-cover object-top filter contrast-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}