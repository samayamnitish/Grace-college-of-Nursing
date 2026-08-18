import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  ExternalLink,
  Send,
  CheckCircle,
  Clock,
  Building2,
  QrCode
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "B.Sc. Nursing Admission Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    let val = e.target.value;
    if (e.target.name === "phone") {
      val = val.replace(/\D/g, "").slice(0, 10);
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    setIsSubmitting(true);

    const emailSubject = `[Admission Inquiry] ${formData.subject || "B.Sc. Nursing"} - ${formData.name}`;
    const emailBody = 
      `Dear Admissions Team,\n\nI would like to submit an admission & academic inquiry for Grace College of Nursing (Sara Grace Educational Society).\n\n` +
      `--- APPLICANT DETAILS ---\n` +
      `Full Name: ${formData.name}\n` +
      `Mobile Phone: ${formData.phone}\n` +
      `Email Address: ${formData.email || "Not Provided"}\n` +
      `Program of Interest: ${formData.subject}\n\n` +
      `Message / Questions:\n${formData.message || "Please provide admission eligibility, quota details, and fee structure."}\n\n` +
      `Regards,\n${formData.name}`;

    try {
      const res = await fetch("https://formsubmit.co/ajax/sges112@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: emailSubject,
          "Applicant Name": formData.name,
          "Mobile Phone": formData.phone,
          "Email Address": formData.email || "Not Provided",
          "Program of Interest": formData.subject,
          "Message": formData.message || "Please provide admission eligibility, quota details, and fee structure.",
          _cc: "gracecollegeofnursing@gmail.com,info@gracecollegeofnursing.org",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (res.ok) {
        toast.success(`Inquiry sent directly to sges112@gmail.com! We will contact you at ${formData.phone}.`);
        setIsSubmitted(true);
      } else {
        throw new Error("API dispatch failed");
      }
    } catch {
      const mailtoUrl = `mailto:sges112@gmail.com?cc=gracecollegeofnursing@gmail.com,info@gracecollegeofnursing.org&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;
      toast.success("Opening email client to send inquiry to sges112@gmail.com.");
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello Grace College of Nursing! My name is ${formData.name || "an applicant"}. I would like to inquire about B.Sc. Nursing admission.`);
    window.open(`https://wa.me/918500254345?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <BreadcrumbNav
          badge="Admissions & Campus Inquiries"
          title="Contact Grace College of Nursing"
          subtitle="Get in touch with our admissions desk, administration officers, or principal desk. We are here to support your nursing career trajectory."
          items={[{ label: "Contact Us" }]}
        />

        <div className="container mx-auto px-4 sm:px-8 py-12 space-y-16">
          {/* Main 2-Column Layout */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Campus Headquarters Coordinates (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-card border border-border rounded-3xl p-8 shadow-lg space-y-6">
                <div>
                  <div className="text-xs font-bold text-nursing-green uppercase tracking-widest mb-1">
                    Sara Grace Educational Society
                  </div>
                  <h2 className="text-2xl font-black text-nursing-navy font-heading">
                    Campus Headquarters
                  </h2>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/40 border border-border">
                  <div className="w-10 h-10 rounded-xl bg-nursing-green/10 text-nursing-green flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">Physical Address</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                      Door No: 3/39, Pothepalle, Machilipatnam - 521 002,<br />
                      Krishna District, Andhra Pradesh, India.
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/40 border border-border">
                  <div className="w-10 h-10 rounded-xl bg-college-gold/20 text-college-navy flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-sm font-bold text-foreground mb-1.5">Office & Admission Helplines</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                      <a
                        href="tel:8500254345"
                        className="p-2 rounded-lg bg-card border border-border hover:border-nursing-green hover:text-nursing-green transition-all text-center"
                      >
                        8500254345
                      </a>
                      <a
                        href="tel:9492644555"
                        className="p-2 rounded-lg bg-card border border-border hover:border-nursing-green hover:text-nursing-green transition-all text-center"
                      >
                        9492644555
                      </a>
                      <a
                        href="tel:7989766058"
                        className="p-2 rounded-lg bg-card border border-border hover:border-nursing-green hover:text-nursing-green transition-all text-center"
                      >
                        7989766058
                      </a>
                      <a
                        href="tel:8985754346"
                        className="p-2 rounded-lg bg-card border border-border hover:border-nursing-green hover:text-nursing-green transition-all text-center"
                      >
                        8985754346
                      </a>
                    </div>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/40 border border-border">
                  <div className="w-10 h-10 rounded-xl bg-nursing-navy/10 text-nursing-navy flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-sm font-bold text-foreground mb-1.5">Official Email Addresses</h3>
                    <div className="flex flex-col gap-1.5 text-xs font-semibold">
                      <a
                        href="mailto:info@gracecollegeofnursing.org"
                        className="text-nursing-green hover:underline flex items-center justify-between"
                      >
                        <span>info@gracecollegeofnursing.org</span>
                      </a>
                      <a
                        href="mailto:sges112@gmail.com"
                        className="text-muted-foreground hover:text-foreground flex items-center justify-between"
                      >
                        <span>sges112@gmail.com</span>
                      </a>
                      <a
                        href="mailto:gracecollegeofnursing@gmail.com"
                        className="text-muted-foreground hover:text-foreground flex items-center justify-between"
                      >
                        <span>gracecollegeofnursing@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Official University Portals */}
                <div className="pt-2 border-t border-border space-y-2">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">
                    Statutory Portals
                  </h3>
                  <div className="flex flex-col gap-2 text-xs">
                    <a
                      href="https://hmis.ap.nic.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-secondary/30 hover:bg-secondary border border-border flex items-center justify-between text-foreground font-semibold transition-colors"
                    >
                      <span>Andhra Pradesh Nurses Council</span>
                      <ExternalLink className="w-3.5 h-3.5 text-nursing-green" />
                    </a>
                    <a
                      href="https://drntr.uhsap.in"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-secondary/30 hover:bg-secondary border border-border flex items-center justify-between text-foreground font-semibold transition-colors"
                    >
                      <span>Dr. N.T.R. University of Health Sciences</span>
                      <ExternalLink className="w-3.5 h-3.5 text-nursing-green" />
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp QR Card */}
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-lg text-center space-y-4">
                <div className="inline-flex items-center gap-2 text-nursing-green font-bold text-xs uppercase tracking-widest">
                  <QrCode className="w-4 h-4" /> Instant WhatsApp QR Code
                </div>
                <h3 className="text-xl font-bold text-nursing-navy font-heading">
                  Scan to Chat on WhatsApp
                </h3>
                <div className="max-w-[220px] mx-auto p-4 bg-white border border-border rounded-2xl shadow-inner flex items-center justify-center">
                  <img
                    src="/images/whatsapp_qr.png"
                    alt="Grace College of Nursing WhatsApp QR Code"
                    className="w-full h-auto rounded-xl object-contain aspect-square"
                  />
                </div>
                <p className="text-xs text-muted-foreground font-medium">
                  Scan this code using WhatsApp camera or click below to chat directly with our admission counselor.
                </p>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 rounded-xl text-sm shadow flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" /> Chat on WhatsApp (+91-8500254345)
                </Button>
              </div>
            </div>

            {/* Right Column: Quick Contact Form & Map (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Form Card */}
              <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
                <div>
                  <div className="text-xs font-bold text-nursing-green uppercase tracking-widest mb-1">
                    Send Inquiry
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-nursing-navy font-heading">
                    Admissions & Academic Inquiry Form
                  </h2>
                  <p className="text-muted-foreground text-xs sm:text-sm font-medium mt-1">
                    Have questions regarding B.Sc. Nursing eligibility, quotas, or fees? Send us a message and our counselor will respond promptly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-500">
                    <div className="w-16 h-16 rounded-full bg-nursing-green/10 text-nursing-green flex items-center justify-center mx-auto border-2 border-nursing-green/30 shadow-lg">
                      <CheckCircle className="w-9 h-9" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-foreground font-heading">
                        Inquiry Sent to sges112@gmail.com!
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. Your inquiry has been delivered directly to <strong className="text-nursing-navy dark:text-college-gold">sges112@gmail.com</strong>. Our admissions officer will contact you shortly.
                      </p>
                    </div>
                    <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            subject: "B.Sc. Nursing Admission Inquiry",
                            message: "",
                          });
                        }}
                        variant="outline"
                        className="rounded-xl border-border font-bold text-xs h-11 px-6"
                      >
                        Submit Another Inquiry
                      </Button>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          window.open("https://wa.me/918500254345?text=Hello%20Grace%20College%20of%20Nursing!%20I%20would%20like%20to%20follow%20up%20on%20my%20inquiry.", "_blank");
                        }}
                        className="bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-xs h-11 px-6 flex items-center gap-2 shadow"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" /> Follow up on WhatsApp
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Anusha Rao"
                          className="bg-secondary/40 border-border rounded-xl h-11 text-sm font-medium"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                          Mobile Phone Number <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          inputMode="tel"
                          placeholder="10-digit mobile"
                          className="bg-secondary/40 border-border rounded-xl h-11 text-sm font-medium"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                          Email Address
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. applicant@email.com"
                          className="bg-secondary/40 border-border rounded-xl h-11 text-sm font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                          Program of Interest
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-secondary/40 border border-border rounded-xl px-3.5 h-11 text-sm font-medium focus:ring-2 focus:ring-nursing-green outline-none"
                        >
                          <option value="B.Sc. Nursing Admission Inquiry">B.Sc. Nursing (4-Year Degree)</option>
                          <option value="Management Quota Inquiry">Management Quota Admission</option>
                          <option value="Convener / NEET Inquiry">Convener Quota (NEET-UG)</option>
                          <option value="Hostel & Facilities Inquiry">Hostel & Campus Facilities</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-muted-foreground mb-1.5">
                        Your Message or Questions
                      </label>
                      <Textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Specify your Intermediate marks, NEET score, or questions..."
                        className="bg-secondary/40 border-border rounded-xl text-sm font-medium resize-none p-3.5"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-nursing-green hover:bg-nursing-green/90 text-white font-bold py-3.5 rounded-xl text-sm shadow flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" /> {isSubmitting ? "Sending to sges112@gmail.com..." : "Submit Inquiry"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleWhatsApp}
                        className="bg-card border-border hover:bg-secondary font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 text-nursing-green"
                      >
                        <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                      </Button>
                    </div>
                  </form>
                )}
              </div>

              {/* Interactive Google Map Embed */}
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-nursing-navy font-heading">
                      Interactive Campus Map
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium">
                      Pothepalle, Machilipatnam, Krishna District - 521002
                    </p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/f6EM4HToRgoShU3g8"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-nursing-green hover:underline flex items-center gap-1"
                  >
                    Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border shadow-inner bg-slate-100">
                  <iframe
                    title="Grace College of Nursing Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.8485295995874!2d81.1538272!3d16.2109763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a49e778ef155555%3A0xe977a8a9bc05606b!2sGrace%20College%20of%20Nursing!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
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
