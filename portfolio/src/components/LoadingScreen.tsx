import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = ["ACTIVATING…", "INITIALIZING SYSTEM…", "LOADING MODULES…", "READY."];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentMsg, setCurrentMsg] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setCurrentMsg((prev) => {
        if (prev >= messages.length - 1) {
          clearInterval(msgInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    const progInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progInterval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-8"
      >
        {/* Spinning ring */}
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border-2 border-muted" />
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-primary" />
          <div className="absolute inset-2 animate-spin-slow rounded-full border border-transparent border-b-primary" style={{ animationDirection: "reverse", animationDuration: "5s" }} />
        </div>

        {/* Message */}
        <div className="h-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentMsg}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-mono text-sm tracking-[0.3em] text-primary"
            >
              {messages[currentMsg]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="h-1 w-64 overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-primary"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <p className="font-mono text-xs text-muted-foreground">{progress}%</p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
