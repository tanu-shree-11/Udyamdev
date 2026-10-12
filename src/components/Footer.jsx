import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  ArrowUp,
  Heart,
  MessageCircle,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import logo from "../assets/logo.png.png";
import BookingModal from "./BookingModal";
import Reveal3D from "./Reveal3D";

// Brand social icons
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.57-.35zM12.05 21.79h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.78 9.78 0 0 1-1.5-5.22c0-5.4 4.4-9.8 9.81-9.8a9.75 9.75 0 0 1 9.8 9.81c0 5.4-4.4 9.8-9.79 9.8zm8.31-18.12A11.7 11.7 0 0 0 12.05.3C5.51.3.2 5.6.2 12.15c0 2.09.55 4.13 1.59 5.93L.05 23.9l5.94-1.56a11.8 11.8 0 0 0 5.67 1.44c6.54 0 11.86-5.3 11.86-11.85 0-3.17-1.23-6.15-3.47-8.39z" />
  </svg>
);

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "AI Agents", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Business Automation", href: "#services" },
  { label: "SaaS Development", href: "#services" },
  { label: "AI Agents", href: "#work" },
];

const socials = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/udyam.me/",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanushreejain29/",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    href: "https://wa.me/917988556033",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:udyamdev29@gmail.com",
  },
];

const scrollTo = (e, href) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Footer() {
  const reducedMotion = useReducedMotion();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <footer id="footer" className="relative overflow-hidden bg-[#05030d] text-white">
        {/* Subtle Top Gradient Border Glow */}
        <div className="relative mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

        {/* Ambient Glass Glow overlays */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/4 h-[320px] w-[520px] rounded-full bg-violet-700/15 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[300px] w-[450px] rounded-full bg-indigo-700/12 blur-[140px]" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8"
        >
          {/* Top CTA Band */}
          <Reveal3D className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(139,92,246,0.15)]">
            <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-600/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  Get Started Today
                </span>
                <h3 className="mt-3 text-[clamp(1.5rem,4vw,2rem)] font-bold tracking-tight text-white">
                  Ready to automate your business?
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Let&apos;s map out your exact web platform, SaaS features, or AI workflow live on a call.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.35)] transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 hover:shadow-[0_0_36px_rgba(139,92,246,0.55)] cursor-pointer"
              >
                Book a Demo Call
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal3D>

          {/* 4-Column Grid */}
          <Reveal3D delay={0.1} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Logo + 1-line Tagline + Social Icons */}
            <div>
              <a
                href="#home"
                onClick={(e) => scrollTo(e, "#home")}
                className="inline-block"
              >
                <img
                  src={logo}
                  alt="UdyamDev"
                  className="h-11 w-auto object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                />
              </a>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                Building modern websites, SaaS applications, and intelligent AI automations.
              </p>
              {/* Social icons (Instagram, LinkedIn, WhatsApp, Email) */}
              <div className="mt-6 flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-neutral-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-600/20 hover:text-white hover:shadow-[0_0_18px_rgba(139,92,246,0.3)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => scrollTo(e, href)}
                      className="group inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
                    >
                      <span className="h-px w-0 bg-gradient-to-r from-violet-400 to-indigo-400 transition-all duration-300 group-hover:w-4" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => scrollTo(e, href)}
                      className="group inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
                    >
                      <span className="h-px w-0 bg-gradient-to-r from-violet-400 to-indigo-400 transition-all duration-300 group-hover:w-4" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li>
                  <a
                    href="mailto:udyamdev29@gmail.com"
                    className="group flex items-center gap-2.5 transition-colors duration-300 hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-violet-400 transition-transform duration-300 group-hover:scale-110" />
                    <span>udyamdev29@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/917988556033"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2.5 transition-colors duration-300 hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
                    <span>+91 7988556033</span>
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <span>India</span>
                </li>
              </ul>
            </div>
          </Reveal3D>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-14 border-t border-white/10 pt-6"
          >
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-neutral-500">
                © {new Date().getFullYear()} UdyamDev. All Rights Reserved.
              </p>

              <div className="flex items-center gap-4">
                <p className="flex items-center gap-1.5 text-sm text-neutral-400">
                  Built with
                  <Heart className="h-4 w-4 fill-rose-500 text-rose-500 animate-pulse" />
                  in India
                </p>
                <button
                  onClick={(e) => scrollTo(e, "#home")}
                  aria-label="Back to top"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-neutral-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-600/20 hover:text-white hover:shadow-[0_0_18px_rgba(139,92,246,0.3)] cursor-pointer"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </footer>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}

export default Footer;
