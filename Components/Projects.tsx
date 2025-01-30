import Image from "next/image";
import { useMemo, useState } from "react";
import {
  BiLogoJava,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoSpringBoot,
} from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const showcases = [
  {
    id: 1,
    name: "Easy Accounting System - Cloud",
    description:
      "Easy Cloud is a cloud storage service that allows users to store their files and access them from anywhere. It is a simple and user-friendly platform that provides a secure and reliable storage solution for individuals and businesses.",
    image: "/images/all-project/Easy Cloud/Shortcut page Easy Cloud.jpg",
    category: "Web Development",
    githubLink: "",
    demoLink: "https://public.easycloud.co.id/",
  },
  {
    id: 2,
    name: "CIMB Niaga Merchant Business Information System",
    description:
      "EDC is a cloud storage service that allows users to store their files and access them from anywhere. It is a simple and user-friendly platform that provides a secure and reliable storage solution for individuals and businesses.",
    image: "/images/all-project/EDC/Login EDC.jpg",
    category: "Web Development",
    githubLink: "",
    demoLink: "",
  },
  {
    id: 3,
    name: "Yogyakarta Fingerboard Community Blog",
    description:
      "Ykfb Blog is a cloud storage service that allows users to store their files and access them from anywhere. It is a simple and user-friendly platform that provides a secure and reliable storage solution for individuals and businesses.",
    image: "/images/all-project/Ykfb Blog/About Us.jpg",
    category: "Self Projects",
    githubLink: "",
    demoLink: "https://ykfbcommunity.my.id/",
  },
  {
    id: 4,
    name: "Portfolio",
    description:
      "Portfolio is a cloud storage service that allows users to store their files and access them from anywhere. It is a simple and user-friendly platform that provides a secure and reliable storage solution for individuals and businesses.",
    image: "/images/all-project/Portfolio SPA/Home Portfolio.jpg",
    category: "Self Projects",
    githubLink: "",
    demoLink: "",
  },
  {
    id: 5,
    name: "E-commerce Online Shop",
    description:
      "E-commerce Online Shop is a cloud storage service that allows users to store their files and access them from anywhere. It is a simple and user-friendly platform that provides a secure and reliable storage solution for individuals and businesses.",
    image: "/images/all-project/EDC/Login EDC.jpg",
    category: "Self Projects",
    githubLink: "",
    demoLink: "",
  },
  {
    id: 6,
    name: "ATM Bussines Information System - CIMB Niaga",
    description:
      "ATM Bussines is a cloud storage service that allows users to store their files and access them from anywhere. It is a simple and user-friendly platform that provides a secure and reliable storage solution for individuals and businesses.",
    image: "/images/all-project/ATM Bisnis/login Atm.jpeg",
    category: "Web Development",
    githubLink: "",
    demoLink: "",
  },
];

const categories = ["All", "Web Development", "Self Projects"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects = useMemo(() => {
    if (filter === "All")
      return showcases.map((items, index) => {
        return (
          // <div key={index} className="flex flex-col gap-[1rem]">
          //   <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200  relative w-[100%] h-[300px] md:h-[400px] border-[2px] border-[#55e6a5] rounded-lg">
          //     <Image
          //       src={items.image}
          //       alt={items.name}
          //       className="rounded-lg object-contain"
          //       layout="fill"
          //     />
          //   </div>
          // </div>
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 duration-300 relative"
          >
            <div className="relative z-10 bg-white dark:bg-gray-800 hover:scale-105 duration-300 p-4 rounded-xl">
              <Image
                src={items.image}
                alt={items.name}
                className="rounded-t h-72 w-full object-cover"
                height={0}
                width={1000}
                // layout="fill"
              />
              {/* <div id="proj-tags" className="absolute left-6 top-6">
                <p className="bg-gray-200 inline-block p-2 rounded-xl">
                  Javascript
                </p>
                <p className="bg-gray-200 inline-block p-2 rounded-xl">React</p>
              </div> */}
              <div id="proj-details" className="py-2">
                <p className="text-lg text-center text-wrap font-bold leading-relaxed text-gray-800 dark:text-gray-300 py-2">
                  {items.name}
                </p>
                <div className="leading-5 my-4 text-gray-500 dark:text-gray-400">
                  {/* <p className="absolute bg-gray-200 p-2 rounded left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Tech Stack
                  </p> */}
                  <div className="border-2 rounded-xl py-8 flex items-center gap-6 justify-center">
                    <BiLogoJava className="sm:w-[1rem] sm:h-[1rem] w-[6rem] h-[6rem] inline-block" />
                    <BiLogoSpringBoot className="sm:w-[1rem] sm:h-[1rem] w-[6rem] h-[6rem] inline-block" />
                    <BiLogoPostgresql className="sm:w-[1rem] sm:h-[1rem] w-[6rem] h-[6rem] inline-block" />
                    <BiLogoReact className="sm:w-[1rem] sm:h-[1rem] w-[6rem] h-[6rem] inline-block" />
                  </div>
                </div>
                <div>
                  <p className="text-white">
                    <span className="font-bold ">Description:</span>{" "}
                    {items.description}.
                  </p>
                </div>
              </div>
              <div
                id="social-links"
                className="border-t flex items-center justify-between py-2"
              >
                <a
                  href="#"
                  target="_blank"
                  className="bg-gray-300 p-2 mx-4 rounded-lg hover:bg-gray-400 hover:text-white duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="bg-gray-300 p-2 mx-4 rounded-lg hover:bg-gray-400 hover:text-white duration-300"
                >
                  <FaArrowUpRightFromSquare />
                </a>
              </div>
            </div>
          </div>
        );
      });
    return showcases
      .filter((item) => item.category === filter)
      .map((items, index) => {
        return (
          // <div key={index} className="flex flex-col gap-[1rem]">
          //   <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200  relative w-[100%] h-[300px] md:h-[400px] border-[2px] border-[#55e6a5] rounded-lg">
          //     <Image
          //       src={items.image}
          //       alt={items.name}
          //       className="object-contain rounded-lg"
          //       layout="fill"
          //     />
          //   </div>
          // </div>
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 duration-300 relative"
          >
            <div className="relative z-10 bg-white dark:bg-gray-800 hover:scale-105 duration-300 p-4 rounded-xl">
              <Image
                src={items.image}
                alt={items.name}
                className="rounded-t h-72 w-full object-cover"
                height={0}
                width={1000}
                // layout="fill"
              />
              {/* <div id="proj-tags" className="absolute left-6 top-6">
                <p className="bg-gray-200 inline-block p-2 rounded-xl">
                  Javascript
                </p>
                <p className="bg-gray-200 inline-block p-2 rounded-xl">React</p>
              </div> */}
              <div id="proj-details" className="py-2">
                <p className="text-lg text-center text-wrap font-bold leading-relaxed text-gray-800 dark:text-gray-300 py-2">
                  {items.name}
                </p>
                <div className="leading-5 my-4 text-gray-500 dark:text-gray-400">
                  {/* <p className="absolute bg-gray-200 p-2 rounded left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Tech Stack
                  </p> */}
                  <div className="border-2 rounded-xl py-8 flex items-center gap-6 justify-center">
                    <BiLogoJava className="sm:w-[1rem] sm:h-[1rem] w-[6rem] h-[6rem] inline-block" />
                    <BiLogoSpringBoot className="sm:w-[1rem] sm:h-[1rem] w-[6rem] h-[6rem] inline-block" />
                    <BiLogoPostgresql className="sm:w-[1rem] sm:h-[1rem] w-[6rem] h-[6rem] inline-block" />
                    <BiLogoReact className="sm:w-[1rem] sm:h-[1rem] w-[6rem] h-[6rem] inline-block" />
                  </div>
                </div>
                <div>
                  <p className="text-white">
                    <span className="font-bold ">Description:</span> Used
                    Carousel plugin, Lorem plugin. Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div
                id="social-links"
                className="border-t flex items-center justify-between py-2"
              >
                <a
                  href="#"
                  target="_blank"
                  className="bg-gray-300 p-2 mx-4 rounded-lg hover:bg-gray-400 hover:text-white duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="bg-gray-300 p-2 mx-4 rounded-lg hover:bg-gray-400 hover:text-white duration-300"
                >
                  <FaArrowUpRightFromSquare />
                </a>
              </div>
            </div>
          </div>
        );
      });
  }, [filter]);
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Proj<span className="text-yellow-400">ects</span>
      </h1>
      {/* Tab Projects */}
      <div className="relative flex gap-3 sm:gap-6 mt-10 mx-auto justify-center">
        {categories.map((items, index) => {
          return (
            <button
              onClick={() => setFilter(items)}
              key={index}
              data-filter={items}
              className={`${
                items === filter &&
                "text-green-300 font-semibold hover:text-green-300 py-2 text-[24px] transition-all"
              } capitalize font-medium hover:text-gray-400 transition-all text-gray-500 py-2 text-[24px]`}
              // className="filter-btn text-gray-500 font-semibold hover:text-gray-400 py-2 text-[24px] transition-all"
            >
              {items}
            </button>
          );
        })}
        {/* <button
          data-filter="All"
          className="filter-btn text-accent font-bold py-2 transition-all text-[24px] text-white"
        >
          All
        </button>
        <button
          data-filter="Web Development"
          className="filter-btn text-gray-500 font-semibold hover:text-gray-400 py-2 text-[24px] transition-all"
        >
          Web Development
        </button>
        <button
          data-filter="Self Projects"
          className="filter-btn text-gray-500 font-semibold hover:text-gray-400 py-2 text-[24px] transition-all"
        >
          Self Projects
        </button> */}
        <span
          className="absolute bottom-0 h-1 bg-accent rounded transition-all duration-300 ease-in-out"
          style={{ width: "0%" }}
        ></span>
      </div>
      {/* Showcase Projects */}
      {/* <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {filteredProjects} */}
      {/* <div className="flex flex-col gap-[1rem]">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200  relative w-[100%] h-[300px] md:h-[400px]">
            <Image
              src="/images/all-project/Ykfb Blog/About Us.jpg"
              alt="project1"
              className="object-cover rounded-lg"
              width={1000}
              height={800}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200  relative w-[100%] h-[300px] md:h-[400px]">
            <Image
              src="/images/all-project/Ykfb Blog/About Us.jpg"
              alt="project1"
              className="object-cover rounded-lg"
              width={1000}
              height={800}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200  relative w-[100%] h-[300px] md:h-[400px]">
            <Image
              src="/images/all-project/Easy Cloud/Shortcut page Easy Cloud.jpg"
              alt="project1"
              className="object-cover rounded-lg"
              width={1000}
              height={800}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200  relative w-[100%] h-[300px] md:h-[400px]">
            <Image
              src="/images/all-project/EDC/Login EDC.jpg"
              alt="project1"
              className="object-cover rounded-lg"
              width={1000}
              height={800}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200  relative w-[100%] h-[300px] md:h-[400px]">
            <Image
              src="/images/all-project/EDC/Login EDC.jpg"
              alt="project1"
              className="object-cover rounded-lg"
              width={1000}
              height={800}
            />
          </div>
        </div> */}
      {/* </div> */}
      <div className="w-[80%] mx-auto grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects}
      </div>
    </div>
  );
};

export default Projects;
