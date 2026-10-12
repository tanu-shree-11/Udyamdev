import { motion } from "framer-motion";

const WhatsAppIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.57-.35zM12.05 21.79h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.78 9.78 0 0 1-1.5-5.22c0-5.4 4.4-9.8 9.81-9.8a9.75 9.75 0 0 1 9.8 9.81c0 5.4-4.4 9.8-9.79 9.8zm8.31-18.12A11.7 11.7 0 0 0 12.05.3C5.51.3.2 5.6.2 12.15c0 2.09.55 4.13 1.59 5.93L.05 23.9l5.94-1.56a11.8 11.8 0 0 0 5.67 1.44c6.54 0 11.86-5.3 11.86-11.85 0-3.17-1.23-6.15-3.47-8.39z" />
  </svg>
);

function FloatingWhatsApp() {
  const handleClick = () => {
    window.open("https://wa.me/917988556033", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Button */}
      <button
        type="button"
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] cursor-pointer"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />
        <WhatsAppIcon className="relative z-10 transition-transform duration-300 group-hover:rotate-12" />
        
        {/* Tooltip on Hover */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl border border-white/10 bg-[#0d0922]/95 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
          Chat on WhatsApp
        </span>
      </button>
    </motion.div>
  );
}

export default FloatingWhatsApp;
