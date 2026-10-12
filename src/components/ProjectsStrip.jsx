import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight, ExternalLink, Image as ImageIcon } from "lucide-react";
import BookingModal from "./BookingModal";
import TiltCard from "./TiltCard";
import Reveal3D from "./Reveal3D";

const projects = [
  {
    id: "velora",
    title: "Velora",
    category: "Restaurant Website",
    description: "Fine dining experience website featuring live reservation booking, AI concierge, and digital menu showcase.",
    imageSrc: "/projects/velora.jpg",
    imageHoverSrc: null,
    demoUrl: "#",
    tags: ["Table Booking", "AI Concierge", "Restaurant"],
  },
  {
    id: "dental-practice",
    title: "Dental Practice",
    category: "Healthcare Website & Dashboard",
    description: "Modern dental clinic platform with online appointment booking and live Supabase admin dashboard.",
    imageSrc: "/projects/dental-1.jpg",
    imageHoverSrc: "/projects/dental-2.jpg",
    demoUrl: "#",
    tags: ["Appointment Booking", "Admin Portal", "Healthcare"],
  },
  {
    id: "brima-cafe",
    title: "Brima Cafe",
    category: "Cafe Website",
    description: "Rooftop cafe website in Jaipur featuring menu showcase, ambiance highlights, and visit booking.",
    imageSrc: "/projects/brima-1.jpg",
    imageHoverSrc: "/projects/brima-2.jpg",
    demoUrl: "#",
    tags: ["Jaipur Cafe", "Menu Showcase", "Hospitality"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

function ProjectsStrip() {
  const reducedMotion = useReducedMotion();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [imgErrors, setImgErrors] = useState({});

  const handleDemoClick = (e, url) => {
    e.preventDefault();
    if (url && url.trim() !== "" && url !== "#") {
      window.open(url, "_blank");
    } else {
      setIsBookingOpen(true);
    }
  };

  const handleImageError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden bg-[#05030d] px-6 py-20 text-white sm:py-28 lg:px-8"
        style={{ perspective: 1200 }}
      >
        {/* Background ambient glow + faint grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/3 h-[420px] w-[550px] rounded-full bg-violet-700/14 blur-[160px]" />
          <div className="absolute bottom-0 right-0 h-[380px] w-[450px] rounded-full bg-indigo-700/12 blur-[150px]" />
          <div className="u-grid absolute inset-0 opacity-60" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 mx-auto max-w-7xl"
        >
          {/* Section Header */}
          <Reveal3D className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-600/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />
              Featured Projects
            </span>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.05] tracking-tight">
              Recent Build{" "}
              <span className="u-gradient-text">
                Showcase
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-400 sm:text-lg">
              A glimpse of custom web platforms, SaaS applications, and AI integrations we&apos;ve engineered.
            </p>
          </Reveal3D>

          {/* 3 Browser-Frame Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj, index) => (
              <Reveal3D key={proj.id} delay={index * 0.1}>
                <TiltCard className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40 hover:bg-white/[0.05] hover:shadow-[0_24px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(139,92,246,0.2)]">
                  {/* Browser Frame Top Header */}
                  <div className="relative overflow-hidden border-b border-white/10 bg-[#0a0718]">
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="rounded-full border border-violet-500/30 bg-violet-600/20 px-2.5 py-0.5 text-[10px] font-semibold text-violet-300">
                        Demo Project
                      </span>
                      <ExternalLink className="h-3 w-3 text-neutral-500" />
                    </div>

                    {/* Image / Screen Container */}
                    <div className="relative h-48 w-full overflow-hidden bg-[#0d0922]/90 flex items-center justify-center group-hover:bg-[#120d2d] transition-colors">
                      {proj.imageSrc && !imgErrors[proj.id] ? (
                        <>
                          <img
                            src={proj.imageSrc}
                            alt={proj.title}
                            loading="lazy"
                            onError={() => handleImageError(proj.id)}
                            className={`h-full w-full object-cover transition-all duration-700 ease-out ${
                              proj.imageHoverSrc ? "group-hover:opacity-0" : "group-hover:scale-105"
                            }`}
                          />
                          {proj.imageHoverSrc && (
                            <img
                              src={proj.imageHoverSrc}
                              alt={`${proj.title} preview 2`}
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                            />
                          )}
                        </>
                      ) : (
                        /* Glass Wireframe Fallback when image is missing */
                        <div className="flex flex-col items-center justify-center p-6 text-center transition-transform duration-700 ease-out group-hover:scale-105">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-600/20 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                            <ImageIcon className="h-7 w-7" />
                          </div>
                          <p className="mt-3 text-xs font-semibold text-white">{proj.title} Screen Preview</p>
                          <span className="mt-1 text-[10px] text-neutral-500 font-mono">/projects/{proj.id}.jpg</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-violet-300/90">
                        {proj.category}
                      </span>
                      <h3 className="mt-1 text-xl font-bold tracking-tight text-white group-hover:text-violet-200 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                        {proj.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6">
                      <a
                        href={proj.demoUrl || "#"}
                        onClick={(e) => handleDemoClick(e, proj.demoUrl)}
                        className="group/btn flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-xs font-semibold text-neutral-200 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-600/20 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] cursor-pointer"
                      >
                        View Demo
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </Reveal3D>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}

export default ProjectsStrip;
