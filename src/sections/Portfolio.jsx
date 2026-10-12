import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  PhoneCall,
  UserCheck,
  MessageCircle,
  Building2,
  Stethoscope,
  Code2,
  Utensils,
  Zap,
  ShoppingBag,
  Activity,
  Calendar,
  Layers,
} from "lucide-react";
import TiltCard from "../components/TiltCard";
import BookingModal from "../components/BookingModal";
import Reveal3D from "../components/Reveal3D";

// Category filter list
const categories = ["All", "Customer", "Sales", "Industry"];

// Data-driven array of 10 AI Agents
const agents = [
  {
    id: "ai-chatbots",
    name: "AI Chatbots",
    category: "Customer",
    icon: MessageSquare,
    description: "Website and app chat assistant that answers customer inquiries instantly 24/7.",
    highlights: ["Instant Replies", "24/7 Active"],
    demoUrl: "",
    visual: "chat",
  },
  {
    id: "ai-voice",
    name: "AI Voice Calling",
    category: "Sales",
    icon: PhoneCall,
    description: "Voice AI agents that call, qualify inbound/outbound leads, and schedule follow-ups.",
    highlights: ["Voice AI", "Auto Follow-up"],
    demoUrl: "",
    visual: "voice",
  },
  {
    id: "ai-receptionist",
    name: "AI Receptionist",
    category: "Customer",
    icon: UserCheck,
    description: "Handles incoming calls, answers routine queries, and manages appointment bookings.",
    highlights: ["Call Handling", "Smart Booking"],
    demoUrl: "",
    visual: "voice",
  },
  {
    id: "whatsapp-ai",
    name: "WhatsApp Automation AI",
    category: "Customer",
    icon: MessageCircle,
    description: "Automates customer replies, follow-ups, and order status updates on WhatsApp.",
    highlights: ["WhatsApp Sync", "Zero Latency"],
    demoUrl: "",
    visual: "chat",
  },
  {
    id: "real-estate-ai",
    name: "Real Estate AI",
    category: "Industry",
    icon: Building2,
    description: "Qualifies buyers, answers property questions, and schedules site visits automatically.",
    highlights: ["Property Match", "Site Booking"],
    demoUrl: "",
    visual: "calendar",
  },
  {
    id: "healthcare-ai",
    name: "Healthcare AI",
    category: "Industry",
    icon: Stethoscope,
    description: "Handles patient appointment bookings, automated reminders, and clinic FAQs.",
    highlights: ["Clinic Reminders", "Patient Sync"],
    demoUrl: "", // placeholder for dental website demo link
    visual: "calendar",
  },
  {
    id: "coding-ai",
    name: "Coding AI",
    category: "Industry",
    icon: Code2,
    description: "Assists development teams with code generation, bug fixing, and workflow acceleration.",
    highlights: ["Dev Assist", "Code Sync"],
    demoUrl: "",
    visual: "nodes",
  },
  {
    id: "restaurant-ai",
    name: "Restaurant AI",
    category: "Industry",
    icon: Utensils,
    description: "Manages table reservations, interactive menu Q&A, and online ordering.",
    highlights: ["Table Booking", "Menu Q&A"],
    demoUrl: "", // placeholder for Velora demo link
    visual: "calendar",
  },
  {
    id: "lead-gen-ai",
    name: "Lead Generation AI",
    category: "Sales",
    icon: Zap,
    description: "Identifies, qualifies, and nurtures high-intent sales leads across web channels.",
    highlights: ["Lead Scoring", "Nurture Flow"],
    demoUrl: "",
    visual: "nodes",
  },
  {
    id: "ecommerce-support-ai",
    name: "E-commerce Support AI",
    category: "Customer",
    icon: ShoppingBag,
    description: "Assists buyers with order tracking, returns processing, and product recommendations.",
    highlights: ["Order Tracking", "Return Assist"],
    demoUrl: "",
    visual: "chat",
  },
];

// Pure SVG/CSS mini animated visuals
function AgentMiniVisual({ type, reducedMotion }) {
  if (type === "chat") {
    return (
      <div className="flex flex-col gap-1.5 rounded-xl border border-white/10 bg-black/40 p-2.5 text-[10px]">
        <div className="self-start rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1 text-neutral-300">
          How can AI help my business?
        </div>
        <div className="self-end rounded-lg border border-violet-500/30 bg-violet-600/25 px-2.5 py-1 text-violet-100 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
          Instant 24/7 replies &amp; CRM sync! ✓
        </div>
      </div>
    );
  }

  if (type === "voice") {
    return (
      <div className="flex items-center justify-between gap-1 rounded-xl border border-white/10 bg-black/40 p-3">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-violet-400" />
          <span className="text-[10px] font-semibold text-neutral-300">Voice Processing</span>
        </div>
        <div className="flex items-end gap-1 h-5">
          {[40, 75, 50, 90, 65, 80].map((h, i) => (
            <motion.div
              key={i}
              animate={reducedMotion ? undefined : { height: [`${h}%`, `${Math.max(25, (h + 30) % 100)}%`, `${h}%`] }}
              transition={{ duration: 1.5 + (i % 3) * 0.3, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 rounded-t bg-violet-400"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === "calendar") {
    return (
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-2.5 text-[10px]">
        <div className="flex items-center gap-2 text-violet-300">
          <Calendar className="h-4 w-4" />
          <span className="font-semibold text-white">Slot Reserved</span>
        </div>
        <div className="flex items-center gap-1 rounded border border-emerald-500/30 bg-emerald-500/20 px-2 py-0.5 text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Confirmed</span>
        </div>
      </div>
    );
  }

  // Default: nodes
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-2.5 text-[10px]">
      <div className="flex items-center gap-2 text-neutral-300">
        <Layers className="h-4 w-4 text-indigo-400" />
        <span>Workflow Pipeline</span>
      </div>
      <div className="flex items-center gap-1 text-violet-300">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-ping" />
        <span>Active</span>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35, rotateX: 10, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function Work() {
  const reducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const filteredAgents =
    activeCategory === "All"
      ? agents
      : agents.filter((a) => a.category === activeCategory);

  const handleCardClick = (demoUrl) => {
    if (demoUrl && demoUrl.trim() !== "") {
      window.open(demoUrl, "_blank");
    } else {
      setIsBookingOpen(true);
    }
  };

  return (
    <>
      <section
        id="work"
        className="relative overflow-hidden bg-[#05030d] px-6 py-20 text-white sm:py-28 lg:px-8"
        style={{ perspective: 1200 }}
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/4 h-[420px] w-[520px] rounded-full bg-violet-700/14 blur-[150px]" />
          <div className="absolute bottom-0 left-0 h-[360px] w-[460px] rounded-full bg-indigo-700/12 blur-[150px]" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 mx-auto max-w-7xl"
        >
          {/* Section Heading & Subtext */}
          <Reveal3D className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />
              Autonomous Solutions
            </span>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.05] tracking-tight">
              AI Agents That Work{" "}
              <span className="u-gradient-text">
                For You
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-400 sm:text-lg">
              Intelligent, autonomous AI agents designed to handle customer queries, qualify sales leads, and streamline industry workflows 24/7.
            </p>
          </Reveal3D>

          {/* Category Filter Pills */}
          <Reveal3D delay={0.1} className="mb-12 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                      : "border border-white/10 bg-white/[0.03] text-neutral-400 backdrop-blur-xl hover:border-white/25 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </Reveal3D>

          {/* Agents Grid (3 Cols Desktop, 2 Tablet, 1 Mobile) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAgents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <Reveal3D key={agent.id} delay={index * 0.1}>
                  <TiltCard
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)]"
                  >
                  {/* Top Row: Category Pill & Icon */}
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                        {agent.category}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-600/20 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-violet-200 transition-colors">
                      {agent.name}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-neutral-400">
                      {agent.description}
                    </p>
                  </div>

                  {/* Middle: Mini Animated Visual */}
                  <div className="my-5">
                    <AgentMiniVisual type={agent.visual} reducedMotion={reducedMotion} />
                  </div>

                  {/* Bottom: Highlight Chips & CTA Button */}
                  <div>
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {agent.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-neutral-300"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCardClick(agent.demoUrl)}
                      className="group/btn flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-2.5 text-xs font-semibold text-neutral-200 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-600/20 hover:text-white hover:shadow-[0_0_18px_rgba(139,92,246,0.25)] cursor-pointer"
                    >
                      View Demo
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </TiltCard>
              </Reveal3D>
            );
          })}
        </div>
        </motion.div>
      </section>

      {/* Booking Modal Trigger for Demo Call */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}

export default Work;
