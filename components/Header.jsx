import React, { useContext, useState } from "react";
import { SimpleContext } from "../utils/simpleContext";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Transition } from "@headlessui/react";
import Image from "next/image";

export default function Header() {
  const { scrollTo, mainRef, aboutRef, workRef, contactRef } =
    useContext(SimpleContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[9999]">
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
            <a
              href="#about"
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
            </a>
            <a
              href="#work"
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
            </a>
            <a
              href="#contact"
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
            </a>
            <a
              href="api/resume"
              download
              className="my-2 cursor-pointer self-start rounded bg-transparent 
        px-4 py-2 text-muted ring-1 ring-muted transition duration-200 hover:bg-muted/20 hover:text-gray-100 sm:block"
            >
              Resume
            </a>
          </div>
        </div>
      </Transition>
      <div className="w-full select-none overflow-x-hidden bg-background/70 shadow-2xl shadow-background backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-2">
          <a href="#main" onClick={() => scrollTo(mainRef)} tabIndex="1">
            <Image
              src="/images/logo.jpeg"
              alt="logo"
              width={55}
              height={55}
              layout="fixed"
              className="cursor-pointer rounded-full"
            />
          </a>
          <div className="flex grow justify-end">
            <FaBars
              fontSize={30}
              className="text-white sm:hidden"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#about"
              className="group hidden cursor-pointer items-center space-x-2 sm:flex"
              onClick={() => scrollTo(aboutRef)}
              tabIndex="2"
            >
              <span className="text-muted">01.</span>
              <span className="text-gray-100 underline-offset-2 group-hover:underline">
                About
              </span>
            </a>
            <a
              href="#work"
              className="group hidden cursor-pointer items-center space-x-2 sm:flex"
              onClick={() => scrollTo(workRef)}
              tabIndex="3"
            >
              <span className="text-muted">02.</span>
              <span className="text-gray-100 underline-offset-2 group-hover:underline">
                Work
              </span>
            </a>
            <a
              href="#contact"
              className="group hidden cursor-pointer items-center space-x-2 sm:flex "
              onClick={() => scrollTo(contactRef)}
              tabIndex="4"
            >
              <span className="text-muted">03.</span>
              <span className="text-gray-100 underline-offset-2 group-hover:underline">
                Contact
              </span>
            </a>
            <a
              tabIndex="5"
              href="api/resume"
              download
              className="hidden cursor-pointer rounded bg-transparent px-4 py-2 
        text-muted ring-1 ring-muted transition duration-200 hover:bg-muted/20 hover:text-gray-100 sm:block"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
