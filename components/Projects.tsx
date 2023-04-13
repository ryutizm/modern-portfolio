import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
      h-screen relative flex overflow-hidden flex-col text-left md:flex-row
      max-w-full justify-evenly pb-5 mx-auto mt-20 items-center z-0"
    >
      <h3 className="
        absolute top-24 ml-6 uppercase 
        tracking-[20px] text-gray-500 text-2xl"
      >
      Project
      </h3>

      <div
        className="
        relative w-full flex overflow-x-scroll overflow-y-hidden snap-mandatory z-20 snap-x snap-mandatory
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <div
            className="
            w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center 
            justify-center p-10 md:p-24 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://source.unsplash.com/random"
              className="mt-10 xl:mt-32 xl:w-2/3 xl:h-4/5 object-contain"
              alt=""
            />

            <div className="space-y-5 xl:space-y-5 px-0 md:px-0 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>

              <p className="text-lg text-center md:text-left">
                This is a dummy text This is a dummy text This is a dummy text
                This is a dummy text This is a dummy text This is a dummy text
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
