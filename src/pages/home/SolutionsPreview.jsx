import { motion, useReducedMotion } from "framer-motion";
import {
  Globe,
  Target,
  Bot,
  LayoutGrid,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Reveal3D from "../../components/Reveal3D";

const solutions = [
  {
    num: "01",
    icon: Globe,
    title: "Get Online",
    description: "Professional websites and a strong digital presence.",
  },
  {
    num: "02",
    icon: Target,
    title: "Get More Leads",
    description: "Lead capture and follow-up systems that never miss a customer.",
  },
  {
    num: "03",
    icon: Bot,
    title: "Automate Repetitive Work",
    description: "AI and workflow automation that handles the busywork for you.",
  },
  {
    num: "04",
    icon: LayoutGrid,
    title: "Organize Your Business",
    description: "Digital systems and dashboards that keep everything connected.",
  },
  {
    num: "05",
    icon: MessageCircle,
    title: "Improve Customer Experience",
    description: "WhatsApp, forms, booking and communication systems your customers love.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35, rotateX: 10, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function SolutionsPreview() {
  const reducedMotion = useReducedMotion();

  const scrollToContact = (e) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[#05030d] py-20 sm:py-28"
      style={{ perspective: 1200 }}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[360px] w-[360px] rounded-full bg-violet-700/14 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <Reveal3D className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/80">
            How We Solve Problems
          </p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] tracking-tight">
            Solutions Built Around{" "}
            <span className="u-gradient-text">
              Your Business
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-400">
            Every business faces different challenges. Here&apos;s how UdyamDev
            helps you solve them — step by step.
          </p>
        </Reveal3D>

        {/* Interactive vertical timeline */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Vertical connecting line */}
          <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-violet-500/40 via-white/10 to-violet-500/40 sm:block" />

          <div className="space-y-4">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal3D key={s.num} delay={i * 0.1}>
                  <div className="group relative flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-500 hover:border-violet-500/30 hover:bg-white/[0.05] hover:shadow-[0_16px_48px_rgba(139,92,246,0.15)] sm:p-6">
                    {/* Node */}
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-600/15 text-violet-300 transition-all duration-500 group-hover:scale-110 group-hover:border-violet-400/40 group-hover:bg-violet-600/25 group-hover:shadow-[0_0_24px_rgba(139,92,246,0.4)]">
                      <Icon className="h-6 w-6 transition-transform duration-500 group-hover:-translate-y-0.5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-semibold tracking-widest text-violet-400/70">
                            {s.num}
                          </span>
                          <h3 className="text-lg font-semibold tracking-tight text-white">
                            {s.title}
                          </h3>
                        </div>
                        <ArrowRight className="h-4 w-4 shrink-0 text-neutral-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-300" />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </Reveal3D>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 text-center"
        >
          <p className="text-base text-neutral-400">Have a project in mind?</p>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="group mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_32px_rgba(139,92,246,0.4)]"
          >
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default SolutionsPreview;
