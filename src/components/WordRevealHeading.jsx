import { motion, useReducedMotion } from "framer-motion";

function WordRevealHeading({ text = "", highlightText = "", className = "", tag = "h2" }) {
  const reducedMotion = useReducedMotion();

  const safeText = typeof text === "string" ? text : String(text || "");
  const words = safeText ? safeText.split(" ") : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 18, rotateX: 12 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const Tag = tag;

  return (
    <Tag className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="inline-block"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={reducedMotion ? undefined : wordVariants}
            className="inline-block mr-[0.25em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
        {highlightText && (
          <motion.span
            variants={reducedMotion ? undefined : wordVariants}
            className="block sm:inline bg-gradient-to-r from-violet-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent"
          >
            {highlightText}
          </motion.span>
        )}
      </motion.span>
    </Tag>
  );
}

export default WordRevealHeading;
