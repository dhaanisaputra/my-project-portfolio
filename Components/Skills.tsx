import {
  BiLogoBootstrap,
  BiLogoGitlab,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPhp,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { DiMysql, DiRedis } from "react-icons/di";
import { IoLogoHtml5, IoLogoLaravel } from "react-icons/io5";
import { SiApachekafka, SiExpress, SiPostman } from "react-icons/si";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] ">
        <div>
          <SkillsItem
            title="Bachelor`s Degree Informatics"
            year="2012 - 2017"
          />
        </div>
        <div>
          <h1 className="uppercase font-semibold mb-[3rem] sm:mb-[2rem] md:mb-[2rem] text-[20px] sm:text-[30px] md:text-[34px] text-white">
            Tech Stack
          </h1>
          <div className="mb-[4rem] md:mb-[2rem] sm:mb-[1rem]">
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-4">
              <BiLogoJava className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <BiLogoSpringBoot className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <IoLogoHtml5 className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <BiLogoPhp className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <BiLogoTailwindCss className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <BiLogoPostgresql className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <SiExpress className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <BiLogoReact className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <BiLogoJavascript className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <BiLogoBootstrap className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <IoLogoLaravel className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <DiMysql className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
            </div>
          </div>
          <h1 className="uppercase font-semibold mb-[3rem] sm:mb-[2rem] md:mb-[2rem] text-[20px] sm:text-[30px] md:text-[34px] text-white">
            Others
          </h1>
          <div className="mb-[4rem] md:mb-[2rem] sm:mb-[1rem]">
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-4">
              <SiPostman className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <DiRedis className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <BiLogoGitlab className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
              <SiApachekafka className="sm:w-[4.5rem] sm:h-[4.5rem] md:w-[6rem] md:h-[6rem]  text-white" />
            </div>
          </div>
        </div>
        {/* <div>
          <SkillsItem
            title="Bachelor`s Degree Informatics"
            year="2012 - 2017"
          />
        </div>
        <div>
          <SkillsItem title="React Developer" year="2012 - 2014" />
          <SkillsItem title="MERN Stack Developer" year="2014 - 2016" />
          <SkillsLang
            skill1="html"
            skill2="css"
            skill3="javascript"
            level1="w-[90%]"
            level2="w-[80%]"
            level3="w-[83%]"
          />
        </div> */}
        {/* <div>
          <SkillsItem title="Java Developer" year="2016 - 2023" />
          <SkillsItem title="Node Js Developer" year="2023 - 2025" />
          <SkillsLang
            skill1="Java"
            skill2="Next Js"
            skill3="TypeScript"
            level1="w-[90%]"
            level2="w-[50%]"
            level3="w-[63%]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
