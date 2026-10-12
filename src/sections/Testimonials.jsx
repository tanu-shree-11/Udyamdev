import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight, MessageSquareQuote } from "lucide-react";
import BookingModal from "../components/BookingModal";
import Reveal3D from "../components/Reveal3D";

// Data-driven array for client testimonials (currently empty)
const testimonials = [];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 10, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function Testimonials() {
  const reducedMotion = useReducedMotion();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section
        id="testimonials"
        className="relative overflow-hidden bg-[#05030d] px-6 py-20 text-white sm:py-28 lg:px-8"
        style={{ perspective: 1200 }}
      >
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/3 h-[420px] w-[500px] rounded-full bg-violet-700/14 blur-[150px]" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[450px] rounded-full bg-indigo-700/12 blur-[150px]" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 mx-auto max-w-7xl"
        >
          {testimonials.length > 0 ? (
            /* Rendered when testimonials exist */
            <div>
              <motion.div variants={itemVariants} className="mx-auto mb-16 max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-xl">
                  <Sparkles className="h-3.5 w-3.5" />
                  Client Reviews
                </span>
                <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                  What Our Clients{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
                    Say About Us
                  </span>
                </h2>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl"
                  >
                    <MessageSquareQuote className="h-8 w-8 text-violet-400/50 mb-4" />
                    <p className="text-sm leading-relaxed text-neutral-300">{t.text}</p>
                    <div className="mt-6 border-t border-white/10 pt-4">
                      <h4 className="text-sm font-bold text-white">{t.name}</h4>
                      <p className="text-xs text-neutral-400">{t.role} · {t.business}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            /* Empty State: Centered Glass Card */
            <Reveal3D className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-8 text-center backdrop-blur-2xl sm:p-12 shadow-[0_24px_70px_rgba(0,0,0,0.5),0_0_50px_rgba(139,92,246,0.15)]">
              {/* Internal glow */}
              <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-600/25 blur-[90px]" />

              <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-600/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5" />
                Client Experiences
              </span>

              <h2 className="mt-6 text-[clamp(1.9rem,5vw,3rem)] font-bold tracking-tight text-white">
                Be Our Next{" "}
                <span className="u-gradient-text">
                  Success Story
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                We build high-performance web systems, custom SaaS applications, and intelligent AI workflows tailored for growing businesses. Let&apos;s map out your solution.
              </p>

              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.4)] transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] cursor-pointer"
                >
                  Book a Free Demo Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal3D>
          )}
        </motion.div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}

export default Testimonials;
