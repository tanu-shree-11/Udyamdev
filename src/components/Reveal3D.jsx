import { motion, useReducedMotion } from "framer-motion";

function Reveal3D({ children, delay = 0, direction = "up", className = "", style = {} }) {
  const reducedMotion = useReducedMotion();

  const getInitialProps = () => {
    switch (direction) {
      case "down":
        return { opacity: 0, y: -80, rotateX: -25, scale: 0.9 };
      case "left":
        return { opacity: 0, x: 80, rotateY: 25, scale: 0.9 };
      case "right":
        return { opacity: 0, x: -80, rotateY: -25, scale: 0.9 };
      default:
        return { opacity: 0, y: 80, rotateX: 25, scale: 0.9 };
    }
  };

  if (reducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
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
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
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
