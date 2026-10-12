import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const capabilityPoints = [
  "Modern websites that represent your business professionally",
  "Automation that saves time on everyday tasks",
  "Custom systems built around how you actually work",
  "Reliable support as your business grows",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function TrustSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="work" className="relative overflow-hidden bg-[#05050f] py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full bg-violet-700/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/80">
              Why UdyamDev
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built to Make{" "}
              <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
                Business Simpler
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-400">
              We combine modern web development, automation and digital systems
              to help businesses work more efficiently and present themselves
              professionally online.
            </p>
          </motion.div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-4"
          >
            {capabilityPoints.map((point) => (
              <motion.li
                key={point}
                variants={reducedMotion ? undefined : itemVariants}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />
                <span className="text-sm leading-relaxed text-neutral-300">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
