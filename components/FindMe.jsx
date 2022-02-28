import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

export default function FindMe() {
  return (
    <motion.div
      className="fixed left-16 bottom-20 hidden px-2 md:block"
      whileInView={{ opacity: [0, 1], scale: [0, 1.2, 1] }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col space-y-5">
        <a
          href="https://github.com/jav1anpry5ce"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub
            className="transform cursor-pointer text-gray-300 duration-300 hover:-translate-y-1 hover:text-muted"
            fontSize={30}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/javaughn-pryce-9441b814a/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin
            className="transform cursor-pointer  text-gray-300 duration-300 hover:-translate-y-1 hover:text-muted"
            fontSize={30}
          />
        </a>
      </div>
    </motion.div>
  );
}
