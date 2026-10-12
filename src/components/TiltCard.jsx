import { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

function TiltCard({ children, className = "", style = {} }) {
  const reducedMotion = useReducedMotion();
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = (e) => {
    if (reducedMotion || !cardRef.current) return;
    // Strictly disable on touch screens
    if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Subtle rotation (-6 to +6 degrees)
    const rotateY = ((mouseX / width) - 0.5) * 12;
    const rotateX = ((mouseY / height) - 0.5) * -12;

    setTransform({ rotateX, rotateY, scale: 1.02 });
  };

  const handleMouseLeave = () => {
    if (reducedMotion) return;
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={reducedMotion ? undefined : {
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
        scale: transform.scale,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default TiltCard;
