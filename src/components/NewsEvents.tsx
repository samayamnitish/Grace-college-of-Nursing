import { Calendar, Clock, ArrowRight, Zap, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import certificateEvent from "@/assets/certificate-event.jpg";
import relievingCeremony from "@/assets/relieving-ceremony.jpg";
import admissionsPoster from "@/assets/admissions-2026-poster.jpg";
import groupPhoto1 from "@/assets/group-photo-1.jpg";

const NewsEvents = () => {
  const newsItems = [
    {
      title: "Admissions Open for B.Sc. Nursing 2026 Batch",
      date: "2026-08-01",
      type: "Admission",
      image: admissionsPoster,
      description: "Applications open for 4-Year B.Sc. Nursing program. Affiliated to Dr. N.T.R. University of Health Sciences. NEET-UG & Management Quota available.",
      isNew: true
    },
    {
      title: "Degree Certificate Distribution & Honour Ceremony",
      date: "2024-05-10",
      type: "Event",
      image: certificateEvent,
      description: "Special academic convocation and certificate distribution ceremony by society management to successful nursing graduates.",
      isNew: true
    },
    {
      title: "Relieving Ceremony of 8th Batch B.Sc. Nursing",
      date: "2022-04-06",
      type: "Ceremony",
      image: relievingCeremony,
      description: "Graduation and relieving ceremony for the 8th Batch B.Sc. Nursing (2017-2021) cadets with guest honors.",
      isNew: false
    },
    {
      title: "Annual Nursing Day Celebration & Leadership Gathering",
      date: "2024-03-15",
      type: "Celebration",
      image: groupPhoto1,
      description: "Vibrant annual gathering of faculty, student nurses, and Rev. Dr. S.S. John, Founder of Sara Grace Educational Society.",
      isNew: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Admission": return "bg-college-green/10 text-college-green border-college-green/20";
      case "Ceremony": return "bg-college-gold/20 text-yellow-800 border-college-gold/30";
      case "Event": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Celebration": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default: return "bg-secondary text-foreground border-border";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-20 bg-background relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-college-green/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-14">
          <Badge className="bg-college-green/10 text-college-green border border-college-green/20 mb-4 text-xs px-5 py-2 uppercase tracking-widest font-bold rounded-full">
            Campus Dispatch & Events
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 font-heading tracking-tight">
            News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-college-green to-college-gold">Milestone Events</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Stay updated with major announcements, graduation ceremonies, and academic highlights at Grace College of Nursing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <Card key={index} className="group relative bg-card border border-border/70 hover:border-college-green/40 transition-all duration-300 rounded-3xl p-6 sm:p-8 hover:shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={`border ${getTypeColor(item.type)} px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}>
                      {item.type}
                    </Badge>
                    {item.isNew && (
                      <Badge className="bg-red-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider border-0 rounded-full flex items-center gap-1 shadow-sm">
                        <Zap className="w-3 h-3 fill-current" /> Live
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 text-college-green" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-college-green transition-colors font-heading leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-border/60">
                <a href="#gallery" className="inline-flex items-center font-bold text-college-green hover:text-college-gold transition-colors text-sm group/btn">
                  View Event Photos
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Redesigned Clean Light CTA Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 md:p-12 text-center bg-gradient-to-r from-college-green to-emerald-700 text-white shadow-xl border border-white/20 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-4 bg-white/20 backdrop-blur-md text-white px-5 py-1.5 rounded-full border border-white/30 text-xs font-bold uppercase tracking-widest">
              <Clock className="w-4 h-4" /> Admissions Open — 2026 Batch
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-4 text-white font-heading tracking-tight drop-shadow-sm">
              Apply Now for 2026 B.Sc. Nursing
            </h3>
            <p className="mb-8 text-sm md:text-base text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
              4-Year Degree Program affiliated to Dr. N.T.R. University of Health Sciences. Seats open under Convener (NEET-UG) and Management Quotas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#admissions"
                className="bg-white text-college-green hover:bg-slate-100 transition-all shadow-md font-bold px-8 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                View Admission Details <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:9492644555"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-all font-bold px-8 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Helpline: 9492644555
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;