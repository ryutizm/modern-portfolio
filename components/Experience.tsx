import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
      h-screen flex relative overflow-hidden flex-col 
      text-left md:flex-row max-w-full px-10 justify-evenly 
      mx-auto items-center xl:top-12"
    >
      <h3
        className="
        absolute top-36 xl:top-40 ml-6 uppercase 
        tracking-[20px] text-gray-500 text-2xl"
      >
        Experience
      </h3>

      <div
        className="
        w-full flex space-x-10 overflow-x-scroll mt-2 xl:pt-52 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80
        snap-x snap-mandatory"
      >
        <div className="snap-center">
          <ExperienceCard />
        </div>
        
        <div className="snap-center">
          <ExperienceCard />
        </div>

        <div className="snap-center">
          <ExperienceCard />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
