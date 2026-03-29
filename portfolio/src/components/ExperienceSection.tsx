import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Aspiring Full-Stack Web Developer",
    company: "Self-Learning & Projects",
    period: "2024 — Present",
    desc: "Actively building personal and practice projects to strengthen real-world development experience. Open to internships and junior developer opportunities.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-spacing relative px-6">
      <div ref={ref} className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-sm text-primary">04 // Experience</p>
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Career <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className={`relative mb-10 pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-auto md:right-auto md:top-1.5"
                style={i % 2 === 0 ? { right: "-6.5px", left: "auto" } : { left: "-6.5px" }}
              />

              <div className="glass rounded-xl p-5 transition-all hover:glow-border">
                <span className="mb-1 inline-block font-mono text-xs text-primary">{exp.period}</span>
                <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                <p className="mb-2 text-sm text-primary/80">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
