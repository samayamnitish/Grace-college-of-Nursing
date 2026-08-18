import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Clock,
  Award,
  ChevronDown,
  ChevronUp,
  FileSpreadsheet,
  AlertCircle,
  HelpCircle,
  FileText
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CourseRow {
  category: "Theory" | "Practical" | "Competency Assessment";
  slNo: string;
  course: string;
  internal: string;
  collegeExam: string;
  universityExam: string;
  hours: string;
  totalMarks: string;
}

interface SemesterData {
  semNumber: string;
  semTitle: string;
  description: string;
  rows: CourseRow[];
}

const semesters: SemesterData[] = [
  {
    semNumber: "I",
    semTitle: "First Semester",
    description: "Foundations of Human Biological Science, Behavioural Science & Core Nursing Concepts.",
    rows: [
      { category: "Theory", slNo: "1", course: "Communicative English", internal: "25", collegeExam: "25", universityExam: "—", hours: "2", totalMarks: "50" },
      { category: "Theory", slNo: "2", course: "Applied Anatomy & Applied Physiology", internal: "25", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "3", course: "Applied Sociology & Applied Psychology", internal: "25", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "4", course: "Nursing Foundations I", internal: "25", collegeExam: "—", universityExam: "—", hours: "—", totalMarks: "—" },
      { category: "Practical", slNo: "5", course: "Nursing Foundations I (Practical)", internal: "25", collegeExam: "—", universityExam: "—", hours: "—", totalMarks: "—" },
    ],
  },
  {
    semNumber: "II",
    semTitle: "Second Semester",
    description: "Biochemical Foundations, Nutrition & Dietetics, Informatics & Foundations Integration.",
    rows: [
      { category: "Theory", slNo: "1", course: "Applied Biochemistry and Applied Nutrition & Dietetics", internal: "25", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "2", course: "Nursing Foundations (I & II)", internal: "Sem I: 25 & Sem II: 25", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "3", course: "Health/Nursing Informatics & Technology", internal: "25", collegeExam: "25", universityExam: "—", hours: "2", totalMarks: "50" },
      { category: "Practical", slNo: "4", course: "Nursing Foundations (I & II Practical)", internal: "Sem I: 25 & Sem II: 25", collegeExam: "—", universityExam: "50", hours: "—", totalMarks: "100" },
    ],
  },
  {
    semNumber: "III",
    semTitle: "Third Semester",
    description: "Microbiology, Infection Control & Safety, Pharmacology I & Adult Health Nursing I.",
    rows: [
      { category: "Theory", slNo: "1", course: "Applied Microbiology and Infection Control including Safety", internal: "25", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "2", course: "Pharmacology I and Pathology I", internal: "25", collegeExam: "—", universityExam: "—", hours: "—", totalMarks: "—" },
      { category: "Theory", slNo: "3", course: "Adult Health Nursing I", internal: "25", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Practical", slNo: "4", course: "Adult Health Nursing I (Practical)", internal: "50", collegeExam: "—", universityExam: "50", hours: "—", totalMarks: "100" },
    ],
  },
  {
    semNumber: "IV",
    semTitle: "Fourth Semester",
    description: "Pharmacology & Pathology II, Genetics, Adult Health Nursing II & Professional Values.",
    rows: [
      { category: "Theory", slNo: "1", course: "Pharmacology & Pathology (I & II) and Genetics", internal: "Sem III: 25 & Sem IV: 25", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "2", course: "Adult Health Nursing II", internal: "25", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "3", course: "Professionalism, Ethics and Professional Values", internal: "25", collegeExam: "25", universityExam: "—", hours: "2", totalMarks: "50" },
      { category: "Practical", slNo: "4", course: "Adult Health Nursing II (Practical)", internal: "50", collegeExam: "—", universityExam: "50", hours: "—", totalMarks: "100" },
    ],
  },
  {
    semNumber: "V",
    semTitle: "Fifth Semester",
    description: "Child Health, Mental Health, Community Health Nursing I & Educational Technology.",
    rows: [
      { category: "Theory", slNo: "1", course: "Child Health Nursing I", internal: "25", collegeExam: "—", universityExam: "—", hours: "—", totalMarks: "—" },
      { category: "Theory", slNo: "2", course: "Mental Health Nursing I", internal: "25", collegeExam: "—", universityExam: "—", hours: "—", totalMarks: "—" },
      { category: "Theory", slNo: "3", course: "Community Health Nursing I (including Environmental Science & Epidemiology)", internal: "25", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "4", course: "Educational Technology / Nursing Education", internal: "25", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "5", course: "Introduction to Forensic Nursing and Indian Laws", internal: "25", collegeExam: "25", universityExam: "—", hours: "2", totalMarks: "50" },
      { category: "Practical", slNo: "6", course: "Child Health Nursing I (Practical)", internal: "25", collegeExam: "—", universityExam: "—", hours: "—", totalMarks: "—" },
      { category: "Practical", slNo: "7", course: "Mental Health Nursing I (Practical)", internal: "25", collegeExam: "—", universityExam: "—", hours: "—", totalMarks: "—" },
      { category: "Practical", slNo: "8", course: "Community Health Nursing I (Practical)", internal: "50", collegeExam: "—", universityExam: "50", hours: "—", totalMarks: "100" },
    ],
  },
  {
    semNumber: "VI",
    semTitle: "Sixth Semester",
    description: "Child Health & Mental Health Integrations, Nursing Leadership & Midwifery I.",
    rows: [
      { category: "Theory", slNo: "1", course: "Child Health Nursing I & II", internal: "50 (Sem V: 25 & Sem VI: 25)", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "2", course: "Mental Health Nursing I & II", internal: "50 (Sem V: 25 & Sem VI: 25)", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "3", course: "Nursing Management & Leadership", internal: "25", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "4", course: "Midwifery / Obstetrics & Gynecology I", internal: "25", collegeExam: "—", universityExam: "—", hours: "—", totalMarks: "—" },
      { category: "Practical", slNo: "5", course: "Child Health Nursing I & II (Practical)", internal: "50 (Sem V: 25 & Sem VI: 25)", collegeExam: "—", universityExam: "50", hours: "—", totalMarks: "100" },
      { category: "Practical", slNo: "6", course: "Mental Health Nursing I & II (Practical)", internal: "50 (Sem V: 25 & Sem VI: 25)", collegeExam: "—", universityExam: "50", hours: "—", totalMarks: "100" },
      { category: "Practical", slNo: "7", course: "Midwifery / Obstetrics & Gynecology I (Practical)", internal: "25", collegeExam: "—", universityExam: "—", hours: "—", totalMarks: "—" },
    ],
  },
  {
    semNumber: "VII",
    semTitle: "Seventh Semester",
    description: "Community Health Nursing II, Nursing Research & Statistics & Advanced OBG Midwifery.",
    rows: [
      { category: "Theory", slNo: "1", course: "Community Health Nursing II", internal: "25", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "2", course: "Nursing Research & Statistics", internal: "25", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Theory", slNo: "3", course: "Midwifery / Obstetrics and Gynecology (OBG) Nursing (I & II)", internal: "Sem VI: 25 & Sem VII: 25 (Verge)", collegeExam: "—", universityExam: "75", hours: "3", totalMarks: "100" },
      { category: "Practical", slNo: "4", course: "Community Health Nursing II (Practical)", internal: "50", collegeExam: "—", universityExam: "50", hours: "—", totalMarks: "100" },
      { category: "Practical", slNo: "5", course: "Midwifery / Obstetrics and Gynecology (OBG) Nursing (I & II Practical)", internal: "Sem VI: 25 & Sem VII: 25", collegeExam: "—", universityExam: "50", hours: "—", totalMarks: "100" },
    ],
  },
  {
    semNumber: "VIII",
    semTitle: "Eighth Semester",
    description: "Final Integrated Clinical Internship & Comprehensive Competency Assessment.",
    rows: [
      { category: "Competency Assessment", slNo: "1", course: "Comprehensive Clinical Competency Assessment", internal: "100", collegeExam: "—", universityExam: "100", hours: "—", totalMarks: "200" },
    ],
  },
];

const regulations = [
  "Applied Anatomy and Applied Physiology: 37 marks Applied Anatomy and 38 marks Applied Physiology.",
  "Applied Sociology and Applied Psychology: 37 marks Applied Sociology and 38 marks Applied Psychology.",
  "Applied Microbiology and Infection Control including Safety: 37 marks Applied Microbiology and 38 marks Infection Control including Safety.",
  "Applied Nutrition and Dietetics and Applied Biochemistry: 50 marks Applied Nutrition and Dietetics and 25 marks Biochemistry.",
  "Pharmacology, Genetics and Pathology: 38 marks Pharmacology, 25 marks Pathology and 12 marks Genetics.",
  "Nursing Research and Statistics: 55 marks Nursing Research and 20 marks Statistics.",
  "Minimum 80% attendance in theory and practical in each course/subject is required for appearing for examination.",
  "100% attendance in each practical clinical area is required before the award of degree.",
  "Minimum pass marks are 50% in each theory and practical paper separately, except English.",
  "English and elective modules have a minimum pass mark of 40%.",
  "The candidate has to pass theory and practical examinations separately in each paper.",
  "If a candidate fails either theory or practical, the candidate has to re-appear for both papers.",
  "The maximum period to complete the course successfully should not exceed 8 years.",
  "All practical examinations must be held in the respective clinical areas, with one internal and one external examiner jointly conducting the practical examination for each student.",
];

const gradingData = [
  { grade: "O — Outstanding", point: "10", percentage: "100%", standard: "Exceptional Distinction" },
  { grade: "A+ — Excellent", point: "9", percentage: "90–99.99%", standard: "First Class with Distinction" },
  { grade: "A — Very Good", point: "8", percentage: "80–89.99%", standard: "First Class" },
  { grade: "B+ — Good", point: "7", percentage: "70–79.99%", standard: "High Second Class" },
  { grade: "B — Above Average", point: "6", percentage: "60–69.99%", standard: "Second Class" },
  { grade: "C — Average (Pass)", point: "5", percentage: "50–59.99%", standard: "Minimum Pass for Nursing Courses" },
  { grade: "P — Pass", point: "4", percentage: "40–49.99%", standard: "Pass Standard for English & Electives" },
  { grade: "F — Fail", point: "0", percentage: "Below 40% / 50%", standard: "Re-examination Required" },
];

export default function AcademicsPage() {
  const [openSemesters, setOpenSemesters] = useState<number[]>([0, 1]); // default open first two

  const toggleSemester = (idx: number) => {
    setOpenSemesters((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const expandAll = () => {
    setOpenSemesters(semesters.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenSemesters([]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <BreadcrumbNav
          badge="Curriculum & Examination Portal"
          title="B.Sc. Nursing Academics & Syllabus"
          subtitle="Comprehensive 4-Year B.Sc. Nursing curriculum, semester-wise examination scheme, grading system, and academic regulations."
          items={[{ label: "Academics & Syllabus" }]}
        />

        <div className="container mx-auto px-4 sm:px-8 py-12">
          {/* Course Overview Banner */}
          <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-lg mb-14">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <Badge className="bg-nursing-green/10 text-nursing-green border-nursing-green/20 px-3.5 py-1 text-xs uppercase font-bold rounded-full">
                  Undergraduate Healthcare Degree
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-black text-nursing-navy font-heading tracking-tight">
                  Bachelor of Science in Nursing (B.Sc. Nursing)
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
                  The B.Sc. Nursing program at Grace College of Nursing is an intensive 4-Year (8 Semesters) full-time degree program designed according to the Indian Nursing Council (INC) syllabus and affiliated with Dr. N.T.R. University of Health Sciences, Vijayawada.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-nursing-navy">
                  <span className="flex items-center gap-1.5 bg-secondary/80 px-3.5 py-1.5 rounded-full border border-border">
                    <Clock className="w-4 h-4 text-nursing-green" /> Duration: 4 Years (8 Semesters)
                  </span>
                  <span className="flex items-center gap-1.5 bg-secondary/80 px-3.5 py-1.5 rounded-full border border-border">
                    <Award className="w-4 h-4 text-college-gold" /> Total Intake: 40 Seats
                  </span>
                  <span className="flex items-center gap-1.5 bg-secondary/80 px-3.5 py-1.5 rounded-full border border-border">
                    <GraduationCap className="w-4 h-4 text-nursing-green" /> Affiliation: Dr. NTR UHS
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-gradient-to-br from-nursing-navy to-[#0d3156] text-white p-6 rounded-2xl shadow-md text-center space-y-4">
                <h3 className="font-bold text-lg font-heading text-college-gold">
                  Enroll for 2026 Batch
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  Admissions are currently underway under Convener (NEET-UG) and Direct Management Quotas.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    to="/apply"
                    className="w-full bg-college-gold hover:bg-college-gold/90 text-black font-bold py-2.5 rounded-xl text-xs transition-all shadow"
                  >
                    Fill Online Application
                  </Link>
                  <Link
                    to="/admissions"
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 rounded-xl text-xs border border-white/20 transition-all"
                  >
                    View Admissions Module
                  </Link>
                </div>
              </div>
            </div>
          </div>



          {/* Section: Semester-wise Syllabus */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-nursing-green font-bold text-xs uppercase tracking-widest mb-1">
                  <BookOpen className="w-4 h-4" /> Academic Architecture
                </div>
                <h2 className="text-3xl font-black text-nursing-navy font-heading tracking-tight">
                  8-Semester Syllabus & Examination Scheme
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={expandAll}
                  className="text-xs font-bold border-border hover:bg-secondary rounded-xl"
                >
                  Expand All Semesters
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={collapseAll}
                  className="text-xs font-bold border-border hover:bg-secondary rounded-xl"
                >
                  Collapse All
                </Button>
              </div>
            </div>

            {/* Expandable Semester Cards */}
            <div className="space-y-6">
              {semesters.map((sem, idx) => {
                const isOpen = openSemesters.includes(idx);
                return (
                  <div
                    key={idx}
                    className="bg-card border border-border rounded-2xl shadow-md overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleSemester(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 bg-secondary/30 hover:bg-secondary/60 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-nursing-navy text-white flex items-center justify-center font-heading font-black text-lg shrink-0 shadow-sm">
                          {sem.semNumber}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-nursing-green uppercase tracking-wider">
                            Semester {sem.semNumber}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading">
                            {sem.semTitle}
                          </h3>
                          <p className="text-xs text-muted-foreground font-medium hidden sm:block mt-0.5">
                            {sem.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="hidden md:inline-flex bg-card text-xs font-bold">
                          {sem.rows.length} Courses
                        </Badge>
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground">
                          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="p-6 border-t border-border bg-card animate-in fade-in-50 duration-200">
                        <p className="text-xs text-muted-foreground font-medium sm:hidden mb-4">
                          {sem.description}
                        </p>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[760px] border-collapse border border-border text-xs sm:text-sm">
                            <thead>
                              <tr className="bg-nursing-navy text-white text-left font-bold">
                                <th className="border border-white/20 p-3 w-28">Category</th>
                                <th className="border border-white/20 p-3 w-16 text-center">Sl. No.</th>
                                <th className="border border-white/20 p-3">Course / Subject Name</th>
                                <th className="border border-white/20 p-3 text-center w-28">Internal Marks</th>
                                <th className="border border-white/20 p-3 text-center w-32">College Exam</th>
                                <th className="border border-white/20 p-3 text-center w-32">University Exam</th>
                                <th className="border border-white/20 p-3 text-center w-20">Hours</th>
                                <th className="border border-white/20 p-3 text-center w-24">Total Marks</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sem.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-secondary/40 transition-colors">
                                  <td className="border border-border p-3 font-bold text-nursing-green">
                                    {row.category}
                                  </td>
                                  <td className="border border-border p-3 text-center font-semibold">
                                    {row.slNo}
                                  </td>
                                  <td className="border border-border p-3 font-semibold text-foreground">
                                    {row.course}
                                  </td>
                                  <td className="border border-border p-3 text-center font-medium text-muted-foreground">
                                    {row.internal}
                                  </td>
                                  <td className="border border-border p-3 text-center font-medium text-muted-foreground">
                                    {row.collegeExam}
                                  </td>
                                  <td className="border border-border p-3 text-center font-medium text-muted-foreground">
                                    {row.universityExam}
                                  </td>
                                  <td className="border border-border p-3 text-center font-medium text-muted-foreground">
                                    {row.hours}
                                  </td>
                                  <td className="border border-border p-3 text-center font-bold text-foreground bg-secondary/20">
                                    {row.totalMarks}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Examination Regulations & Attendance Requirements */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            {/* 14 Key Regulations */}
            <div className="lg:col-span-7 bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-lg">
              <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                <div className="w-10 h-10 rounded-xl bg-nursing-green/10 text-nursing-green flex items-center justify-center font-bold">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-nursing-navy font-heading">
                    Examination Regulations
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium">
                    Prescribed guidelines by INC & Dr. NTR University of Health Sciences
                  </p>
                </div>
              </div>

              <ol className="space-y-3.5 text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed list-decimal list-inside">
                {regulations.map((reg, idx) => (
                  <li key={idx} className="pl-1">
                    <span className="text-foreground font-semibold">{reg.split(":")[0]}:</span>
                    <span>{reg.substring(reg.indexOf(":") + 1)}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Assessment & Grading System */}
            <div className="lg:col-span-5 bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                  <div className="w-10 h-10 rounded-xl bg-college-gold/15 text-college-navy flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-nursing-navy font-heading">
                      Assessment & Grading Scale
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium">
                      Standard 10-Point Letter Grading Structure
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-border text-xs">
                    <thead>
                      <tr className="bg-nursing-navy text-white font-bold">
                        <th className="border border-white/20 p-2.5 text-left">Letter Grade</th>
                        <th className="border border-white/20 p-2.5 text-center">Grade Point</th>
                        <th className="border border-white/20 p-2.5 text-center">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gradingData.map((g, idx) => (
                        <tr key={idx} className="hover:bg-secondary/50 transition-colors">
                          <td className="border border-border p-2 font-bold text-foreground">
                            {g.grade}
                          </td>
                          <td className="border border-border p-2 text-center font-bold text-nursing-green">
                            {g.point}
                          </td>
                          <td className="border border-border p-2 text-center font-medium text-muted-foreground">
                            {g.percentage}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-secondary/70 p-4 rounded-xl border-l-4 border-nursing-green text-xs text-foreground/80 leading-relaxed font-medium space-y-2">
                  <p>
                    <strong>Pass Criteria:</strong> All core Nursing courses require a minimum of <strong>Grade C (5 grade points, 50% and above)</strong> in theory and practical separately.
                  </p>
                  <p>
                    English and elective modules require a minimum of <strong>Grade P (4 grade points, 40% and above)</strong>.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border text-center">
                <Link
                  to="/apply"
                  className="inline-flex items-center justify-center gap-2 w-full bg-nursing-green hover:bg-nursing-green/90 text-white font-bold py-3.5 rounded-xl text-sm shadow-md transition-all"
                >
                  <FileText className="w-4 h-4" /> Apply for B.Sc. Nursing Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
