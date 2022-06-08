import React from "react";
import { BsFolder2Open } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const data = [
  {
    title: "Hotspot Alert",
    description:
      "The “Hotspot Alert” is a web application that allows its users to share current criminal occurrences the moment they happen.",
    stack: ["React", "Django", "Socket.io"],
    link: "https://github.com/jav1anpry5ce/hotspot_alert",
  },
  {
    title: "Song Queue",
    description:
      "This application was created for UCC IT Club monthly Karaoke party.",
    stack: ["React", "Node JS", "Socket.io"],
    link: "https://github.com/jav1anpry5ce/song_queue",
  },
  {
    title: "Space Invaders",
    description:
      "This is a simple space invaders game. The objective is to destroy the aliens before they reach the bottom of the screen.",
    stack: ["Python", "Pygame"],
    link: "https://github.com/jav1anpry5ce/Space-Invaders",
  },
  {
    title: "Hospital Management System",
    description:
      "This is a hospital management system. It is a C# application that allows its hospital's to manage their patients and their records.",
    stack: ["C#", "SQL Server"],
    link: "https://github.com/jav1anpry5ce/Hospital-Management-System",
  },
];

function BuildCard({ title, description, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex min-h-[250px] max-w-[27rem] cursor-pointer flex-col justify-between gap-5 rounded bg-[#043a47] p-6 transition duration-200 hover:-translate-y-2"
    >
      <div className="flex items-center justify-between">
        <BsFolder2Open fontSize={30} className="text-muted" />
        <a href={link} target="_blank" rel="noreferrer">
          <FiGithub fontSize={25} className="text-gray-100 hover:text-muted" />
        </a>
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-medium text-gray-100">{title}</p>
        <p className="text-gray-200">{description}</p>
      </div>
      <ul className="flex flex-wrap items-center gap-x-2 text-sm font-thin text-gray-200">
        {stack.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </a>
  );
}

export default function Other() {
  return (
    <div className="mx-auto -mt-32 mb-40 max-w-4xl px-4 sm:px-0 md:mb-80">
      <h1 className="my-12 text-center text-xl font-medium text-gray-100 md:text-3xl">
        Other Noteworthy Projects
      </h1>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 justify-items-center gap-y-5 px-2 lg:grid-cols-2 lg:px-0"
      >
        {data.map((item, index) => (
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 * index }}
            key={index}
          >
            <BuildCard {...item} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
