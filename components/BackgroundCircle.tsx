import { motion } from "framer-motion";

type Props = {};

const BackgroundCircle = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover mt-28"
        src="/imgs/ayanokoji.png"
        alt="自己紹介画像です。"
      />

      <div
        className="
        absolute border border-[#333333] rounded-full 
        h-[25vh] w-[25vh] mt-28 animate-ping"
      />

      <div
        className="
        rounded-full border border-[#333333] 
        sm:h-[35vh] sm:w-[35vh] xl:h-[50vh] xl:w-[50vh] absolute mt-28"
      />

      <div
        className="
      rounded-full border border-[#333333] 
      h-[32vh] w-[32vh] sm:h-[52vh] sm:w-[52vh] xl:h-[70vh] xl:w-[70vh] absolute mt-28"
      />

      <div
        className="
      rounded-full border border-[#F7AB0A] opacity-20 
      h-[42vh] w-[42vh] sm:h-[70vh] sm:w-[70vh] xl:h-[85vh] xl:w-[85vh] absolute mt-28 animate-pulse"
      />

      <div
        className="
      rounded-full border border-[#333333] 
      h-[52vh] w-[52vh] sm:h-[85vh] sm:w-[85vh] xl:h-[100vh] xl:w-[100vh] absolute mt-28"
      />
    </motion.div>
  );
};

export default BackgroundCircle;
