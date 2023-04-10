import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, the name's ryutizm",
      "Guy who practice ts and react",
      "<ButLovesToCodeMore>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="
      h-screen flex flex-col items-center justify-center 
      text-center">
      <BackgroundCircle />

      <div className="z-20">
        <h2 className="text-lg uppercase text-gray-500 tracking-[15px] mt-6">
          Software Engineer
        </h2>

        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
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
