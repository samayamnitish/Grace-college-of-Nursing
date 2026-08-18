import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import {
  UserCheck,
  CheckCircle,
  FileText,
  Calendar,
  CreditCard,
  GraduationCap,
  HelpCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronDown,
  Sparkles,
  Download
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import admissionsPoster from "@/assets/admissions-2026-poster.jpg";

export default function AdmissionsPage() {
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const quotas = [
    {
      title: "Convener Quota (Counselling Quota)",
      subtitle: "Government Centralised Counselling by Dr. N.T.R. UHS",
      badge: "NEET-UG / AP-NCET Mandatory",
      badgeColor: "bg-blue-600/10 text-blue-700 border-blue-600/20",
      description: "Candidates seeking admission under Convener Quota must have appeared for NEET-UG conducted by NTA or state entrance notifications and qualified the minimum cut-off percentile.",
      points: [
        "Qualified in Intermediate (10+2) with Physics, Chemistry & Biology (PCB).",
        "Valid NEET-UG rank card / AP-NCET registration.",
        "Allotment conducted through Dr. N.T.R. UHS online counselling portal.",
      ],
    },
    {
      title: "Management Quota (Institutional Merit)",
      subtitle: "Direct Institutional Admission at College Office",
      badge: "Direct Admission Open",
      badgeColor: "bg-college-gold/20 text-yellow-900 border-college-gold/30",
      description: "Candidates seeking admission under Management Quota can apply directly to the college administration on the basis of Intermediate (10+2) Science group marks.",
      points: [
        "Passed Intermediate (10+2) with Science Group: Physics, Chemistry & Biology.",
      ],
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Submit Online Application",
      desc: "Complete the online B.Sc. Nursing application form with academic marks and basic identification details.",
      icon: FileText,
    },
    {
      step: "02",
      title: "Document Verification",
      desc: "Submit original/photocopies of 10th, Intermediate, Aadhaar, Transfer, and Category certificates for verification.",
      icon: CheckCircle,
    },
    {
      step: "03",
      title: "Quota & Merit Counseling",
      desc: "Attend counseling round (Convener via Dr. NTR UHS / Management direct interaction with faculty).",
      icon: UserCheck,
    },
    {
      step: "04",
      title: "Seat Confirmation",
      desc: "Complete fee payment and secure admission into the 4-Year B.Sc. Nursing program.",
      icon: GraduationCap,
    },
  ];

  const documents = [
    "S.S.C. / 10th Standard Marks Memo & Date of Birth Proof",
    "Intermediate (10+2) Marks Memo and Pass Certificate",
    "Transfer Certificate (T.C.) & Study / Conduct Certificate (6th to Intermediate)",
    "AP-NCET / NEET-UG Hall Ticket & Rank Card (if applicable)",
    "Aadhaar Card photocopies of Candidate, Father, and Mother",
    "Caste Certificate & Income Certificate (from Meeseva / Village Secretariat)",
    "AP Rice Card Copy (for applicable welfare schemes)",
    "Mother's Bank Account Passbook Copy (for fee reimbursement scholarship)",
    "Five (5) Recent Passport Size Photographs",
  ];

  const faqs = [
    {
      q: "What is the duration of the B.Sc. Nursing program at Grace College of Nursing?",
      a: "The B.Sc. Nursing program is a 4-Year full-time undergraduate professional degree program comprising 8 semesters with clinical hospital postings and internship.",
    },
    {
      q: "Is Grace College of Nursing recognized by the Indian Nursing Council (INC)?",
      a: "Yes. Grace College of Nursing is recognized by the Indian Nursing Council (INC New Delhi), Andhra Pradesh Nursing Council, Government of Andhra Pradesh, and is affiliated to Dr. N.T.R. University of Health Sciences, Vijayawada.",
    },
    {
      q: "What are the eligibility criteria for Management Quota?",
      a: "For Management Quota, the candidate must have passed 10+2 or equivalent with Science subjects (Physics, Chemistry, and Biology) with a minimum aggregate of 45% (40% for SC/ST/BC categories) and attained 17 years of age.",
    },
    {
      q: "Where do students undergo clinical practical training?",
      a: "Students receive comprehensive clinical training at the Government Teaching General Hospital, Machilipatnam, along with field postings at Guduru and Pedana Primary Health Centers.",
    },
    {
      q: "Are hostel facilities available for outstation students?",
      a: "Yes. The college provides comfortable, secure hostel accommodations with hygienic dining facilities accommodating 60 students at a time, dedicated visitor rooms, and an in-house RO mineral water plant.",
    },
    {
      q: "How can I submit my application form?",
      a: "You can fill out the complete B.Sc. Nursing application online through our Online Application page (/apply), validate your information, print the PDF, and submit it with required attachments to our college office in Pothepalle, Machilipatnam.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <BreadcrumbNav
          badge="Admissions 2026-27"
          title="B.Sc. Nursing Admissions Module"
          subtitle="Explore quota criteria, NEET guidelines, fee structures, scholarship assistance, enrollment frameworks, and required documents."
          items={[{ label: "Admissions" }]}
        />

        <div className="container mx-auto px-4 sm:px-8 py-12 space-y-16">
          {/* Top Banner & Apply CTA */}
          <div className="bg-gradient-to-r from-nursing-green to-nursing-teal rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-left">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" /> Admissions Open — 2026 Batch
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
                Begin Your Healthcare Career with Grace Nursing
              </h2>
              <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                4-Year B.Sc. Nursing Degree program affiliated to Dr. N.T.R. University of Health Sciences. Seats available under Convener and Management Quotas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
              <Link
                to="/apply"
                className="bg-white text-nursing-green hover:bg-slate-100 font-bold px-8 py-3.5 rounded-xl text-center shadow-lg transition-all text-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" /> Apply Online Form
              </Link>
              <a
                href="tel:8500254345"
                className="bg-nursing-navy hover:bg-nursing-navy/90 text-white font-bold px-7 py-3.5 rounded-xl text-center shadow-lg transition-all text-sm flex items-center justify-center gap-2 border border-white/20"
              >
                <Phone className="w-4 h-4 text-college-gold" /> Call Helpline: 8500254345
              </a>
            </div>
          </div>

          {/* Quotas Section */}
          <section id="quotas" className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
                Seat Allocation
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-nursing-navy font-heading tracking-tight">
                Admission Quotas & Eligibility Criteria
              </h2>
              <p className="text-muted-foreground text-sm font-medium mt-2">
                Understand the eligibility parameters for both Government Counselling and Direct Management seats.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {quotas.map((quota, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-3xl p-8 shadow-lg flex flex-col justify-between space-y-6 hover:border-nursing-green/40 transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${quota.badgeColor}`}>
                        {quota.badge}
                      </span>
                      <span className="text-xs font-bold text-nursing-green">4-Year Degree</span>
                    </div>

                    <h3 className="text-2xl font-bold text-nursing-navy font-heading">
                      {quota.title}
                    </h3>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {quota.subtitle}
                    </p>
                    <p className="text-sm text-foreground/80 font-medium leading-relaxed">
                      {quota.description}
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-border">
                      {quota.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-foreground/85">
                          <CheckCircle className="w-4 h-4 text-nursing-green shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Link
                      to="/apply"
                      className="w-full inline-flex items-center justify-center gap-2 bg-secondary/80 hover:bg-nursing-green hover:text-white text-nursing-navy font-bold py-3 rounded-xl text-sm transition-all border border-border"
                    >
                      Apply Under This Quota <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* 4-Step Admission Process */}
          <section id="process" className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
                Roadmap
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-nursing-navy font-heading tracking-tight">
                4-Step Enrollment Process
              </h2>
              <p className="text-muted-foreground text-sm font-medium mt-2">
                A streamlined, transparent admissions pathway from application submission to seat confirmation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border p-6 rounded-3xl shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="text-3xl font-black text-nursing-green/20 font-heading mb-2">
                      {st.step}
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-nursing-green/10 text-nursing-green flex items-center justify-center mb-4">
                      <st.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground font-heading mb-2">
                      {st.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Required Documents Checklist */}
          <section id="documents" className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-lg">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 text-nursing-green font-bold text-xs uppercase tracking-widest mb-2">
                <FileText className="w-4 h-4" /> Checklist
              </div>
              <h2 className="text-3xl font-black text-nursing-navy font-heading tracking-tight">
                Required Documents for Admission
              </h2>
              <p className="text-muted-foreground text-sm font-medium mt-2">
                Candidates must present original certificates and three sets of self-attested photocopies during counseling verification.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-secondary/40 border border-border text-xs sm:text-sm font-medium"
                >
                  <CheckCircle className="w-4 h-4 text-nursing-green shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{doc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs Section */}
          <section id="faqs" className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
                Help Desk
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-nursing-navy font-heading tracking-tight">
                Frequently Asked Questions (FAQs)
              </h2>
              <p className="text-muted-foreground text-sm font-medium mt-2">
                Find answers to common queries regarding admissions, recognition, and clinical postings.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-nursing-navy hover:text-nursing-green transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-nursing-green" : ""
                          }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium border-t border-border/50 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Final Call to Action */}
          <div className="bg-gradient-to-r from-nursing-navy via-[#0d3156] to-nursing-green rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl space-y-6">
            <h3 className="text-3xl sm:text-4xl font-white font-heading tracking-tight">
              Ready to Submit Your Application?
            </h3>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
              Complete the official B.Sc. Nursing application online. Validate all fields and generate a printable PDF in minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Link
                to="/apply"
                className="bg-college-gold hover:bg-college-gold/90 text-black font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" /> Go to Online Application Form
              </Link>
              <a
                href="tel:8500254345"
                className="bg-white/15 hover:bg-white/25 text-white font-bold px-8 py-3.5 rounded-xl border border-white/20 transition-all text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call 8500254345
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
