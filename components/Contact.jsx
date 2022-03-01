import React, { useContext } from "react";
import { SimpleContext } from "../utils/simpleContext";
import { motion } from "framer-motion";

export default function Contact() {
  const { contactRef } = useContext(SimpleContext);
  return (
    <motion.div
      className="mx-auto mb-48 max-w-4xl"
      ref={contactRef}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="mb-8 flex justify-center text-xl md:mb-12 md:space-x-3">
        <span className="hidden text-muted sm:block">03.</span>
        <span className="font-semibold text-gray-100">What&apos;s Next?</span>
      </div>
      <h3 className="text-center text-4xl font-bold text-gray-200">
        Get In Touch
      </h3>
      <p className="mx-auto mt-6 max-w-md text-center text-2xl font-medium text-gray-400">
        I am always looking for new and exciting projects to work on. Hit me up
        and let&apos;s talk!
      </p>
      <div className="mt-12 flex w-full items-center justify-center">
        <a
          href="mailto:javanpryce1@gmail.com"
          className="cursor-pointer rounded px-8 py-3 text-muted ring-1 ring-muted transition duration-300 hover:bg-muted hover:text-white"
        >
          Hit Me Up
        </a>
      </div>
    </motion.div>
  );
}
