import { motion, useReducedMotion } from "framer-motion";

function Reveal3D({ children, delay = 0, direction = "up", className = "", style = {} }) {
  const reducedMotion = useReducedMotion();

  // Subtle rotate on mobile to avoid perspective clipping / viewport overflow
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const rotateVal = isMobile ? 8 : 25;
  const yVal = isMobile ? 40 : 80;

  const getInitialProps = () => {
    switch (direction) {
      case "down":
        return { opacity: 0, y: -yVal, rotateX: -rotateVal, scale: 0.95 };
      case "left":
        return { opacity: 0, x: yVal, rotateY: rotateVal, scale: 0.95 };
      case "right":
        return { opacity: 0, x: -yVal, rotateY: -rotateVal, scale: 0.95 };
      default:
        return { opacity: 0, y: yVal, rotateX: rotateVal, scale: 0.95 };
    }
  };

  if (reducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={getInitialProps()}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: isMobile ? 0.7 : 0.9,
        delay,
        ease: "easeOut",
      }}
      className={className}
      style={{
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal3D;
