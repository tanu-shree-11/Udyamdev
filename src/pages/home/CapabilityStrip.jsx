import { motion, useReducedMotion } from "framer-motion";
import { Code2, Bot, LayoutGrid, Sparkles } from "lucide-react";
import Reveal3D from "../../components/Reveal3D";

const capabilities = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern responsive websites built for businesses.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Practical automation that reduces repetitive work.",
  },
  {
    icon: LayoutGrid,
    title: "Digital Systems",
    description: "Custom tools and workflows for everyday business needs.",
  },
  {
    icon: Sparkles,
    title: "Business Solutions",
    description: "Technology designed around real business goals.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function CapabilityStrip() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#05030d] py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/2 h-64 w-96 -translate-y-1/2 rounded-full bg-violet-700/14 blur-[120px]" />
        <div className="u-grid absolute inset-0 opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, description }, index) => (
            <Reveal3D key={title} delay={index * 0.1}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/30 hover:bg-white/[0.05] hover:shadow-[0_8px_40px_rgba(139,92,246,0.12)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-600/15 text-violet-300 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {description}
                </p>
              </div>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CapabilityStrip;
