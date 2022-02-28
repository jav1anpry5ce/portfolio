import React, { useContext, useState, useEffect } from "react";
import { SimpleContext } from "../utils/simpleContext";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Transition } from "@headlessui/react";
import logo from "../assets/logo.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const { scrollTo, mainRef, aboutRef, workRef, contactRef } =
    useContext(SimpleContext);
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    });
  }, []);

  return (
    <motion.div
      className="sticky top-0 z-[9999]"
      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut" }}
    >
      <Transition
        show={open}
        className="fixed inset-y-0 right-0 z-50 min-h-screen w-[100%] bg-white/0 backdrop-blur-md"
        enter="transform duration-300"
        enterFrom="translate-x-[100%]"
        enterTo="translate-x-0"
        leave="transform duration-300"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-[100%]"
      >
        <div className="absolute right-0 min-h-screen w-[80%] bg-[#075264]">
          <div className="flex w-full flex-col items-end px-4 pt-3">
            <AiOutlineClose
              fontSize={30}
              className="text-white sm:hidden"
              onClick={() => setOpen(!open)}
            />
            <div
              className="group my-2 mt-12 flex w-full cursor-pointer items-start space-x-2 text-xl"
              onClick={() => {
                scrollTo(aboutRef);
                setOpen(!open);
              }}
            >
              <span className="text-muted">01.</span>
              <span className="text-gray-100 underline-offset-2 group-hover:underline">
                About
              </span>
            </div>
            <div
              className="group my-2 flex w-full cursor-pointer items-start space-x-2 text-xl"
              onClick={() => {
                scrollTo(workRef);
                setOpen(!open);
              }}
            >
              <span className="text-muted">02.</span>
              <span className="text-gray-100 underline-offset-2 group-hover:underline">
                Work
              </span>
            </div>
            <div
              className="group my-2 flex w-full cursor-pointer items-start space-x-2 text-xl"
              onClick={() => {
                scrollTo(contactRef);
                setOpen(!open);
              }}
            >
              <span className="text-muted">03.</span>
              <span className="text-gray-100 underline-offset-2 group-hover:underline">
                Contact
              </span>
            </div>
            <a
              href="api/resume"
              download
              className="my-2 cursor-pointer self-start rounded bg-transparent 
        px-4 py-2 text-muted ring-1 ring-muted transition duration-200 hover:bg-muted hover:text-gray-100 sm:block"
            >
              Resume
            </a>
          </div>
        </div>
      </Transition>
      <div className={`w-full bg-background/60 ${shadow && "shadow-lg"}`}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between bg-background/60 py-2 px-2  backdrop-blur-lg">
          <Image
            src={logo}
            alt="logo"
            width={55}
            height={55}
            className="cursor-pointer rounded-full"
            onClick={() => scrollTo(mainRef)}
          />
          <div className="flex grow justify-end">
            <FaBars
              fontSize={30}
              className="text-white sm:hidden"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="flex items-center space-x-4">
            <div
              className="group hidden cursor-pointer items-center space-x-2 sm:flex"
              onClick={() => scrollTo(aboutRef)}
            >
              <span className="text-muted">01.</span>
              <span className="text-gray-100 underline-offset-2 group-hover:underline">
                About
              </span>
            </div>
            <div
              className="group hidden cursor-pointer items-center space-x-2 sm:flex"
              onClick={() => scrollTo(workRef)}
            >
              <span className="text-muted">02.</span>
              <span className="text-gray-100 underline-offset-2 group-hover:underline">
                Work
              </span>
            </div>
            <div
              className="group hidden cursor-pointer items-center space-x-2 sm:flex "
              onClick={() => scrollTo(contactRef)}
            >
              <span className="text-muted">03.</span>
              <span className="text-gray-100 underline-offset-2 group-hover:underline">
                Contact
              </span>
            </div>
            <a
              href="api/resume"
              download
              className="hidden cursor-pointer rounded bg-transparent px-4 py-2 
        text-muted ring-1 ring-muted transition duration-200 hover:bg-muted hover:text-gray-100 sm:block"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
