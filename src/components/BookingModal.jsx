import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

const serviceOptions = [
  "Business Automation",
  "SaaS Development",
  "AI Agents & Workflows",
  "Website Development",
  "Lead Generation & CRM",
  "WhatsApp Integration",
  "Custom Software",
  "Other — Custom Needs",
];

function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    service: "Business Automation",
    date: new Date().toISOString().split("T")[0],
    timeSlot: "10:00 AM",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.timeSlot) newErrors.timeSlot = "Please select a time slot";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const message =
      `Hi UdyamDev! I would like to book a Free Demo Call.\n\n` +
      `*Full Name:* ${formData.fullName}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service Needed:* ${formData.service}\n` +
      `*Preferred Slot:* ${formData.date} at ${formData.timeSlot}\n` +
      `*Details:* ${formData.description || "N/A"}`;

    const waUrl = `https://wa.me/917988556033?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:p-6"
        onClick={handleResetAndClose}
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-[#0a0718]/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.85),0_0_60px_rgba(139,92,246,0.3)] backdrop-blur-2xl sm:p-8"
        >
          {/* Top ambient glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-44 w-80 -translate-x-1/2 rounded-full bg-violet-600/30 blur-[80px]" />

          {/* Close button */}
          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close modal"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-neutral-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-600/20 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Top Badge */}
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-600/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-violet-300">
                <Sparkles className="h-3 w-3" />
                Free • 30 Minutes • No Pitch
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Book a Demo Call{" "}
                <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                  — It&apos;s Free
                </span>
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400 sm:text-sm">
                Tell us where you&apos;re stuck. We&apos;ll map out the exact automation or digital solution live on the call.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Full Name <span className="text-violet-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className={`w-full rounded-xl border bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all duration-300 focus:border-violet-400 focus:bg-violet-950/20 focus:ring-1 focus:ring-violet-400 ${
                      errors.fullName ? "border-red-500/80" : "border-white/10"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-red-400">{errors.fullName}</p>
                  )}
                </div>

                {/* Contact Row (WhatsApp + Email) */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      WhatsApp Number <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.whatsapp}
                      onChange={(e) => handleChange("whatsapp", e.target.value)}
                      className={`w-full rounded-xl border bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all duration-300 focus:border-violet-400 focus:bg-violet-950/20 focus:ring-1 focus:ring-violet-400 ${
                        errors.whatsapp ? "border-red-500/80" : "border-white/10"
                      }`}
                    />
                    {errors.whatsapp && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.whatsapp}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Email Address <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full rounded-xl border bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all duration-300 focus:border-violet-400 focus:bg-violet-950/20 focus:ring-1 focus:ring-violet-400 ${
                        errors.email ? "border-red-500/80" : "border-white/10"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    I Need Automation For / Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#120d22] px-4 py-2.5 text-sm text-white outline-none transition-all duration-300 focus:border-violet-400"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#120d22] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time Slot Picker */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Select Date &amp; Time Slot <span className="text-violet-400">*</span>
                  </label>
                  <div className="mb-2.5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2">
                    <Calendar className="h-4 w-4 text-violet-400" />
                    <input
                      type="date"
                      value={formData.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="w-full bg-transparent text-sm text-white outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => {
                      const active = formData.timeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleChange("timeSlot", slot)}
                          className={`flex items-center justify-center rounded-lg border py-2 text-[11px] font-medium transition-all duration-200 ${
                            active
                              ? "border-violet-400 bg-violet-600 text-white shadow-[0_0_12px_rgba(139,92,246,0.4)]"
                              : "border-white/10 bg-white/[0.03] text-neutral-400 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Short Description */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Describe Your Need
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. I need an automated invoice & lead system..."
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all duration-300 focus:border-violet-400 focus:bg-violet-950/20"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.4)] transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
                >
                  Book My Free Demo Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p className="text-center text-[11px] text-neutral-500">
                  No spam. No commitments. We&apos;ll reach out within 24 hours.
                </p>
              </form>
            </div>
          ) : (
            /* Success View */
            <div className="py-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/20 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white">
                Demo Call Requested!
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                We have opened WhatsApp with your details prefilled. Please tap <span className="font-semibold text-emerald-400">Send</span> on WhatsApp to finalize your booking!
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="rounded-full bg-violet-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_24px_rgba(139,92,246,0.4)]"
                >
                  Done &amp; Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default BookingModal;
