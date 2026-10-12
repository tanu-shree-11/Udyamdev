import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Send,
  CheckCircle2,
} from "lucide-react";
import Reveal3D from "../components/Reveal3D";

// Brand social icons (inline SVG since lucide-react v1.x removed brand icons)
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.95 10.95 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.67.8.55A10.5 10.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.57-.35zM12.05 21.79h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.78 9.78 0 0 1-1.5-5.22c0-5.4 4.4-9.8 9.81-9.8a9.75 9.75 0 0 1 9.8 9.81c0 5.4-4.4 9.8-9.79 9.8zm8.31-18.12A11.7 11.7 0 0 0 12.05.3C5.51.3.2 5.6.2 12.15c0 2.09.55 4.13 1.59 5.93L.05 23.9l5.94-1.56a11.8 11.8 0 0 0 5.67 1.44c6.54 0 11.86-5.3 11.86-11.85 0-3.17-1.23-6.15-3.47-8.39z" />
  </svg>
);

const contactDetails = [
  {
    icon: User,
    label: "Name",
    value: "Tanushree",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7988556033",
    href: "tel:+917988556033",
  },
  {
    icon: Mail,
    label: "Email",
    value: "udyamdev29@gmail.com",
    href: "mailto:udyamdev29@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
  },
];

const socials = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanushreejain29/",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/udyam.me/",
  },
  {
    icon: XIcon,
    label: "X",
    href: "https://x.com/UdyamDev",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/tanu-shree-11",
  },
];

import BookingModal from "../components/BookingModal";
import { Sparkles } from "lucide-react";

const services = [
  "Business Automation",
  "SaaS Development",
  "AI Agents & Workflows",
  "Website Development",
  "Lead Generation & CRM",
  "WhatsApp Integration",
  "Custom Software",
  "Other",
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

function Contact() {
  const reducedMotion = useReducedMotion();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email.";
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!/^[+\d][\d\s-]{7,}$/.test(form.phone))
      next.phone = "Please enter a valid phone number.";
    if (!form.service) next.service = "Please select a service.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Please describe your project (min 10 characters).";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const inputBase =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none backdrop-blur-xl transition-all duration-300 focus:border-violet-400/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]";
  const errorBase = "mt-1.5 text-xs text-rose-400";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#05030d] px-6 py-20 text-white sm:py-28 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-[400px] w-[500px] rounded-full bg-violet-700/14 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-indigo-700/12 blur-[150px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <Reveal3D className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Have an idea, a website requirement or a business process you want
            to simplify? Let&apos;s talk.
          </p>
        </Reveal3D>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          {/* Left: contact info */}
          <Reveal3D className="flex flex-col gap-4">
            {contactDetails.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-neutral-500">
                      {label}
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-neutral-200">
                      {value}
                    </div>
                  </div>
                </>
              );
              const cls =
                "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]";
              return href ? (
                <a key={label} href={href} className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {inner}
                </div>
              );
            })}

            {/* WhatsApp */}
            <a
              href="https://wa.me/917988556033"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-500/[0.1] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-transform duration-300 group-hover:scale-110">
                <WhatsAppIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-500">
                  WhatsApp
                </div>
                <div className="mt-0.5 text-sm font-medium text-emerald-300">
                  Chat on WhatsApp
                </div>
              </div>
            </a>

            {/* Social */}
            <div className="mt-2">
              <div className="mb-3 text-xs uppercase tracking-wider text-neutral-500">
                Follow us
              </div>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-neutral-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal3D>

          {/* Right: form */}
          <Reveal3D
            delay={0.2}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl sm:p-8"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/20 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-indigo-500/20 blur-[80px]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />

            {submitted ? (
              <div className="relative flex min-h-[420px] flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"
                >
                  <CheckCircle2 className="h-10 w-10" />
                </motion.div>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  Thanks! Your message has been received.
                </h3>
                <p className="mt-2 max-w-sm text-sm text-neutral-400">
                  We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputBase}
                    />
                    {errors.name && <p className={errorBase}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputBase}
                    />
                    {errors.email && <p className={errorBase}>{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-300">
                      Business / Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Inc. (optional)"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-300">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 00000"
                      className={inputBase}
                    />
                    {errors.phone && <p className={errorBase}>{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-300">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputBase} ${form.service ? "text-white" : "text-neutral-500"}`}
                  >
                    <option value="" disabled className="bg-[#0a0714] text-neutral-500">
                      Select service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#0a0714] text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className={errorBase}>{errors.service}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project, goals, or what you'd like to simplify..."
                    className={`${inputBase} resize-none`}
                  />
                  {errors.message && <p className={errorBase}>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(139,92,246,0.55)]"
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </span>
                </button>
              </form>
            )}
          </Reveal3D>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
