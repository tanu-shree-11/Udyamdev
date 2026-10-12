import { motion } from "framer-motion";
import { Bot, Zap, MessageSquare, Activity, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

function AbstractUVisual({ reducedMotion = false }) {
  return (
    <div className="relative mx-auto aspect-[4/3.2] w-full max-w-[540px] sm:max-w-[580px]">
      {/* Background Ambient Purple Glows */}
      <div className="pointer-events-none absolute inset-[-8%] rounded-[3rem] bg-gradient-to-tr from-violet-600/30 via-purple-600/20 to-indigo-600/30 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-10 left-1/2 h-32 w-[70%] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[70px]" />

      {/* Outer Floating Frame Container */}
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full"
        style={{ perspective: 1200 }}
      >
        {/* Monitor / Browser Window Frame */}
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/15 bg-[#0a0718]/90 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.65),0_0_50px_rgba(139,92,246,0.2)] backdrop-blur-2xl sm:p-5">
          {/* Top Window Bar */}
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
            {/* Window control dots */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </div>

            {/* Address / Title Bar */}
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-neutral-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-neutral-300">automation.system // live</span>
            </div>

            {/* Right indicator */}
            <div className="flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-600/20 px-2.5 py-0.5 text-[10px] font-medium text-violet-300">
              <Activity className="h-3 w-3 text-violet-400" />
              <span>Active</span>
            </div>
          </div>

          {/* Screen Content Dashboard */}
          <div className="grid h-[calc(100%-2.75rem)] grid-cols-12 gap-3">
            {/* Left Column: Flow Nodes Diagram */}
            <div className="col-span-7 flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3 backdrop-blur-md sm:p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                  Workflow Flowchart
                </span>
                <span className="rounded bg-violet-500/20 px-1.5 py-0.5 text-[9px] font-medium text-violet-300">
                  AI Pipeline
                </span>
              </div>

              {/* Node 1: Trigger */}
              <div className="relative flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-2.5 shadow-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-violet-500/30 bg-violet-600/20 text-violet-300">
                  <Zap className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-white">Lead Trigger</p>
                  <p className="truncate text-[10px] text-neutral-400">Inbound Web &amp; WhatsApp</p>
                </div>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              </div>

              {/* Animated Connection Path 1 */}
              <div className="my-1 flex justify-center">
                <div className="relative h-4 w-0.5 bg-gradient-to-b from-violet-500 to-indigo-500">
                  {!reducedMotion && (
                    <motion.div
                      animate={{ y: [0, 16, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                      className="absolute -left-[3px] top-0 h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_8px_#a78bfa]"
                    />
                  )}
                </div>
              </div>

              {/* Node 2: AI Agent Processing */}
              <div className="relative flex items-center gap-3 rounded-lg border border-violet-500/40 bg-violet-950/40 p-2.5 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-violet-400/40 bg-violet-600/30 text-violet-200">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-white">AI Reasoning</p>
                  <p className="truncate text-[10px] text-neutral-300">Analyze &amp; Qualify</p>
                </div>
                <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-ping" />
              </div>

              {/* Animated Connection Path 2 */}
              <div className="my-1 flex justify-center">
                <div className="relative h-4 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500">
                  {!reducedMotion && (
                    <motion.div
                      animate={{ y: [0, 16, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                      className="absolute -left-[3px] top-0 h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_8px_#a5b4fc]"
                    />
                  )}
                </div>
              </div>

              {/* Node 3: Instant Sync */}
              <div className="relative flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-2.5 shadow-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-indigo-500/30 bg-indigo-600/20 text-indigo-300">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-white">Automated Sync</p>
                  <p className="truncate text-[10px] text-neutral-400">CRM &amp; Notification</p>
                </div>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              </div>
            </div>

            {/* Right Column: Chat Preview & Live Chart Shapes */}
            <div className="col-span-5 flex flex-col justify-between gap-3">
              {/* Chat Bubble Widget */}
              <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-3 backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-violet-300">
                  <MessageSquare className="h-3 w-3" />
                  <span>Instant Response</span>
                </div>
                {/* User Message */}
                <div className="self-start rounded-lg border border-white/10 bg-white/[0.06] p-2 text-[10px] text-neutral-300">
                  Need demo call booking...
                </div>
                {/* AI Reply */}
                <div className="self-end rounded-lg border border-violet-500/30 bg-violet-600/25 p-2 text-[10px] text-violet-100 shadow-[0_0_12px_rgba(139,92,246,0.2)]">
                  Scheduled &amp; synced! ✓
                </div>
              </div>

              {/* Chart Sparkline & Bar Visual Shapes (No numbers) */}
              <div className="flex flex-1 flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                    Live System Activity
                  </span>
                  <Sparkles className="h-3 w-3 text-violet-400" />
                </div>

                {/* SVG Sparkline */}
                <div className="my-2 h-10 w-full">
                  <svg className="h-full w-full overflow-visible" viewBox="0 0 100 40">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,30 Q 15,10 30,22 T 60,8 T 80,18 T 100,5"
                      fill="none"
                      stroke="#a78bfa"
                      strokeWidth="2"
                    />
                    <path
                      d="M 0,30 Q 15,10 30,22 T 60,8 T 80,18 T 100,5 L 100,40 L 0,40 Z"
                      fill="url(#chartGrad)"
                    />
                  </svg>
                </div>

                {/* Equalizer Bars */}
                <div className="flex items-end justify-between gap-1.5 h-7">
                  {[40, 75, 50, 90, 65, 85, 95, 60].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={reducedMotion ? undefined : { height: [`${h}%`, `${Math.max(25, (h + 35) % 100)}%`, `${h}%`] }}
                      transition={{ duration: 2 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
                      className="w-full rounded-t bg-gradient-to-t from-indigo-500 to-violet-400 opacity-80"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Glass Cards Around Monitor Frame */}
      {/* Floating Card 1: Top-Left */}
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -8, 0], x: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute -left-4 top-8 flex items-center gap-2.5 rounded-xl border border-white/15 bg-[#0d0922]/90 px-3.5 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:-left-6"
      >
        <div className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/20 text-emerald-300">
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <Zap className="h-3.5 w-3.5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">24/7 Active</p>
          <p className="text-[10px] text-neutral-400">Continuous operation</p>
        </div>
      </motion.div>

      {/* Floating Card 2: Top-Right */}
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, 8, 0], x: [0, 4, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute -right-4 top-16 flex items-center gap-2.5 rounded-xl border border-white/15 bg-[#0d0922]/90 px-3.5 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:-right-6"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-600/20 text-violet-300">
          <MessageSquare className="h-3.5 w-3.5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">Instant Replies</p>
          <p className="text-[10px] text-neutral-400">Zero response latency</p>
        </div>
      </motion.div>

      {/* Floating Card 3: Bottom-Right */}
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 right-10 flex items-center gap-2.5 rounded-xl border border-white/15 bg-[#0d0922]/90 px-3.5 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-600/20 text-indigo-300">
          <Activity className="h-3.5 w-3.5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">Live Automation</p>
          <p className="text-[10px] text-neutral-400">Workflows in sync</p>
        </div>
      </motion.div>
    </div>
  );
}

export default AbstractUVisual;
