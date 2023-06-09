import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
      h-screen flex flex-col relative top-20
      text-center md:text-left md:flex-row md:w-
      max-w-7xl xl:top-28 px-10 mx-auto items-center"
    >
      <h3
        className="
        absolute top-20 ml-6 uppercase
        tracking-[20px] text-gray-500 text-2xl"
      >
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://source.unsplash.com/random"
        className="
          -mb-20 md:mb-0 flex-shrink-0 mt-36
          w-60 h-60 rounded-full object-cover
          md:rounded-1g md:w-96 md:h-96 xl:w-[500px] xl:h-[500px]"
      />

      <div className="space-y-10 ps-0 md:px-10">
        <h4 className="text-2xl sm:text-4xl font-semibold mt-32 whitespace-nowrap">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          this is a test text. don't need to read.this is a test text. don't
          need to read.this is a test text. don't need to read.this is a test
          text. don't need to read.this is a test text. don't need to read.this
          is a test text. don't need to read.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
