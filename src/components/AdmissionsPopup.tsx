import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Maximize2, Sparkles, Phone, ArrowRight, GraduationCap, Flame, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function AdmissionsPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 45, seconds: 30 });

  // Pop up after 1.8 seconds on website open
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Live countdown timer simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      {/* Minimized Floating Button */}
      {isMinimized ? (
        <div className="fixed bottom-24 right-6 z-40 animate-bounce duration-1000 no-print">
          <button
            onClick={() => setIsMinimized(false)}
            className="group relative flex items-center gap-2.5 bg-gradient-to-r from-nursing-navy via-nursing-green to-nursing-teal text-white px-4 py-2.5 rounded-2xl shadow-2xl border-2 border-white/80 hover:scale-105 transition-all text-xs font-black tracking-wide"
            aria-label="Open Admissions Popup"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <GraduationCap className="w-4 h-4 text-college-gold animate-pulse" />
            <span>Admissions 2026 Open</span>
          </button>
        </div>
      ) : (
        /* Expanded Floating Card */
        <div className="fixed bottom-20 right-4 sm:right-6 z-40 w-[92vw] max-w-[340px] sm:max-w-[360px] animate-in slide-in-from-bottom-8 duration-500 ease-out no-print">
          <div className="bg-card/95 backdrop-blur-xl border-2 border-nursing-green/40 dark:border-nursing-green/30 rounded-3xl shadow-2xl overflow-hidden text-foreground flex flex-col relative transition-all">
            {/* Top Header Bar */}
            <div className="bg-gradient-to-r from-nursing-navy via-[#0c2f54] to-nursing-green px-4 py-2.5 flex items-center justify-between text-white border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                <span className="text-[11px] font-black tracking-wider uppercase text-college-gold flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-current text-college-gold" /> Admissions 2026
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                  title="Minimize"
                  aria-label="Minimize popup"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-red-500/80 text-white/80 hover:text-white transition-colors"
                  title="Close"
                  aria-label="Close popup"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Poster Image Container */}
            <div className="relative group cursor-pointer overflow-hidden bg-slate-950/5 p-3 pb-2">
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="relative rounded-2xl overflow-hidden border border-border shadow-md aspect-[4/5] w-full"
              >
                <img
                  src="/images/admissions_popup_poster.png"
                  alt="Grace College of Nursing 2026 Admissions Open"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                  <Eye className="w-4 h-4" /> Click to Zoom Poster
                </div>
              </div>
            </div>

            {/* Urgency Countdown Bar */}
            <div className="px-3 py-1.5 bg-secondary/70 border-y border-border/60 flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
              <span className="text-red-500 font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Limited Seats Available
              </span>
              <span className="font-mono text-foreground font-bold">
                {timeLeft.days}d : {String(timeLeft.hours).padStart(2, "0")}h : {String(timeLeft.minutes).padStart(2, "0")}m : {String(timeLeft.seconds).padStart(2, "0")}s
              </span>
            </div>

            {/* Action Buttons */}
            <div className="p-3 pt-2.5 space-y-2 bg-card">
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/apply"
                  onClick={() => setIsMinimized(true)}
                  className="w-full bg-nursing-green hover:bg-nursing-green/90 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow transition-all hover:scale-[1.02]"
                >
                  <span>Apply Online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="tel:9492644555"
                  className="w-full bg-college-gold hover:bg-college-gold/90 text-black font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>9492644555</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-2xl max-h-[92vh] p-3 overflow-hidden bg-card border-border rounded-3xl flex flex-col">
          <DialogTitle className="sr-only">Admissions Open 2026 Poster</DialogTitle>
          <div className="relative flex-1 overflow-auto rounded-2xl flex items-center justify-center bg-black/5">
            <img
              src="/images/admissions_popup_poster.png"
              alt="B.Sc. Nursing Admissions 2026 Details"
              className="max-h-[80vh] w-auto object-contain rounded-xl shadow-lg"
            />
          </div>
          <div className="pt-3 flex flex-wrap items-center justify-between gap-3 px-2">
            <div className="text-xs text-muted-foreground font-medium">
              Grace College of Nursing • Machilipatnam
            </div>
            <div className="flex gap-2">
              <a
                href="tel:8500254345"
                className="bg-secondary hover:bg-secondary/80 text-foreground font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors border border-border"
              >
                <Phone className="w-3.5 h-3.5 text-nursing-green" /> Call 8500254345
              </a>
              <Link
                to="/apply"
                onClick={() => setIsLightboxOpen(false)}
                className="bg-nursing-green hover:bg-nursing-green/90 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors shadow"
              >
                Fill Application Form <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
