import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Zap } from "lucide-react";

const highlights = [
  { icon: Code, label: "Frontend Development", desc: "React, JavaScript, Tailwind CSS" },
  { icon: Brain, label: "Backend Development", desc: "Node.js, Express.js, REST APIs" },
  { icon: Zap, label: "Clean & Scalable Code", desc: "Efficient, maintainable, production-ready" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-spacing relative px-6">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-sm text-primary">01 // About</p>
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Crafting <span className="text-gradient">modern</span> web solutions
          </h2>

          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I am a passionate full-stack web developer focused on building clean, efficient, and scalable web applications. I enjoy solving real-world problems using modern technologies and continuously improving my development skills. Currently strengthening my expertise in JavaScript, React, and backend development.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="glass group rounded-2xl p-6 transition-all hover:glow-border"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <h.icon size={24} />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">{h.label}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
