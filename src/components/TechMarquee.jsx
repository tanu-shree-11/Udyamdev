import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  SiWhatsapp,
  SiNodedotjs,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiPython,
  SiN8N,
  SiSupabase,
  SiMake,
} from "react-icons/si";

const techLogos = [
  { name: "WhatsApp", icon: SiWhatsapp, color: "#25D366" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "n8n", icon: SiN8N, color: "#FF6D5A" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Make", icon: SiMake, color: "#A626FF" },
];

function TechMarquee() {
  const reducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate logos array for seamless infinite looping
  const duplicatedLogos = [...techLogos, ...techLogos, ...techLogos];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden border-y border-white/10 bg-[#070414]/90 py-6 backdrop-blur-md"
    >
      {/* Mask fade on both edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#05030d] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#05030d] to-transparent" />

      <motion.div
        animate={reducedMotion || isHovered ? undefined : { x: ["0%", "-33.33%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center gap-12 sm:gap-16 px-4"
      >
        {duplicatedLogos.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center cursor-pointer py-1"
            >
              {/* Image-style Brand Logo (~32px) */}
              <div
                className="grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-125"
                style={{ color: tech.color }}
              >
                <Icon className="h-8 w-8 text-current sm:h-9 sm:w-9" />
              </div>

              {/* Tooltip on Hover */}
              <div className="pointer-events-none absolute -bottom-7 rounded-md border border-white/15 bg-[#0e0a24]/95 px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-1 whitespace-nowrap z-20">
                {tech.name}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default TechMarquee;
