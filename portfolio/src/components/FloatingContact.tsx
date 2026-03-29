import { MessageCircle } from "lucide-react";

const FloatingContact = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-[0_0_25px_hsl(25,100%,50%,0.5)]"
      aria-label="Contact"
    >
      <MessageCircle size={20} />
    </button>
  );
};

export default FloatingContact;
