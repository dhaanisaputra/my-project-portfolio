import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "<Web Developer/>",
        1500, // wait 1s before replacing "Aaaa" with "Bbbb"
        "<Programmer/>",
        1500,
        "<Back End Developer/>",
        1500,
      ]}
      wrapper="span"
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      // style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
export default TextEffect;
