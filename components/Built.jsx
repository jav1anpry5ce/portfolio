import Image from "next/image";
import React from "react";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Built({
  name,
  image,
  description,
  builtWith,
  github,
  live,
  index,
}) {
  if (index % 2 === 0) {
    return (
      <div className="flex w-full flex-col justify-between px-2 md:flex-row md:px-0">
        <motion.div
          className="order-last my-2 hidden grow md:my-0 md:block"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={image}
            alt="ERMS"
            width={550}
            height={350}
            className="aspect-square rounded object-fill object-center"
          />
        </motion.div>
        <motion.div
          className="md:max-w-sm"
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 text-left">
            <p className="font-medium text-muted">Featured Project</p>
            <h4 className="text-lg font-semibold text-gray-300">{name}</h4>
          </div>
          <div className="sticky z-50 hidden w-[30rem] rounded bg-[#075264]/90 px-4 py-1 text-gray-200 md:block">
            <p className="text-left">{description}</p>
          </div>
          <div className="text-left text-gray-200 md:hidden">
            <p>{description}</p>
          </div>
          <div
            className="pt-5 md:hidden"
          >
            <Image
              src={image}
              alt="ERMS"
              width={550}
              height={350}
              className="aspect-square rounded object-fill object-center"
            />
          </div>
          <div className="mt-4 flex w-full flex-wrap gap-x-2 text-left text-gray-400">
            {builtWith.map((name, index) => (
              <p key={index}>{name}</p>
            ))}
          </div>
          <div className="mt-6 flex justify-start space-x-4">
            <a href={github} target="_blank" rel="noreferrer">
              <div className="group flex items-center gap-2 rounded bg-muted/80 px-4 py-1">
                <p className="font-medium text-gray-500 transition duration-300 group-hover:text-white">
                  Source Code
                </p>
                <AiFillGithub
                  fontSize={30}
                  className="cursor-pointer text-gray-500 transition duration-300 group-hover:text-white"
                />
              </div>
            </a>
            <a href={live} target="_blank" rel="noreferrer">
              <div className="group flex items-center gap-2 rounded bg-muted/80 px-4 py-1">
                <p className="font-medium text-gray-500 transition duration-300 group-hover:text-white">
                  Live View
                </p>
                <AiOutlineEye
                  fontSize={30}
                  className="cursor-pointer text-gray-500 transition duration-300 group-hover:text-white"
                />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    );
  } else
    return (
      <div className="flex w-full flex-col justify-between px-2 md:flex-row md:px-0">
        <motion.div
          className="order-last my-2 hidden grow md:order-first md:my-0 md:block"
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={image}
            alt="ERMS"
            width={550}
            height={350}
            className="aspect-square rounded object-fill object-center"
          />
        </motion.div>
        <motion.div
          className="md:max-w-sm"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 sm:text-right">
            <p className="font-medium text-muted">Featured Project</p>
            <h4 className="text-lg font-semibold text-gray-300">{name}</h4>
          </div>
          <div className="hidden w-[30rem] -translate-x-24 rounded bg-[#075264]/90 px-4 py-1 text-gray-200 md:block">
            <p className="text-left">{description}</p>
          </div>
          <div className="text-gray-200 sm:text-right md:hidden">
            <p>{description}</p>
          </div>
          <div
            className="pt-5 md:hidden"
          >
            <Image
              src={image}
              alt="ERMS"
              width={550}
              height={350}
              className="aspect-square rounded object-fill object-center"
            />
          </div>
          <div className="mt-4 flex w-full flex-wrap gap-x-2 text-right text-gray-400 sm:justify-end">
            {builtWith.map((name, index) => (
              <p key={index}>{name}</p>
            ))}
          </div>
          <div className="mt-6 flex space-x-4 md:justify-end">
            <a href={github} target="_blank" rel="noreferrer">
              <div className="group flex items-center gap-2 rounded bg-muted/80 px-4 py-1">
                <p className="font-medium text-gray-500 transition duration-300 group-hover:text-white">
                  Source Code
                </p>
                <AiFillGithub
                  fontSize={30}
                  className="cursor-pointer text-gray-500 transition duration-300 group-hover:text-white"
                />
              </div>
            </a>
            <a href={live} target="_blank" rel="noreferrer">
              <div className="group flex items-center gap-2 rounded bg-muted/80 px-4 py-1">
                <p className="font-medium text-gray-500 transition duration-300 group-hover:text-white">
                  Live View
                </p>
                <AiOutlineEye
                  fontSize={30}
                  className="cursor-pointer text-gray-500 transition duration-300 group-hover:text-white"
                />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    );
}
