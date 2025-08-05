import { Phone } from "lucide-react";
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
    <Button
      onClick={handleClick}
      variant="college"
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contact Us"
    >
      <Phone className="h-6 w-6" />
    </Button>
  );
};

export default FloatingActionButton;