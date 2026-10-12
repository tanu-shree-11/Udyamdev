import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageCircle,
  RefreshCw,
  Globe,
  ArrowRight,
} from "lucide-react";
import logo from "../assets/logo.png.png";
import BookingModal from "./BookingModal";

const PHONE_NUMBER = "917988556033";

// Hinglish detection regex
const HINGLISH_KEYWORDS = [
  "kya", "hai", "chahiye", "mujhe", "kaise", "aap", "nahi", "karna",
  "kaam", "batao", "namaste", "ha", "kro", "bro", "bhi", "sath", "se",
  "kab", "karoge", "chahiye", "deno", "dikhao", "bataiye"
];

function isHinglishText(text) {
  if (!text) return false;
  const lower = text.toLowerCase();
  return HINGLISH_KEYWORDS.some((word) => lower.includes(word));
}

// Dictionary for EN and Hinglish (HI)
const i18n = {
  en: {
    title: "UdyamDev Assistant",
    subtitle: "Online · 24/7 AI Support",
    teaser: "Hi there! Need help automating your business? 👋",
    privacyNote: "We use your details only to contact you.",
    inputPlaceholder: "Type a message...",
    typingText: "UdyamDev Assistant is typing...",
    step1: "Hi there! Welcome to UdyamDev. May I know your name?",
    step2: "Nice to meet you, {name}! What is your primary role?",
    step2Industry: "Got it! What is your business or industry name?",
    step3: "Thanks! How can UdyamDev help your business grow?",
    step3Followup: "What specific workflow or website features are you looking to build?",
    step4Phone: "Great! What is your WhatsApp number so our team can send details?",
    step4Time: "What is your preferred time for a quick 15-min demo call?",
    step5Summary: "Here is your booking summary:\n• Name: {name}\n• Role: {role}\n• Service: {service}\n• WhatsApp: {phone}\n• Time: {time}",
    phoneError: "Please enter a valid WhatsApp number.",
    pricingFaq: "Our pricing and timeline depend on your specific requirements. We'll share an exact quote on our 15-minute demo call!",
    servicesFaq: "We specialize in Business Automation, SaaS & Web Development, and Autonomous AI Agents.",
    processFaq: "Our process has 4 simple steps: Discover → Build → Automate → Support.",
    contactFaq: "You can email us at udyamdev29@gmail.com or WhatsApp us at +91 7988556033.",
    demoFaq: "You can book a free 30-min demo call right here or chat with us on WhatsApp!",
    unknownFaq: "Thanks for your query! For custom questions, our team is ready to help you directly on WhatsApp.",
    roles: ["Business Owner", "Startup Founder", "Agency", "Other"],
    needs: ["Business Automation", "SaaS/Website Development", "AI Agents", "Not sure"],
    times: ["Morning (10am - 1pm)", "Afternoon (1pm - 4pm)", "Evening (4pm - 6pm)"],
    btnBookCall: "Book a Demo Call",
    btnWhatsApp: "Continue on WhatsApp",
  },
  hi: {
    title: "UdyamDev Assisstant",
    subtitle: "Online · 24/7 AI Sahayata",
    teaser: "Namaste! Business automation mein help chahiye? 👋",
    privacyNote: "Aapke details sirf contact ke liye use honge.",
    inputPlaceholder: "Message likhiye...",
    typingText: "UdyamDev Assistant type kar raha hai...",
    step1: "Namaste! UdyamDev mein aapka swagat hai. Aapka naam kya hai?",
    step2: "Aap se milkar khushi hui, {name}! Aapka role kya hai?",
    step2Industry: "Sahi hai! Aapke business ya industry ka naam kya hai?",
    step3: "Shukriya! UdyamDev aapke business ki growth mein kaise help kar sakta hai?",
    step3Followup: "Aap kis specific workflow ya site feature ko build karna chahte hain?",
    step4Phone: "Badiya! Aapka WhatsApp number kya hai jisse hum details share kar sakein?",
    step4Time: "Quick 15-min call ke liye aapka preferred time kya hai?",
    step5Summary: "Aapka summary yahan hai:\n• Naam: {name}\n• Role: {role}\n• Service: {service}\n• WhatsApp: {phone}\n• Time: {time}",
    phoneError: "Kripya sahi WhatsApp number enter karein.",
    pricingFaq: "Pricing aur timeline aapke requirements par depend karta hai. Hum 15-minute call par exact quote share karenge!",
    servicesFaq: "Hum Business Automation, SaaS & Web Development, aur Autonomous AI Agents mein specialize karte hain.",
    processFaq: "Hamara process 4 steps mein hai: Discover → Build → Automate → Support.",
    contactFaq: "Aap udyamdev29@gmail.com par email ya +91 7988556033 par WhatsApp kar sakte hain.",
    demoFaq: "Aap yahan free demo call book kar sakte hain ya WhatsApp par chat kar sakte hain!",
    unknownFaq: "Aapke sawaal ke liye shukriya! Custom requirements ke liye hamari team WhatsApp par available hai.",
    roles: ["Business Owner", "Startup Founder", "Agency", "Other"],
    needs: ["Business Automation", "SaaS/Website Development", "AI Agents", "Not sure"],
    times: ["Subah (10am - 1pm)", "Dopahar (1pm - 4pm)", "Shaam (4pm - 6pm)"],
    btnBookCall: "Book a Demo Call",
    btnWhatsApp: "WhatsApp Par Baat Karein",
  },
};

function ChatBot() {
  const reducedMotion = useReducedMotion();

  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [lang, setLang] = useState("en"); // "en" | "hi"
  const [manualLangOverride, setManualLangOverride] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Chat flow state
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [flowStep, setFlowStep] = useState(1);
  const [userData, setUserData] = useState({
    name: "",
    role: "",
    industry: "",
    need: "",
    detail: "",
    phone: "",
    time: "",
  });

  const chatEndRef = useRef(null);

  // Session check & timers on mount
  useEffect(() => {
    const isDismissed = sessionStorage.getItem("udyam_chat_dismissed");
    if (isDismissed) return;

    // Teaser timer (~5s)
    const teaserTimer = setTimeout(() => {
      setShowTeaser(true);
    }, 5000);

    // Desktop auto-open (~8s)
    const autoOpenTimer = setTimeout(() => {
      if (window.innerWidth >= 768 && !sessionStorage.getItem("udyam_chat_dismissed")) {
        setIsOpen(true);
        setShowTeaser(false);
      }
    }, 8000);

    return () => {
      clearTimeout(teaserTimer);
      clearTimeout(autoOpenTimer);
    };
  }, []);

  // Initialize chat flow when panel opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(i18n[lang].step1);
    }
  }, [isOpen]);

  // Scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const dict = i18n[lang];

  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "hi" : "en";
    setLang(nextLang);
    setManualLangOverride(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    setShowTeaser(false);
    sessionStorage.setItem("udyam_chat_dismissed", "true");
  };

  const addBotMessage = (text, chips = null, customUI = null) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text, chips, customUI, id: Date.now() },
      ]);
    }, 600);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { sender: "user", text, id: Date.now() }]);

    // Detect Hinglish automatically if not manually toggled
    if (!manualLangOverride && isHinglishText(text)) {
      setLang("hi");
    }
  };

  // Process user response in step flow
  const handleUserSend = (textToSend = null) => {
    const text = textToSend || inputVal.trim();
    if (!text) return;

    setInputVal("");
    addUserMessage(text);

    // Process Guided Flow
    if (flowStep === 1) {
      // User provided name
      setUserData((prev) => ({ ...prev, name: text }));
      setFlowStep(2);
      addBotMessage(dict.step2.replace("{name}", text), dict.roles);
    } else if (flowStep === 2) {
      if (!userData.role) {
        setUserData((prev) => ({ ...prev, role: text }));
        addBotMessage(dict.step2Industry);
      } else {
        setUserData((prev) => ({ ...prev, industry: text }));
        setFlowStep(3);
        addBotMessage(dict.step3, dict.needs);
      }
    } else if (flowStep === 3) {
      if (!userData.need) {
        setUserData((prev) => ({ ...prev, need: text }));
        const explanation =
          text === "Business Automation"
            ? "We build custom workflows, AI lead qualifiers & CRM sync to eliminate manual work."
            : text === "SaaS/Website Development"
            ? "We engineer high-converting web apps, client portals, and responsive websites."
            : text === "AI Agents"
            ? "We deploy 24/7 autonomous AI agents for voice calls, chat support, and lead nurture."
            : "We analyze your operations and recommend the exact digital system needed.";
        addBotMessage(`${explanation}\n\n${dict.step3Followup}`);
      } else {
        setUserData((prev) => ({ ...prev, detail: text }));
        setFlowStep(4);
        addBotMessage(dict.step4Phone);
      }
    } else if (flowStep === 4) {
      if (!userData.phone) {
        // Validate Phone Number
        if (!/^[+\d][\d\s-]{7,}$/.test(text)) {
          addBotMessage(dict.phoneError);
          return;
        }
        setUserData((prev) => ({ ...prev, phone: text }));
        addBotMessage(dict.step4Time, dict.times);
      } else {
        setUserData((prev) => ({ ...prev, time: text }));
        setFlowStep(5);
        const finalData = { ...userData, time: text };
        const summaryText = dict.step5Summary
          .replace("{name}", finalData.name)
          .replace("{role}", finalData.role)
          .replace("{service}", finalData.need)
          .replace("{phone}", finalData.phone)
          .replace("{time}", text);

        addBotMessage(summaryText, null, "summary_buttons");
      }
    } else {
      // FAQ / Free Text Keyword Matching
      handleFaqResponse(text);
    }
  };

  const handleFaqResponse = (query) => {
    const lower = query.toLowerCase();
    if (lower.includes("price") || lower.includes("cost") || lower.includes("kitna") || lower.includes("rate")) {
      addBotMessage(dict.pricingFaq);
    } else if (lower.includes("service") || lower.includes("do") || lower.includes("kaam") || lower.includes("work")) {
      addBotMessage(dict.servicesFaq);
    } else if (lower.includes("process") || lower.includes("how")) {
      addBotMessage(dict.processFaq);
    } else if (lower.includes("contact") || lower.includes("call") || lower.includes("number") || lower.includes("email")) {
      addBotMessage(dict.contactFaq);
    } else if (lower.includes("demo")) {
      addBotMessage(dict.demoFaq);
    } else {
      addBotMessage(dict.unknownFaq, null, "whatsapp_handoff");
    }
  };

  const openWhatsAppHandoff = () => {
    const message =
      `Hi UdyamDev! I was chatting with the AI Assistant.\n\n` +
      `*Name:* ${userData.name || "N/A"}\n` +
      `*Role:* ${userData.role || "N/A"}\n` +
      `*Need:* ${userData.need || "N/A"}\n` +
      `*WhatsApp:* ${userData.phone || "N/A"}\n` +
      `*Preferred Time:* ${userData.time || "N/A"}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {/* Floating Launcher Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Teaser Bubble */}
        <AnimatePresence>
          {showTeaser && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="mb-3 max-w-xs rounded-2xl border border-white/15 bg-[#0a0718]/95 p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_30px_rgba(139,92,246,0.3)] backdrop-blur-xl text-xs font-medium text-white flex items-center justify-between gap-3"
            >
              <span>{dict.teaser}</span>
              <button
                type="button"
                onClick={() => setShowTeaser(false)}
                className="text-neutral-400 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Purple Launcher Button */}
        {!isOpen && (
          <motion.button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setShowTeaser(false);
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white shadow-[0_0_28px_rgba(139,92,246,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] cursor-pointer"
          >
            <span className="absolute -inset-1 rounded-full bg-violet-400/30 animate-ping pointer-events-none" />
            <Bot className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
            <span className="absolute top-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-[#05030d] bg-emerald-400" />
          </motion.button>
        )}

        {/* Chat Panel (Desktop Floating Glass Card / Mobile Bottom Sheet) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 bottom-0 z-50 flex h-[85svh] max-h-[600px] flex-col overflow-hidden rounded-t-3xl border border-white/15 bg-[#0a0718]/95 shadow-[0_24px_80px_rgba(0,0,0,0.85),0_0_60px_rgba(139,92,246,0.3)] backdrop-blur-xl sm:bottom-6 sm:right-6 sm:left-auto sm:h-[540px] sm:w-[390px] sm:rounded-3xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3.5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={logo} alt="UdyamDev" className="h-8 w-auto object-contain" />
                    <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-[#0a0718] bg-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">{dict.title}</h4>
                    <p className="text-[10px] text-emerald-400">{dict.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* EN / HI Language Toggle */}
                  <button
                    type="button"
                    onClick={toggleLanguage}
                    className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-semibold text-violet-300 transition-colors hover:border-violet-400/40 hover:bg-violet-600/20"
                  >
                    <Globe className="h-3 w-3" />
                    <span>{lang === "en" ? "EN" : "हिं"}</span>
                  </button>

                  {/* Close button */}
                  <button
                    type="button"
                    onClick={closeChat}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Message List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs leading-relaxed">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 ${
                        msg.sender === "user"
                          ? "rounded-tr-none bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                          : "rounded-tl-none border border-white/10 bg-white/[0.05] text-neutral-200"
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>

                    {/* Quick-Reply Chips */}
                    {msg.chips && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%]">
                        {msg.chips.map((chip) => (
                          <button
                            key={chip}
                            type="button"
                            onClick={() => handleUserSend(chip)}
                            className="rounded-xl border border-violet-500/30 bg-violet-600/20 px-3 py-1.5 text-[11px] font-medium text-violet-200 transition-all hover:border-violet-400 hover:bg-violet-600/35 hover:text-white cursor-pointer"
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Custom Summary Buttons */}
                    {msg.customUI === "summary_buttons" && (
                      <div className="mt-3 flex flex-col gap-2 w-full max-w-[90%]">
                        <button
                          type="button"
                          onClick={() => setIsBookingOpen(true)}
                          className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 py-2.5 text-xs font-semibold text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-colors hover:bg-violet-500"
                        >
                          <Calendar className="h-3.5 w-3.5" />
                          {dict.btnBookCall}
                        </button>
                        <button
                          type="button"
                          onClick={openWhatsAppHandoff}
                          className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/20 py-2.5 text-xs font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/30"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          {dict.btnWhatsApp}
                        </button>
                      </div>
                    )}

                    {/* WhatsApp Handoff Fallback */}
                    {msg.customUI === "whatsapp_handoff" && (
                      <div className="mt-2.5">
                        <button
                          type="button"
                          onClick={openWhatsAppHandoff}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/20 px-3 py-1.5 text-[11px] font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/30"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          Chat on WhatsApp
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-none border border-white/10 bg-white/[0.05] p-3 w-max">
                    <span className="h-2 w-2 rounded-full bg-violet-400 animate-bounce" />
                    <span className="h-2 w-2 rounded-full bg-violet-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="h-2 w-2 rounded-full bg-violet-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Input Area */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUserSend();
                }}
                className="border-t border-white/10 bg-white/[0.02] p-3"
              >
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder={dict.inputPlaceholder}
                    className="w-full bg-transparent text-xs text-white placeholder-neutral-500 outline-none"
                  />
                  <button
                    type="submit"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white transition-colors hover:bg-violet-500"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>

                <p className="mt-2 text-center text-[10px] text-neutral-500">
                  {dict.privacyNote}
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Booking Modal Integration */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}

export default ChatBot;
