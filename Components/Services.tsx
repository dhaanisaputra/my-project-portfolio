import { CodeBracketSquareIcon, TvIcon } from "@heroicons/react/16/solid";
import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]"
    >
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center mt-[4rem] text-white">
        <div data-aos="fade-right" data-aos-delay="100">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              alias recusandae temporibus laudantium autem, nostrum velit
              doloremque doloribus error suscipit harum omnis veniam earum enim.
              Aperiam, porro eum. Eos, hic.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="100">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <TvIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Fullstack
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              alias recusandae temporibus laudantium autem, nostrum velit
              doloremque doloribus error suscipit harum omnis veniam earum enim.
              Aperiam, porro eum. Eos, hic.
            </p>
          </div>
        </div>
        {/* <div>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Fullstack
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              alias recusandae temporibus laudantium autem, nostrum velit
              doloremque doloribus error suscipit harum omnis veniam earum enim.
              Aperiam, porro eum. Eos, hic.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
