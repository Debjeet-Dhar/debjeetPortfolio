import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Neural Style Transfer App",
    desc: "Real-time style transfer using deep learning. Upload any photo and transform it with artistic styles.",
    tech: ["PyTorch", "React", "FastAPI", "Docker"],
    github: "#",
    live: "#",
    color: "from-violet-500/20 to-purple-600/20",
  },
  {
    title: "AI Chatbot Platform",
    desc: "Enterprise-grade conversational AI platform with RAG, memory, and multi-model support.",
    tech: ["LangChain", "Next.js", "PostgreSQL", "OpenAI"],
    github: "#",
    live: "#",
    color: "from-cyan-500/20 to-blue-600/20",
  },
  {
    title: "Predictive Analytics Dashboard",
    desc: "ML-powered dashboard for business intelligence with automated forecasting and anomaly detection.",
    tech: ["Python", "TensorFlow", "React", "D3.js"],
    github: "#",
    live: "#",
    color: "from-emerald-500/20 to-teal-600/20",
  },
  {
    title: "Computer Vision Pipeline",
    desc: "End-to-end object detection and segmentation pipeline for autonomous drone navigation.",
    tech: ["YOLO", "OpenCV", "ROS", "C++"],
    github: "#",
    live: "#",
    color: "from-orange-500/20 to-amber-600/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-spacing relative px-6">
      <div ref={ref} className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-sm text-primary">03 // Projects</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="mb-12 text-muted-foreground max-w-2xl">
            Below are some of the web applications I have developed. Each project is showcased with a thumbnail image preview displayed at the top of the project card, followed by detailed information including description, technologies used, and key features.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
              className="glass group rounded-2xl p-6 transition-all duration-300 hover:glow-border"
            >
              {/* Thumbnail preview */}
              <div className={`mb-4 h-40 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center overflow-hidden`}>
                <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
                  <ExternalLink size={28} />
                  <span className="font-mono text-xs">Preview</span>
                </div>
              </div>

              {/* Fake preview bar */}
              <div className="mb-4 flex items-center gap-1.5 rounded-lg bg-background/50 px-3 py-2">
                <div className="h-2 w-2 rounded-full bg-destructive/60" />
                <div className="h-2 w-2 rounded-full bg-primary/40" />
                <div className="h-2 w-2 rounded-full bg-primary/30" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground">project.tsx</span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={p.github} className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Github size={14} /> Code
                </a>
                <a href={p.live} className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <ExternalLink size={14} /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
