"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
