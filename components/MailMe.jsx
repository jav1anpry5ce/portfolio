import React from "react";
import { motion } from "framer-motion";

export default function MailMe() {
  return (
    <motion.div
      className="fixed right-32 bottom-10 hidden md:block"
      whileInView={{ opacity: [0, 1], scale: [0, 1.2, 1] }}
      viewport={{ once: true }}
    >
      <a
        href="mailto:javanpryce1@gmail.com"
        className="vertical transform cursor-pointer text-sm text-gray-300 duration-300 hover:-translate-y-1 hover:text-muted"
      >
        javanpryce1@gmail.com
      </a>
    </motion.div>
  );
}
