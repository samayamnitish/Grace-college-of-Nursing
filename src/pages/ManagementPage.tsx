import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Users, Award, ShieldCheck, MapPin, Building2, UserCheck, HeartHandshake, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Member {
  sl: number;
  name: string;
  relation: string;
  designation: string;
  badgeColor: string;
  address: string;
  isKeyLeader?: boolean;
}

const committeeMembers: Member[] = [
  {
    sl: 1,
    name: "Samayam Esther",
    relation: "W/o. S.S. John",
    designation: "President",
    badgeColor: "bg-college-gold text-black font-extrabold",
    address: "Paschapuram, Malleswaram (post), Bantumilli (MD), Krishna District - 521324",
    isKeyLeader: true,
  },
  {
    sl: 2,
    name: "Ankana Lidiya",
    relation: "W/o. Vijaya Ratnam",
    designation: "Vice-President",
    badgeColor: "bg-nursing-green text-white font-bold",
    address: "Door No: 52-1-69/15/B, Palepu Musalayya St., Jagannadhapuram, Kakinada, E.G. District - 533002",
    isKeyLeader: true,
  },
  {
    sl: 3,
    name: "Samayam Saraswathi",
    relation: "W/o. Ramesh",
    designation: "Secretary & Correspondent",
    badgeColor: "bg-nursing-navy text-white font-bold",
    address: "Door No: 30-185-3, Malakpattanam, Machilipatnam - 521001, Krishna District",
    isKeyLeader: true,
  },
  {
    sl: 4,
    name: "Samayam Kalyan Kumar",
    relation: "S/o. Ramesh",
    designation: "Joint Secretary",
    badgeColor: "bg-nursing-teal text-white font-bold",
    address: "Door No: 30-185-3, Malakpattanam, Machilipatnam - 521001, Krishna District",
    isKeyLeader: true,
  },
  {
    sl: 5,
    name: "Vulli Joyce",
    relation: "W/o. Nagaiah Naidu",
    designation: "Treasurer",
    badgeColor: "bg-college-gold/20 text-yellow-950 font-bold border border-college-gold/40",
    address: "Door No: 74-9-7/1, 1st Cross Road, Patamata, Vijayawada, Krishna District - 520007",
    isKeyLeader: true,
  },
  {
    sl: 6,
    name: "Ankana Aditya",
    relation: "S/o. Vijay Ratnam",
    designation: "Executive Committee Member",
    badgeColor: "bg-secondary text-foreground font-semibold border border-border",
    address: "Door No: 52-1-69/15/B, Palepu Musalayya St., Jagannadhapuram, Kakinada, E.G. District - 533002",
  },
  {
    sl: 7,
    name: "Borra Ramesh",
    relation: "S/o. Amrutham",
    designation: "Executive Committee Member",
    badgeColor: "bg-secondary text-foreground font-semibold border border-border",
    address: "Door No: 26/295, Buttaipeta, Machilipatnam, Krishna District - 521001",
  },
  {
    sl: 8,
    name: "M. Swarnalatha Kumari",
    relation: "W/o. Surya Prakash",
    designation: "Executive Committee Member",
    badgeColor: "bg-secondary text-foreground font-semibold border border-border",
    address: "Door No: 8-171/3/2, Srinivas Nagar, Tadigadapa, Krishna District - 521137",
  },
  {
    sl: 9,
    name: "P. Veera Kumari",
    relation: "W/o. Satyanarayana",
    designation: "Executive Committee Member",
    badgeColor: "bg-secondary text-foreground font-semibold border border-border",
    address: "Paschapuram, Malleswaram (post), Krishna District - 521324",
  },
];

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <BreadcrumbNav
          badge="Society Governance"
          title="Management & Executive Committee"
          subtitle="Meet the governing leadership and Executive Committee members of Sara Grace Educational Society (SGES) for the year 2023-24."
          items={[{ label: "Management" }]}
        />

        <div className="container mx-auto px-4 sm:px-8 py-12 space-y-16">
          {/* Overview Banner */}
          <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-lg">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full">
                  Executive Committee 2023–24
                </Badge>
                <h2 className="text-3xl font-black text-nursing-navy font-heading tracking-tight leading-tight">
                  Sara Grace Educational Society Leadership
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  The Executive Committee oversees the strategic governance, financial stewardship, institutional compliance, and educational mission of Grace College of Nursing. Guided by the principles of service and social welfare, the committee ensures state-of-the-art infrastructure and ethical academic rigor.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-nursing-navy bg-secondary/60 p-3 rounded-xl border border-border">
                  <MapPin className="w-4 h-4 text-college-gold shrink-0" />
                  <span>Registered HQ: Door No: 3/39, Pothepalli, Machilipatnam - 521 002, Krishna District, Andhra Pradesh.</span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-gradient-to-br from-nursing-navy to-[#0d3156] text-white p-6 rounded-2xl shadow-md space-y-3 text-center">
                <ShieldCheck className="w-10 h-10 text-college-gold mx-auto" />
                <h3 className="font-bold text-lg font-heading text-white">Statutory Governance</h3>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  Committed to transparent administration and compliance with the Government of A.P., INC New Delhi, and Dr. N.T.R. UHS.
                </p>
              </div>
            </div>
          </div>

          {/* Key Executive Officers Section (5 Officers) */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-nursing-green font-bold text-xs uppercase tracking-widest mb-1">
                <Users className="w-4 h-4" /> Primary Governing Officers
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-nursing-navy font-heading tracking-tight">
                Principal Executive Officers
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {committeeMembers.filter((m) => m.isKeyLeader).map((member) => (
                <div
                  key={member.sl}
                  className="bg-card border border-border rounded-3xl p-6 shadow-md hover:shadow-xl hover:border-nursing-green/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-full bg-nursing-green/10 text-nursing-green font-black text-sm flex items-center justify-center">
                        #{member.sl}
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full ${member.badgeColor}`}>
                        {member.designation}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground font-heading mb-1">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-muted-foreground">
                        {member.relation}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/70 space-y-1 text-xs text-muted-foreground font-medium">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-college-gold shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{member.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General Executive Committee Members (4 Members) */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-nursing-green font-bold text-xs uppercase tracking-widest mb-1">
                <UserCheck className="w-4 h-4" /> Committee Board
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-nursing-navy font-heading tracking-tight">
                Executive Committee Members
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {committeeMembers.filter((m) => !m.isKeyLeader).map((member) => (
                <div
                  key={member.sl}
                  className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-nursing-green/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-full bg-secondary text-nursing-navy font-bold text-xs flex items-center justify-center">
                        #{member.sl}
                      </div>
                      <span className="text-[11px] font-semibold text-nursing-green bg-nursing-green/10 px-2.5 py-0.5 rounded-full">
                        E.C. Member
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-foreground font-heading mb-0.5">
                        {member.name}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground">
                        {member.relation}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-border/70 text-xs text-muted-foreground font-medium flex items-start gap-1.5">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-[11px] line-clamp-3">{member.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Board Banner */}
          <div className="bg-secondary/70 border border-border rounded-3xl p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-nursing-navy font-heading">
                Contact the Society Secretary & Correspondent
              </h3>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                For administrative communications, affiliations, and institutional inquiries.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                to="/contact"
                className="bg-nursing-green hover:bg-nursing-green/90 text-white font-bold px-6 py-3 rounded-xl text-sm shadow transition-all flex items-center gap-2"
              >
                Contact Society Office
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
