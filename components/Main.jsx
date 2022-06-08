import React, { useContext } from "react";
import { motion } from "framer-motion";
import { SimpleContext } from "../utils/simpleContext";

export default function Main() {
  const { mainRef } = useContext(SimpleContext);
  return (
    <div
      className="mx-auto mb-20 flex min-h-[calc(100vh-71px)] max-w-4xl flex-1 flex-col justify-center px-4 lg:px-2"
      ref={mainRef}
    >
      <motion.div
        className="space-y-5"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-secondary">Hi, my name is</p>
        <h1 className="sm:gradient-text pb-2 text-6xl font-bold text-gray-50 md:text-7xl">
          Javaughn Pryce.
        </h1>
        <h2 className="sm:gradient-text text-5xl font-semibold text-gray-400 md:text-6xl">
          I build full stack applications.
        </h2>
        <p className="max-w-lg text-xl text-gray-300">
          I&apos;m a full stack software developer specializing in Next.js,
          React, Node js and Django. I also have experience with mobile app
          development using React Native.
        </p>
      </motion.div>
    </div>
  );
}
