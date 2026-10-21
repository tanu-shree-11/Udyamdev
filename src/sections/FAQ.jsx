import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react";
import Reveal3D from "../components/Reveal3D";
import BookingModal from "../components/BookingModal";
import { faqs } from "../data/faqs";

const WHATSAPP_NUMBER = "917988556033";

function FAQItem({ faq, isOpen, onToggle, reducedMotion }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-violet-500/50 bg-violet-600/10 shadow-[0_0_28px_rgba(139,92,246,0.18)]"
          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
      }`}
    >
      <button
        type="button"
        id={`btn-${faq.id}`}
        aria-expanded={isOpen}
        aria-controls={`panel-${faq.id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left focus-visible:outline-2 focus-visible:outline-violet-400 cursor-pointer"
      >
        <span className={`text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-white" : "text-neutral-200"}`}>
          {faq.question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" }}
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
            isOpen
              ? "border-violet-400/50 bg-violet-500/25 text-violet-200"
              : "border-white/10 bg-white/[0.04] text-neutral-400"
          }`}
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`panel-${faq.id}`}
            role="region"
            aria-labelledby={`btn-${faq.id}`}
            key="content"
            initial={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={reducedMotion ? { duration: 0.2 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed text-neutral-300">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const reducedMotion = useReducedMotion();
  const [openId, setOpenId] = useState(faqs[0].id);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* FAQPage JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }),
        }}
      />

      <section
        id="faq"
        className="relative overflow-hidden bg-[#05030d] px-6 py-20 text-white sm:py-28 lg:px-8"
      >
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/4 top-0 h-[400px] w-[500px] rounded-full bg-violet-700/12 blur-[160px]" />
          <div className="absolute bottom-0 left-1/4 h-[350px] w-[450px] rounded-full bg-indigo-700/10 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Section heading */}
          <Reveal3D className="mb-12 text-center">
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] tracking-tight">
              Frequently Asked{" "}
              <span className="u-gradient-text">Questions</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
              Everything you need to know before getting started with UdyamDev.
            </p>
          </Reveal3D>

          {/* Accordion */}
          <Reveal3D delay={0.08} className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
                reducedMotion={reducedMotion}
              />
            ))}
          </Reveal3D>

          {/* CTA bottom row */}
          <Reveal3D delay={0.18} className="mt-12 text-center">
            <p className="text-sm text-neutral-400 mb-5">Still have questions?</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.35)] transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 hover:shadow-[0_0_36px_rgba(139,92,246,0.55)] cursor-pointer"
              >
                Book a Demo Call
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-500/20 hover:shadow-[0_0_24px_rgba(16,185,129,0.3)]"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
                WhatsApp Us
              </a>
            </div>
          </Reveal3D>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}

export default FAQ;
