import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Calendar, FileText, CheckCircle, UserCheck, Download, Phone, ArrowRight, Sparkles, GraduationCap, Award, Eye } from "lucide-react";
import admissionsPoster from "@/assets/admissions-2026-poster.jpg";

const Admissions = () => {
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  const admissionSteps = [
    {
      step: 1,
      title: "Submit Profile",
      description: "Submit 10+2 marks & NEET-UG score details",
      icon: FileText,
      status: "open"
    },
    {
      step: 2,
      title: "Quota Verification",
      description: "Convener (NEET-UG) or Management Quota review",
      icon: UserCheck,
      status: "upcoming"
    },
    {
      step: 3,
      title: "Counseling & Interview",
      description: "Direct counseling interaction with senior faculty",
      icon: Calendar,
      status: "upcoming"
    },
    {
      step: 4,
      title: "Final Admission",
      description: "Secure your seat in 4-Year B.Sc. Nursing",
      icon: CheckCircle,
      status: "upcoming"
    }
  ];

  const quotaDetails = [
    {
      title: "Counselling (Convener Quota)",
      badge: "NEET-UG Mandatory",
      course: "B.Sc., Nursing Degree 4 Years",
      eligibility: "Candidates must have appeared for NEET-UG conducted by the National Testing Agency (NTA).",
      color: "from-blue-600/10 to-college-green/10 border-college-green/30"
    },
    {
      title: "Management Quota",
      badge: "Direct Admission",
      course: "B.Sc., Nursing Degree 4 Years",
      eligibility: "Candidates must have passed Intermediate (10+2) or equivalent with Science Group: Physics, Chemistry, Biology. Minimum 45% aggregate marks.",
      color: "from-college-gold/10 to-orange-500/10 border-college-gold/30"
    }
  ];

  const importantDates = [
    { event: "2026 Admissions Open", date: "Actively Recruiting", status: "active" },
    { event: "Management Seat Allocation", date: "In Progress", status: "active" },
    { event: "Convener Counseling Round", date: "Post NEET-UG Results", status: "upcoming" },
    { event: "Orientation & Academic Session", date: "Coming Soon", status: "upcoming" }
  ];

  const documents = [
    "Academic Transcripts (10th & 12th Standard)",
    "NEET-UG Scorecard / Hall Ticket",
    "Transfer & Migration Certificates",
    "Conduct Verification Certificate",
    "Category / Caste Certificate (if applicable)",
    "Aadhar Card / Identity Proof",
    "Recent Passport Size Photographs (8 Copies)"
  ];

  return (
    <section id="admissions" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-college-green/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-college-gold/10 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-college-gold/10 text-college-gold border-college-gold/20 mb-6 text-sm px-6 py-2 uppercase tracking-widest font-black rounded-full">
            Admissions Open 2026
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 font-heading tracking-tight">
            B.Sc. Nursing <span className="text-transparent bg-clip-text bg-gradient-to-r from-college-green to-college-gold">2026 Batch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Build Your Career in Nursing — Serve Humanity, Save Lives! 4-Year Degree Program affiliated to Dr. N.T.R. University of Health Sciences, Vijayawada.
          </p>
        </div>

        {/* Featured 2026 Admissions Banner & Quota Overview Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Official Poster Card */}
          <Card className="lg:col-span-5 bg-card/60 backdrop-blur-xl border border-border/50 shadow-2xl rounded-[2.5rem] overflow-hidden group flex flex-col justify-between">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/5 cursor-pointer" onClick={() => setIsPosterOpen(true)}>
              <img
                src={admissionsPoster}
                alt="Admissions Open 2026 B.Sc Nursing Grace College of Nursing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-red-500 text-white font-bold px-4 py-1 rounded-full uppercase text-xs animate-pulse">
                  Official 2026 Poster
                </Badge>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="w-16 h-16 rounded-full bg-college-green/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-md">
                  <Eye className="w-8 h-8" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <p className="text-xs font-bold text-college-gold uppercase tracking-wider mb-1">Click to view full poster</p>
                <h3 className="text-2xl font-bold font-heading">Admissions Open — 2026</h3>
                <p className="text-xs text-white/80 font-medium">B.Sc. Nursing 4-Year Degree Program</p>
              </div>
            </div>
          </Card>

          {/* Quotas & Recognition Info */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="bg-card/60 backdrop-blur-xl border border-border/50 p-8 md:p-10 rounded-[2.5rem] shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-college-green" />
                <h3 className="text-3xl font-bold text-foreground font-heading">Quota Eligibility Criteria</h3>
              </div>

              <div className="grid gap-6">
                {quotaDetails.map((quota, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-r ${quota.color} border border-border/50 shadow-sm`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-xl font-bold text-foreground font-heading">{quota.title}</h4>
                      <Badge className="bg-college-green text-white font-bold text-xs px-3 py-1 rounded-full">{quota.badge}</Badge>
                    </div>
                    <p className="text-xs font-bold text-college-gold uppercase tracking-wider mb-2">{quota.course}</p>
                    <p className="text-muted-foreground font-medium text-sm leading-relaxed">{quota.eligibility}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Helpline Bar */}
            <div className="bg-gradient-to-br from-nursing-navy to-[#0a2540] text-white p-8 rounded-[2.5rem] border border-nursing-navy/50 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-college-gold font-bold text-xs uppercase tracking-widest mb-1">
                  <Phone className="w-4 h-4" /> Admission Helplines
                </div>
                <h4 className="text-2xl font-black font-heading text-white">Call Direct Representatives</h4>
                <p className="text-xs text-white/70 font-medium mt-1">Door No: 3/39, Pothepalli, Machilipatnam, Krishna Dist., AP</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:9492644555" className="bg-college-green hover:bg-college-green/90 text-white font-bold px-6 py-3 rounded-2xl text-center shadow-lg transition-all text-sm">
                  9492644555
                </a>
                <a href="tel:8500254345" className="bg-college-gold hover:bg-college-gold/90 text-black font-bold px-6 py-3 rounded-2xl text-center shadow-lg transition-all text-sm">
                  8500254345
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Admission Steps */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-foreground font-heading mb-12">4-Step Enrollment Framework</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-[4.5rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-college-green/30 via-college-gold/30 to-border z-0"></div>

            {admissionSteps.map((step, index) => (
              <div key={index} className="relative z-10 text-center group">
                <div className={`w-28 h-28 mx-auto rounded-3xl mb-8 flex items-center justify-center transition-all duration-500 shadow-xl relative
                  ${step.status === 'open' ? 'bg-gradient-to-br from-college-green to-college-gold group-hover:shadow-[0_0_30px_rgba(0,180,216,0.5)] group-hover:-translate-y-2' :
                    step.status === 'upcoming' ? 'bg-card border border-border/50 group-hover:border-college-green/30 group-hover:shadow-[0_0_30px_rgba(0,180,216,0.1)] group-hover:-translate-y-2' : 'bg-muted'
                  }`}>
                  <step.icon className={`w-10 h-10 ${step.status === 'open' ? 'text-white' : 'text-college-green/50 group-hover:text-college-green transition-colors'}`} />
                  <div className={`absolute -bottom-3 -right-3 w-10 h-10 rounded-full border-[4px] border-background flex items-center justify-center text-sm font-black shadow-lg
                    ${step.status === 'open' ? 'bg-white text-college-green dark:bg-card dark:text-college-green' :
                      step.status === 'upcoming' ? 'bg-secondary text-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                    {step.step}
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-foreground mb-3 font-heading">
                  {step.title}
                </h4>
                <p className="text-muted-foreground font-medium px-4 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Important Dates */}
          <Card className="lg:col-span-7 bg-card/60 backdrop-blur-xl border border-border/50 shadow-2xl rounded-[2rem] overflow-hidden group">
            <div className="p-8 md:p-10 relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-college-green/10 flex items-center justify-center text-college-green">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-foreground font-heading">2026 Admission Timelines</h3>
              </div>

              <div className="space-y-4">
                {importantDates.map((date, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-secondary/50 border border-border/50 hover:border-college-green/30 transition-colors gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]
                        ${date.status === 'active' ? 'bg-college-green text-college-green animate-pulse' : 'bg-college-gold/50 text-college-gold/50'
                        }`}
                      ></div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg">{date.event}</h4>
                        <p className="text-sm font-semibold text-muted-foreground mt-0.5">{date.date}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border-2
                      ${date.status === 'active' ? 'border-college-green text-college-green bg-college-green/5' : 'border-college-gold/30 text-college-gold'
                      }`}>
                      {date.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Required Documents */}
          <Card className="lg:col-span-5 bg-card/60 backdrop-blur-xl border border-border/50 shadow-2xl rounded-[2rem] overflow-hidden flex flex-col">
            <div className="p-8 md:p-10 flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-college-gold/10 flex items-center justify-center text-college-gold">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-foreground font-heading">Required Documents</h3>
              </div>

              <div className="space-y-4 flex-1 pl-2">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 group/doc cursor-default">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/doc:bg-college-green group-hover/doc:text-white transition-colors">
                      <CheckCircle className="w-3.5 h-3.5 text-muted-foreground group-hover/doc:text-white" />
                    </div>
                    <span className="text-foreground/80 font-medium text-sm leading-relaxed group-hover/doc:text-college-green transition-colors">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-nursing-green via-emerald-700 to-college-gold rounded-3xl p-6 sm:p-8 text-center text-white relative overflow-hidden shadow-xl border border-white/20">
          <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 font-heading tracking-tight drop-shadow-sm">
              Apply Now for 2026 B.Sc. Nursing
            </h3>
            <p className="text-xs sm:text-sm mb-5 text-white/95 font-medium leading-relaxed">
              Limited Seats Available. Contact our admission officers today to reserve your seat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:9492644555"
                className="bg-white text-nursing-navy hover:bg-slate-100 transition-all shadow-md h-11 px-6 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-nursing-green" /> Call 9492644555
              </a>
              <a
                href="tel:8500254345"
                className="bg-black/35 hover:bg-black/50 text-white transition-all shadow-md h-11 px-6 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border border-white/30"
              >
                <Phone className="w-4 h-4" /> Call 8500254345
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Poster Preview Modal */}
      <Dialog open={isPosterOpen} onOpenChange={setIsPosterOpen}>
        <DialogContent className="max-w-4xl p-2 bg-black/95 border-0 rounded-3xl">
          <DialogTitle className="sr-only">Admissions 2026 Official Poster</DialogTitle>
          <img src={admissionsPoster} alt="Official 2026 Admissions Poster" className="w-full h-auto max-h-[90vh] object-contain rounded-2xl" />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Admissions;