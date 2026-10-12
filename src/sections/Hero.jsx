import { useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AbstractUVisual from "../components/AbstractUVisual";
import BookingModal from "../components/BookingModal";
import Reveal3D from "../components/Reveal3D";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const WhatsAppIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.57-.35zM12.05 21.79h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.78 9.78 0 0 1-1.5-5.22c0-5.4 4.4-9.8 9.81-9.8a9.75 9.75 0 0 1 9.8 9.81c0 5.4-4.4 9.8-9.79 9.8zm8.31-18.12A11.7 11.7 0 0 0 12.05.3C5.51.3.2 5.6.2 12.15c0 2.09.55 4.13 1.59 5.93L.05 23.9l5.94-1.56a11.8 11.8 0 0 0 5.67 1.44c6.54 0 11.86-5.3 11.86-11.85 0-3.17-1.23-6.15-3.47-8.39z" />
  </svg>
);

function Hero() {
  const reducedMotion = useReducedMotion();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 500], [0, 100]);
  const visualY = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-[#05030d] pb-20 pt-28 text-white sm:pb-28 sm:pt-32"
      >
        {/* Background Parallax */}
        <motion.div style={{ y: reducedMotion ? 0 : glowY }} className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-violet-700/20 blur-[120px]" />
          <div className="absolute right-[-6%] top-1/4 h-[460px] w-[460px] rounded-full bg-indigo-700/15 blur-[130px]" />
          <div className="u-grid absolute inset-0 opacity-70" />
          <div className="absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            {/* Left: text */}
            <Reveal3D className="max-w-xl lg:justify-self-end lg:pr-6">
              <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300/90">
                <span className="h-px w-6 bg-gradient-to-r from-violet-400/70 to-transparent" />
                Digital Solutions for Modern Businesses
              </p>

              <h1 className="text-[clamp(2.2rem,5.5vw,3.2rem)] font-bold leading-[1.12] tracking-tight">
                Digital Solutions That
                <br />
                Help Your{" "}
                <span className="u-gradient-text">
                  Business
                </span>
                <br />
                <span className="u-gradient-text">
                  Grow.
                </span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-400 sm:text-lg">
                UdyamDev helps businesses build modern websites, digital systems
                and practical automation that make everyday work simpler and more
                efficient.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] cursor-pointer"
                >
                  Book a Demo Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a
                  href="https://wa.me/917988556033"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-500/20 hover:shadow-[0_0_24px_rgba(16,185,129,0.3)]"
                >
                  <WhatsAppIcon className="text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
                  WhatsApp Us
                </a>
              </div>
            </Reveal3D>

            {/* Right: digital system visual */}
            <Reveal3D delay={0.2} className="relative order-last lg:order-none lg:justify-self-center">
              <motion.div style={{ y: reducedMotion ? 0 : visualY }}>
                <AbstractUVisual reducedMotion={reducedMotion} />
              </motion.div>
            </Reveal3D>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}

export default Hero;
