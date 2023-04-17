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
      flex relative pt-16 overflow-hidden flex-col 
      text-left md:flex-row max-w-full px-10 justify-evenly 
      mx-auto items-center"
    >
      <h3
        className="
        absolute top-24 xl:top-40 ml-6 uppercase 
        tracking-[20px] text-gray-500 text-2xl"
      >
        Experience
      </h3>

      <div
        className="
        w-full flex space-x-10 overflow-x-scroll mt-2
        snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 
        scrollbar-thumb-[#F7AB0A]/80"
      >
        <div className="snap-start">
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
