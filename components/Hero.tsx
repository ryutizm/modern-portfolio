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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img 
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://source.unsplash.com/random/" 
        alt="自己紹介画像です。" 
      />

      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>

        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>

    </div>
  );
};

export default Hero;
