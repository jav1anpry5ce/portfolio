import React, { useContext } from "react";
import Image from "next/image";
import me from "../assets/img.jpeg";
import { SimpleContext } from "../utils/simpleContext";
import { motion } from "framer-motion";

export default function AboutMe() {
  const { aboutRef } = useContext(SimpleContext);

  return (
    <section
      className="mx-auto mb-20 max-w-4xl px-4 md:mb-80 lg:px-2"
      ref={aboutRef}
    >
      <div className="mb-8 flex justify-center text-3xl md:mb-16 md:justify-start md:space-x-4">
        <span className="gradient-text hidden text-muted sm:block">01.</span>
        <h1 className="gradient-text font-semibold text-gray-100">About Me</h1>
      </div>
      <motion.div
        className="flex w-full flex-col items-center md:flex-row md:items-start md:space-x-6"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex max-w-lg grow flex-col space-y-6 pr-4 text-base font-medium text-gray-400 md:items-start">
          <p>
            Hello! My name is Javaughn Pryce, a recent graduate of the
            University of the Commonwealth Caribbean. You can always find me at
            my computer working on new ideas. My interest in web development
            started in 2019 after starting university.
          </p>
          <p>
            Fast-forward to today. And I&apos;ve had the pleasure of working on
            some very exciting projects. One of my favorite projects was
            building a virtual meeting room using Three-JS along with React and
            Node JS. I was also placed first place in the annual Byte the Pi
            Caribbean Hackathon; my team and I built a web application that
            would speed up the registration process for vaccination and testing
            of the COVID 19 pandemic. The system was also designed to manage the
            inventory of vaccines.
          </p>
          <p>
            Here are a few of the technologies I&apos;ve been working with
            recently:
          </p>
          <ul className="md:list list-inside list-disc">
            <li>JavaScript (ES7)</li>
            <li>React</li>
            <li>Next JS</li>
            <li>Node JS</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
        <motion.div
          className="group relative mt-4 flex items-center justify-center px-4 md:mt-0 md:block"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="gradient-image absolute z-50 h-[312px] w-[312px] rounded transition duration-300 group-hover:opacity-0 group-active:opacity-0" />
          <Image
            src={me}
            alt="Me"
            layout="fixed"
            className="rounded"
            width={312}
            height={312}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
