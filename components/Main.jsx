import React, { useContext } from "react";
import { motion } from "framer-motion";
import { SimpleContext } from "../utils/simpleContext";

export default function Main() {
  const { mainRef } = useContext(SimpleContext);
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], x: [-300, 0] }}
      viewport={{ once: true }}
      className="m-auto mb-20 flex h-[calc(100vh-71px)] max-w-4xl flex-1 flex-col justify-center px-6 sm:px-0"
      ref={mainRef}
    >
      <div className="space-y-5">
        <p className="text-lg text-secondary">Hi, my name is</p>
        <h1 className="text-7xl font-bold text-gray-50">Javaughn Pryce.</h1>
        <h2 className="text-6xl font-semibold text-gray-400">
          I build full stack applications.
        </h2>
        <p className="max-w-lg text-xl text-gray-300">
          I&apos;m a full stack software developer specializing in Next.js,
          React, Node js and Django. I also have experience with mobile app
          development using React Native.
        </p>
      </div>
    </motion.div>
  );
}
