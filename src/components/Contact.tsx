import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "B.Sc. Nursing (4-Year Degree)",
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
      toast.error("Please fill in your full name and phone number.");
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

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-college-gold/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-college-green/10 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 font-heading tracking-tight">
            Admissions &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-college-gold to-college-green">Contact Desk</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
            Have questions regarding B.Sc. Nursing eligibility, quotas, or fees? Submit your message below or chat directly with our counselors.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl font-black text-foreground font-heading border-b border-border/50 pb-6 mb-8">
              Admissions Desk
            </h3>

            <div className="space-y-4">
              <Card className="bg-card/40 backdrop-blur-xl border border-border/50 shadow-lg hover:border-college-green/30 hover:shadow-[0_0_20px_rgba(0,180,216,0.1)] transition-all duration-300 rounded-[1.5rem] group overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-college-green to-college-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-college-green/10 group-hover:text-college-green transition-colors shadow-inner">
                      <MapPin className="w-6 h-6 text-muted-foreground group-hover:text-college-green transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1 font-heading">Campus Address</h4>
                      <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                        Door No: 3/39, Pothepalle<br />
                        Machilipatnam, Krishna Dist.<br />
                        Andhra Pradesh - 521 002
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/40 backdrop-blur-xl border border-border/50 shadow-lg hover:border-college-gold/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 rounded-[1.5rem] group overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-college-gold to-college-navy opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-college-gold/10 group-hover:text-college-gold transition-colors shadow-inner">
                      <Phone className="w-6 h-6 text-muted-foreground group-hover:text-college-gold transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1 font-heading">Phone Numbers</h4>
                      <div className="flex flex-col gap-1 text-sm font-semibold">
                        <a href="tel:8500254345" className="text-muted-foreground hover:text-college-gold transition-colors">
                          +91 85002 54345
                        </a>
                        <a href="tel:9492644555" className="text-muted-foreground hover:text-college-gold transition-colors">
                          +91 94926 44555
                        </a>
                        <a href="tel:7989766058" className="text-muted-foreground hover:text-college-gold transition-colors">
                          +91 79897 66058
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/40 backdrop-blur-xl border border-border/50 shadow-lg hover:border-college-navy/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 rounded-[1.5rem] group overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-college-navy to-college-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-college-navy/10 group-hover:text-college-navy transition-colors shadow-inner">
                      <Mail className="w-6 h-6 text-muted-foreground group-hover:text-college-navy transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1 font-heading">Official Email</h4>
                      <div className="flex flex-col gap-1 text-sm font-semibold">
                        <a href="mailto:sges112@gmail.com" className="text-muted-foreground hover:text-college-navy transition-colors">
                          sges112@gmail.com
                        </a>
                        <a href="mailto:info@gracecollegeofnursing.org" className="text-muted-foreground hover:text-college-navy transition-colors truncate">
                          info@gracecollegeofnursing.org
                        </a>
                        <a href="mailto:gracecollegeofnursing@gmail.com" className="text-muted-foreground hover:text-college-navy transition-colors truncate">
                          gracecollegeofnursing@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/40 backdrop-blur-xl border border-border/50 shadow-lg hover:border-college-gold/30 hover:shadow-[0_0_20px_rgba(255,183,3,0.1)] transition-all duration-300 rounded-[1.5rem] group overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-college-gold to-college-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-college-gold/10 group-hover:text-college-gold transition-colors shadow-inner">
                      <Clock className="w-6 h-6 text-muted-foreground group-hover:text-college-gold transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1 font-heading">Office Timings</h4>
                      <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                        Monday - Saturday: 9:00 AM - 5:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="bg-card/60 backdrop-blur-2xl border border-border/50 shadow-2xl rounded-[2rem] overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-college-green/5 blur-3xl pointer-events-none rounded-full"></div>
              <CardHeader className="pb-8 border-b border-border/50 px-8 pt-8">
                <CardTitle className="text-3xl font-black text-foreground font-heading">
                  Admissions &amp; Academic Inquiry Form
                </CardTitle>
                <p className="text-muted-foreground font-medium pt-2">
                  Submit your query directly to our admissions team at <span className="font-bold text-college-green">sges112@gmail.com</span>.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-500">
                    <div className="w-16 h-16 rounded-full bg-nursing-green/10 text-nursing-green flex items-center justify-center mx-auto border-2 border-nursing-green/30 shadow-lg">
                      <CheckCircle className="w-9 h-9" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-black text-foreground font-heading">
                        Inquiry Sent to sges112@gmail.com!
                      </h4>
                      <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. Your admission & academic query has been delivered directly to <strong className="text-nursing-navy dark:text-college-gold">sges112@gmail.com</strong>. Our admissions officer will get in touch with you shortly.
                      </p>
                    </div>
                    <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            phone: "",
                            email: "",
                            subject: "B.Sc. Nursing (4-Year Degree)",
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
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                          Your Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Anusha Rao"
                          required
                          className="bg-secondary/50 border-border/50 focus-visible:ring-college-green rounded-xl h-12 font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                          Mobile Phone Number *
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile"
                          required
                          className="bg-secondary/50 border-border/50 focus-visible:ring-college-green rounded-xl h-12 font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                          Email Address
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. applicant@email.com"
                          className="bg-secondary/50 border-border/50 focus-visible:ring-college-green rounded-xl h-12 font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                          Program of Interest
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 h-12 border border-border/50 rounded-xl bg-secondary/50 focus:ring-2 focus:ring-college-green focus:outline-none font-medium text-foreground transition-all"
                        >
                          <option value="B.Sc. Nursing (4-Year Degree)">B.Sc. Nursing (4-Year Degree)</option>
                          <option value="Management Quota Admission">Management Quota Admission</option>
                          <option value="Convener Quota (NEET-UG)">Convener Quota (NEET-UG)</option>
                          <option value="Hostel & Campus Facilities">Hostel & Campus Facilities</option>
                          <option value="General Campus Inquiry">General Campus Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                        Your Message or Questions
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Specify your Intermediate marks, NEET score, or questions..."
                        className="min-h-[130px] bg-secondary/50 border-border/50 focus-visible:ring-college-green rounded-xl p-4 font-medium resize-none text-sm"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 h-14 rounded-xl bg-gradient-to-r from-college-green to-college-gold text-white font-bold text-base hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] hover:-translate-y-0.5 transition-all border-0 group"
                      >
                        <Send className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        {isSubmitting ? "Sending to sges112@gmail.com..." : "Submit Inquiry"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="sm:w-60 h-14 rounded-xl border-2 border-green-500/30 text-green-600 hover:bg-green-500/10 font-bold transition-all group"
                        onClick={(e) => {
                          e.preventDefault();
                          const message = `Hello Grace College of Nursing! My name is ${formData.name || "an applicant"}. I would like to inquire about B.Sc. Nursing admission.`;
                          window.open(`https://wa.me/918500254345?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                      >
                        <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;