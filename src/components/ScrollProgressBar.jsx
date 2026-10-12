import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
    />
  );
}

export default ScrollProgressBar;
