import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, the name's ryutizm",
      "Guy who love TS & React",
      "<ButLovesToCodeMore>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="
      h-screen flex flex-col pt-32 justify-center items-center text-center">
      <BackgroundCircle />

      <div className="z-20">
        <h2 className="text-lg uppercase text-gray-500 tracking-[15px] mt-6">
          Software Engineer
        </h2>

        <h1 className="text-2xl lg:text-6xl font-semibold p-10 whitespace-nowrap">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="whitespace-nowrap">
          <Link href="#about">
            <button className="heroButton sm:mr-5">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton sm:mr-5">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton sm:mr-5">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
