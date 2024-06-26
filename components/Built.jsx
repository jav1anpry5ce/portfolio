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
      <div className="flex w-full flex-col justify-between md:flex-row">
        <motion.div
          className="order-last my-2 hidden grow md:my-0 md:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Image
            src={image}
            alt=""
            width={550}
            height={350}
            className="aspect-square rounded object-contain object-center"
          />
        </motion.div>
        <motion.div
          className="md:max-w-sm"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="mb-6 text-left">
            <p className="font-medium text-muted">Featured Project</p>
            <p className="text-lg font-semibold text-gray-300">{name}</p>
          </div>
          <div className="sticky z-50 hidden w-[30rem] rounded bg-[#075264]/90 px-4 py-1 text-gray-200 md:block">
            <p className="text-left">{description}</p>
          </div>
          <div className="text-left text-gray-200 md:hidden">
            <p>{description}</p>
          </div>
          <div className="pt-5 md:hidden">
            <Image
              src={image}
              alt=""
              width={550}
              height={350}
              className="aspect-square rounded object-contain object-center"
            />
          </div>
          <div className="mt-4 flex w-full flex-wrap gap-x-2 text-left text-gray-400">
            {builtWith.map((name, index) => (
              <p key={index}>{name}</p>
            ))}
          </div>
          <div className="mt-6 flex justify-start space-x-4">
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <div className="button group">
                  <p className="font-medium text-gray-200 transition duration-300 group-hover:text-white">
                    Source Code
                  </p>
                  <AiFillGithub
                    fontSize={30}
                    className="cursor-pointer text-gray-200 transition duration-300 group-hover:text-white"
                  />
                </div>
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noreferrer">
                <div className="button group">
                  <p className="font-medium text-gray-200 transition duration-300 group-hover:text-white">
                    Visit Site
                  </p>
                  <AiOutlineEye
                    fontSize={30}
                    className="cursor-pointer text-gray-200 transition duration-300 group-hover:text-white"
                  />
                </div>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    );
  } else
    return (
      <div className="flex w-full flex-col justify-between md:flex-row">
        <motion.div
          className="order-last my-2 hidden grow md:order-first md:my-0 md:block"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Image
            src={image}
            alt=""
            width={550}
            height={350}
            className="aspect-square rounded object-contain object-center"
          />
        </motion.div>
        <motion.div
          className="md:max-w-sm"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="mb-6 md:text-right">
            <p className="font-medium text-muted">Featured Project</p>
            <p className="text-lg font-semibold text-gray-300">{name}</p>
          </div>
          <div className="hidden w-[30rem] -translate-x-24 rounded bg-[#075264]/90 px-4 py-1 text-gray-200 md:block">
            <p className="text-left">{description}</p>
          </div>
          <div className="text-gray-200 md:hidden md:text-right">
            <p>{description}</p>
          </div>
          <div className="pt-5 md:hidden">
            <Image
              src={image}
              alt=""
              width={550}
              height={350}
              className="aspect-square rounded object-contain object-center"
            />
          </div>
          <div className="mt-4 flex w-full flex-wrap gap-x-2 text-right text-gray-400 md:justify-end">
            {builtWith.map((name, index) => (
              <p key={index}>{name}</p>
            ))}
          </div>
          <div className="mt-6 flex space-x-4 md:justify-end">
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <div className="button group">
                  <p className="font-medium text-gray-200 transition duration-300 group-hover:text-white">
                    Source Code
                  </p>
                  <AiFillGithub
                    fontSize={30}
                    className="cursor-pointer text-gray-200 transition duration-300 group-hover:text-white"
                  />
                </div>
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noreferrer">
                <div className="button group flex">
                  <p className="font-medium text-gray-200 transition duration-300 group-hover:text-white">
                    Visit Site
                  </p>
                  <AiOutlineEye
                    fontSize={30}
                    className="cursor-pointer text-gray-200 transition duration-300 group-hover:text-white"
                  />
                </div>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    );
}
