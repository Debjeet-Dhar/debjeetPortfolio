import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 z-50 h-0.5 w-full bg-muted">
        <motion.div className="h-full bg-primary" style={{ width: `${scrollProgress}%` }} />
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed top-0.5 left-0 z-40 w-full"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button onClick={() => scrollTo("#hero")} className="font-mono text-lg font-bold text-primary">
            {"<AE />"}
          </button>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="rounded-lg border border-primary bg-primary/10 px-4 py-2 text-sm text-primary transition-all hover:bg-primary/20"
            >
              Contact
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground md:hidden">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mx-6 rounded-xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="rounded-lg border border-primary bg-primary/10 px-4 py-2 text-sm text-primary"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
