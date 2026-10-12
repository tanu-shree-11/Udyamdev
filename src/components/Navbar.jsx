import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "../assets/logo.png.png";

const navItems = [
  { label: "Home", href: "home", type: "hash" },
  { label: "Services", href: "services", type: "hash" },
  { label: "Solutions", href: "solutions", type: "hash" },
  { label: "AI Agents", href: "work", type: "hash" },
  { label: "Contact", href: "contact", type: "hash" },
];

function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = location.pathname === "/";

  const hashHref = (hash) => (isHome ? `#${hash}` : `/#${hash}`);

  const scrollToId = (id) => {
    if (!id || id === "home") {
      // Home should always return to the very top Hero section.
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("home");
      return true;
    }
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    }
    return false;
  };

  const handleNavClick = (e, item) => {
    setMobileOpen(false);

    if (item.type === "route") {
      // Services is an actual route.
      if (isHome && item.href === "/services") {
        return; // let the Link navigate normally
      }
      return;
    }

    e.preventDefault();

    if (isHome) {
      scrollToId(item.href);
      return;
    }

    // Navigating to a hash section from another route.
    window.location.href = `/#${item.href}`;
  };

  const handleHomeClick = (e) => {
    setMobileOpen(false);
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("home");
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActive(location.pathname === "/services" ? "services" : "");
      return undefined;
    }

    const sections = navItems
      .filter((item) => item.type === "hash")
      .map((item) => document.getElementById(item.href))
      .filter(Boolean);

    sections.unshift(document.getElementById("home"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, [isHome, location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isItemActive = (item) => {
    if (item.type === "route") {
      return location.pathname === item.href;
    }
    return isHome && active === item.href;
  };

  const navLinkClass = (activeItem) =>
    `group relative text-sm font-medium transition-colors duration-300 ${
      activeItem ? "text-white" : "text-neutral-400 hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#05030d]/85 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "border-b border-transparent bg-[#05030d]/25 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[5rem] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          to="/"
          aria-label="UdyamDev Home"
          className="group flex shrink-0 items-center"
          onClick={handleHomeClick}
        >
          <img
            src="/logo.png"
            alt="UdyamDev"
            className="h-[36px] sm:h-[44px] w-auto object-contain transition-all duration-300 [mix-blend-mode:screen] group-hover:drop-shadow-[0_0_14px_rgba(167,139,250,0.65)]"
            style={{ imageRendering: "-webkit-optimize-contrast" }}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const activeItem = isItemActive(item);

            if (item.type === "route") {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={navLinkClass(activeItem)}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-400 transition-all duration-300 ${
                      activeItem ? "right-0" : "right-full group-hover:right-0"
                    }`}
                  />
                </Link>
              );
            }

            return (
              <a
                key={item.label}
                href={hashHref(item.href)}
                onClick={(e) => handleNavClick(e, item)}
                className={navLinkClass(activeItem)}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-400 transition-all duration-300 ${
                    activeItem ? "right-0" : "right-full group-hover:right-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={hashHref("contact")}
            onClick={(e) => handleNavClick(e, { type: "hash", href: "contact" })}
            className="group hidden items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.25)] transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_32px_rgba(139,92,246,0.45)] sm:inline-flex"
          >
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex min-h-[44px] min-w-[44px] h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors duration-300 hover:border-violet-500/40 hover:bg-violet-600/20 lg:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-[#05030d]/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {navItems.map((item) => {
                const activeItem = isItemActive(item);
                const className = `flex min-h-[44px] items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeItem
                    ? "bg-white/[0.06] text-white"
                    : "text-neutral-400 hover:bg-white/[0.04] hover:text-white"
                }`;

                if (item.type === "route") {
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={className}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={hashHref(item.href)}
                    onClick={(e) => handleNavClick(e, item)}
                    className={className}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href={hashHref("contact")}
                onClick={(e) => handleNavClick(e, { type: "hash", href: "contact" })}
                className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white"
              >
                Let&apos;s Talk
                <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

