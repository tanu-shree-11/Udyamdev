import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function FinalCTA() {
  const reducedMotion = useReducedMotion();

  const scrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="contact" className="relative bg-[#05050f] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center backdrop-blur-sm sm:px-10 sm:py-16"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[220px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[90px]" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              Let&apos;s discuss your business, your goals and how technology can
              make your work easier.
            </p>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-violet-500"
            >
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
