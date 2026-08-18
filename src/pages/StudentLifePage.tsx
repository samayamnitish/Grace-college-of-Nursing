import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import {
  Heart,
  Home,
  Users,
  Sparkles,
  Trophy,
  Activity,
  Smile,
  ShieldCheck,
  Stethoscope,
  Calendar,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StudentLifePage() {
  const sections = [
    {
      title: "Hostel Life & Campus Living",
      image: "/images/hostel_dining.png",
      badge: "Campus Residence",
      description: "Our residential hostel provides a supportive, safe, and home-like atmosphere for student nurses. Students enjoy disciplined study hours, clean living quarters, 24/7 security, recreation facilities, and nutritious balanced meals in a 60-seat dining hall with pure RO drinking water.",
      points: [
        "Spacious, well-ventilated rooms with study tables & storage",
        "Hygienic kitchen serving wholesome, nutritious meals",
        "Dedicated warden supervision & 24/7 campus security",
        "Common study lounges and indoor recreation spaces",
      ],
    },
    {
      title: "Community Outreach & Rural Health Camps",
      image: "/images/community_lab.png",
      badge: "Public Health Advocacy",
      description: "Service to humanity is at the core of Grace Nursing. Students regularly organize and participate in free rural health checkup camps, geriatric screenings, child immunization drives, and disease prevention workshops in remote villages around Krishna District.",
      points: [
        "Free door-to-door health surveying and vitals screening",
        "Maternal and child nutrition awareness workshops",
        "Seasonal epidemic and vector-borne disease awareness campaigns",
        "First aid demonstrations for village schools and self-help groups",
      ],
    },
    {
      title: "Clinical Postings & Hospital Rotations",
      image: "/images/clinical_post_1.jpg",
      badge: "Hospital Postings",
      description: "Under the mentorship of senior clinical instructors and medical specialists, student nurses rotate through multi-specialty wards, emergency casualty, operation theatres, pediatric units, and intensive care at Government Teaching General Hospital, Machilipatnam.",
      points: [
        "Hands-on bedside medication administration and wound care",
        "Post-operative recovery monitoring & surgical assist training",
        "Pediatric and neonatal intensive care observations",
        "Primary Health Center (PHC) field postings at Guduru and Pedana",
      ],
    },
    {
      title: "Cultural Activities & Relieving Ceremonies",
      image: "/images/campus_life_1.jpg",
      badge: "Campus Celebrations",
      description: "Campus life is vibrant with International Nurses Day celebrations, traditional festivals, Lamp Lighting ceremonies, Fresher welcomes, and grand Batch Relieving & Honours convocations celebrating student achievements.",
      points: [
        "International Nurses Day & Florence Nightingale Lamp Lighting Ceremony",
        "Annual Batch Relieving Convocation and Certificate Distribution",
        "Traditional cultural festivals (Sankranti, Christmas, Ugadi)",
        "Inter-collegiate healthcare debates, quizzes, and drama skits",
      ],
    },
    {
      title: "Sports, Fitness & Recreational Activities",
      image: "/images/campus_life_2.jpg",
      badge: "Physical Wellness",
      description: "Physical vitality and mental resilience are critical for healthcare professionals. We encourage active participation in badminton, volleyball, athletics, table tennis, yoga sessions, and annual sports meets.",
      points: [
        "Annual Inter-batch sports tournaments and athletic competitions",
        "Yoga and mindfulness meditation workshops for stress relief",
        "Indoor games (chess, carroms, table tennis) in recreation rooms",
        "Team building outdoor activities and fitness challenges",
      ],
    },
    {
      title: "Student Clubs & Professional Associations",
      image: "/images/faculty_students.jpg",
      badge: "Leadership Development",
      description: "Students participate in Student Nurses' Association (SNA) chapters, Red Ribbon Youth Clubs, disaster relief task forces, and academic journal clubs that foster leadership, teamwork, and ethical civic responsibility.",
      points: [
        "Student Nurses' Association (SNA) active collegiate unit",
        "Red Ribbon Club for blood donation and HIV/AIDS awareness",
        "Green Campus & Environmental Sanitation Committee",
        "Peer mentorship and academic tutoring initiatives",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <BreadcrumbNav
          badge="Campus Life"
          title="Student Life & Community Engagement"
          subtitle="Experience a vibrant, holistic campus atmosphere blending intensive clinical training with cultural celebrations, sports, and rural community outreach."
          items={[{ label: "Student Life" }]}
        />

        <div className="container mx-auto px-4 sm:px-8 py-12 space-y-16">
          {/* Top Intro Section */}
          <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-lg text-center max-w-4xl mx-auto space-y-4">
            <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full">
              Holistic Nursing Cadet Formation
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-nursing-navy font-heading tracking-tight">
              Life Beyond the Classroom
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
              At Grace College of Nursing, student life is characterized by camaraderie, compassionate service, cultural joy, and professional discipline. Our campus offers students a welcoming environment where lifelong friendships and exemplary nursing careers are forged.
            </p>
          </div>

          {/* Student Life Grid Modules */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:border-nursing-green/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <Badge className="bg-white/95 backdrop-blur-md text-nursing-navy font-bold text-xs px-3 py-1 shadow">
                        {sec.badge}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 space-y-3.5">
                    <h3 className="text-xl font-bold text-nursing-navy font-heading">
                      {sec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                      {sec.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-border">
                      {sec.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs font-medium text-foreground/85">
                          <CheckCircle className="w-3.5 h-3.5 text-nursing-green shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-nursing-navy via-[#0d3156] to-nursing-green rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl space-y-6">
            <h3 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
              Join Our Thriving Student Community
            </h3>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
              Explore admissions for 2026-27 or view our campus gallery to see student nurses in action.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Link
                to="/apply"
                className="bg-college-gold hover:bg-college-gold/90 text-black font-bold px-8 py-3.5 rounded-xl shadow transition-all text-sm flex items-center justify-center gap-2"
              >
                Apply Online Form <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/gallery"
                className="bg-white/15 hover:bg-white/25 text-white font-bold px-8 py-3.5 rounded-xl border border-white/20 transition-all text-sm flex items-center justify-center gap-2"
              >
                View Campus Gallery
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
