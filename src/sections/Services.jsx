import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Bot,
  Code2,
  MessageCircle,
  Target,
  Database,
  Mail,
  Globe,
  LayoutGrid,
  Terminal,
  BarChart3,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Activity,
  Layers,
  Cpu,
  ShieldCheck,
  Clock,
  Send,
  Lock,
} from "lucide-react";
import BookingModal from "../components/BookingModal";
import Reveal3D from "../components/Reveal3D";

// Data configuration for the interactive showcase
const servicesData = {
  automation: {
    id: "automation",
    tabLabel: "Business Automation",
    titlePrefix: "Business",
    titleGradient: "Automation",
    description:
      "Streamline operations, handle lead qualification automatically, sync CRMs and connect tools to eliminate manual busywork.",
    capabilities: [
      {
        id: "whatsapp",
        title: "WhatsApp Automation",
        description: "Automated instant customer responses, lead qualification, and interactive chatbot flows on WhatsApp.",
        icon: MessageCircle,
      },
      {
        id: "lead-capture",
        title: "Lead Capture & Follow-up",
        description: "Capture inbound leads automatically across forms & channels with instant nurture triggers.",
        icon: Target,
      },
      {
        id: "crm-sync",
        title: "CRM Sync",
        description: "Real-time bi-directional synchronization between forms, webhooks, databases, and CRMs.",
        icon: Database,
      },
      {
        id: "ai-agents",
        title: "AI Agents",
        description: "Autonomous AI agents that research, verify data, route tickets, and execute multi-step business logic.",
        icon: Bot,
      },
      {
        id: "email-auto",
        title: "Email Automation",
        description: "Intelligent email sequences, event-driven notifications, and automated status updates.",
        icon: Mail,
      },
    ],
  },
  saas: {
    id: "saas",
    tabLabel: "SaaS Development",
    titlePrefix: "SaaS",
    titleGradient: "Development",
    description:
      "Full-stack web apps, custom business software, and modern high-converting websites engineered for scale and speed.",
    capabilities: [
      {
        id: "websites",
        title: "Websites",
        description: "High-converting, responsive marketing websites built with modern frontend frameworks and SEO optimization.",
        icon: Globe,
      },
      {
        id: "web-apps",
        title: "Web Apps",
        description: "Scalable full-stack SaaS applications, client portals, and cloud-native web tools.",
        icon: LayoutGrid,
      },
      {
        id: "custom-software",
        title: "Custom Software",
        description: "Tailored business software solutions designed around your exact operational workflows.",
        icon: Code2,
      },
      {
        id: "api-backend",
        title: "APIs & Backend",
        description: "Robust REST & GraphQL APIs, secure database schemas, serverless functions, and microservices.",
        icon: Terminal,
      },
      {
        id: "dashboards",
        title: "Dashboards",
        description: "Real-time analytics dashboards, data visualization panels, and administrative control suites.",
        icon: BarChart3,
      },
    ],
  },
};

// Websites slideshow slides from /public/projects/
const websiteSlides = [
  { src: "/projects/velora.jpg", caption: "Velora · Restaurant Demo" },
  { src: "/projects/dental-1.jpg", caption: "Dental Practice · Healthcare Portal" },
  { src: "/projects/brima-1.jpg", caption: "Brima Cafe · Rooftop Cafe Demo" },
];

function WebsitesSlideshow({ reducedMotion, isPanelHovered, onCaptionChange }) {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    if (isPanelHovered) return;
    const interval = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % websiteSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPanelHovered]);

  const currentSlide = websiteSlides[slideIdx];

  useEffect(() => {
    if (onCaptionChange) {
      onCaptionChange(currentSlide.caption);
    }
  }, [slideIdx, onCaptionChange, currentSlide.caption]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black/40">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide.src}
          src={currentSlide.src}
          alt={currentSlide.caption}
          loading="lazy"
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </AnimatePresence>

      {/* Slide indicator dots */}
      <div className="absolute bottom-2.5 right-3 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md">
        {websiteSlides.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === slideIdx ? "w-3 bg-violet-400" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Candidates for service item screenshots
const serviceImageCandidates = {
  websites: "/services/websites.jpg",
  "web-apps": "/services/webapps.jpg",
  "custom-software": "/services/software.jpg",
  "api-backend": "/services/api.jpg",
  dashboards: "/services/dashboards.jpg",
  whatsapp: "/services/whatsapp.jpg",
  "lead-capture": "/services/leads.jpg",
  "crm-sync": "/services/crm.jpg",
  "ai-agents": "/services/agents.jpg",
  "email-auto": "/services/email.jpg",
};

// Rich animated SVG/CSS visual components (fallback if no screenshot exists)
function CapabilityVisual({ capId, reducedMotion }) {
  switch (capId) {
    // === Business Automation Visuals ===
    case "whatsapp":
      return (
        <div className="flex h-full flex-col justify-between gap-3 text-xs">
          <div className="flex-1 space-y-3 overflow-hidden py-1">
            {/* User message */}
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-[85%] rounded-2xl rounded-tl-none border border-white/10 bg-white/[0.06] p-3 text-neutral-200"
            >
              Hi, I want to automate our customer inquiries &amp; bookings.
              <span className="mt-1 block text-[9px] text-neutral-400">10:42 AM</span>
            </motion.div>

            {/* Bot message */}
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: reducedMotion ? 0 : 0.2 }}
              className="ml-auto max-w-[88%] rounded-2xl rounded-tr-none border border-violet-500/30 bg-violet-600/25 p-3 text-violet-100 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
            >
              Hello! We can automate your full lead intake, FAQs &amp; CRM sync with 0 latency.
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                <span className="rounded-lg border border-violet-400/40 bg-violet-500/20 px-2.5 py-1 text-[10px] text-white">
                  Instant Qualification
                </span>
                <span className="rounded-lg border border-violet-400/40 bg-violet-500/20 px-2.5 py-1 text-[10px] text-white">
                  Calendar Sync
                </span>
              </div>
              <span className="mt-1.5 block text-right text-[9px] text-violet-300/80">
                Just now · Verified Bot ✓✓
              </span>
            </motion.div>
          </div>
        </div>
      );

    case "lead-capture":
      return (
        <div className="flex h-full flex-col justify-between gap-2.5 text-xs">
          <div className="flex-1 space-y-2 py-0.5">
            {/* Stage 1 */}
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-2.5"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600/30 text-violet-300">
                <Target className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">Inbound Lead Detected</p>
                <p className="text-[10px] text-neutral-400">Website Form &amp; Ad Channels</p>
              </div>
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            </motion.div>

            {/* Stage 2 */}
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: reducedMotion ? 0 : 0.15 }}
              className="flex items-center gap-3 rounded-xl border border-violet-500/40 bg-violet-950/40 p-2.5 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/30 text-violet-200">
                <Bot className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">AI Scoring &amp; Classification</p>
                <p className="text-[10px] text-violet-300">High-Intent Buyer Verified</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-violet-400 animate-ping" />
            </motion.div>

            {/* Stage 3 */}
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: reducedMotion ? 0 : 0.3 }}
              className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-2.5"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                <Send className="h-3.5 w-3.5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">Instant WhatsApp / Email Dispatch</p>
                <p className="text-[10px] text-emerald-300/80">Triggered in 0.8s</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </motion.div>
          </div>
        </div>
      );

    case "crm-sync":
      return (
        <div className="flex h-full flex-col justify-between gap-2.5 text-xs">
          <div className="flex-1 space-y-2 py-0.5">
            {[
              { label: "Client Profile & Contact", source: "Website Lead", status: "Synced" },
              { label: "WhatsApp Chat Transcript", source: "WhatsApp AI", status: "Synced" },
              { label: "Deal Pipeline Progression", source: "Webhook Sync", status: "Active" },
            ].map((row, i) => (
              <motion.div
                key={i}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: reducedMotion ? 0 : i * 0.12 }}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-2.5"
              >
                <div>
                  <p className="font-semibold text-white">{row.label}</p>
                  <p className="text-[10px] text-neutral-400">Route: {row.source}</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] text-neutral-300">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      row.status === "Synced" ? "bg-emerald-400" : "bg-violet-400 animate-pulse"
                    }`}
                  />
                  {row.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );

    case "ai-agents":
      return (
        <div className="flex h-full flex-col justify-between gap-2.5 text-xs">
          <div className="flex-1 space-y-2.5 py-0.5">
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-violet-500/30 bg-violet-950/30 p-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-violet-200">Active Workflow Execution</span>
                <span className="rounded bg-violet-500/20 px-2 py-0.5 text-[10px] font-mono text-violet-300">
                  Running
                </span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-neutral-300">
                Inbound request parsed → Verification against internal knowledge base → Context synthesis &amp; automated action dispatch.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-2">
              {["Webhooks", "CRM API", "Vector Store"].map((tool, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-center text-[10px] font-medium text-neutral-300"
                >
                  <span className="block text-violet-400 text-[9px] uppercase tracking-wider">Tool</span>
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "email-auto":
      return (
        <div className="flex h-full flex-col justify-between gap-2 text-xs">
          <div className="flex-1 space-y-2 py-0.5">
            {[
              { step: "01", name: "Welcome & Onboarding Kit", trigger: "Instant Trigger" },
              { step: "02", name: "Value Case Studies & Demos", trigger: "24h Event Delay" },
              { step: "03", name: "Strategy Call Invitation", trigger: "Engagement Condition" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: reducedMotion ? 0 : i * 0.12 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-2.5"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600/25 font-mono text-[10px] font-bold text-indigo-300">
                  {s.step}
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-white">{s.name}</p>
                  <p className="text-[10px] text-neutral-400">{s.trigger}</p>
                </div>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              </motion.div>
            ))}
          </div>
        </div>
      );

    // === SaaS Development Visuals ===
    case "websites":
      return (
        <div className="flex h-full flex-col justify-between gap-2 text-xs">
          {/* Wireframe cascading sections (No duplicate browser chrome) */}
          <div className="flex-1 space-y-2 rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between border-b border-white/5 pb-1.5"
            >
              <div className="h-2.5 w-16 rounded bg-violet-400/50" />
              <div className="flex gap-2">
                <div className="h-2 w-8 rounded bg-white/20" />
                <div className="h-2 w-8 rounded bg-white/20" />
                <div className="h-2 w-8 rounded bg-white/20" />
              </div>
            </motion.div>

            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: reducedMotion ? 0 : 0.1 }}
              className="space-y-1.5 py-1"
            >
              <div className="h-5 w-4/5 rounded bg-white/25" />
              <div className="h-2.5 w-3/5 rounded bg-white/10" />
              <div className="h-7 w-28 rounded-lg bg-violet-600/40 border border-violet-500/40" />
            </motion.div>

            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: reducedMotion ? 0 : 0.2 }}
              className="grid grid-cols-3 gap-2 pt-1"
            >
              <div className="h-14 rounded-lg border border-white/10 bg-white/[0.04] p-1.5 flex flex-col justify-between">
                <div className="h-2 w-10 rounded bg-violet-400/40" />
                <div className="h-1.5 w-full rounded bg-white/10" />
              </div>
              <div className="h-14 rounded-lg border border-white/10 bg-white/[0.04] p-1.5 flex flex-col justify-between">
                <div className="h-2 w-10 rounded bg-violet-400/40" />
                <div className="h-1.5 w-full rounded bg-white/10" />
              </div>
              <div className="h-14 rounded-lg border border-white/10 bg-white/[0.04] p-1.5 flex flex-col justify-between">
                <div className="h-2 w-10 rounded bg-violet-400/40" />
                <div className="h-1.5 w-full rounded bg-white/10" />
              </div>
            </motion.div>
          </div>
        </div>
      );

    case "web-apps":
      return (
        <div className="flex h-full flex-col justify-between gap-2.5 text-xs">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
              <span className="text-[10px] text-neutral-400">Active Workspaces</span>
              <div className="mt-2 h-1.5 w-full rounded-full bg-violet-500/40" />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
              <span className="text-[10px] text-neutral-400">Throughput Capacity</span>
              <div className="mt-2 h-1.5 w-full rounded-full bg-emerald-500/40" />
            </div>
          </div>

          <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-3 flex flex-col justify-end">
            <div className="flex items-end gap-1.5 h-16">
              {[40, 65, 50, 85, 60, 95, 70, 90, 65, 80].map((h, i) => (
                <motion.div
                  key={i}
                  initial={reducedMotion ? { height: `${h}%` } : { height: "0%" }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: reducedMotion ? 0 : i * 0.04 }}
                  className="w-full rounded-t bg-gradient-to-t from-violet-600 to-indigo-400"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      );

    case "custom-software":
      return (
        <div className="flex h-full flex-col justify-between gap-2 text-xs">
          <div className="relative flex-1 py-1">
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { name: "Auth & RBAC Engine", desc: "Security Layer" },
                { name: "Database Schema", desc: "Data Storage" },
                { name: "API Gateway", desc: "Routing Layer" },
                { name: "Business Engine", desc: "Logic Core" },
              ].map((mod, i) => (
                <motion.div
                  key={i}
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: reducedMotion ? 0 : i * 0.1 }}
                  className="rounded-xl border border-violet-500/25 bg-violet-950/30 p-2.5"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
                    <p className="font-semibold text-white text-[11px]">{mod.name}</p>
                  </div>
                  <p className="mt-1 text-[9px] text-neutral-400">{mod.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      );

    case "api-backend":
      return (
        <div className="flex h-full flex-col justify-between gap-2 text-xs font-mono">
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
            <span className="text-[11px] text-emerald-400">POST /api/v1/services/build</span>
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">200 OK</span>
          </div>

          <div className="flex-1 rounded-xl border border-white/10 bg-black/60 p-3 text-[11px] leading-relaxed text-neutral-300">
            <p className="text-violet-400">&#123;</p>
            <p className="pl-4">
              <span className="text-neutral-500">&quot;status&quot;:</span> <span className="text-emerald-300">&quot;ready&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-neutral-500">&quot;protocols&quot;:</span> <span className="text-indigo-300">&quot;REST / GraphQL&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-neutral-500">&quot;security&quot;:</span> <span className="text-violet-300">&quot;JWT / OAuth2&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-neutral-500">&quot;database&quot;:</span> <span className="text-emerald-300">&quot;PostgreSQL Synced&quot;</span>
            </p>
            <p className="text-violet-400">&#125;</p>
          </div>
        </div>
      );

    case "dashboards":
      return (
        <div className="flex h-full flex-col justify-between gap-2 text-xs">
          <div className="flex-1 space-y-2 py-1">
            {/* SVG Wave Chart */}
            <div className="h-20 w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-2">
              <svg className="h-full w-full overflow-visible" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="dashGradUpdated" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  d="M 0,30 Q 25,8 50,18 T 100,5"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="2.5"
                />
                <path d="M 0,30 Q 25,8 50,18 T 100,5 L 100,40 L 0,40 Z" fill="url(#dashGradUpdated)" />
              </svg>
            </div>

            {/* Table data rows */}
            <div className="space-y-1.5">
              {[
                { name: "Order Processing Metric", val: "Optimal" },
                { name: "System Response Time", val: "Active" },
              ].map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1 text-[10px]"
                >
                  <span className="text-neutral-300">{row.name}</span>
                  <span className="text-emerald-400">{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

function ServicesContent() {
  const reducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState("automation");
  const [activeCapabilityId, setActiveCapabilityId] = useState("whatsapp");
  const [isHovered, setIsHovered] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Websites slideshow caption
  const [websiteCaption, setWebsiteCaption] = useState(websiteSlides[0].caption);

  // Image load error tracking (falls back to SVG visual)
  const [imgLoadErrors, setImgLoadErrors] = useState({});

  // Mouse tilt state on desktop
  const panelRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const currentService = servicesData[activeTab];

  // Tab switch resets capability to the first of that tab
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setActiveCapabilityId(servicesData[tabId].capabilities[0].id);
    setUserInteracted(true);
  };

  const handleCapabilityClick = (capId) => {
    setActiveCapabilityId(capId);
    setUserInteracted(true);
  };

  // 5s Auto-rotate capability unless hovered or user interacted
  useEffect(() => {
    if (isHovered || userInteracted) return;

    const timer = setInterval(() => {
      const caps = servicesData[activeTab].capabilities;
      const currentIndex = caps.findIndex((c) => c.id === activeCapabilityId);
      const nextIndex = (currentIndex + 1) % caps.length;
      setActiveCapabilityId(caps[nextIndex].id);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeTab, activeCapabilityId, isHovered, userInteracted]);

  // Desktop subtle mouse-tilt handler
  const handleMouseMove = (e) => {
    if (reducedMotion || !panelRef.current) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const rect = panelRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  const activeCapability =
    currentService.capabilities.find((c) => c.id === activeCapabilityId) ||
    currentService.capabilities[0];

  const handleImageError = (id) => {
    setImgLoadErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <section
        id="services"
        className="relative overflow-hidden bg-[#05030d] px-6 py-20 text-white sm:py-28 lg:px-8 pb-24 sm:pb-28 lg:pb-28"
        style={{ perspective: 1200 }}
      >
        {/* Background glow elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-10 h-[450px] w-[750px] -translate-x-1/2 rounded-full bg-violet-700/14 blur-[160px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
              WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <Reveal3D className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />
              What We Build &amp; Automate
            </span>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.05] tracking-tight">
              Capabilities Built For{" "}
              <span className="u-gradient-text">
                Modern Growth
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-400 sm:text-lg">
              Explore our core capabilities across business automation and custom SaaS development.
            </p>
          </Reveal3D>

          {/* Top 2 Tabs Toggle */}
          <Reveal3D delay={0.1} className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl">
              {Object.values(servicesData).map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      isActive ? "text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTabPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_0_24px_rgba(139,92,246,0.4)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {tab.id === "automation" ? <Bot className="h-4 w-4" /> : <Code2 className="h-4 w-4" />}
                      {tab.tabLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal3D>

          {/* Interactive Showcase Container */}
          <div className="mt-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              
              {/* RIGHT PREVIEW PANEL (Order-1 on Mobile, Order-2 on Desktop, Sticky on Desktop) */}
              <div className="order-1 lg:order-2 lg:col-span-6 lg:sticky lg:top-[110px]">
                <div
                  ref={panelRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: reducedMotion
                      ? undefined
                      : `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                    transition: "transform 0.2s ease-out",
                  }}
                  className="group relative h-[340px] sm:h-[380px] lg:h-[420px] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#090616]/95 p-5 sm:p-7 shadow-[0_24px_70px_rgba(0,0,0,0.65),0_0_50px_rgba(139,92,246,0.25)] backdrop-blur-2xl flex flex-col justify-between"
                >
                  {/* Subtle Grid overlay */}
                  <div className="u-grid absolute inset-0 opacity-40 pointer-events-none" />

                  {/* Top Ambient Glow */}
                  <div className="pointer-events-none absolute -top-16 left-1/2 h-36 w-72 -translate-x-1/2 rounded-full bg-violet-600/25 blur-[70px]" />

                  {/* 1. SINGLE BROWSER TOP BAR (macOS dots + Item Title/Project Name + Status) */}
                  <div className="relative z-20 flex items-center justify-between border-b border-white/10 pb-3">
                    {/* macOS dots */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    </div>

                    {/* Item title / project name badge (NO fake URL) */}
                    <div className="mx-2 flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-600/15 px-3 py-0.5 text-[11px] font-semibold text-violet-200 backdrop-blur-md max-w-[200px] sm:max-w-[280px] truncate">
                      <Sparkles className="h-3 w-3 text-violet-400 shrink-0" />
                      <span className="truncate">
                        {activeCapabilityId === "websites" && websiteCaption
                          ? websiteCaption
                          : activeCapability.title}
                      </span>
                    </div>

                    {/* Top-Right Floating Status Chip */}
                    <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300 shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </div>
                  </div>

                  {/* 2. DYNAMIC VISUAL / IMAGE CONTENT AREA */}
                  <div className="relative z-10 flex-1 my-2 overflow-hidden w-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeCapability.id + activeTab}
                        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full w-full"
                      >
                        {/* Websites item -> Auto-crossfading slideshow from /public/projects/ */}
                        {activeCapabilityId === "websites" ? (
                          <WebsitesSlideshow
                            reducedMotion={reducedMotion}
                            isPanelHovered={isHovered}
                            onCaptionChange={setWebsiteCaption}
                          />
                        ) : serviceImageCandidates[activeCapabilityId] &&
                          !imgLoadErrors[activeCapabilityId] ? (
                          /* Image Slot for other services */
                          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black/40">
                            <img
                              src={serviceImageCandidates[activeCapabilityId]}
                              alt={activeCapability.title}
                              loading="lazy"
                              onError={() => handleImageError(activeCapabilityId)}
                              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                          </div>
                        ) : (
                          /* Fallback to Rich SVG/CSS Visual */
                          <CapabilityVisual capId={activeCapability.id} reducedMotion={reducedMotion} />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* 3. BOTTOM CAPTION & STATUS ROW (Dedicated padding, wraps, never overlaps) */}
                  <div className="relative z-20 pt-2.5 border-t border-white/10 flex items-center justify-between gap-3 text-[11px] text-neutral-400">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span className="font-medium text-neutral-300 break-words line-clamp-1 sm:line-clamp-none">
                        {activeCapabilityId === "websites"
                          ? (websiteCaption || "Live Web Experience Showcase")
                          : `${activeCapability.title} · Production Ready`}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0 rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono text-violet-300">
                      <Zap className="h-3 w-3 text-violet-400" />
                      Fast
                    </div>
                  </div>
                </div>
              </div>

              {/* LEFT LIST / CONTROLS (Order-2 on Mobile, Order-1 on Desktop) */}
              <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-between">
                <div>
                  {/* Service Title & Description */}
                  <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {currentService.titlePrefix}{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                      {currentService.titleGradient}
                    </span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300 sm:text-base">
                    {currentService.description}
                  </p>

                  {/* MOBILE: Horizontal Swipeable Chips with Active Description Below */}
                  <div className="mt-6 block lg:hidden">
                    <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar">
                      {currentService.capabilities.map((cap, index) => {
                        const isSelected = activeCapabilityId === cap.id;
                        const Icon = cap.icon;
                        return (
                          <button
                            key={cap.id}
                            type="button"
                            onClick={() => handleCapabilityClick(cap.id)}
                            className={`flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                              isSelected
                                ? "border-violet-500/50 bg-violet-600/25 text-white shadow-[0_0_18px_rgba(139,92,246,0.35)]"
                                : "border-white/10 bg-white/[0.03] text-neutral-400 hover:text-white"
                            }`}
                          >
                            <span className="font-mono text-[10px] text-violet-400">0{index + 1}</span>
                            <Icon className="h-3.5 w-3.5" />
                            <span>{cap.title}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Mobile active description badge */}
                    <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
                      <p className="text-xs font-semibold text-white">{activeCapability.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-neutral-400">{activeCapability.description}</p>
                    </div>
                  </div>

                  {/* DESKTOP: Vertical Interactive Capability List */}
                  <div className="mt-8 hidden lg:flex flex-col space-y-3">
                    {currentService.capabilities.map((cap, index) => {
                      const isSelected = activeCapabilityId === cap.id;
                      const Icon = cap.icon;
                      return (
                        <button
                          key={cap.id}
                          type="button"
                          onClick={() => handleCapabilityClick(cap.id)}
                          className={`group relative flex w-full items-start gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? "border-violet-500/50 bg-violet-600/15 shadow-[0_0_24px_rgba(139,92,246,0.22)] text-white"
                              : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                          }`}
                        >
                          {/* Active Left Purple Accent Bar */}
                          {isSelected && (
                            <div className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-gradient-to-b from-violet-400 to-indigo-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
                          )}

                          {/* Number Badge (01-05) */}
                          <span
                            className={`font-mono text-xs font-bold pt-1 transition-colors ${
                              isSelected ? "text-violet-300" : "text-neutral-500 group-hover:text-neutral-400"
                            }`}
                          >
                            0{index + 1}
                          </span>

                          {/* Icon Container */}
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                              isSelected
                                ? "border-violet-400/50 bg-violet-500/30 text-violet-200 shadow-[0_0_16px_rgba(139,92,246,0.4)]"
                                : "border-white/10 bg-white/[0.04] text-neutral-400 group-hover:text-violet-300"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          {/* Content */}
                          <div className="min-w-0 flex-1">
                            <p className="text-base font-semibold tracking-tight">{cap.title}</p>
                            <p
                              className={`mt-1 text-xs leading-relaxed ${
                                isSelected ? "text-neutral-200" : "line-clamp-2 text-neutral-400"
                              }`}
                            >
                              {cap.description}
                            </p>
                          </div>

                          {/* 5s Auto-Rotate Thin Progress Bar */}
                          {isSelected && !isHovered && !userInteracted && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden bg-white/5">
                              <motion.div
                                key={activeCapabilityId + activeTab}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 5, ease: "linear" }}
                                className="h-full bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400"
                              />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(true)}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.35)] transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 hover:shadow-[0_0_36px_rgba(139,92,246,0.55)] cursor-pointer"
                  >
                    Book a Demo Call
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal Trigger */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}

export default ServicesContent;
