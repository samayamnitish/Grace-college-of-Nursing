import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingWhatsApp() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello! I would like to inquire about B.Sc. Nursing admissions and details at Grace College of Nursing.");
    window.open(`https://wa.me/918500254345?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 no-print">
      {/* Back to top button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="h-11 w-11 rounded-full bg-white/90 dark:bg-card border border-border shadow-lg text-foreground hover:bg-college-navy hover:text-white transition-all hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Floating WhatsApp Button */}
      <div className="relative group">
        {/* Glow */}
        <div className="absolute -inset-1 bg-[#25D366] rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"></div>

        <button
          onClick={handleWhatsApp}
          className="relative h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        </button>

        {/* Tooltip on hover */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with Admission Desk
        </div>
      </div>
    </div>
  );
}
