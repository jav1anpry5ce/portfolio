import React, { useContext } from "react";
import Built from "./Built";
import { SimpleContext } from "../utils/simpleContext";

const data = [
  // {
  //   name: "J&K Charters and Services",
  //   image: "/images/jkcharters.png",
  //   description: "A website for a local charter company.",
  //   builtWith: ["NextJS", "Tailwindcss"],
  //   live: "https://jkchartersllc.vercel.app/",
  // },
  // {
  //   name: "Music Streamer",
  //   image: "/images/music.png",
  //   description: "A music streaming app built with React.",
  //   builtWith: ["React", "Tailwindcss"],
  //   github: "https://github.com/jav1anpry5ce/music_stream_app",
  //   live: "https://music-streamer.vercel.app/",
  // },
  {
    name: "Proof Buddy",
    image: "/images/proofbuddy.png",
    description:
      "A web-based application for proof Techniques and Logical Reasoning. It is a platform for students to practice and learn proof techniques.",
    builtWith: ["React", "Django", "Docker"],
    github: "https://github.com/steveearth66/proof-buddy-New"
  },
  {
    name: "Smash Karaoke",
    image: "/images/smash-karaoke.png",
    description: "Fun Karaoke App to sing along with friends",
    builtWith: ["React", "Tailwind CSS", "Socket.Io", "Node.js"],
    github: "https://github.com/jav1anpry5ce/karaoke_app",
    live: "https://karaoke.javaughnpryce.site/#/"
  },
  {
    name: "Aspire CFS",
    image: "/images/aspirecfs.png",
    description:
      "Aspire CFS needed a new website to be built for them. I spearheaded the build of the website from the ground up, including the design, development, and deployment of the website.",
    builtWith: ["NextJS", "Tailwindcss", "GraphCMS"],
    live: "https://aspirecfs.com"
  },
  {
    name: "Virtual Link Up",
    image: "/images/virtual.jpg",
    description:
      "This application was created for the department of Information Technology at University of the Commonwealth Caribbean. The application was used to host a virtual meeting with spatial voice chat capability hosting 30+ people.",
    builtWith: ["React", "Node JS", "Three JS", "Socket.io", "Tailwindcss"],
    github: "https://github.com/jav1anpry5ce/spatial_virtual_meetings"
  }
];

export default function Work() {
  const { workRef } = useContext(SimpleContext);
  return (
    <section
      className="mx-auto mb-40 max-w-4xl px-4 md:mb-80 lg:px-0"
      ref={workRef}
    >
      <div className="mb-16 flex justify-center text-3xl md:justify-start md:space-x-4">
        <span className="gradient-text hidden text-muted sm:block">02.</span>
        <h1 className="gradient-text font-semibold text-gray-100">
          Some Things I&apos;ve Built
        </h1>
      </div>
      <div className="flex flex-col space-y-20">
        {data.map((item, index) => (
          <Built key={index} index={index} {...item} />
        ))}
      </div>
    </section>
  );
}
