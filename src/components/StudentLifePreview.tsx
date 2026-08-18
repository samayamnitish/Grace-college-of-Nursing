import { Link } from "react-router-dom";
import { Heart, Trophy, Users, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StudentLifePreview() {
  const highlights = [
    {
      title: "Community Health Outreach",
      image: "/images/community_lab.png",
      tag: "Social Impact",
      desc: "Regular rural health camps, geriatric checkups, and child immunization drives in surrounding villages.",
    },
    {
      title: "Cultural Convocations & Celebrations",
      image: "/images/campus_life_1.jpg",
      tag: "Traditions & Joy",
      desc: "Annual Batch Relieving ceremonies, International Nurses Day, and traditional cultural festivals.",
    },
    {
      title: "Clinical Hospital Postings",
      image: "/images/clinical_post_1.jpg",
      tag: "Hands-on Practice",
      desc: "Real hospital ward rotations honing clinical intuition, procedural mastery, and patient comfort care.",
    },
  ];

  return (
    <section id="student-life-preview" className="py-20 bg-background relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <Badge className="bg-college-gold/20 text-yellow-900 border-college-gold/30 mb-3 px-3.5 py-1 uppercase tracking-widest font-bold rounded-full text-xs">
              Vibrant Campus Life
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-nursing-navy font-heading tracking-tight">
              Student Life & Community Engagement
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-medium mt-2 max-w-2xl">
              Fostering professional excellence, ethical camaraderie, and meaningful community service.
            </p>
          </div>

          <Link
            to="/student-life"
            className="inline-flex items-center gap-2 text-sm font-bold text-nursing-green hover:text-college-gold transition-colors shrink-0"
          >
            Explore Student Life <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-nursing-green/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/95 text-nursing-navy font-bold text-xs px-2.5 py-0.5 shadow">
                      {item.tag}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <h3 className="text-xl font-bold text-nursing-navy font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  to="/student-life"
                  className="text-xs font-bold text-nursing-green hover:underline inline-flex items-center gap-1"
                >
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
