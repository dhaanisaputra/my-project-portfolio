import React from "react";

interface Props {
  title: string;
  year: string;
}

const SkillsItem = ({ title, year }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5] ">
        {year}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white">
        {title}
      </h1>
      <h3 className="uppercase font-semibold mb-[1rem] text-[12px] sm:text-[16px] md:text-[22px] text-white">
        University of Technology Yogyakarta
      </h3>
      {/* <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab vel
        culpa architecto fuga quis mollitia aliquid ipsam deleniti cupiditate,
        magnam ipsum temporibus. Laboriosam, nulla iusto cupiditate consequatur
        a est.
      </p> */}
    </div>
  );
};

export default SkillsItem;
