import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, GraduationCap, Building2, UserCheck, BookOpen, Phone, FileText, ChevronRight } from "lucide-react";

interface SearchItem {
  title: string;
  category: string;
  description: string;
  path: string;
  icon: any;
}

const searchableData: SearchItem[] = [
  {
    title: "B.Sc. Nursing (4-Year Degree)",
    category: "Academics",
    description: "4-Year undergraduate degree program affiliated to Dr. NTR University of Health Sciences.",
    path: "/academics",
    icon: GraduationCap,
  },
  {
    title: "8-Semester Syllabus & Examination Scheme",
    category: "Academics",
    description: "Full semester-wise course breakdown, internal marks, university exams, and grading scale.",
    path: "/academics",
    icon: BookOpen,
  },
  {
    title: "Examination Regulations & Attendance",
    category: "Academics",
    description: "80% theory/practical attendance, pass marks criteria, and clinical posting regulations.",
    path: "/academics",
    icon: FileText,
  },
  {
    title: "Online Application Form (B.Sc. Nursing)",
    category: "Admissions",
    description: "Fill, validate, and print standard admission application for 2026 batch.",
    path: "/apply",
    icon: FileText,
  },
  {
    title: "Admissions 2026 & Quota Eligibility",
    category: "Admissions",
    description: "Convener Quota (NEET-UG) and Management Quota (10+2 PCB 45%) guidelines.",
    path: "/admissions",
    icon: UserCheck,
  },
  {
    title: "Fee Structure & Scholarships",
    category: "Admissions",
    description: "Tuition breakdown, government fee reimbursement, and merit scholarships.",
    path: "/admissions",
    icon: UserCheck,
  },
  {
    title: "Nursing & Anatomy Laboratories",
    category: "Facilities",
    description: "Anatomy, Nutrition, Community Health, and Nursing Foundations demonstration labs.",
    path: "/facilities",
    icon: Building2,
  },
  {
    title: "Clinical Hospital Partnership",
    category: "Facilities",
    description: "Clinical practical postings at Government Teaching General Hospital, Guduru & Pedana PHCs.",
    path: "/facilities",
    icon: Building2,
  },
  {
    title: "Hostel & Dining Facilities",
    category: "Facilities",
    description: "Student residence, 60-seat dining hall, mineral RO water plant, and security.",
    path: "/facilities",
    icon: Building2,
  },
  {
    title: "Executive Committee & Leadership",
    category: "Management",
    description: "Sara Grace Educational Society committee members, President, Secretary & Correspondent.",
    path: "/management",
    icon: UserCheck,
  },
  {
    title: "Founder Rev. Dr. S.S. John",
    category: "About Us",
    description: "Founding legacy of Grace School & College of Nursing since 1987.",
    path: "/about",
    icon: GraduationCap,
  },
  {
    title: "Campus Visual Gallery",
    category: "Gallery",
    description: "Photo galleries of laboratories, clinical postings, ceremonies, and campus life.",
    path: "/gallery",
    icon: Building2,
  },
  {
    title: "Contact Office & WhatsApp QR",
    category: "Contact",
    description: "Address in Pothepalli, helpline phone numbers, email, and WhatsApp scan code.",
    path: "/contact",
    icon: Phone,
  },
];

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const filtered = query.trim() === ""
    ? searchableData.slice(0, 6)
    : searchableData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );

  const handleSelect = (path: string) => {
    onOpenChange(false);
    navigate(path);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden bg-card border-border shadow-2xl rounded-2xl">
        <DialogTitle className="sr-only">Search Grace College of Nursing</DialogTitle>
        <div className="flex items-center border-b border-border px-4 py-3 bg-secondary/30">
          <Search className="w-5 h-5 text-college-green mr-3 shrink-0" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, syllabus, admissions, facilities, management..."
            className="border-0 shadow-none focus-visible:ring-0 text-base bg-transparent p-0 placeholder:text-muted-foreground"
            autoFocus
          />
          <kbd className="hidden sm:inline-block pointer-events-none text-[10px] font-semibold bg-muted px-2 py-0.5 rounded border border-border text-muted-foreground">
            ESC
          </kbd>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground text-sm">
              No matching resources found for "{query}".
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item.path)}
                className="w-full text-left p-3 rounded-xl hover:bg-secondary/70 transition-colors flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-college-green/10 text-college-green flex items-center justify-center shrink-0 group-hover:bg-college-green group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground text-sm group-hover:text-college-green transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-college-gold/15 text-college-navy">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-college-green group-hover:translate-x-0.5 transition-all self-center shrink-0" />
              </button>
            ))
          )}
        </div>

        <div className="bg-secondary/40 border-t border-border px-4 py-2 text-xs text-muted-foreground flex justify-between items-center">
          <span>Quick search for Grace College of Nursing</span>
          <span>Press <kbd className="font-bold">Ctrl+K</kbd> to open anytime</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
