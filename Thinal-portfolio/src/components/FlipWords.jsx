// FlipWords.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FlipWords = ({ words, className = "", interval = 2800 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(t);
  }, [words, interval]);

  return (
    <span
      className={`inline-block overflow-hidden align-middle ${className}`}
      style={{ minWidth: "260px" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default FlipWords;