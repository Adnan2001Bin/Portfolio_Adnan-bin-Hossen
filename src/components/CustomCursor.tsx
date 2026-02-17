import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add hover detection for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [data-cursor-hover], .nav-link, .magnetic-target",
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Initial setup and mutation observer for dynamic content
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <motion.div
      className="custom-cursor"
      style={{
        left: cursorX,
        top: cursorY,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        scale: isHovering ? 3 : 1,
        backgroundColor: isHovering
          ? "hsl(var(--background))"
          : "hsl(var(--foreground1))",
      }}
      transition={{
        scale: { duration: 0.2 },
        backgroundColor: { duration: 0.2 },
        left: { duration: 0.1, ease: "linear" },
        top: { duration: 0.1, ease: "linear" },
      }}
    />
  );
};

export default CustomCursor;
