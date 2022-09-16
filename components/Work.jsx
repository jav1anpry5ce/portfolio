import React, { useContext } from "react";
import Built from "./Built";
import { SimpleContext } from "../utils/simpleContext";

const data = [
  {
    name: "Smash Karaoke",
    image: "/images/smash-karaoke.png",
    description: "Fun Karaoke App to sing along with friends",
    builtWith: ["React", "Tailwind CSS", "Socket.Io", "Node.js"],
    github: "https://github.com/jav1anpry5ce/karaoke_app",
    live: "https://smash-karaoke.vercel.app",
  },
  {
    name: "Aspire CFS",
    image: "/images/aspirecfs.png",
    description:
      "Aspire CFS needed a new website to be built for them. I spearheaded the build of the website from the ground up, including the design, development, and deployment of the website.",
    builtWith: ["NextJS", "Tailwindcss", "GraphCMS"],
    live: "https://aspirecfs.com",
  },
  {
    name: "Epidemic Response Management System",
    image: "/images/ERMS.jpg",
    description:
      "This system was designed for managing epidemics/pandemics such as COVID. The main function of the system was to aid in speeding up the registrations process for testing and vaccination for Jamaican citizens.",
    builtWith: ["Django", "React", "Tailwindcss", "Redux"],
    github: "https://github.com/jav1anpry5ce/epidemic_management_system",
    live: "https://epidemic-management-system.vercel.app",
  },
  {
    name: "Virtual Link Up",
    image: "/images/virtual.jpg",
    description:
      "This application was created for the department of Information Technology at University of the Commonwealth Caribbean. The application was used to host a virtual meeting with spatial voice chat capability hosting 30+ people.",
    builtWith: ["React", "Node JS", "Three JS", "Socket.io", "Tailwindcss"],
    github: "https://github.com/jav1anpry5ce/spatial_virtual_meetings",
    live: "https://meetings.javaughnpryce.live",
  },
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
