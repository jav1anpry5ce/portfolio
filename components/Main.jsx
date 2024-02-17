import React, { useContext } from "react";
import { motion } from "framer-motion";
import { SimpleContext } from "../utils/simpleContext";

export default function Main() {
  const { mainRef } = useContext(SimpleContext);
  return (
    <section
      className="mx-auto mb-20 flex min-h-[calc(100vh-71px)] max-w-4xl flex-1 flex-col justify-center px-4 lg:px-2"
      ref={mainRef}
    >
      <motion.div
        className="space-y-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-secondary">Hi, my name is</p>
        <p className="gradient-text pb-2 text-6xl font-bold text-gray-50 md:text-7xl">
          Javaughn Pryce.
        </p>
        <p className="text-2xl font-semibold text-gray-400 md:text-4xl">
          A software sorcerer currently mastering my craft at Drexel University.
        </p>
        <p className="max-w-2xl text-lg text-gray-300">
          Now, as I delve deeper into the realm of academia, I&apos;ve harnessed
          the potent spell of Test-Driven Development (TDD), adding another
          powerful tool to my enchanted toolkit. With expertise in Java,
          JavaScript, React, Node.js, Python, and Django, I&apos;m not just your
          run-of-the-mill coder – I&apos;m here to conjure up innovative
          solutions that defy expectation.
        </p>
        <p className="max-w-2xl text-lg text-gray-300">
          Let&apos;s collaborate and cast some spells of success together.{" "}
          <a href="mailto:javanpryce1@gmail.com" className="underline">
            Reach out
          </a>
          , and let&apos;s enchant the digital world!
        </p>
      </motion.div>
    </section>
  );
}
