import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Printer, CheckCircle2, RotateCcw, ShieldCheck, AlertCircle, FileText, Send } from "lucide-react";
import { toast } from "sonner";

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    admission_year: "2026-27",
    candidate_name: "",
    father_guardian: "",
    mother_name: "",
    dob: "",
    nationality: "Indian",
    mother_tongue: "Telugu",
    religion: "",
    caste: "",
    address: "",
    village_town: "",
    district: "Krishna",
    state: "Andhra Pradesh",
    pin: "",
    secretariat_code: "",
    ward_no: "",
    father_mobile: "",
    mother_mobile: "",
    applicant_mobile: "",
    whatsapp: "",
    applicant_email: "",
    ssc_status: "Regular",
    inter_status: "Regular",
    ssc_year: "",
    ssc_hall_ticket: "",
    inter_year: "",
    inter_hall_ticket: "",
    registration_no: "",
    entrance_hall_ticket: "",
    rank: "",
    // Marks
    english_marks: "",
    language_marks: "",
    physics_marks: "",
    chemistry_marks: "",
    botany_marks: "",
    zoology_marks: "",
    // IDs
    candidate_aadhaar: "",
    father_aadhaar: "",
    mother_aadhaar: "",
    rice_card: "",
    caste_meeseva: "",
    income_meeseva: "",
    // Documents
    doc_ssc: false,
    doc_inter: false,
    doc_tc: false,
    doc_income: false,
    doc_caste: false,
    doc_aadhaar: false,
    doc_rice: false,
    doc_photos: false,
    doc_bank: false,
    doc_study: false,
    doc_rank: false,
    // Declaration
    applicant_signature: "",
    guardian_signature: "",
    declaration_date: new Date().toISOString().split("T")[0],
    place: "Machilipatnam",
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      let finalValue = value;

      // Strict numbers-only enforcement (no letters/words) for all number fields
      const numericFields = [
        "father_mobile",
        "mother_mobile",
        "applicant_mobile",
        "whatsapp",
        "pin",
        "ward_no",
        "secretariat_code",
        "ssc_hall_ticket",
        "inter_hall_ticket",
        "entrance_hall_ticket",
        "registration_no",
        "candidate_aadhaar",
        "father_aadhaar",
        "mother_aadhaar",
        "rice_card",
        "caste_meeseva",
        "income_meeseva",
        "ssc_year",
        "inter_year",
        "english_marks",
        "language_marks",
        "physics_marks",
        "chemistry_marks",
        "botany_marks",
        "zoology_marks",
        "rank"
      ];

      if (numericFields.includes(name)) {
        finalValue = value.replace(/\D/g, ""); // Strip non-digit characters

        if (["father_mobile", "mother_mobile", "applicant_mobile", "whatsapp"].includes(name)) {
          finalValue = finalValue.slice(0, 10);
        } else if (name === "pin") {
          finalValue = finalValue.slice(0, 6);
        } else if (["candidate_aadhaar", "father_aadhaar", "mother_aadhaar"].includes(name)) {
          finalValue = finalValue.slice(0, 12);
        } else if (["ssc_year", "inter_year"].includes(name)) {
          finalValue = finalValue.slice(0, 4);
        } else if (["english_marks", "language_marks"].includes(name)) {
          finalValue = finalValue.slice(0, 3);
          if (finalValue && parseInt(finalValue, 10) > 200) {
            finalValue = "200";
          }
        } else if (["physics_marks", "chemistry_marks", "botany_marks", "zoology_marks"].includes(name)) {
          finalValue = finalValue.slice(0, 3);
          if (finalValue && parseInt(finalValue, 10) > 150) {
            finalValue = "150";
          }
        }
      }

      setFormData((prev) => ({ ...prev, [name]: finalValue }));
    }
  };

  const calculateLanguageTotal = () => {
    const eng = parseFloat(formData.english_marks) || 0;
    const lang = parseFloat(formData.language_marks) || 0;
    return eng + lang;
  };

  const calculateScienceTotal = () => {
    const phy = parseFloat(formData.physics_marks) || 0;
    const chem = parseFloat(formData.chemistry_marks) || 0;
    const bot = parseFloat(formData.botany_marks) || 0;
    const zoo = parseFloat(formData.zoology_marks) || 0;
    return phy + chem + bot + zoo;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.candidate_name) {
      toast.error("Please enter Candidate Full Name.");
      return;
    }
    if (!formData.dob) {
      toast.error("Please enter Date of Birth.");
      return;
    }
    if (!formData.father_guardian) {
      toast.error("Please enter Father / Guardian Name.");
      return;
    }
    if (!formData.applicant_mobile && !formData.father_mobile && !formData.whatsapp) {
      toast.error("Please provide at least one contact mobile number.");
      return;
    }

    const appSig = formData.applicant_signature || formData.candidate_name;
    const guardSig = formData.guardian_signature || formData.father_guardian;

    const emailSubject = encodeURIComponent(`[B.Sc. Nursing Application 2026-27] - ${formData.candidate_name}`);

    const attachedDocsList = [
      formData.doc_ssc && "SSC Marks Memo",
      formData.doc_inter && "Intermediate Marks Memo",
      formData.doc_tc && "Transfer Certificate",
      formData.doc_income && "Income Certificate",
      formData.doc_caste && "Caste Certificate",
      formData.doc_aadhaar && "Aadhaar Cards",
      formData.doc_rice && "RICE Card",
      formData.doc_photos && "Passport Photos",
      formData.doc_bank && "Bank Passbook",
      formData.doc_study && "Study Certificates",
      formData.doc_rank && "Rank Card / Hall Ticket",
    ].filter(Boolean).join(", ");

    const emailBody = encodeURIComponent(
      `OFFICIAL B.SC. NURSING ADMISSION APPLICATION (2026-27)\n` +
      `Grace College of Nursing | Sara Grace Educational Society\n` +
      `=======================================================\n\n` +
      `1. APPLICANT PERSONAL DETAILS:\n` +
      `- Full Name: ${formData.candidate_name}\n` +
      `- Date of Birth: ${formData.dob}\n` +
      `- Father/Guardian Name: ${formData.father_guardian}\n` +
      `- Mother's Name: ${formData.mother_name || "N/A"}\n` +
      `- Nationality: ${formData.nationality}\n` +
      `- Mother Tongue: ${formData.mother_tongue}\n` +
      `- Religion: ${formData.religion || "N/A"}\n` +
      `- Caste / Category: ${formData.caste || "N/A"}\n\n` +
      `2. ADDRESS & CONTACT:\n` +
      `- Door / Street: ${formData.address || "N/A"}\n` +
      `- Village / Town: ${formData.village_town || "N/A"}\n` +
      `- District: ${formData.district}, State: ${formData.state} - PIN: ${formData.pin || "N/A"}\n` +
      `- Applicant Mobile: ${formData.applicant_mobile || "N/A"}\n` +
      `- Father Mobile: ${formData.father_mobile || "N/A"}\n` +
      `- Mother Mobile: ${formData.mother_mobile || "N/A"}\n` +
      `- WhatsApp No: ${formData.whatsapp || "N/A"}\n` +
      `- Email Address: ${formData.applicant_email || "Not Provided"}\n\n` +
      `3. ACADEMIC QUALIFICATIONS:\n` +
      `- SSC (${formData.ssc_status}): Year ${formData.ssc_year || "N/A"} | Hall Ticket: ${formData.ssc_hall_ticket || "N/A"}\n` +
      `- Intermediate (${formData.inter_status}): Year ${formData.inter_year || "N/A"} | Hall Ticket: ${formData.inter_hall_ticket || "N/A"}\n` +
      `- Entrance Reg No: ${formData.registration_no || "N/A"} | Rank: ${formData.rank || "N/A"}\n\n` +
      `4. MARKS OBTAINED (INTERMEDIATE):\n` +
      `- English: ${formData.english_marks || "0"} | Second Language: ${formData.language_marks || "0"} (Language Total: ${calculateLanguageTotal()})\n` +
      `- Physics: ${formData.physics_marks || "0"} | Chemistry: ${formData.chemistry_marks || "0"} | Botany: ${formData.botany_marks || "0"} | Zoology: ${formData.zoology_marks || "0"} (Science Total: ${calculateScienceTotal()})\n\n` +
      `5. IDENTIFICATION & CERTIFICATES:\n` +
      `- Candidate Aadhaar: ${formData.candidate_aadhaar || "N/A"}\n` +
      `- Father Aadhaar: ${formData.father_aadhaar || "N/A"}\n` +
      `- Mother Aadhaar: ${formData.mother_aadhaar || "N/A"}\n` +
      `- RICE Card No: ${formData.rice_card || "N/A"}\n` +
      `- Caste Meeseva No: ${formData.caste_meeseva || "N/A"}\n` +
      `- Income Meeseva No: ${formData.income_meeseva || "N/A"}\n\n` +
      `6. DOCUMENTS TO SUBMIT:\n` +
      `${attachedDocsList || "To be submitted in person during verification"}\n\n` +
      `7. DECLARATION & UNDERTAKING:\n` +
      `- Applicant Signature: ${appSig}\n` +
      `- Parent/Guardian Signature: ${guardSig}\n` +
      `- Date: ${formData.declaration_date}\n` +
      `- Place: ${formData.place}\n\n` +
      `I solemnly affirm that the statement made and information furnished by me in the application form are true and correct.`
    );

    try {
      fetch("https://formsubmit.co/ajax/sges112@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Online B.Sc. Nursing Application 2026-27] ${formData.candidate_name}`,
          "Candidate Name": formData.candidate_name,
          "DOB": formData.dob,
          "Father/Guardian": formData.father_guardian,
          "Applicant Mobile": formData.applicant_mobile,
          "Father Mobile": formData.father_mobile,
          "WhatsApp": formData.whatsapp,
          "Email": formData.applicant_email,
          "Address": `${formData.address}, ${formData.village_town}, ${formData.district}, ${formData.state} - ${formData.pin}`,
          "SSC Year / Hall Ticket": `${formData.ssc_year} / ${formData.ssc_hall_ticket}`,
          "Inter Year / Hall Ticket": `${formData.inter_year} / ${formData.inter_hall_ticket}`,
          "Entrance Reg / Rank": `${formData.registration_no} / ${formData.rank}`,
          "Science Marks Total": calculateScienceTotal(),
          "Language Marks Total": calculateLanguageTotal(),
          "Candidate Aadhaar": formData.candidate_aadhaar,
          "RICE Card": formData.rice_card,
          "Meeseva Caste No": formData.caste_meeseva,
          "Applicant Signature": appSig,
          _cc: "gracecollegeofnursing@gmail.com,info@gracecollegeofnursing.org",
          _template: "table",
          _captcha: "false",
        }),
      }).catch(() => {});
    } catch {}

    const mailtoUrl = `mailto:sges112@gmail.com?cc=gracecollegeofnursing@gmail.com,info@gracecollegeofnursing.org&subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoUrl;
    setValidated(true);
    toast.success("Application submitted to sges112@gmail.com!");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the application form?")) {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <BreadcrumbNav
          badge="Admissions 2026-27"
          title="B.Sc. Nursing Online Application"
          subtitle="Official Admission Application into 4-Year B.Sc. Nursing Degree Course at Grace College of Nursing."
          items={[
            { label: "Admissions", path: "/admissions" },
            { label: "Online Application Form" },
          ]}
        />

        <div className="container mx-auto px-4 sm:px-8 py-10 max-w-5xl">
          {/* Top Notice Box */}
          <div className="no-print bg-secondary/70 border-l-4 border-nursing-green p-5 rounded-2xl mb-8 text-sm leading-relaxed shadow-sm">
            <div className="flex items-center gap-2 text-nursing-green font-bold text-base mb-1">
              <ShieldCheck className="w-5 h-5" /> Official Application Form (2026 Batch)
            </div>
            <p className="text-muted-foreground font-medium">
              Complete the form carefully. Fields and document requirements are based on the prescribed university application workbook.
              After completing the form, click <strong className="text-foreground">Validate Application</strong> and use <strong className="text-foreground">Print Application</strong> to generate a clean PDF for institutional submission.
            </p>
          </div>

          {/* Application Header for Print */}
          <div className="hidden print:block text-center border-b-2 border-black pb-4 mb-6">
            <h1 className="text-2xl font-black uppercase tracking-wide">Sara Grace Educational Society</h1>
            <h2 className="text-xl font-bold uppercase text-slate-800">Grace College of Nursing</h2>
            <p className="text-xs">Door No: 3/39, Pothepalle, Machilipatnam, Krishna Dist., Andhra Pradesh - 521 002</p>
            <p className="text-xs">Phone: 7989766058, 8985754346 | WhatsApp: 8500254345, 9492644555</p>
            <p className="text-xs font-semibold">Recognised by Govt. of A.P., AP Nursing Council & INC New Delhi • Affiliated to Dr. N.T.R. UHS</p>
            <div className="inline-block border border-black px-4 py-1 text-xs font-bold uppercase mt-2 rounded">
              B.Sc. Nursing Admission Application Form
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Admission Details */}
            <div className="form-card bg-card border border-border rounded-2xl shadow-md overflow-hidden">
              <div className="bg-nursing-navy text-white px-6 py-3.5 font-heading font-bold text-base flex items-center justify-between">
                <span>1. Application Details</span>
                <span className="text-xs font-normal text-slate-300">Degree: B.Sc. Nursing (4 Years)</span>
              </div>
              <div className="p-6 grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Year of Admission <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="admission_year"
                    value={formData.admission_year}
                    onChange={handleChange}
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Course Applied
                  </label>
                  <input
                    value="Bachelor of Science in Nursing (B.Sc. Nursing)"
                    disabled
                    className="h-11 w-full bg-muted border border-border rounded-xl px-4 text-sm font-bold text-nursing-green outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Applicants Information */}
            <div className="form-card bg-card border border-border rounded-2xl shadow-md overflow-hidden">
              <div className="bg-nursing-navy text-white px-6 py-3.5 font-heading font-bold text-base">
                2. Applicant's Information
              </div>
              <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="sm:col-span-2 lg:col-span-2">
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Name of Candidate (As per Intermediate) <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="candidate_name"
                    value={formData.candidate_name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Father / Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="father_guardian"
                    value={formData.father_guardian}
                    onChange={handleChange}
                    placeholder="Father Name"
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Mother's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="mother_name"
                    value={formData.mother_name}
                    onChange={handleChange}
                    placeholder="Mother Name"
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Nationality
                  </label>
                  <input
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Mother Tongue
                  </label>
                  <input
                    name="mother_tongue"
                    value={formData.mother_tongue}
                    onChange={handleChange}
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Religion
                  </label>
                  <select
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none text-foreground cursor-pointer"
                  >
                    <option value="">-- Select Religion --</option>
                    <option value="Christian">Christian</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Jain">Jain</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Caste / Category
                  </label>
                  <select
                    name="caste"
                    value={formData.caste}
                    onChange={handleChange}
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none text-foreground cursor-pointer"
                  >
                    <option value="">-- Select Category --</option>
                    <option value="OC (Open Category / General)">OC (Open Category / General)</option>
                    <option value="BC-A">BC-A</option>
                    <option value="BC-B">BC-B</option>
                    <option value="BC-C (Christian Converts)">BC-C (Christian Converts)</option>
                    <option value="BC-D">BC-D</option>
                    <option value="BC-E">BC-E</option>
                    <option value="SC (Scheduled Caste)">SC (Scheduled Caste)</option>
                    <option value="ST (Scheduled Tribe)">ST (Scheduled Tribe)</option>
                    <option value="EWS (Economically Weaker Section)">EWS (Economically Weaker Section)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Address for Correspondence */}
            <div className="form-card bg-card border border-border rounded-2xl shadow-md overflow-hidden">
              <div className="bg-nursing-navy text-white px-6 py-3.5 font-heading font-bold text-base">
                3. Address for Correspondence
              </div>
              <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="sm:col-span-2 lg:col-span-3">
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Door No. / House Address / Street
                  </label>
                  <textarea
                    name="address"
                    rows={2}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Complete residential address"
                    className="w-full bg-secondary/40 border border-border rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Village / Town
                  </label>
                  <input
                    name="village_town"
                    value={formData.village_town}
                    onChange={handleChange}
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    District
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none text-foreground cursor-pointer"
                  >
                    <option value="Krishna">Krishna</option>
                    <option value="NTR District (Vijayawada)">NTR District (Vijayawada)</option>
                    <option value="Guntur">Guntur</option>
                    <option value="Eluru">Eluru</option>
                    <option value="West Godavari">West Godavari</option>
                    <option value="East Godavari">East Godavari</option>
                    <option value="Kakinada">Kakinada</option>
                    <option value="Dr. B.R. Ambedkar Konaseema">Dr. B.R. Ambedkar Konaseema</option>
                    <option value="Bapatla">Bapatla</option>
                    <option value="Palnadu">Palnadu</option>
                    <option value="Prakasam">Prakasam</option>
                    <option value="SPSR Nellore">SPSR Nellore</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Anakapalli">Anakapalli</option>
                    <option value="Vizianagaram">Vizianagaram</option>
                    <option value="Srikakulam">Srikakulam</option>
                    <option value="Parvathipuram Manyam">Parvathipuram Manyam</option>
                    <option value="Alluri Sitharama Raju">Alluri Sitharama Raju</option>
                    <option value="Kurnool">Kurnool</option>
                    <option value="Nandyal">Nandyal</option>
                    <option value="Anantapur">Anantapur</option>
                    <option value="Sri Sathya Sai">Sri Sathya Sai</option>
                    <option value="YSR Kadapa">YSR Kadapa</option>
                    <option value="Annamayya">Annamayya</option>
                    <option value="Chittoor">Chittoor</option>
                    <option value="Tirupati">Tirupati</option>
                    <option value="Hyderabad / Telangana">Hyderabad / Telangana</option>
                    <option value="Other District">Other District</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    State
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none text-foreground cursor-pointer"
                  >
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Other State / UT">Other State / UT</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    PIN Code
                  </label>
                  <input
                    name="pin"
                    value={formData.pin}
                    onChange={handleChange}
                    inputMode="numeric"
                    placeholder="e.g. 521002"
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Village Ward Secretariat Code
                  </label>
                  <input
                    name="secretariat_code"
                    value={formData.secretariat_code}
                    onChange={handleChange}
                    placeholder="Secretariat Code"
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Ward No.
                  </label>
                  <input
                    name="ward_no"
                    value={formData.ward_no}
                    onChange={handleChange}
                    placeholder="Ward No."
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Contact Details */}
            <div className="form-card bg-card border border-border rounded-2xl shadow-md overflow-hidden">
              <div className="bg-nursing-navy text-white px-6 py-3.5 font-heading font-bold text-base">
                4. Contact Details
              </div>
              <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Father Mobile Number
                  </label>
                  <input
                    name="father_mobile"
                    value={formData.father_mobile}
                    onChange={handleChange}
                    inputMode="tel"
                    placeholder="10-digit mobile"
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Mother Mobile Number
                  </label>
                  <input
                    name="mother_mobile"
                    value={formData.mother_mobile}
                    onChange={handleChange}
                    inputMode="tel"
                    placeholder="10-digit mobile"
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Applicant Mobile Number
                  </label>
                  <input
                    name="applicant_mobile"
                    value={formData.applicant_mobile}
                    onChange={handleChange}
                    inputMode="tel"
                    placeholder="10-digit mobile"
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    WhatsApp Mobile Number
                  </label>
                  <input
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    inputMode="tel"
                    placeholder="WhatsApp number"
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div className="sm:col-span-2 lg:col-span-4">
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Applicant Email Address
                  </label>
                  <input
                    name="applicant_email"
                    type="email"
                    value={formData.applicant_email}
                    onChange={handleChange}
                    placeholder="e.g. candidate@gmail.com"
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Educational Qualifications */}
            <div className="form-card bg-card border border-border rounded-2xl shadow-md overflow-hidden">
              <div className="bg-nursing-navy text-white px-6 py-3.5 font-heading font-bold text-base">
                5. Educational Qualifications & Examination History
              </div>
              <div className="p-6 space-y-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                      SSC Status
                    </label>
                    <select
                      name="ssc_status"
                      value={formData.ssc_status}
                      onChange={handleChange}
                      className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    >
                      <option value="Regular">Regular</option>
                      <option value="Supplementary">Supplementary</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                      Year of SSC Pass
                    </label>
                    <input
                      name="ssc_year"
                      value={formData.ssc_year}
                      onChange={handleChange}
                      placeholder="e.g. 2023"
                      className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                      SSC Examination Hall Ticket No.
                    </label>
                    <input
                      name="ssc_hall_ticket"
                      value={formData.ssc_hall_ticket}
                      onChange={handleChange}
                      inputMode="numeric"
                      placeholder="SSC Hall Ticket No."
                      className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                      Intermediate Status
                    </label>
                    <select
                      name="inter_status"
                      value={formData.inter_status}
                      onChange={handleChange}
                      className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    >
                      <option value="Regular">Regular</option>
                      <option value="Supplementary">Supplementary</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                      Year of Intermediate Pass
                    </label>
                    <input
                      name="inter_year"
                      value={formData.inter_year}
                      onChange={handleChange}
                      inputMode="numeric"
                      placeholder="e.g. 2025"
                      className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                      Intermediate Hall Ticket No.
                    </label>
                    <input
                      name="inter_hall_ticket"
                      value={formData.inter_hall_ticket}
                      onChange={handleChange}
                      inputMode="numeric"
                      placeholder="Inter Hall Ticket No."
                      className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                      AP-NCET / NEET Registration No.
                    </label>
                    <input
                      name="registration_no"
                      value={formData.registration_no}
                      onChange={handleChange}
                      inputMode="numeric"
                      placeholder="Registration No."
                      className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                      AP-NCET / NEET Hall Ticket No.
                    </label>
                    <input
                      name="entrance_hall_ticket"
                      value={formData.entrance_hall_ticket}
                      onChange={handleChange}
                      placeholder="Hall Ticket No."
                      className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                      AP-EAPCET / NEET Rank
                    </label>
                    <input
                      name="rank"
                      value={formData.rank}
                      onChange={handleChange}
                      placeholder="State / All India Rank"
                      className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Intermediate Subjects & Marks Table */}
            <div className="form-card bg-card border border-border rounded-2xl shadow-md overflow-hidden">
              <div className="bg-nursing-navy text-white px-6 py-3.5 font-heading font-bold text-base flex justify-between items-center">
                <span>6. Intermediate Subjects &amp; Marks Obtained</span>
                <span className="text-xs font-normal text-slate-300">Bi.P.C Science Group</span>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left: Languages Table */}
                  <div className="border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between bg-card">
                    <div className="bg-secondary/70 px-4 py-3 border-b border-border font-bold text-sm text-nursing-navy flex justify-between items-center">
                      <span>Part I &amp; II: Languages</span>
                      <span className="text-xs text-muted-foreground font-semibold">Max: 400</span>
                    </div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted/40 text-xs font-bold text-muted-foreground border-b border-border">
                          <th className="p-3 text-left">Subject</th>
                          <th className="p-3 text-center w-24">Max</th>
                          <th className="p-3 text-center w-32">Obtained</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr>
                          <td className="p-3 font-medium text-foreground">English</td>
                          <td className="p-3 text-center font-semibold text-muted-foreground">200</td>
                          <td className="p-2">
                            <input
                              name="english_marks"
                              value={formData.english_marks}
                              onChange={handleChange}
                              inputMode="numeric"
                              maxLength={3}
                              placeholder="Marks"
                              className="h-10 w-full border border-border rounded-xl px-2 text-center font-bold bg-background focus:ring-2 focus:ring-nursing-green outline-none"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium text-foreground">Telugu / Hindi / Sanskrit</td>
                          <td className="p-3 text-center font-semibold text-muted-foreground">200</td>
                          <td className="p-2">
                            <input
                              name="language_marks"
                              value={formData.language_marks}
                              onChange={handleChange}
                              inputMode="numeric"
                              maxLength={3}
                              placeholder="Marks"
                              className="h-10 w-full border border-border rounded-xl px-2 text-center font-bold bg-background focus:ring-2 focus:ring-nursing-green outline-none"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bg-nursing-green/10 p-3.5 border-t border-border flex justify-between items-center font-bold text-sm text-nursing-green mt-auto">
                      <span>Languages Total:</span>
                      <span className="text-base font-black">{calculateLanguageTotal()} / 400</span>
                    </div>
                  </div>

                  {/* Right: Sciences Group Table */}
                  <div className="border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between bg-card">
                    <div className="bg-secondary/70 px-4 py-3 border-b border-border font-bold text-sm text-nursing-navy flex justify-between items-center">
                      <span>Part I &amp; II: Group Sciences (Bi.P.C)</span>
                      <span className="text-xs text-muted-foreground font-semibold">Max: 600</span>
                    </div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted/40 text-xs font-bold text-muted-foreground border-b border-border">
                          <th className="p-3 text-left">Subject</th>
                          <th className="p-3 text-center w-24">Max</th>
                          <th className="p-3 text-center w-32">Obtained</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr>
                          <td className="p-3 font-medium text-foreground">Physics</td>
                          <td className="p-3 text-center font-semibold text-muted-foreground">150</td>
                          <td className="p-2">
                            <input
                              name="physics_marks"
                              value={formData.physics_marks}
                              onChange={handleChange}
                              inputMode="numeric"
                              maxLength={3}
                              placeholder="Marks"
                              className="h-10 w-full border border-border rounded-xl px-2 text-center font-bold bg-background focus:ring-2 focus:ring-nursing-green outline-none"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium text-foreground">Chemistry</td>
                          <td className="p-3 text-center font-semibold text-muted-foreground">150</td>
                          <td className="p-2">
                            <input
                              name="chemistry_marks"
                              value={formData.chemistry_marks}
                              onChange={handleChange}
                              inputMode="numeric"
                              maxLength={3}
                              placeholder="Marks"
                              className="h-10 w-full border border-border rounded-xl px-2 text-center font-bold bg-background focus:ring-2 focus:ring-nursing-green outline-none"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium text-foreground">Botany</td>
                          <td className="p-3 text-center font-semibold text-muted-foreground">150</td>
                          <td className="p-2">
                            <input
                              name="botany_marks"
                              value={formData.botany_marks}
                              onChange={handleChange}
                              inputMode="numeric"
                              maxLength={3}
                              placeholder="Marks"
                              className="h-10 w-full border border-border rounded-xl px-2 text-center font-bold bg-background focus:ring-2 focus:ring-nursing-green outline-none"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium text-foreground">Zoology</td>
                          <td className="p-3 text-center font-semibold text-muted-foreground">150</td>
                          <td className="p-2">
                            <input
                              name="zoology_marks"
                              value={formData.zoology_marks}
                              onChange={handleChange}
                              inputMode="numeric"
                              maxLength={3}
                              placeholder="Marks"
                              className="h-10 w-full border border-border rounded-xl px-2 text-center font-bold bg-background focus:ring-2 focus:ring-nursing-green outline-none"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bg-nursing-green/10 p-3.5 border-t border-border flex justify-between items-center font-bold text-sm text-nursing-green mt-auto">
                      <span>Sciences Total:</span>
                      <span className="text-base font-black">{calculateScienceTotal()} / 600</span>
                    </div>
                  </div>
                </div>

                {/* Grand Summary Aggregate Bar */}
                <div className="p-4 rounded-2xl bg-secondary/80 border border-border flex flex-wrap items-center justify-between gap-4 text-sm">
                  <div className="flex items-center gap-6">
                    <div>
                      <span className="text-xs text-muted-foreground font-bold uppercase block">Total Max Marks</span>
                      <span className="font-bold text-foreground text-base">1000 Marks</span>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-bold uppercase block">Total Marks Secured</span>
                      <span className="font-black text-nursing-green text-lg">{calculateLanguageTotal() + calculateScienceTotal()} / 1000</span>
                    </div>
                  </div>

                  <div className="bg-nursing-green text-white font-bold px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 shadow-sm">
                    <span>Aggregate Percentage:</span>
                    <span className="text-base font-black">
                      {(((calculateLanguageTotal() + calculateScienceTotal()) / 10)).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Identification & Certificates */}
            <div className="form-card bg-card border border-border rounded-2xl shadow-md overflow-hidden">
              <div className="bg-nursing-navy text-white px-6 py-3.5 font-heading font-bold text-base">
                7. Identification & Certificate Details
              </div>
              <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Candidate Aadhaar No.
                  </label>
                  <input
                    name="candidate_aadhaar"
                    value={formData.candidate_aadhaar}
                    onChange={handleChange}
                    inputMode="numeric"
                    placeholder="12-digit Aadhaar No."
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Father Aadhaar No.
                  </label>
                  <input
                    name="father_aadhaar"
                    value={formData.father_aadhaar}
                    onChange={handleChange}
                    inputMode="numeric"
                    placeholder="Father Aadhaar"
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Mother Aadhaar No.
                  </label>
                  <input
                    name="mother_aadhaar"
                    value={formData.mother_aadhaar}
                    onChange={handleChange}
                    inputMode="numeric"
                    placeholder="Mother Aadhaar"
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    RICE Card No. (AP)
                  </label>
                  <input
                    name="rice_card"
                    value={formData.rice_card}
                    onChange={handleChange}
                    placeholder="Rice Card No."
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Caste Certificate Meeseva No.
                  </label>
                  <input
                    name="caste_meeseva"
                    value={formData.caste_meeseva}
                    onChange={handleChange}
                    placeholder="Meeseva Caste No."
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                    Income Certificate Meeseva No.
                  </label>
                  <input
                    name="income_meeseva"
                    value={formData.income_meeseva}
                    onChange={handleChange}
                    placeholder="Meeseva Income No."
                    className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section 8: Documents Checklist */}
            <div className="form-card bg-card border border-border rounded-2xl shadow-md overflow-hidden">
              <div className="bg-nursing-navy text-white px-6 py-3.5 font-heading font-bold text-base">
                8. Documents to be Submitted / Attached
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-3.5 text-sm">
                  {[
                    { id: "doc_ssc", label: "S.S.C. Marks Memo / 10th Certificate" },
                    { id: "doc_inter", label: "Intermediate Marks Memo & Pass Certificate" },
                    { id: "doc_tc", label: "Transfer Certificate (T.C.) & Conduct Certificate" },
                    { id: "doc_income", label: "Income Certificate (Latest Meeseva)" },
                    { id: "doc_caste", label: "Caste Certificate (Meeseva Integrated)" },
                    { id: "doc_aadhaar", label: "Aadhaar Card copies of Candidate, Father & Mother" },
                    { id: "doc_rice", label: "RICE Card Copy (Govt. of Andhra Pradesh)" },
                    { id: "doc_photos", label: "Five (5) Recent Passport Size Photographs" },
                    { id: "doc_bank", label: "Mother Bank Account Passbook Copy (for fee reimbursement)" },
                    { id: "doc_study", label: "6th Class to Intermediate Study Certificates" },
                    { id: "doc_rank", label: "AP-NCET / NEET-UG Rank Card & Hall Ticket" },
                  ].map((doc) => (
                    <label
                      key={doc.id}
                      className="flex items-start gap-3 p-3 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/60 transition-colors cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name={doc.id}
                        checked={(formData as any)[doc.id]}
                        onChange={handleChange}
                        className="w-4 h-4 rounded text-nursing-green focus:ring-nursing-green mt-0.5"
                      />
                      <span className="text-foreground/90 font-medium text-xs sm:text-sm">{doc.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 9: Declaration */}
            <div className="form-card bg-card border border-border rounded-2xl shadow-md overflow-hidden">
              <div className="bg-nursing-navy text-white px-6 py-3.5 font-heading font-bold text-base">
                9. Declaration & Undertaking
              </div>
              <div className="p-6 space-y-6">
                <div className="bg-secondary/60 p-4 rounded-xl border border-border text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
                  I hereby solemnly and sincerely affirm that the statement made and information furnished by me in the application form and also in all the enclosures thereto submitted by me are true and correct. I have not kept any information secret. Should it however be found that any information furnished therein is false, incorrect or untrue in material particulars, I realize that my selection or admission to the course is liable to be cancelled and I am liable to criminal prosecution. Further I also agree to forego my seat in the Training Institute unconditionally. If selected for training I am prepared to pay the fees in full and abide by the RULES and REGULATIONS of the Institution.
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                      Applicant Signature / Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="applicant_signature"
                      value={formData.applicant_signature}
                      onChange={handleChange}
                      placeholder="Typed Full Name"
                      className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                      Parent / Guardian Signature <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="guardian_signature"
                      value={formData.guardian_signature}
                      onChange={handleChange}
                      placeholder="Typed Full Name"
                      className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="declaration_date"
                      value={formData.declaration_date}
                      onChange={handleChange}
                      className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                      Place
                    </label>
                    <input
                      name="place"
                      value={formData.place}
                      onChange={handleChange}
                      placeholder="City / Village"
                      className="h-11 w-full bg-secondary/40 border border-border rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="no-print sticky bottom-4 z-30 bg-card/95 backdrop-blur-md border border-border p-4 rounded-2xl shadow-2xl flex flex-wrap items-center justify-center gap-4">
              <Button
                type="submit"
                className="bg-nursing-green hover:bg-nursing-green/90 text-white font-bold px-8 py-3.5 rounded-xl text-sm shadow-md flex items-center gap-2"
              >
                <Send className="w-4 h-4" /> Submit &amp; Email Application (sges112@gmail.com)
              </Button>

              <Button
                type="button"
                onClick={handlePrint}
                className="bg-college-gold hover:bg-college-gold/90 text-black font-bold px-8 py-3.5 rounded-xl text-sm shadow-md flex items-center gap-2"
              >
                <Printer className="w-4 h-4" /> Print Application / Save as PDF
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="border-border text-foreground hover:bg-secondary font-bold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Clear Form
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
