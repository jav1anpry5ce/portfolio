import React, { useContext } from "react";
import Built from "./Built";
import ERMS from "../assets/ERMS.jpg";
import chat from "../assets/chat.jpg";
import virtual from "../assets/virtual.jpg";
import { SimpleContext } from "../utils/simpleContext";

const data = [
  {
    name: "Epidemic Response Management System",
    image: ERMS,
    description:
      "This system was designed for managing epidemics/pandemics such as COVID. The main function of the system was to aid in speeding up the registrations process for testing and vaccination for Jamaican citizens.",
    builtWith: ["Django", "React", "Tailwindcss", "Redux"],
    github: "https://github.com/jav1anpry5ce/epidemic_management_system",
    live: "https://epidemic-management-system.vercel.app",
  },
  {
    name: "Virtual Link Up",
    image: virtual,
    description:
      "This application was created for the department of Information Technology at University of the Commonwealth Caribbean. The application was used to host a virtual meeting with spatial voice chat capability hosting 30+ people.",
    builtWith: ["React", "Node JS", "Three JS", "Socket.io", "Tailwindcss"],
    github: "https://github.com/jav1anpry5ce/spatial_virtual_meetings",
    live: "https://meetings.javaughnpryce.live",
  },
  {
    name: "Chat App",
    image: chat,
    description: "Whatsapp like chat application.",
    builtWith: ["React", "Node JS", "Socket.io", "Tailwindcss"],
    github: "https://github.com/jav1anpry5ce/React-Chat-App",
    live: "https://chat.javaughnpryce.live",
  },
];

export default function Work() {
  const { workRef } = useContext(SimpleContext);
  return (
    <div className="mx-auto mb-40 max-w-4xl md:mb-80" ref={workRef}>
      <div className="mb-16 flex justify-center text-3xl md:justify-start md:space-x-4">
        <span className="hidden text-muted sm:block">02.</span>
        <span className="font-semibold text-gray-100">
          Some Things I&apos;ve Built
        </span>
      </div>
      <div className="flex flex-col space-y-20">
        {data.map((item, index) => (
          <Built key={index} index={index} {...item} />
        ))}
      </div>
    </div>
  );
}
