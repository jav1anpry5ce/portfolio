import React, { useContext } from "react";
import Image from "next/image";
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
        className="flex w-full flex-col items-center md:flex-col md:items-start md:space-x-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* <motion.div
          className="group relative mt-4 flex items-center justify-center px-4 md:mt-0 md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <div className="gradient-image absolute z-50 h-[312px] w-[312px] rounded transition duration-300 group-hover:opacity-0 group-active:opacity-0" />
          <Image
            src="/images/photo.jpeg"
            alt="Me"
            layout="fixed"
            className="rounded object-cover"
            width={312}
            height={312}
          />
        </motion.div> */}
        <div className="flex grow flex-col space-y-6 pr-4 text-base font-medium text-gray-400 md:items-start">
          <p>
            A dedicated software engineer currently pursuing a master&apos;s
            degree at Drexel University, building upon my foundation as a recent
            graduate with honors from the University of the Commonwealth
            Caribbean. My journey into software engineering began in 2019 during
            my undergraduate studies, igniting a deep-seated passion for coding
            and innovation that continues to propel my career forward.
          </p>
          <p>
            Throughout my academic and professional journey, I&apos;ve had the
            privilege of working on diverse and impactful projects. Among these,
            I took great pride in developing a virtual meeting room using
            Three.js, React, and Node.js, showcasing my technical prowess and
            creative problem-solving skills. Additionally, my team&apos;s
            success in winning first place at the annual Byte the Pi Caribbean
            Hackathon underscores my commitment to leveraging technology for
            social good, as we created a web application to streamline COVID-19
            vaccination and testing processes, including vaccine inventory
            management.
          </p>
          <p>
            During my master&apos;s program at Drexel University, I&apos;ve been
            expanding my skill set to include Test-Driven Development (TDD),
            recognizing its importance in ensuring code quality and scalability.
            This addition complements my practical experiences and enhances my
            ability to deliver robust and reliable solutions.
          </p>
          <p>
            Proficient in technologies such as JavaScript (ES7), React, Next.js,
            Node.js, Python, and Django, I am equipped to tackle complex
            challenges and deliver innovative solutions. I am deeply passionate
            about contributing to meaningful projects and am actively seeking
            opportunities to apply my expertise and drive positive change.
          </p>
          <p>
            If you&apos;re looking for a dedicated and versatile developer with
            a strong academic background, practical experience, and a commitment
            to continuous learning, I&apos;d love to connect and explore
            potential collaborations.
          </p>
          <p>Languages and Skills:</p>
          <ul className="md:list list-inside list-disc">
            <li>JavaScript (ES7)</li>
            <li>React</li>
            <li>Next JS</li>
            <li>Node JS</li>
            <li>Python</li>
            <li>Django</li>
            <li>Java</li>
            <li>TDD</li>
            <li>Cloud Computing</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
