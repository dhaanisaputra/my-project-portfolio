import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="flex flex-col items-center">
        <h1 className="heading">
          About <span className="text-yellow-400">Me</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center mt-[4rem] md:mt-[8rem]">
        <div>
          {/* <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1> */}

          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            Dynamic Visions
          </h1>
          {/* <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Dynamic <span className="text-yellow-400">Visions</span>
          </h2> */}
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, quas corporis eius modi alias ex voluptates eum
              repudiandae ipsam vel facere dolore possimus totam molestias
              fugiat. Laudanatium esse suscipit perspiciatis!
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src="/images/Free Vector _ Programmer working at computer.jpg"
            alt="about"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // objectFit="contain"
            style={{ objectFit: "contain" }}
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e3a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
