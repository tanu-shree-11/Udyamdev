import { motion, useReducedMotion } from "framer-motion";
import { Search, ClipboardList, Code2, Workflow, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We start by understanding your business, goals and the problem you want to solve.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Plan",
    description:
      "A clear, practical plan for the right solution — scope, structure and approach.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description:
      "We design and build the solution with clean, modern and reliable technology.",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Automate",
    description:
      "We connect workflows and add automation so everyday tasks work for you.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deliver & Support",
    description:
      "Launch, test and continuous support so the solution keeps working as you grow.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function Process() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#05030d] px-6 py-20 text-white sm:py-28 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[380px] w-[500px] rounded-full bg-violet-700/14 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[420px] rounded-full bg-indigo-700/12 blur-[150px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-violet-300 backdrop-blur-xl">
            How We Work
          </span>
          <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            A Simple, Proven{" "}
            <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
            From first conversation to launch and beyond — a clear path that
            keeps your project simple and on track.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={reducedMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute left-8 right-8 top-8 hidden h-px origin-left bg-gradient-to-r from-transparent via-violet-500/40 to-transparent lg:block"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {steps.map(({ number, icon: Icon, title, description }) => (
              <motion.div
                key={number}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative z-10 mb-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-600/15 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:border-violet-400/40 group-hover:bg-violet-600/25 group-hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]">
                    <Icon className="h-7 w-7 text-violet-300" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05]">
                  <span className="text-xs font-semibold tracking-widest text-violet-300/80">
                    {number}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Process;
