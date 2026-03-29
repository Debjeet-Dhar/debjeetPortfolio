import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 82 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 75 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Vercel", level: 78 },
      { name: "Postman", level: 80 },
    ],
  },
];

const CircularSkill = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="group flex flex-col items-center gap-2"
    >
      <div className="relative transition-transform duration-300 group-hover:scale-110">
        <svg width="88" height="88" viewBox="0 0 88 88">
          <circle cx="44" cy="44" r={radius} fill="none" stroke="hsl(220,15%,18%)" strokeWidth="4" />
          <motion.circle
            cx="44" cy="44" r={radius}
            fill="none"
            stroke="hsl(25,100%,50%)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
            transform="rotate(-90 44 44)"
            className="drop-shadow-[0_0_6px_hsl(25,100%,50%,0.5)]"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-sm font-semibold text-primary">
          {level}%
        </span>
      </div>
      <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">{name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-spacing relative px-6">
      <div ref={ref} className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-sm text-primary">02 // Skills</p>
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Tech <span className="text-gradient">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-3">
          {categories.map((cat, ci) => (
            <div key={cat.name}>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: ci * 0.1 }}
                className="mb-6 text-center font-mono text-sm font-semibold text-primary"
              >
                {cat.name}
              </motion.h3>
              <div className="flex flex-wrap justify-center gap-4">
                {cat.skills.map((s, si) => (
                  <CircularSkill key={s.name} {...s} delay={ci * 0.15 + si * 0.08} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
