import { motion } from "framer-motion";
import React from "react";
import Category from "../components/Hotels/Category";

export default function Hotels() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <Category />
    </motion.div>
  );
}
