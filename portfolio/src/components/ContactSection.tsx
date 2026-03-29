import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="section-spacing relative px-6">
      <div ref={ref} className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-sm text-primary">05 // Contact</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mb-10 text-muted-foreground">
            I'm always open to collaborating on exciting projects or discussing new opportunities. Let's build something impactful together.
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(25,100%,50%,0.4)]"
          >
            <Mail size={18} />
            Say Hello
          </a>

          <div className="mt-10 flex justify-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_hsl(25,100%,50%,0.2)]"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 border-t border-border pt-8">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 Debjeet. Built with React & Framer Motion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
