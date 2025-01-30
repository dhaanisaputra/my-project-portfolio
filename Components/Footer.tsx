import React from "react";

const Footer = () => {
  return (
    <div className="pt-[4rem] pb-[4rem] bg-[#02050a]">
      {/* <hr className="w-full h-0.5 mx-auto mt-20 bg-neutral-200 border-0"></hr> */}
      {/* <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] text-center"></div> */}
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div>
          <div className="flex space-x-10 text-white text-lg ">
            © 2025 dhaanisaputra
          </div>
          {/* <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
            dhaanisaputra
          </div>
          <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
            2024. All rights reserved
          </div> */}
        </div>
        {/* <div className="flex items-center space-x-10">
          <p className="text-[18px] text-white opacity-20">Terms & Condition</p>
          <p className="text-[18px] text-white opacity-20">Privacy Policy</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
