import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Monitor, Zap, TrendingUp, Compass, ArrowRight, Layers, Cpu, CheckCircle2 } from "lucide-react";
import logo from "../assets/logo.png.png";
import Reveal3D from "../components/Reveal3D";

const valuePoints = [
  {
    num: "01",
    icon: Monitor,
    title: "Modern & Scalable",
    description: "Pixel-perfect, high-performance web applications and SaaS platforms engineered on modern tech stacks.",
  },
  {
    num: "02",
    icon: Zap,
    title: "Practical AI & Automation",
    description: "Intelligent workflows and AI agents that handle lead qualification, follow-ups, and CRM sync 24/7.",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Built for Real Growth",
    description: "Tailored digital solutions built around your real business goals, efficiency, and revenue.",
  },
];

const timelineSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We map your current business workflows, identify bottlenecks, and define the exact solution.",
  },
  {
    step: "02",
    title: "Build",
    description: "We engineer modern frontend interfaces, SaaS features, and clean scalable backend systems.",
  },
  {
    step: "03",
    title: "Automate",
    description: "We deploy AI agents, instant WhatsApp & email follow-ups, and automated CRM sync.",
  },
  {
    step: "04",
    title: "Support",
    description: "We deliver continuous optimization, performance monitoring, and system scaling.",
  },
];

const stats = [
  { value: "50+", label: "Digital Ideas & Builds" },
  { value: "10+", label: "Tools & Technologies" },
  { value: "24/7", label: "Digital Possibilities" },
  { value: "1", label: "Goal — Make Work Easier" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#05030d] px-6 py-20 text-white sm:py-28 lg:px-8"
      style={{ perspective: 1200 }}
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-[420px] w-[520px] rounded-full bg-violet-700/14 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-indigo-700/12 blur-[150px]" />
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        {/* Header & Story Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Story */}
          <Reveal3D>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />
              About UdyamDev
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.2rem]">
              Engineering Digital Solutions{" "}
              <span className="block bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
                That Scale Your Business
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg">
              <strong className="font-semibold text-white">UdyamDev</strong> was founded with a clear purpose: to bridge the gap between modern design, software engineering, and practical AI automation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-400">
              We help growing businesses replace manual work with automated systems, build custom SaaS products, and launch modern websites that look exceptional and convert visitors into long-term customers.
            </p>
          </Reveal3D>

          {/* Right: Glass Brand Highlight */}
          <Reveal3D delay={0.2} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl sm:p-10">
            <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-violet-500/20 blur-[80px]" />
            <div className="flex flex-col items-center text-center">
              <img
                src={logo}
                alt="UdyamDev"
                className="h-16 w-auto object-contain drop-shadow-[0_0_24px_rgba(139,92,246,0.4)] sm:h-20"
              />
              <h3 className="mt-4 text-2xl font-bold text-white">UdyamDev</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-violet-300">
                Web Apps • Automation • AI Systems
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 w-full">
                {["Custom Web Apps", "AI Agent Pipelines", "SaaS Platforms", "Workflow Sync"].map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-medium text-neutral-300"
                  >
                    <CheckCircle2 className="h-4 w-4 text-violet-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal3D>
        </div>

        {/* 3 Core Value Points */}
        <div className="mt-20">
          <Reveal3D className="mb-10 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Why Businesses Choose{" "}
              <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
                UdyamDev
              </span>
            </h3>
          </Reveal3D>

          <div className="grid gap-6 md:grid-cols-3">
            {valuePoints.map(({ num, icon: Icon, title, description }, idx) => (
              <Reveal3D key={num} delay={idx * 0.1}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-violet-500/30 hover:bg-white/[0.05] hover:shadow-[0_16px_48px_rgba(139,92,246,0.15)]">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-widest text-violet-400/70">
                        {num}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-600/15 text-violet-300 transition-all duration-500 group-hover:scale-110 group-hover:border-violet-400/40 group-hover:bg-violet-600/25">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white tracking-tight">{title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-400">{description}</p>
                  </div>
                </div>
              </Reveal3D>
            ))}
          </div>
        </div>

        {/* 4-Step Horizontal Timeline ("How We Work") */}
        <div className="mt-24">
          <Reveal3D className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-xl">
              <Compass className="h-3.5 w-3.5" />
              How We Work
            </span>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our 4-Step{" "}
              <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
                Execution Process
              </span>
            </h3>
          </Reveal3D>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timelineSteps.map(({ step, title, description }, idx) => (
              <Reveal3D key={step} delay={idx * 0.1}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.05]">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-600/20 text-xs font-bold text-violet-300 shadow-[0_0_14px_rgba(139,92,246,0.3)]">
                        {step}
                      </span>
                      {idx < 3 && (
                        <ArrowRight className="hidden h-4 w-4 text-neutral-600 lg:block" />
                      )}
                    </div>
                    <h4 className="text-base font-bold text-white">{title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-400">{description}</p>
                  </div>
                </div>
              </Reveal3D>
            ))}
          </div>
        </div>

        {/* Existing "Our Approach" Stats Strip */}
        <Reveal3D className="mt-20 rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md sm:p-10">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />
              Our Approach
            </span>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
              A reflection of how we work — the ideas, tools and possibilities we bring to every project.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map(({ value, label }, i) => (
              <Reveal3D key={label} delay={i * 0.1} className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-violet-300 to-violet-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                  {value}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-neutral-400">
                  {label}
                </div>
              </Reveal3D>
            ))}
          </div>
        </Reveal3D>
      </motion.div>
    </section>
  );
}

export default About;
