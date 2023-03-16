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
    <div>
      <BackgroundCircle />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="orange" />
      </h1>

    </div>
  );
};

export default Hero;
