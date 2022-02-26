import Image from "next/image";
import React from "react";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import ERMS from "../assets/ERMS.jpg";

export default function Built({
  name,
  image,
  description,
  builtWith,
  github,
  live,
}) {
  return (
    <div className="flex w-full flex-col justify-between px-2 md:flex-row md:px-0">
      <div className="hidden grow md:block">
        <Image
          src={image}
          alt="ERMS"
          width={550}
          height={350}
          className="aspect-square rounded object-fill object-center"
        />
      </div>
      <div className="max-w-sm">
        <div className="mb-6 text-right">
          <p className="font-medium text-muted">Featured Project</p>
          <h4 className="text-lg font-semibold text-gray-300">{name}</h4>
        </div>
        <div className="hidden w-[30rem] -translate-x-24 rounded bg-[#075264]/90 px-4 py-1 text-gray-200 md:block">
          <p className="text-right">{description}</p>
        </div>
        <div className="text-right text-gray-200 md:hidden">
          <p>{description}</p>
        </div>
        <div className="mt-4 flex w-full flex-wrap justify-end space-x-4 text-right text-gray-400">
          {builtWith.map((name, index) => (
            <p key={index}>{name}</p>
          ))}
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <a href={github} target="_blank" rel="noreferrer">
            <AiFillGithub
              fontSize={30}
              className="cursor-pointer text-gray-100 hover:text-muted"
            />
          </a>
          <a href={live} target="_blank" rel="noreferrer">
            <AiOutlineEye
              fontSize={30}
              className="cursor-pointer text-gray-100 hover:text-muted"
            />
          </a>
        </div>
      </div>
      <div className="my-2 grow md:hidden">
        <Image
          src={image}
          alt="ERMS"
          width={550}
          height={350}
          className="aspect-square rounded object-fill object-center"
        />
      </div>
    </div>
  );
}
