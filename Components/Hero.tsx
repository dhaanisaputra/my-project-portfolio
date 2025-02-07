import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/BlueBackground.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I`m <span className="text-yellow-400"> ZUKO</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[20px] text-[#ffffff92]">
            Java | PHP | React | Node | Express | NextJS | Tailwind | CSS |
            HTML5 | TypeScript | Springboot | Laravel | MySQL | PostgreSQL |
            Oracle |
          </p>
          <div className="mt-[2rem] text-[20px] text-white flex items-center space-x-4">
            Let`s Connect!
            <div className="flex ml-[1rem] space-x-4">
              <a
                href="https://www.instagram.com/dhaanisaputra/"
                target="_blank"
                className="text-[24px] "
              >
                <IoLogoInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/mochamad-dani-saputra-436531290/"
                target="_blank"
                className="text-[24px] cursor-pointer"
              >
                <IoLogoLinkedin className="text-[24px]" />
              </a>
              <a
                href="https://github.com/dhaanisaputra"
                target="_blank"
                className="text-[24px] cursor-pointer"
              >
                <IoLogoGithub />
              </a>
            </div>
          </div>
          <div className="mt-[2rem] flex flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] sm:px-[1.5rem] md:px-[1.8rem] lg:px-[2rem] py-[1rem] sm:py-[0.8rem] md:py-[0.9rem] text-[16px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold uppercase bg-[#55e6a5] text-black hover:bg-yellow-400 transition-all duration-200 flex items-center space-x-2">
              <p className="text-[16px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                Download CV
              </p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.6rem] sm:w-[1.4rem] sm:h-[1.4rem] md:w-[1.6rem] md:h-[1.6rem] lg:w-[1.8rem] lg:h-[1.8rem] text-black" />
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/person-2.jpg"
            alt="user"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
