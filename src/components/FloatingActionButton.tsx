import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActionButton = () => {
  const handleClick = () => {
    // Scroll to contact section or open phone dialer
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute -inset-2 bg-gradient-to-r from-college-green to-college-gold rounded-full blur-md opacity-70 group-hover:opacity-100 group-hover:blur-lg transition-all duration-300"></div>
      <Button
        onClick={handleClick}
        className="relative h-16 w-16 rounded-full bg-card/80 backdrop-blur-xl border-2 border-border/50 shadow-2xl hover:border-college-green text-foreground hover:text-college-green transition-all duration-300 hover:scale-110 flex items-center justify-center p-0"
        aria-label="Contact Us"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
    </div>
  );
};

export default FloatingActionButton;