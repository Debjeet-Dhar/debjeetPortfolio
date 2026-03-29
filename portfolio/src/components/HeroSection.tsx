import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowDown, ExternalLink, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const taglines = [
  "Building responsive, scalable and user-focused web applications.",
];

const HeroSection = () => {
  const [tagIndex, setTagIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = taglines[tagIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      // Only delete if there are multiple taglines
      if (taglines.length > 1) {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
      // Otherwise just stay displayed
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTagIndex((prev) => (prev + 1) % taglines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, tagIndex]);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-6">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Profile image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative"
        >
          <div className="animate-glow-pulse rounded-full p-1">
            <div className="rounded-full border-2 border-primary/50 p-1">
              <img
                src={profileImg}
                alt="Profile"
                className="h-32 w-32 rounded-full object-cover md:h-40 md:w-40"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Debjeet <span className="text-gradient">Dhar</span>
          </h1>
          <p className="mt-3 text-lg text-muted-foreground md:text-xl">
            Full-Stack Web Developer
          </p>
          <div className="mt-2 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <MapPin size={14} className="text-primary" />
            Based in India | Open to Remote Opportunities
          </div>
        </motion.div>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="h-8"
        >
          <span className="font-mono text-lg text-primary">
            {displayed}
            <span className="animate-typing-cursor">|</span>
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:glow-box-strong hover:scale-105"
          >
            <ExternalLink size={16} />
            View Projects
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Mail size={16} />
            Contact Me
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 animate-float"
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
